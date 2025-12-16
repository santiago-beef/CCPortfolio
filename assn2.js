const assn2 = (p) => {

    let bgColor;

    p.setup = function () {
        const canvas = p.createCanvas(400, 655);
        canvas.parent("assn2"); 
        p.rectMode(p.CENTER);
        bgColor = p.color(
            p.random(0, 255),
            p.random(0, 255),
            p.random(0, 255)
        );
    };

    p.draw = function () {
        p.background(bgColor);

        p.push();
        p.strokeWeight(1);
        p.text("CHAIR", 30, 30);
        p.text("SOFA", 320, 625);
        p.pop();

        drawChairToTable_Q1_to_Q4();
    };

    p.mousePressed = function () {
        bgColor = getRandomColor();
    };

    function getRandomColor() {
        return p.color(
            p.random(0, 255),
            p.random(0, 255),
            p.random(0, 255)
        );
    }

    function drawChairToTable_Q1_to_Q4() {

        // Ellipse setup
        let centerX = 200;
        let centerY = 327.5;

        // Ellipse scales with mouseX
        let ellipseWidth = p.map(p.mouseX, 0, p.width, 100, 300);
        let ellipseHeight = 75;

        // Diagonal progress Q1 → Q4
        let d = p.dist(p.mouseX, p.mouseY, 0, 0);
        let maxD = p.dist(0, 0, p.width, p.height);
        let norm = p.constrain(d / maxD, 0, 1);

        // Leg count interpolation
        let minLegs = 2;
        let maxLegs = 12;
        let legCount = p.int(p.map(norm, 0, 1, minLegs, maxLegs));

        // Draw legs
        p.push();
        p.stroke(0);
        p.strokeWeight(1);

        for (let i = 0; i < legCount; i++) {
            let legX = p.map(
                i,
                0,
                legCount - 1,
                centerX - ellipseWidth / 2 + 10,
                centerX + ellipseWidth / 2 - 10
            );

            let legTopY = centerY + ellipseHeight / 2;
            let legBottomY = legTopY + 60;

            p.line(legX, legTopY - 30, legX, legBottomY);
        }

        p.pop();

        // Back of chair
        p.push();
        p.stroke(0);
        p.strokeWeight(1);
        p.noFill();
        p.rect(centerX, centerY - 50, ellipseWidth, ellipseHeight);
        p.pop();

        // Sofa / chair body
        p.push();
        p.fill(bgColor);
        p.stroke(0);
        p.strokeWeight(1);
        p.ellipse(centerX, centerY, ellipseWidth, ellipseHeight);
        p.pop();
    };
};

new p5(assn2);
