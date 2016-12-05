document.addEventListener('DOMContentLoaded', animateIntro);

function animateIntro() {
    var words = [
        'sell', 'buy', 'hire', 'discuss'
    ];

    var index = 0;

    setInterval(function () {
        document.getElementById('intro-word').textContent = words[index % words.length];
        index = (index + 1) % words.length;
    }, 1000);
}