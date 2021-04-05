const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const lines = document.querySelectorAll(".line")
hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open')
    links.forEach(link =>{
        link.classList.toggle("fade")
    })
    lines.forEach(line =>{
        line.classList.toggle("opened")
    })
})

//image slider elemnet
// const carSlide = document.querySelector('.carousel-slider');
// const carImages = document.querySelectorAll('.carousel-slider img');
// const prevbtn = document.querySelector('#prevBtn');
// const nextbtn = document.querySelector('#nextBtn');

try {
    const doIt = document.querySelector(".doit")
    const thanks = document.querySelector("#bye")
    function merci() {
        if (this.scrollY + this.innerHeight >= thanks.offsetTop + thanks.offsetHeight) {
            thanks.classList.add("appear")
        }
        if (this.scrollY + this.innerHeight < thanks.offsetTop && thanks.className == "appear") {
            thanks.classList.remove("appear")
        }
    }
    window.addEventListener('scroll',merci)
}catch{

}
//begin animation 
try {
    const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
    tl.to('.text',{y:'0%', duration:1.1, stagger:0.25});
    tl.to('.slider',{y:"-100%", duration: 1.5, delay:3});
    tl.to('.intro',{y:"-100%",duration: 1}, "-=0.95");

} catch (error) {
    
}
//imagaes slider
// let counter = 1;
// const size = carImages[0].clientWidth;

// carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //Btn translate
// nextbtn.addEventListener('click',()=>{
//     if(counter>-1) return;
//     carSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevbtn.addEventListener('click',()=>{
//     if(counter<=0) return;
//     carSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
// carSlide.addEventListener('transitionend',()=>{
//     if(carImages[counter].id === 'lastClone'){
//         carSlide.style.transition = 'none';
//         counter = carImages.length - 2;
//         carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//     };
//     if(carImages[counter].id === 'firstClone'){
//         carSlide.style.transition = 'none';
//         counter = carImages.length - counter;
//         carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//     };
// });