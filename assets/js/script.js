function setupRotatingPics() {
  const rotatingPics = document.querySelectorAll('[data-repeat="true"]'); // select all images that will repeat
  rotatingPics.forEach((element) => {
    // get the dataset (all of them) and put them in an object
    const objElementSources = element.dataset;

    // order the keys in an array so we are sure the "shows" come in order
    const arrOrderedSources =
      Object.getOwnPropertyNames(objElementSources).sort();

    // add the show elements to an array for their order
    const arrSources = [];
    arrOrderedSources.forEach((key) =>
      key.includes("show") ? arrSources.push(objElementSources[key]) : false
    );

    // set timer variables to trigger image changes
    let thisTimer;
    let curIndex = 0;

    element.addEventListener("mouseenter", function (event) {
      thisTimer = setInterval(() => {
        curIndex++;
        if (curIndex >= arrSources.length) {
          curIndex = 0;
        }
        element.src = arrSources[curIndex];
      }, 600);
    });

    element.addEventListener("mouseout", function (event) {
      clearInterval(thisTimer);
      curIndex = 0;
      element.src = arrSources[curIndex];
    });
  });
}

function setupGifs() {
  const gifImgs = document.querySelectorAll('[data-gif="true"]'); // select all images that have gifs

  gifImgs.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      element.src = element.dataset.active;
    });

    element.addEventListener("mouseout", function () {
      element.src = element.dataset.still;
    });
  });
}

setupRotatingPics();
setupGifs();
