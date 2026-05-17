// ===== PLANET POSITIONS (must match main.js) =====
var planetPositions = {
    about:    { x: 500,  y: 800  },
    projects: { x: 5000, y: 900  },
    skills:   { x: 900,  y: 4500 },
    contact:  { x: 5000, y: 5000 },
};

// ===== TRAVEL FUNCTION =====
function travelToPlanet(target, px, py) {

    var pos = (px !== undefined) ? { x: px, y: py } : planetPositions[target];
    if (!pos) return;

    // close nav
    document.getElementById('nav-links').classList.remove('open');

    // camera offset — center planet on screen
    var newOffsetX = -(pos.x + 90 - window.innerWidth / 2);
    var newOffsetY = -(pos.y + 90 - window.innerHeight / 2);

    // clamp
    newOffsetX = Math.min(0, Math.max(newOffsetX, -(6000 - window.innerWidth)));
    newOffsetY = Math.min(0, Math.max(newOffsetY, -(6000 - window.innerHeight)));

    // update globals
    offsetX = newOffsetX;
    offsetY = newOffsetY;

    // camera movement
    space.style.transition = 'transform 5s ease-in-out';
    space.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';

    // Yui reacts — switch side + plays animations 
    yuiReactToPlanet(pos.x, target);

    // camera transition
    setTimeout(function() {
        space.style.transition = 'none';
    }, 5500);

    // show section panel after travel
    setTimeout(function() {
        showSection(target);
    }, 7000);
}

// ===== NAV CLICKS =====
var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(item) {
    item.addEventListener('click', function() {
        travelToPlanet(item.dataset.target);
    });
});

// ===== SECTION REVEAL =====
function showSection(id) {
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(p) {
        p.classList.add('hidden');
    });

    var panel = document.getElementById(id);
    if (panel) panel.classList.remove('hidden');
}

// ===== CLOSE BUTTONS =====
var closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var panel = btn.closest('.panel');
        if (panel) panel.classList.add('hidden');

        // back to idle on close
        var yuiSprite = document.getElementById('yui-sprite');
        yuiSprite.className = '';
        yuiSprite.style.backgroundImage = "url('./sprites/Yui-idle.png')";
        yuiSprite.style.height = '412px';
    });
});
