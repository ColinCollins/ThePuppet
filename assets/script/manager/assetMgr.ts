const NOTHING_LOADED = 1;
const PANEL_LOADED = NOTHING_LOADED << 1;
const SCENE_LOADED = NOTHING_LOADED << 2;
const FINISH_LOADING = NOTHING_LOADED | PANEL_LOADED | SCENE_LOADED;

export default class AssetManager {

    private loadingFlag = NOTHING_LOADED;
    private panels = {};
    private scenes = {};

    init () {
        this._loadPanels();
        this._loadScenes();
    }

    private _loadPanels () {
        cc.loader.loadResDir('panelPrefab', (err, prefabs) => {
            prefabs.forEach((prefab) => {
                let panel = cc.instantiate(prefab);
                let name = panel['_name'];
                this.panels[name] = panel;
            });
            this.loadingFlag |= PANEL_LOADED;
            cc.log('panels loaded');
            if (this._isLoadingFinished()) {
                window.eventMgr.emit(window.macro.Event.LoadFinished);
            }
        });
    }

    private _loadScenes () {
        cc.loader.loadResDir('scenePrefab', (err, prefabs) => {
            prefabs.forEach((prefab) => {
                let scene = cc.instantiate(prefab);
                let name = scene['_name'];
                this.scenes[name] = scene;
            });
            this.loadingFlag |= SCENE_LOADED;
            cc.log('scenes loaded');
            if (this._isLoadingFinished()) {
                window.eventMgr.emit(window.macro.Event.LoadFinished);
            }
        });
    }

    private _isLoadingFinished () {
        return this.loadingFlag === FINISH_LOADING;
    }

    getPanel (name): cc.Node {
        let panel =  this.panels[name];
        if (!panel) {
            cc.log(`cannot find panel ${name}`);
            return null;
        }
        return panel;
    }

    getScene (name): cc.Node {
        let scene = this.scenes[name];
        if (!scene) {
            cc.log(`cannot find scene ${name}`);
            return null;
        }
        return scene;
    }
}
