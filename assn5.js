const assn5 = (p) => {

    const Palette = [
        '#F5F5DC',
        '#F5DEB3',
        '#FFF8DC',
        'rgb(150,0,200)',
        'rgb(0,0,100)',
        'rgb(100,200,20)'
    ];

    p.setup = function () {
        const canvas = p.createCanvas(600, 600);
        canvas.parent("assn5");   // remove or change if needed
        p.noStroke();
        p.frameRate(20);
    };

    p.draw = function () {
        doTheThing();
    };

    function doTheThing() {
        let cols = 200;
        let rows = 30;
        let cellW = p.width / cols;
        let cellH = p.height / rows;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {

                let c = p.random(Palette);
                let cellX = x * cellW;
                let cellY = y * cellH;

                if (p.random(1) < 0.8) {
                    p.push();
                    p.translate(cellX + cellW / 2, cellY + cellH / 2);

                    let angle = p.random(
                        -p.QUARTER_PI / 4,
                        p.QUARTER_PI / 4
                    );

                    p.rotate(angle);
                    p.fill(c);
                    p.rectMode(p.CENTER);
                    p.rect(0, 0, cellW, cellH);
                    p.pop();

                } else {
                    p.fill(c);
                    p.rect(cellX, cellY, cellW, cellH);
                }
            }
        }
    }
};

new p5(assn5);
