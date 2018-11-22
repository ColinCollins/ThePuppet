import CardBase from "./CardBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardStack extends cc.Component {
    _cardStack: CardBase[];

    start () {
        this._cardStack = [];
    }

    push (card: CardBase) {
        this._cardStack.push(card);
    }

    pop (): CardBase {
        return this._cardStack.pop();
    }

    clear () {
        this._cardStack.length = 0;
    }

    removeCard (card: CardBase | number) {
        if (card instanceof CardBase) {
            for (let i = 0; i < this._cardStack.length; ++i) {
                if (this._cardStack[i] === card) {
                    this._cardStack.splice(i, 1);
                    return;
                }
            }
        }
        else {
            this._cardStack.splice(card as number, 1);
        }
    }
}
