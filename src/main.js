import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
export {side4};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    const side4 = "try again";
if (side1 === side2 && side2 === side3) {
alert("equilateral")
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
alert("isosceles")
} else if (side1 !== side2 && side2 !== side3 && side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
alert("scalene");
} else {
alert(side4);
  }
})
})