
var flag = 0;
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");
var menu = document.querySelector(".menu");


document.querySelector("#logo").addEventListener("click", function () {
    
     if (flag === 0) {
        gsap.to(".menu", {
            top: "0%",
            right: "0%",
            duration: 2,
            stagger: .6,
            delay: -1,
            ease: "power1.inOut",
        })
        document.querySelector("#navbox").style.pointerEvents = "painted";
        flag = 1;
    }

    else {
        gsap.to(".menu", {
            top: "-100%",
            right: "-100%",
            duration: 3,
            delay: -1,
            ease: "power1.inOut"
        })
        document.querySelector("#navbox").style.pointerEvents = "none";
        flag = 0;
    }
})
