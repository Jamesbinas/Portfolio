function createStars() {
    const space = document.getElementById('space')
    const starcount = 100;

    for (let i = 0; i < starcount; i++) {
        const star = document.createElement('div');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2.5 + 0.5;
        const opacity = Math.random() * 0.7 + 0.3;
        const duration = Math.random() * 3 + 2;

        star.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: white;
        border-radius: 50%;
        opacity: ${opacity};
        z-index:100;
        animation: starDrift ${duration * 4}s ease-in-out infinite alternate,
                   twinkle ${duration}s ease-in-out infinite alternate;
        `

        space.appendChild(star);
    }
}

    createStars();

const intro = document.getElementById('intro');

intro.addEventListener('click', () => {
    console.log('screen clicked');
})