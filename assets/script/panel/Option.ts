import PanelBase from "./PanelBase";
import PanelStack from "../panel/PanelStack";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Option extends PanelBase {
    _panelStack: PanelStack;
    
}
