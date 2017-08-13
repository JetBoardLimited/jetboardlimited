document.addEventListener('DOMContentLoaded', animateIntro);
document.addEventListener('DOMContentLoaded', animateManufacturersList);
document.addEventListener('DOMContentLoaded', createBoardMediaGallery);

function animateIntro() {
    var element = document.getElementById('intro-word');

    if (element === undefined || element === null) {
        return;
    }

    var words = [
    'sell', 'buy', 'hire', 'review'
    ];

    var index = 0;

    setInterval(function () {
        element.textContent = words[index % words.length];
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

function createBoardMediaGallery() {
    $('.intro-boards-gallery').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 5
   });
}
