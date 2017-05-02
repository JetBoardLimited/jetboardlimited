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

    var introElement = document.querySelector('.intro');

    if (introElement === undefined || introElement === null) {
        return;
    }

    var introWords = [
        'main-background.png',
        'main-background-1.png',
        'main-background-2.jpg'
    ];

    var introIndex = 0;

    setInterval(function () {
        element.textContent = words[index % words.length];
        index = (index + 1) % words.length;
        introElement.style.backgroundImage = 'url(/images/'+introWords[introIndex % introWords.length]+')';
        introIndex = (introIndex + 1) % introWords.length;
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
}
