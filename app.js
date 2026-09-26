function openBirthday() {

    document.getElementById("pageOne").style.display = "none";

    document.getElementById("pageTwo").style.display = "block";

    createHearts();
    createBalloons();
}


/* =========================
   فتح الرسالة الكبيرة
========================= */

function showFinalMessage() {

    document
        .getElementById("finalMessage")
        .classList
        .add("show");

    createManyHearts();
}


/* =========================
   إغلاق الرسالة
========================= */

function closeMessage() {

    document
        .getElementById("finalMessage")
        .classList
        .remove("show");
}


/* =========================
   القلوب
========================= */

function createHearts() {

    setInterval(function () {

        const heart = document.createElement("div");

        heart.className = "heart";

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 8000);

    }, 700);
}


/* =========================
   البالونات
========================= */

function createBalloons() {

    setInterval(function () {

        const balloon =
            document.createElement("div");

        balloon.className = "balloon";

        const balloons = [
            "🎈",
            "🎈",
            "🎈",
            "💗"
        ];

        balloon.innerHTML =
            balloons[Math.floor(Math.random() * balloons.length)];

        balloon.style.left =
            Math.random() * 100 + "vw";

        balloon.style.animationDuration =
            (7 + Math.random() * 5) + "s";

        document.body.appendChild(balloon);

        setTimeout(function () {

            balloon.remove();

        }, 12000);

    }, 1800);
}


/* =========================
   قلوب كثيرة عند الرسالة
========================= */

function createManyHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            const hearts = [
                "❤️",
                "💕",
                "💗",
                "💖",
                "💝"
            ];

            heart.innerHTML =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(function () {

                heart.remove();

            }, 7000);

        }, i * 100);
    }
}

