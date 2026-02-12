window.addEventListener("load", function () {

    const video = document.querySelector(".vid");
    const loader = document.querySelector("#loader");

    video.addEventListener("canplaythrough", function () {

        document.body.style.visibility = "visible";

        gsap.to(loader, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => loader.remove()
        });

    });

});


function videoPlay() {

    const video = document.querySelector(".vid");
    const music = document.querySelector("#bgMusic");
    const overlay = document.querySelector("#clickOverlay");

    document.body.classList.add("no-scroll");

    window.addEventListener("click", function () {

        gsap.to(overlay, {
            opacity: 0,
            duration: 0.6,
            onComplete: () => overlay.remove()
        });

        video.play();
        music.play();

    }, { once: true });

    video.addEventListener("ended", function () {

        gsap.to(video, {
            opacity: 0,
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
                document.body.classList.remove("no-scroll");
            }
        });

    });

}

videoPlay();