import AssetManager from './assetMgr';
import UIManager from './uiMgr';
import Macro from '../macro';
import EventManager from './eventMgr';

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad () {
        this.instantiate();
        this.init();
        this.initEvent();
    }

    instantiate () {
        window.macro = new Macro();
        window.assetMgr = new AssetManager();
        window.uiMgr = new UIManager();
        window.eventMgr = new EventManager();
    }

    init () {
        window.assetMgr.init();
        window.uiMgr.init();
        window.eventMgr.init();

        // set persist game root node
        cc.game.addPersistRootNode(this.node);
        window.gameRoot = this.node;
    }

    initEvent () {
        window.eventMgr.on(window.macro.Event.LoadFinished, this.onLoadFinished, this);
    }

    onLoadFinished () {
        this.scheduleOnce(() => {
            window.uiMgr.loadScene(window.macro.Name.SceneMainMenu);
        }, 2);
    }
}
