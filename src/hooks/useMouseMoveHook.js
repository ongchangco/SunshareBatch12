export default function useMouseMoveHook(e) {
  var w = window.innerWidth / 2;
  var h = window.innerHeight / 2;

  document.querySelectorAll(".parallax-img").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");

    var x = ((w - e.clientX) * moving_value) / 100;
    var y = ((h - e.clientY) * moving_value) / 100;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
