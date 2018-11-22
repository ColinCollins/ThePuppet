const {ccclass, property} = cc._decorator;

@ccclass
export default class PanelStack extends cc.Component {

    _panelStack: cc.Node[];

    start () {
        this._panelStack = [];
    }

    showPanel (panel, target) {
        // 将旧的顶层 panel 隐藏
        let length = this._panelStack.length;
        let currentTopPanel = this._panelStack[length-1];
        if (currentTopPanel) {
            currentTopPanel.active = false;
        }

        // 初始化新的顶层 panel，每个 panel 应该带有一个同名脚本，脚本里有个 init() 函数
        if (panel instanceof cc.Prefab) {
            panel = cc.instantiate(panel);
        }
        let comp = panel.getComponent(panel._name);
        comp && (comp._panelStack = this);

        // 显示新的顶层 panel
        target.addChild(panel);

        // 新 panel 入栈
        this._panelStack.push(panel);
    }

    closeCurrentPanel () {
        // 移除顶层 panel
        let panel = this._panelStack.pop();
        panel.removeFromParent();      

        // 显示下层 panel
        let length = this._panelStack.length;
        let currentTopPanel = this._panelStack[length-1];
        if (currentTopPanel) {
            currentTopPanel.active = true;
        }
    }
}
