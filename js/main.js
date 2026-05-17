// ===== GLOBALS =====
var offsetX = -(3000 - window.innerWidth / 2);
var offsetY = -(3000 - window.innerHeight / 2);

var space = document.getElementById('space');
var blob = document.getElementById('cursor-blob');

// ===== CURSOR =====
document.addEventListener('mousemove', function(e) {
    blob.style.left = e.clientX + 'px';
    blob.style.top = e.clientY + 'px';
    document.documentElement.style.setProperty('--cx', e.clientX + 'px');
    document.documentElement.style.setProperty('--cy', e.clientY + 'px');

    // HUD coords
    var hud = document.getElementById('hud-coords');
    var canvasX = Math.round(e.clientX - offsetX);
    var canvasY = Math.round(e.clientY - offsetY);
    hud.textContent = 'X: ' + canvasX + ' | Y: ' + canvasY;
});

// ===== STARS =====
function createStars() {
    for (var i = 0; i < 1000; i++) {
        var star = document.createElement('div');
        var x = Math.random() * 100;
        var y = Math.random() * 100;
        var size = Math.random() * 2.5 + 0.5;
        var opacity = Math.random() * 0.7 + 0.3;
        var duration = Math.random() * 3 + 2;

        star.style.cssText = [
            'position:absolute',
            'left:' + x + '%',
            'top:' + y + '%',
            'width:' + size + 'px',
            'height:' + size + 'px',
            'background:white',
            'border-radius:50%',
            'opacity:' + opacity,
            'animation: twinkle ' + duration + 's ease-in-out infinite alternate'
        ].join(';');

        space.appendChild(star);
    }
}

createStars();

// ===== INITIAL CAMERA POSITION =====
space.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';

// ===== PLANETS =====
var planetsData = [
    { id: 'about',    label: 'About',    x: 500,  y: 800,  color: '#7c3aed', size: 280 },
    { id: 'projects', label: 'Projects', x: 5000, y: 900,  color: '#10b981', size: 130 },
    { id: 'skills',   label: 'Skills',   x: 900,  y: 4500, color: '#f97316', size: 340 },
    { id: 'contact',  label: 'Contact',  x: 5000, y: 5000, color: '#3b82f6', size: 400 },
];

planetsData.forEach(function(planet) {
    // planet div
    var el = document.createElement('div');
    el.className = 'planet';
    el.id = 'planet-' + planet.id;
    el.dataset.target = planet.id;
    el.style.cssText = [
        'position:absolute',
        'left:' + planet.x + 'px',
        'top:' + planet.y + 'px',
        'width:' + planet.size + 'px',
        'height:' + planet.size + 'px',
        'border-radius:50%',
        'background:radial-gradient(circle at 35% 35%, ' + planet.color + 'dd, ' + planet.color + '66)',
        'box-shadow:0 0 30px ' + planet.color + '88, 0 0 80px ' + planet.color + '33',
        'cursor:pointer',
        'animation:planetPulse ' + (4 + Math.random() * 2) + 's ease-in-out infinite'
    ].join(';');

    // click planet directly
    el.addEventListener('click', function() {
        travelToPlanet(planet.id, planet.x, planet.y);
    });

    space.appendChild(el);

    // label
    var label = document.createElement('div');
    label.className = 'planet-label';
    label.textContent = planet.label;
    label.style.cssText = [
        'position:absolute',
        'left:' + (planet.x + planet.size / 2) + 'px',
        'top:' + (planet.y + planet.size + 12) + 'px',
        'transform:translateX(-50%)',
        'color:white',
        'text-shadow:0 0 10px ' + planet.color
    ].join(';');

    space.appendChild(label);
});

// ===== NAV TOGGLE =====
var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});

// ===== INTRO STARS (canvas) =====
var introCanvas = document.getElementById('intro-stars');
var ctx = introCanvas.getContext('2d');
introCanvas.width = window.innerWidth;
introCanvas.height = window.innerHeight;

var introStars = [];
for (var s = 0; s < 200; s++) {
    introStars.push({
        x: Math.random() * introCanvas.width,
        y: Math.random() * introCanvas.height,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random()
    });
}

function drawIntroStars() {
    ctx.clearRect(0, 0, introCanvas.width, introCanvas.height);
    introStars.forEach(function(star) {
        star.o += (Math.random() - 0.5) * 0.05;
        star.o = Math.max(0.1, Math.min(1, star.o));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + star.o + ')';
        ctx.fill();
    });
    requestAnimationFrame(drawIntroStars);
}
drawIntroStars();

// ===== INTRO BUTTON =====
var introOverlay = document.getElementById('intro-overlay');
var introBtn = document.getElementById('intro-btn');

introBtn.addEventListener('click', function() {
    introOverlay.classList.add('fade-out');
    setTimeout(function() {
        introOverlay.style.display = 'none';
    }, 800);
});
