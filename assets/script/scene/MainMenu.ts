const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    showSetting () {
        window.uiMgr.showPanel(window.macro.Name.PanelOption);
    }

    showLevelChoice () {
        window.uiMgr.showPanel(window.macro.Name.PanelLevelChoice);
    }

    // exit the game
    quit () {
        cc.game.end();
    }
}
