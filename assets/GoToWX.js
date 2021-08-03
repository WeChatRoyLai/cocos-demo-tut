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
          window.engine.loader.load('engineTutorial/cocosTutorial/wxEngineAssets/game3d.scene').promise.then(function (scene) {
            // 播放微信小游戏pro的3d场景
            window.engine.game.playScene(scene)
          })
    
          // 加载微信小游戏pro的2d场景
          window.engine.loader.load('engineTutorial/cocosTutorial/wxEngineAssets/game2d.scene').promise.then(function (scene) {
            // 播放微信小游戏pro的3d场景
            window.engine.game.playScene(scene)
          })

          // node.parent.children.forEach(function(sub) {
          //   const camera = sub.getComponent(cc.Camera)
          //   if (camera) { // 相机active为true，清屏
          //     return
          //   }
          //   sub.active = false
          // })
        }
    }
  });