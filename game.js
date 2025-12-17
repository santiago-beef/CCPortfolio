const gameSketch = (p) => {


    let items = [];
    let currentMessage = "";
    let messageTimer = 0;

    let gameState = "Menu";
    let backBtn = { x: 20, y: 20, w: 100, h: 40, label: "Back" };
    let finalBtn = { x: 200, y: 180, w: 200, h: 50, label: "Go Back to Menu" };
    let showFinalButton = false;

    let allGone = false;
    let endTimer = 0;

    let storyBtn = { x: 200, y: 150, w: 200, h: 50, label: "Story Mode" };
    let settingsBtn = { x: 200, y: 250, w: 200, h: 50, label: "Settings" };

    p.preload = function () {

        items.push({
            img: p.loadImage("assets/tree.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 0, by1: 0, bx2: 0, by2: 0
        });

        items.push({    img: p.loadImage("assets/music.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 115, by1: 230, bx2: 165, by2: 280,
            label: "Music Fig", tier: 1,
            message: "\nYou've unlocked the skill of playing instruments.\nTherapy..."
        });

        items.push({    img: p.loadImage("assets/photo.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 200, by1: 200, bx2: 250, by2: 250,
            label: "Photo Fig", tier: 1,
            message: "\nYou've unlocked the skill of photography.\nTime to capture the world"
        });

        items.push({    img: p.loadImage("assets/play.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 365, by1: 225, bx2: 415, by2: 275,
            label: "Play Fig", tier: 1,
            message: "\nYou've unlocked the skill of play.\nBoundless Possibilities..."
        });

        items.push({     img: p.loadImage("assets/skate.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 280, by1: 170, bx2: 330, by2: 220,
            label: "Skate Fig", tier: 2,
            message: "\nYou've unlocked the skill of skateboarding.\nAURA X10"
        });

        items.push({    img: p.loadImage("assets/swim.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 410, by1: 170, bx2: 460, by2: 230,
            label: "Swim Fig", tier: 2,
            message: "\nYou've unlocked the skill of swimming.\nYou might be an amphibian..."
        });

        items.push({    img: p.loadImage("assets/potato.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 225, by1: 135, bx2: 275, by2: 185,
            label: "Couch Potato", tier: 2,
            message: "\nNot sure if this one is worth holding onto..."
        });

        items.push({     img: p.loadImage("assets/coder.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 50, by1: 75, bx2: 100, by2: 125,
            label: "Coding Fig", tier: 3,
            message: "\nYou've unlocked the skill of coding.\nWith great power comes frustration..."
        });

        items.push({     img: p.loadImage("assets/3D.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 310, by1: 110, bx2: 360, by2: 160,
            label: "3D Fig", tier: 3,
            message: "\nYou've unlocked the skill of 3D Design"
        });

        items.push({   img: p.loadImage("assets/computer.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 125, by1: 135, bx2: 175, by2: 185,
            label: "Computer Fig", tier: 2,
            message: "\nYou've unlocked the skill of computers."
        });

        items.push({   img: p.loadImage("assets/sound.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 30, by1: 185, bx2: 80, by2: 235,
            label: "Sound Fig", tier: 3,
            message: "\nYou've unlocked the skill of designing sound."
        });

        items.push({    img: p.loadImage("assets/weld.png"),
            x: 0, y: 0, w: 600, h: 400,
            visible: true,
            bx1: 180, by1: 60, bx2: 230, by2: 110,
            label: "Welder Fig", tier: 4,
            message: "\nYou've unlocked the skill of welding."
        });
    };

    



    p.setup = function () {
        const canvas = p.createCanvas(600, 400);
        canvas.parent("game");
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(20);
    };

    p.draw = function () {
        p.background(220);

        if (gameState === "Menu") drawMenu();
        else if (gameState === "StoryMode") drawStoryMode();
        else if (gameState === "Settings") drawSettings();
    };

    function drawStoryMode() {
        for (let item of items) {
            if (item.visible) {
                p.image(item.img, item.x, item.y, item.w, item.h);
            }
        }

        if (messageTimer > 0) {
            drawMessageBox(currentMessage);
            messageTimer--;
        }

        if (!allGone && items.every(i => !i.visible)) {
            allGone = true;
            endTimer = 360;
        }

        if (allGone && endTimer > 0) endTimer--;
        if (allGone && endTimer === 0) showFinalButton = true;

        if (showFinalButton) {
            p.fill(200);
            p.stroke(0);
            p.rect(finalBtn.x, finalBtn.y, finalBtn.w, finalBtn.h, 10);
            p.fill(0);
            p.noStroke();
            p.text(finalBtn.label, finalBtn.x + finalBtn.w / 2, finalBtn.y + finalBtn.h / 2);
        }
    }

    function drawMenu() {
        p.fill(200);
        p.stroke(0);
        p.rect(storyBtn.x, storyBtn.y, storyBtn.w, storyBtn.h, 10);
        p.rect(settingsBtn.x, settingsBtn.y, settingsBtn.w, settingsBtn.h, 10);
        p.fill(0);
        p.noStroke();
        p.text("The Skill Tree", 300, 100);
        p.text(storyBtn.label, storyBtn.x + storyBtn.w / 2, storyBtn.y + storyBtn.h / 2);
        p.text(settingsBtn.label, settingsBtn.x + settingsBtn.w / 2, settingsBtn.y + settingsBtn.h / 2);
    }

    function drawSettings() {
        p.background(255);
        p.fill(0);
        p.text("You don't get to choose settings in life!", p.width / 2, p.height / 2);
        p.fill(200);
        p.stroke(0);
        p.rect(backBtn.x, backBtn.y, backBtn.w, backBtn.h, 10);
        p.fill(0);
        p.noStroke();
        p.text(backBtn.label, backBtn.x + backBtn.w / 2, backBtn.y + backBtn.h / 2);
    }

    p.mousePressed = function () {
        if (gameState === "Menu") {
            if (inside(storyBtn)) gameState = "StoryMode";
            if (inside(settingsBtn)) gameState = "Settings";
        } else if (gameState === "Settings") {
            if (inside(backBtn)) gameState = "Menu";
        }
        console.log("CLICK", p.mouseX, p.mouseY);

    };

    function inside(btn) {
        return p.mouseX >= btn.x && p.mouseX <= btn.x + btn.w &&
               p.mouseY >= btn.y && p.mouseY <= btn.y + btn.h;
    }

    function drawMessageBox(msg) {
        p.rectMode(p.CENTER);
        p.fill(255);
        p.stroke(0);
        p.rect(p.width / 2, p.height - 60, 300, 60, 10);
        p.fill(0);
        p.noStroke();
        p.textSize(13);
        p.text(msg, p.width / 2, p.height - 60);
    }
};

new p5(gameSketch);
