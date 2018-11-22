import PanelBase from "./PanelBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelChoice extends PanelBase {

    @property(cc.Node)
    menu: cc.Node = null;

    @property(cc.Prefab)
    levelBox: cc.Prefab = null;

    onEnable () {
        this.createChoiceMenu();
    }

    // create the choice button
    createChoiceMenu () {
        // let content = this.menu.children;
        // let levelList = window.assetMgr.getLevelList();
        // // create the level menu
        // if (content.length <= 0 && levelList.length >0) {
        //     for (let i = 0; i < levelList.length; i++) {
        //         // create the choice level menu
        //         let temp = cc.instantiate(levelList[i]);
        //         temp.parent = this.menu;
        //         // set name label node
        //         let levelName = new cc.Node();
        //         levelName.name = 'Item';
        //         levelName = temp;
        //         // set the name
        //         let name = levelName.addComponent(cc.Label);
        //         name.string = temp.name.match(/[0-9]/g)[0];
        //     }               
        // }

        // todo: reimplement
    }
}
