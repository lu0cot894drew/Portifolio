function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}


function fadeOut(element) {
    element.style.opacity = 1;
    (function fade() {
        if ((element.style.opacity -= 0.1) < 0) {
            element.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(element, display) {
    element.style.opacity = 0;
    element.style.display = display || "block";
    (function fade() {
        let val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function typeWriter(text, i, callback) {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        setTimeout(function() {
            typeWriter(text, i + 1, callback);
        }, 100);
    } else if (callback) {
        setTimeout(callback, 1000);
    }
}

typeWriter("Seja bem-vindo!", 0);
