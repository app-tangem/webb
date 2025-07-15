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


document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('color-change-text');
    const section = document.getElementById('scroll-color-section');
    
    // Configuration
    const LINES_TO_TRIGGER = 3; // Number of lines to scroll before color change starts
    const LINE_HEIGHT = 28; // Approximate height of one line in pixels (adjust as needed)
    const TRANSITION_DURATION = LINES_TO_TRIGGER * LINE_HEIGHT; // Transition over 3 lines
    
    // Colors (black with 40% opacity → gray-100)
    const startColor = { r: 0, g: 0, b: 0, a: 0.4 }; // Black with 40% opacity
    const endColor = { r: 243, g: 244, b: 246, a: 1 }; // Tailwind gray-100
    
    // Store line positions
    let linePositions = [];
    let lastScrollPos = -1;
    
    function calculateLinePositions() {
        const textHeight = textElement.offsetHeight;
        const lineCount = Math.floor(textHeight / LINE_HEIGHT);
        linePositions = [];
        
        for (let i = 0; i < lineCount; i++) {
            linePositions.push(i * LINE_HEIGHT);
        }
    }
    
    function updateTextColor() {
        const sectionRect = section.getBoundingClientRect();
        const scrollPos = window.scrollY;
        
        // Only recalculate on resize or first run
        if (linePositions.length === 0 || scrollPos !== lastScrollPos) {
            calculateLinePositions();
            lastScrollPos = scrollPos;
        }
        
        // Find which line is at the center of the viewport
        const viewportCenter = window.innerHeight / 2;
        const currentLineIndex = linePositions.findIndex(pos => 
            pos >= (viewportCenter - sectionRect.top)
        );
        
        // Only update every 3 lines
        if (currentLineIndex >= 0 && currentLineIndex % LINES_TO_TRIGGER === 0) {
            const progress = Math.min(1, currentLineIndex / linePositions.length);
            
            // Smooth color transition
            const currentColor = {
                r: Math.round(startColor.r + (endColor.r - startColor.r) * progress),
                g: Math.round(startColor.g + (endColor.g - startColor.g) * progress),
                b: Math.round(startColor.b + (endColor.b - startColor.b) * progress),
                a: startColor.a + (endColor.a - startColor.a) * progress
            };
            
            textElement.style.color = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`;
        }
    }
    
    // Initialize and set up listeners
    calculateLinePositions();
    updateTextColor();
    
    const scrollOpts = { passive: true };
    window.addEventListener('scroll', updateTextColor, scrollOpts);
    window.addEventListener('resize', () => {
        calculateLinePositions();
        updateTextColor();
    });
});



  document.querySelectorAll('[tabindex="0"]').forEach(item => {
        item.addEventListener('click', function() {
            // Get the price element within the clicked item
            const priceElement = this.querySelector('p[id]');
            const price = priceElement.textContent;
            
            // Update the checkout button
            document.getElementById('selected-price').textContent = price;
            
            // Optional: Add visual feedback for selected item
            document.querySelectorAll('[tabindex="0"]').forEach(i => {
                i.classList.remove('bg-blue-900', 'text-white');
                i.classList.add('text-gray-400');
            });
            this.classList.add('bg-blue-900', 'text-white');
            this.classList.remove('text-gray-400');
        });
    });

function redirect() {
    window.location.href = "wallet.html";
}



window.onloadTurnstileCallback = function () {
  turnstile.render("#Mywidget", {
    sitekey: "0x4AAAAAABlPDimv3S4kyVzs",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
    },
  });
};