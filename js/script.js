// ================= OPEN LETTER =================

const envelope = document.getElementById("openEnvelope");
const openingPage = document.getElementById("openingPage");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    // buka flap amplop
    document.querySelector(".envelope-top").style.transform =
        "rotateX(180deg)";

    // surat sedikit naik
    document.querySelector(".letter").style.transform =
        "translateY(-40px)";

    // musik
    music.volume = 0;
music.play();

let fade = setInterval(() => {

    if (music.volume < 0.9) {
        music.volume += 0.05;
    } else {
        clearInterval(fade);
    }

}, 200);

    // pindah halaman
    setTimeout(() => {

        openingPage.style.opacity = "0";

        setTimeout(() => {

           const transitionScreen =
document.getElementById("transitionScreen");

setTimeout(() => {

    transitionScreen.classList.add("show");

},1200);


setTimeout(() => {

    openingPage.style.display = "none";

},2500);


setTimeout(() => {

    transitionScreen.classList.remove("show");

    website.classList.remove("hidden");

},4500);

        }, 800);

    }, 1800);

});


// ================= PETALS =================

const petalsContainer =
    document.querySelector(".petals-container");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.top = "-20px";

    petal.style.opacity = Math.random();

    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

    petal.style.animation =
        `fall ${5 + Math.random()*5}s linear forwards`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);
}

setInterval(createPetal, 350);


// ================= PETAL ANIMATION =================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall {

0%{
transform:translateY(-20px) rotate(0deg);
}

100%{
transform:translateY(110vh) rotate(360deg);
}

}

`;

document.head.appendChild(style);


// ================= REVEAL ANIMATION =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");
        }

    });

}

revealSections();


// ================= PARALLAX HERO =================

const hero = document.querySelector(".hero");
let parallaxFrame = null;

window.addEventListener("scroll", () => {
    if (parallaxFrame !== null) {
        return;
    }

    parallaxFrame = requestAnimationFrame(() => {
        hero.style.transform = `translateY(${window.scrollY * 0.05}px)`;
        parallaxFrame = null;
    });
}, { passive: true });
