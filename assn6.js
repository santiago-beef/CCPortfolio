const assn6 = (p) => {

    let h, m;

    class ScreenTime {
        constructor(t, h, m, d) {
            this.h = h;
            this.m = m;
            this.d = d;
            this.t = t;
        }

        show() {
            p.push();

            let wTSize = p.map(
                converter(this.h, this.m),
                0,
                1440,
                0,
                1000
            );

            p.ellipse(p.width / 2, p.height / 2, wTSize, wTSize);

            p.push();
            p.translate(0, 10);
            p.fill('black');
            p.textSize(15);
            p.text(this.t, 250, 400);
            p.pop();

            p.pop();
        }
    }

    let weeklyST = [];
    let weeklySMT = [];
    let weeklyMT = [];
    let weeklyN = [];
    let reference;

    p.setup = function () {
        const canvas = p.createCanvas(600, 600);
        canvas.parent("assn6");

        weeklyST = [
            new ScreenTime("Daily", 11, 1, 1),
            new ScreenTime("Daily", 12, 20, 2),
            new ScreenTime("Daily", 12, 21, 3),
            new ScreenTime("Daily", 7, 40, 4),
            new ScreenTime("Daily", 6, 56, 5),
            new ScreenTime("Daily", 6, 29, 6),
            new ScreenTime("Daily", 5, 25, 7)
        ];

        weeklySMT = [
            new ScreenTime("SocialMedia", 4, 18, 1),
            new ScreenTime("SocialMedia", 1, 13, 2),
            new ScreenTime("SocialMedia", 2, 50, 3),
            new ScreenTime("SocialMedia", 2, 5, 4),
            new ScreenTime("SocialMedia", 1, 10, 5),
            new ScreenTime("SocialMedia", 2, 37, 6),
            new ScreenTime("SocialMedia", 1, 40, 7)
        ];

        weeklyMT = [
            new ScreenTime("Spotify", 0, 32, 1),
            new ScreenTime("Spotify", 0, 27, 2),
            new ScreenTime("Spotify", 0, 51, 3),
            new ScreenTime("Spotify", 0, 5, 4),
            new ScreenTime("Spotify", 0, 8, 5),
            new ScreenTime("Spotify", 0, 2, 6),
            new ScreenTime("Spotify", 0, 5, 7)
        ];

        weeklyN = [
            new ScreenTime("Notes", 0, 0, 1),
            new ScreenTime("Notes", 0, 7, 2),
            new ScreenTime("Notes", 0, 27, 3),
            new ScreenTime("Notes", 0, 32, 4),
            new ScreenTime("Notes", 0, 1, 5),
            new ScreenTime("Notes", 0, 1, 6),
            new ScreenTime("Notes", 0, 15, 7)
        ];

        reference = new ScreenTime("24Hours", 24, 0, 0);
    };

    function converter(h, m) {
        return h * 60 + m;
    }

    p.draw = function () {
        p.background('rgb(247,242,238)');
        p.rectMode(p.CENTER);
        p.textAlign(p.CENTER, p.CENTER);

        let i = p.floor(p.second()) % weeklyMT.length;

        // Screen Time
        p.fill(32, 255, 25);
        weeklyST[i].show();

        // Music Time
        p.push();
        p.translate(-120, -230);
        p.fill(20, 255, 255);
        weeklyMT[i].show();
        p.pop();

        // Social Media Time
        p.push();
        p.translate(107, 150);
        p.fill(32, 25, 255);
        weeklySMT[i].show();
        p.pop();

        // Reference circle
        p.push();
        p.noFill();
        p.strokeWeight(3);
        let refSize = p.constrain(
            converter(reference.h, reference.m),
            0,
            p.width
        );
        p.ellipse(p.width / 2, p.height / 2, refSize, refSize);
        p.pop();

        // Day label
        p.push();
        p.fill('black');
        p.textSize(35);
        p.text('day ' + weeklyMT[i].d, 250, 120);
        p.pop();

        // Notes Time
        p.push();
        p.translate(-100, 30);
        p.fill(212, 32, 255);
        weeklyN[i].show();
        p.pop();
    };
};

new p5(assn6);
