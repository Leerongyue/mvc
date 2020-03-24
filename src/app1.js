import $ from "jquery";
import "./app1.css";
const $button1 = $(".button1");
const $button2 = $(".button2");
const $button3 = $(".button3");
const $button4 = $(".button4");
const $number = $(".number");
const n = localStorage.getItem("n");
$number.text(n || 100);
$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
