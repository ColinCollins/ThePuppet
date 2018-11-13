interface EventCallback {
    (...args: number[]): void;
}

interface TargetAndCb {
    target: any;
    callback: EventCallback;
}

export default class EventManager {
    private _events;

    init () {
        this._events = {};
    }

    private _isRegistered(event: string, callback: EventCallback, target: any): boolean {
        if (!this._events[event]) {
            return false;
        }
        let arr: TargetAndCb[] = this._events[event];
        for (let i = 0; i < arr.length; ++i) {
            let obj: TargetAndCb = arr[i];
            if (obj.target === target && obj.callback === callback) {
                return true;
            }
        }
        return false;
    }

    public on(event: string, callback: EventCallback, target: any): void {
        if (this._isRegistered(event, callback, target)) {
            cc.log(`事件 ${event} 重复注册`);
            return;
        }
        this._events[event] = this._events[event] ? this._events[event] : [];
        this._events[event].push( {callback, target} );
    }

    public off(event: string, callback: EventCallback, target: any): void {
        if (!this._isRegistered(event, callback, target)) {
            cc.log(`事件 ${event} 已经反注册`);
            return;
        }
        let arr: TargetAndCb[] = this._events[event];
        for (let i = 0; i < arr.length; ++i) {
            let obj: TargetAndCb = arr[i];
            if (obj.target === target && obj.callback === callback) {
                arr.splice(i, 1);
                if (arr.length === 0) {
                    arr = null;
                    delete this._events[event];
                }
                break;
            }
        }
    }

    public emit(event: string, ...args: any[]): void {
        if (!this._events[event]) {
            cc.log(`事件 ${event} 不存在`);
            return;
        }
        let arr: TargetAndCb[] = this._events[event];
        arr.forEach((v: TargetAndCb) => {
            v.callback.call(v.target, args);
        });
    }
}