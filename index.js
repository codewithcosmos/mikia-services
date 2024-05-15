// Dynamics for Landing Page ======================================
const specialsEl = document.querySelector(".specials");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", ()=>{ 
    specialsEl.classList.add("active-left");
})

leftEl.addEventListener("mouseleave", ()=>{
    specialsEl.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", ()=>{ 
    specialsEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", ()=>{ 
    specialsEl.classList.remove("active-right");
});