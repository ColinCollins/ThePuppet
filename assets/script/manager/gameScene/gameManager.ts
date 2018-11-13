import GraphicsSystem from "../../util/graphicsSystem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class gameManager extends cc.Component {

    start () {
        this.init();
    }

    init () {
        GraphicsSystem.initScene(this.getComponent(cc.Graphics));

        let canvas = cc.find('Canvas');

        let gameMenu = window.assetMgr.getPanel("GameMenu");
        let menu = cc.instantiate(gameMenu);
        menu.parent = canvas;
    }
    
}
