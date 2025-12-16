const assn3 = (p) => {

    let x;

    p.setup = function () {
        const canvas = p.createCanvas(600, 500);
        canvas.parent("assn3");
        
    };

    p.draw = function () {

        let duneColors = [
            p.color(237, 201, 175), // light sand
            p.color(224, 178, 132), // medium sand
            p.color(191, 143, 103)  // darker sand
        ];

        x = p.second();

        p.background('#E9734C');

        p.push();
        p.fill(p.color(224, 178, 132));
        p.rect(0, 250, 600, 250);
        p.pop();

        p.push();
        p.noStroke();
        p.fill(p.color('#BF8861'));
        p.ellipse(300, 300, 360, 50);
        p.pop();

        let strokeSize = p.map(x, 0, 59, 0, 22);

        p.push();
        p.stroke('#91694C');
        p.strokeWeight(strokeSize);
        p.fill(p.color(0, 40, 240));
        p.ellipse(300, 300, 300, 20);
        p.pop();

        let numDunes = 5;
        let spacing = p.width / (numDunes - 1);

        for (let i = 0; i < numDunes; i++) {
            let x1 = i * spacing - 100;
            let x2 = i * spacing + 100 - (i * 10);
            let xTop = i * spacing;

            let yBase = 250;
            let yTop = 150;

            p.push();
            p.fill(duneColors[i % duneColors.length]);
            p.triangle(x1, yBase, x2, yBase, xTop, yTop);
            p.pop();
        }

        p.push();
        p.fill(duneColors[0]);
        p.triangle(600, 500, 420, 342, 200, 500);
        p.triangle(0, 500, 180, 300, 300, 500);
        p.pop();

        p.push();
        p.noStroke();
        p.fill('#FFEC18');
        p.ellipse(p.mouseX, 70, 50, 50);
        p.pop();
    };
};

new p5(assn3);
