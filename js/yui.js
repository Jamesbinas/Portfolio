var yuiEl = document.getElementById('yui');
var yuiSprite = document.getElementById('yui-sprite');
var yuiDialogue = document.getElementById('yui-dialogue');

var dialogues = {
    about:    "This is where I live!! 🦇",
    projects: "Look what we built together!! ✨",
    skills:   "He learned ALL of this!! 💪",
    contact:  "Say hi!! He doesn't bite!! 😊"
};

function yuiSay(text) {
    yuiDialogue.textContent = text;
    yuiDialogue.classList.add('show');
    setTimeout(function() {
        yuiDialogue.classList.remove('show');
    }, 3500);
}

function yuiIdle() {
    yuiSprite.className = '';
    yuiSprite.style.backgroundImage = "url(./sprites/Yui-idle.png')";
    yuiSprite.style.height = '412px';
}

function yuiFly() {
    yuiSprite.className = 'flying';
    yuiSprite.style.backgroundImage = "url('./sprites/Yui-flying.png')";
    yuiSprite.style.height = '358px';
}

function yuiLand() {
    yuiSprite.className = 'landing';
    yuiSprite.style.backgroundImage = "url('./sprites/Yui-landing.png')";
    yuiSprite.style.height = '358px';

    setTimeout(function() {
        yuiIdle();
    }, 800);
}

function yuiReactToPlanet(planetX, planetId) {
    
    yuiFly();

    // swap side after a short delay (mid-flight feel)
    setTimeout(function() {
        if (planetX < 3000) {
            yuiEl.classList.add('right-side');
        } else {
            yuiEl.classList.remove('right-side');
        }
    },0);

    // land when camera arrives
    setTimeout(function() {
        yuiLand();
        if (planetId && dialogues[planetId]) {
            yuiSay(dialogues[planetId]);
        }
    }, 5400);
}
yuiIdle();
