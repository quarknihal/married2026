window.addEventListener("load", function () {

    const video = document.querySelector(".vid");
    const loader = document.querySelector("#loader");

    let videoReady = false;

    function startIntro() {

        // fade loader out
        gsap.to(loader, {
            opacity: 0,
            duration: 0.6,
            onComplete: () => loader.remove()
        });

        // autoplay video AFTER loader disappears
        video.currentTime = 0;
        video.play().catch(() => {
            console.log("Autoplay blocked, waiting for tap.");
        });
    }

    // video loaded enough to start
    video.addEventListener("loadeddata", function () {
        videoReady = true;
        startIntro();
    });

    // fallback so loader never hangs
    setTimeout(() => {
        if (!videoReady) startIntro();
    }, 3500);

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

        // start music on first user interaction (required on iOS)
        music.currentTime = 0;
        music.play().catch(()=>{});

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