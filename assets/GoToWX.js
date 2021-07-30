cc.Class({
    extends: cc.Component,
    properties: {},
  
    onLoad: function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "GoToWX";// 这个是代码文件名
        clickEventHandler.handler = "callback";
  
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    },
  
    callback: function (event, customEventData) {
        // 这里 event 是一个 Event 对象，你可以通过 event.target 取到事件的发送节点
        var node = event.target;
        
        if (window.engine) {
          // 加载小游戏pro的场景
          window.engine.loader.load('resource/mygame.scene').promise.then(function (scene) {
            // 播放小游戏pro的场景
            window.engine.game.playScene(scene)
            // 将cocos的场景隐藏
            node.parent.children.forEach(function(sub) {
              const camera = sub.getComponent(cc.Camera)
              if (camera) { // 相机active为true，清屏
                return
              }
              sub.active = false
            })
          })
        }
    }
  });