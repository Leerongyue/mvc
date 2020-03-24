import $ from "jquery";
import "./app2.css";
const $bar = $(".app2 .bar");
const $context = $(".app2 .context");
$bar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
  $context
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$bar
  .children()
  .eq(0)
  .trigger("click");
