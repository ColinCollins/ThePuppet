import AssetManager from "./assets/script/manager/assetMgr";
import UIManager from "./assets/script/manager/uiMgr";
import Macro from "./assets/script/macro";
import EventManager from "./assets/script/manager/eventMgr";

declare global {
    interface Window {
        gameRoot: cc.Node;
        macro: Macro;
        assetMgr: AssetManager;
        uiMgr: UIManager;
        eventMgr: EventManager;
    }
}