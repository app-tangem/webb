const navMenu = document.getElementById("navMenu")
const closeIcon = document.getElementById("closeIcon")
const hamburger = document.getElementById("hamburger")


hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]")
})
closeIcon.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]")
})



document.addEventListener('DOMContentLoaded', function() {
    const sky = document.querySelector('.absolute.inset-0');
    const starCount = 120;
    const shootingStarCount = 2;
    
    // Create normal stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 0.5-2.5px
        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random twinkle duration between 3-6 seconds
        star.style.setProperty('--duration', `${Math.random() * 3 + 3}s`);
        
        // Random delay for twinkling
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        // Alternate between white (darker) and navy blue stars
        if (Math.random() > 0.7) {
            star.style.backgroundColor = 'rgba(100, 149, 237, 0.7)'; // Cornflower blue
        } else {
            star.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Darker white
        }
        
        sky.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < shootingStarCount; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random position
        shootingStar.style.left = `${Math.random() * 20}%`;
        shootingStar.style.top = `${Math.random() * 20}%`;
        
        // Random duration between 4-7 seconds
        shootingStar.style.setProperty('--shoot-duration', `${Math.random() * 3 + 4}s`);
        
        // Random delay between 10-25 seconds
        shootingStar.style.animationDelay = `${Math.random() * 15 + 10}s`;
        
        sky.appendChild(shootingStar);
    }
});