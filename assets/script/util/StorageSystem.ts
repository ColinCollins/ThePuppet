import Macro from "../util/macro";

class StorageSystem {
    private static _instance: StorageSystem;

    private constructor () {

    }

    static getInstance () {
        if (!this._instance) {
            this._instance = new StorageSystem();
        }
        return this._instance;
    }

    // 存储设置配置
    saveSetting (setting: Setting) {
        try {
            cc.sys.localStorage.setItem(Macro.StorageSetting, JSON.stringify(setting));
        }
        catch (err) {
            cc.error(`save setting failed: ${err}`);
        }
    }

    // 获取设置配置
    getSetting (): Setting {
        let settingString = cc.sys.localStorage.getItem(Macro.StorageSetting);
        let setting: Setting;
        if (settingString) {
            try {
                setting = JSON.parse(settingString);
                return setting;
            }
            catch (err) {
                cc.error(`get setting failed: ${err}`);
            }
        }
        // get default setting
        setting.musicVolume = 1;
        setting.effectVolume = 1;
        return setting;
    }

    // 存储可玩的关卡
    saveAvailableLevel (levelCount) {
        cc.sys.localStorage.setItem(Macro.StorageAvailableLevel, levelCount);
    }

    // 获取可玩的关卡
    getAvailableLevel () {
        let levelCount = cc.sys.localStorage.getItem(Macro.StorageAvailableLevel);
        if (levelCount) {
            levelCount = parseInt(levelCount);
            return levelCount;
        }
        // get default available level
        return 1;
    }
}

const storageSystem = StorageSystem.getInstance();

export default storageSystem;