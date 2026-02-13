window.addEventListener("load", function () {

    const video = document.querySelector(".vid");
    const loader = document.querySelector("#loader");

    let videoReady = false;
    let pageReady = false;

    function hideLoader() {
        if (videoReady && pageReady) {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.6,
                onComplete: () => loader.remove()
            });
        }
    }

    pageReady = true;

    video.addEventListener("loadeddata", function () {
        videoReady = true;
        hideLoader();
    });

    setTimeout(() => {
        videoReady = true;
        hideLoader();
    }, 4000); // 4 seconds max wait

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

        video.currentTime = 0;
music.currentTime = 0;

        video.play().then(() => {
            music.play();
            }).catch(err => {
                console.log("Video play blocked:", err);
            });
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
