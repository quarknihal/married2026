const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function videoPlay() {

    const video = document.querySelector(".vid");
    const music = document.querySelector("#bgMusic");
    const overlay = document.querySelector("#clickOverlay");


    lenis.stop();
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
                lenis.start();
            }
        });

    });

}

videoPlay();