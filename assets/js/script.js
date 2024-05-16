let openicon = document.querySelector("[data-open]");
let close = document.querySelector("[data-close]");
let nav = document.querySelector(".header nav")
let overlay = document.querySelector("[data-overlay]")

openicon.addEventListener("click", function() {
    nav.style.left = "0";
    overlay.style.display = "block"
})

close.addEventListener("click", function() {
    nav.style.left = "-80%";
    overlay.style.display = "none"
})

gsap.to('.header .menu', {
    backgroundColor: "white",
    boxShadow: "0px 10px 20px -10px rgba(124, 124, 124, 0.274)",
    scrollTrigger: {
        trigger: ".header .menu",
        scroller: "body",
        scrub: true,
        start: "top -10%",
        end: "top -10%",
    }
})