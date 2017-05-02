document.addEventListener('DOMContentLoaded', createBoardMediaGallery);

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
