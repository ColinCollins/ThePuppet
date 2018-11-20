import GraphicsSystem from "../../util/graphicsSystem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class gameManager extends cc.Component {

    private canvas: cc.Node;

    start () {
        this.canvas = cc.find('Canvas');
        this.init();
    }

    init () {
        GraphicsSystem.initScene(this.getComponent(cc.Graphics));
        //let gameMenu = window.assetMgr.getPanel("GameMenu");
        //let menu = cc.instantiate(gameMenu);
        //menu.parent = this.canvas;
    }
    
}
