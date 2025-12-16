const assn1 = (p) => {

    let drawn = false;

    p.setup = function () {
        const canvas = p.createCanvas(400, 400);
        canvas.parent("assn1");
        p.blendMode(p.OVERLAY); 
    };

    p.draw = function () {

        // Draw static scene once
        if (!drawn) {

            p.noStroke();
            let color1 = p.color('#2400FF');
            let color2 = p.color('#FFB368');

            // background gradient strips
            p.push();
            for (let i = 0; i < 10; i++) {
                let t = p.lerpColor(color1, color2, i / 10);
                p.fill(t);
                p.rect(i * 40, 0, 40, 400);
            }
            p.pop();

            // Land
            p.push();
            p.noStroke();
            p.fill('#062506');
            p.rect(0, 250, 400, 150);
            p.pop();

            // Lakes
            p.push();
            p.noStroke();
            p.fill('rgb(93,194,229)');
            p.ellipse(300, 355, 500, 80);
            p.ellipse(400, 305, 500, 80);
            p.pop();

            // Buildings
            let numBuildings = 15;
            for (let i = 0; i < numBuildings; i++) {
                let buildingWidth = p.random(10, 40);
                let x = p.random(0, 200 - buildingWidth);
                let h = p.random(50, 250);
                let y = 280 - h;

                let r = p.random(0, 60);
                let g = p.random(0, 60);
                let b = p.random(0, 60);

                p.noStroke();
                p.fill(r, g, b);
                p.rect(x, y, buildingWidth, h);
            }

            drawn = true;
        p.noLoop();
        }

        // Mouse circle overlay
        p.fill(0);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
};

new p5(assn1);
