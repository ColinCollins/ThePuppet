import PanelStack from "../panel/PanelStack"

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(PanelStack)
    panelStack = null;

    @property(cc.Prefab)
    LevelChoice = null;

    @property(cc.Prefab)
    Option = null;

    showLevelChoice () {
        this.panelStack.showPanel(this.LevelChoice, this.node);
    }

    showOption () {
        this.panelStack.showPanel(this.Option, this.node);
    }

    quit () {
        cc.game.end();
    }
}