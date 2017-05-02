document.addEventListener('DOMContentLoaded', createFAQ);

function createFAQ() {
  $(".faqs dd").hide();
  $(".faqs dt").click(function () {
      $(this).next(".faqs dd").toggle();
      $(this).toggleClass("expanded");
  });
}
