const {ccclass, property} = cc._decorator;

@ccclass
export default class Dragable extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    // 拖动牌时，牌节点作为 _moveMountNode 的子节点
    _moveMountNode: cc.Node = null;

    // 出牌的拖动距离
    discardDistance: Number = 50;

    // 拖动结束，放回的牌堆
    _cards: cc.Node = null;

    start () {
        if (!this.target) {
            this.target = this.node;
        }
        this._cards = this.node.parent;
        this._moveMountNode = cc.find('Canvas');

        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDestroy () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    touchStart (event: cc.Event.EventTouch) {
        if (event.currentTarget !== this.target) {
            return false;
        }
        this.target.position = this.getMovePosition();
        this.target.parent = this._moveMountNode;
    }

    touchMove (event: cc.Event.EventTouch) {
        let delta = event.getDelta();

        this.target.x += delta.x;
        this.target.y += delta.y;
    }

    touchEnd (event: cc.Event.EventTouch) {
        let bottomLine = -cc.view.getVisibleSize().height / 2;
        let moveHeight = this.target.height - bottomLine;
        if (moveHeight > this.discardDistance) {
            // todo discard card
        }
        else {
            this.node.parent = this._cards;
            this.node.y = 0;
        }
    }

    // 拖动牌，由于父节点改了，要重新计算位置
    getMovePosition () {
        let worldSpacePosAr = this._cards.convertToWorldSpaceAR(this.node.position);
        let nodeSpaceAr = this._moveMountNode.convertToNodeSpaceAR(worldSpacePosAr);
        return nodeSpaceAr;
    }
}
