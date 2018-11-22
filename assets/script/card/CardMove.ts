import CardBase from "./CardBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardMove extends CardBase {

    // 1 for left_1, -2 for right_2
    @property
    moveStep: number = 1;

    start () {
        this.retainInCardStack = true;
    }

    runEffect () {
        // todo: run move action
    }
}
