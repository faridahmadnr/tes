// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    
    // Simulate loading effect
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  
    // GSAP animation for Hero Section
    gsap.from("#hero-text", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power3.out"
    });
  
    gsap.from(".btn", {
      duration: 1,
      opacity: 0,
      delay: 1,
      scale: 0.5,
      ease: "bounce.out"
    });
  });
  