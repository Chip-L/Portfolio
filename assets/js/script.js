let rotatingPics = document.querySelectorAll('[data-repeat="true"]'); // select all images that will repeat
let timers = [];

console.log(rotatingPics);

function setupRotatingPics() {
  rotatingPics.forEach((element) => {
    element.addEventListener("mouseover", function () {
      console.log(element);
    });
  });
}

setupRotatingPics();
