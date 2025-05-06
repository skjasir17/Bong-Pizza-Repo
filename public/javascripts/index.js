
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFollow(){
    window.addEventListener("mousemove", (dtls) => {
        document.querySelector('#minicircle').style.transform =`translate(${dtls.clientX}px,${dtls.clientY}px)`;
    });
    
}

circleMouseFollow();