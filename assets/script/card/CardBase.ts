const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class CardBase extends cc.Component {

    @property
    retainInCardStack: Boolean = false;

    @property(cc.Node)
    target: cc.Node = null;

    // abstract
    abstract runEffect (): void;
}
