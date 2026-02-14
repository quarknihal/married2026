window.addEventListener("load", function () {

    const video = document.querySelector(".vid");
    const music = document.querySelector("#bgMusic");
    const loader = document.querySelector("#loader");

    // lock scroll immediately
    document.body.classList.add("no-scroll");

    let started = false;

    function startIntro() {
        if (started) return;
        started = true;

        // fade loader out
        gsap.to(loader, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => loader.remove()
        });

        // reset both
        video.currentTime = 0;
        music.currentTime = 0;

        // start video first, then music
        video.play().then(() => {
            music.play().catch(()=>{});
        }).catch(() => {
            console.log("Autoplay blocked on this device.");
        });
    }

    // when video is ready enough
    video.addEventListener("loadeddata", startIntro);

    // fallback so loader never hangs
    setTimeout(startIntro, 3500);

    // unlock scroll when video ends
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

});