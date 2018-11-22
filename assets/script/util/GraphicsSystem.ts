const {ccclass, property} = cc._decorator;

    
// singal cell standard
const CELL = 128;

@ccclass
export default class GraphicsSystem {
    // draw the assistent grid
    public static initScene (graphics: cc.Graphics) {
        let drawer = graphics;
        let visibleSize = cc.view.getVisibleSize();
        let sCell = {
            x: Math.floor(visibleSize.width / CELL),
            y: Math.floor(visibleSize.height / CELL)
        }
        
        drawer.strokeColor = cc.color(209, 242, 235);
        for (let i = 0; i < sCell.x; i++) {
            for (let j = 1; j < sCell.y; j++) {
                // x, y, w, h
                drawer.rect(i * CELL, j * CELL, CELL, CELL);
            }
        }
        drawer.stroke();
    }
}
