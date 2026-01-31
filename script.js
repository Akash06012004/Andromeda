gsap.from("header",{y:-80,opacity:0})

gsap.from(".hero h1",{x:-100,opacity:0})

gsap.from(".service",{
scrollTrigger:".services",
opacity:0,
y:50,
stagger:.2
})

gsap.from(".stats div",{
scrollTrigger:".stats",
scale:0,
stagger:.2
})
