const {ccclass, property} = cc._decorator;

// use for option and settingPanel
@ccclass
export default class settingCtrl extends cc.Component {

    close () {
        window.uiMgr.closeCurrentPanel();
    }
}
