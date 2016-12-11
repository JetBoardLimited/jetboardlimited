document.addEventListener('DOMContentLoaded', animateIntro);
document.addEventListener('DOMContentLoaded', animateManufacturersList);

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

function animateManufacturersList() {
    $('.manufacturers').slick({
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1000
    });
}