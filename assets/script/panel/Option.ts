const {ccclass, property} = cc._decorator;

@ccclass
export default class Option extends cc.Component {

    close () {
        window.uiMgr.closeCurrentPanel();
    }
}
