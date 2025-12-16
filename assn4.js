const assn4 = (p) => {

    const headBottomY = 200;
    const center = 200;

    let showFrankenstein = true;

    p.setup = function () {
        const canvas = p.createCanvas(400, 600);
        canvas.parent("assn4");
        p.noLoop();
        drawCurrent();
    };

    p.mousePressed = function () {
        showFrankenstein = !showFrankenstein;
        drawCurrent();
    };

    function drawCurrent() {
        p.background('rgb(151,151,255)');
        p.stroke(0);

        if (showFrankenstein) {
            p.fill('rgb(173,39,173)');
            drawHead(0, 0);
            makeGhost();
            drawBody();
        } else {
            p.fill('rgb(173,39,173)');
            drawHead(0, 0);
            drawBodyPhantom(0, 200);
            drawLegs(0, 400);
        }
    }

    /* ---------- FRANKENSTEIN ---------- */

    function drawHead(x, y) {
        p.push();
        p.translate(x, y + 20);
        p.ellipse(200, 100, 120, 160);
        p.fill(0);
        p.ellipse(180, 90, 20, 20);
        p.ellipse(220, 90, 30, 30);
        p.pop();
    }

    function drawBody() {
        p.fill(208, 208, 218);
        p.rect(120, 200, 160, 200);
        p.rect(300, 220, 20, 140);
        p.rect(280, 220, 40, 20);
        p.rect(80, 220, 20, 140);
        p.rect(80, 220, 40, 20);

        p.fill(200, 220, 255);
        p.rect(130, 210, 140, 180);

        p.fill(208, 208, 218);
        p.rect(250, 270, 10, 50);

        p.fill(255, 220, 250);
        p.circle(200, 250, 20);
        p.fill(255, 160, 200);
        p.circle(200, 300, 20);
        p.fill(255, 80, 160);
        p.circle(200, 350, 20);
    }

    function makeGhost() {
        p.push();
        p.translate(0, 40);

        let topY = headBottomY - 30;
        let bottomY = 500;
        let steps = 60;

        for (let i = 0; i < steps; i++) {
            let inter = i / steps;
            let y = p.lerp(topY, bottomY, inter);
            let alpha = p.lerp(255, 0, inter);

            p.fill(255, alpha);

            let leftX = p.lerp(center, center - 150, inter);
            let rightX = p.lerp(center, center + 150, inter);

            p.quad(center, topY, leftX, y, rightX, y, center, topY);
        }

        p.pop();
    }

    /* ---------- PHANTOM SQUID ---------- */

    function drawBodyPhantom(x, y) {
        p.push();
        p.translate(x, y);
        p.fill('rgb(173,39,173)');
        p.triangle(200, 0, 80, 200, 320, 200);
        p.pop();
    }

    function drawLegs(x, y) {
        p.push();
        p.translate(x + 200, y + 100);
        p.rotate(p.PI);

        p.fill('rgb(173,39,173)');
        p.stroke(0);

        p.beginShape();
        p.vertex(-200, -100);
        p.vertex(-100, -20);
        p.vertex(-80, -100);
        p.vertex(-60, 10);
        p.vertex(-40, -100);
        p.vertex(-20, -50);
        p.vertex(0, -100);
        p.vertex(20, 30);
        p.vertex(40, -100);
        p.vertex(60, -10);
        p.vertex(80, -100);
        p.vertex(100, 0);
        p.vertex(200, -100);
        p.vertex(120, 100);
        p.vertex(-120, 100);
        p.endShape(p.CLOSE);

        p.stroke('red');
        p.fill('rgb(255,176,249)');
        for (let i = 0; i < 50; i++) {
            let dx = p.random(-115, 115);
            let dy = p.random(0, 90);
            p.ellipse(dx, dy, 10, 10);
        }

        p.pop();
    }
};

new p5(assn4);
