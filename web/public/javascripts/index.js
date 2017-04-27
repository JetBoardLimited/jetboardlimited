document.addEventListener('DOMContentLoaded', animateIntro);
document.addEventListener('DOMContentLoaded', animateManufacturersList);
document.addEventListener('DOMContentLoaded', createBoardMediaGallery);

function animateIntro() {
    var element = document.getElementById('intro-word');

    if (element === undefined || element === null) {
        return;
    }

    var words = [
        'sell', 'buy', 'hire', 'discuss', 'review'
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
     $('.board-media-gallery-preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.board-media-gallery-controls'
    });

    $('.board-media-gallery-controls').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.board-media-gallery-preview',
        focusOnSelect: true
    });
}
