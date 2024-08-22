$(document).ready(function () {
  // 언어 토글
  $(".lang > a").on("mouseover", function (e) {
    e.preventDefault();
    $(".country").toggle();
  });
});
