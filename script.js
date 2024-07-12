
var tl = gsap.timeline();

tl.to(".overlays", {
    top: "-100%",
    duration : 1,
    stagger : .3,
    ease: "power1.inOut"
},"same")

tl.to("#overlayhome #h1forhome1 h1", {
    top: "0%",
    duration : 1.5,
    rotate: "0deg",   
    ease: "power1.inOut"
},"same")


