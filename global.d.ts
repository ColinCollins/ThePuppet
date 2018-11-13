import AssetManager from "./assets/script/manager/assetMgr";
import UIManager from "./assets/script/manager/uiMgr";
import Macro from "./assets/script/macro";
import EventManager from "./assets/script/manager/eventMgr";
import AudioSystem from "./assets/script/util/AudioSystem";

declare global {
    interface Window {
        gameRoot: cc.Node;
        assetMgr: AssetManager;
        uiMgr: UIManager;
        macro: Macro;
        eventMgr: EventManager;
        audioSystem: AudioSystem;
    }
}