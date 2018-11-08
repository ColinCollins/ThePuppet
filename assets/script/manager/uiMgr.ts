export default class UIManager {
    private _currentSceneName: string;
    private _panelStack: cc.Node[];

    init () {
        this._currentSceneName = cc.director.getScene().name;
        this._panelStack = [];
    }

    loadScene (name) {
        cc.director.loadScene(name, () => {
            this._showScene(name);
            this._closeScene(this._currentSceneName);
            this._currentSceneName = name;
        });
    }

    private _showScene (name) {
        let scene = window.assetMgr.getScene(name);
        window.gameRoot.addChild(scene);
    }

    private _closeScene (name) {
        let scene = window.assetMgr.getScene(name);
        window.gameRoot.removeChild(scene);
    }

    showPanel (name) {
        // 将旧的顶层 panel 隐藏
        let length = this._panelStack.length;
        let currentTopPanel = this._panelStack[length-1];
        if (currentTopPanel) {
            currentTopPanel.active = false;
        }

        // 显示新的顶层 panel
        let panel = window.assetMgr.getPanel(name);
        panel.active = true;
        window.gameRoot.addChild(panel);

        // 新 panel 入栈
        this._panelStack.push(panel);
    }

    closeCurrentPanel () {
        // 移除顶层 panel
        let panel = this._panelStack.pop();
        panel.active = false;
        window.gameRoot.removeChild(panel);        

        // 显示下层 panel
        let length = this._panelStack.length;
        let currentTopPanel = this._panelStack[length-1];
        if (currentTopPanel) {
            currentTopPanel.active = true;
        }
    }
}
