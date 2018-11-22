import PanelStack from "../panel/PanelStack";

const {ccclass, property} = cc._decorator;

// Panel 基类
@ccclass
export default abstract class PanelBase extends cc.Component {
    _panelStack: PanelStack;

    close () {
        this._panelStack && this._panelStack.closeCurrentPanel();
    }
}
