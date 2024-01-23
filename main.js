function changeColors() {
    var currentBackgroundColor = document.body.style.backgroundColor
    if (currentBackgroundColor !== 'white') {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    } else {
        document.body.style.backgroundColor = '#121212'
        document.body.style.color = 'white'
    }
}


function toggleImages(element) {
    var currentImage = element.src
    if (currentImage.includes('yamaha/image1.png')) {
        element.src = 'yamaha/image2.png'
    } else {
        element.src = 'yamaha/image1.png'
    }
}

function toggleImagess(element) {
    var currentImage = element.src

    if (currentImage.includes('bmw/image1.png')) {
        element.src = 'bmw/image2.png'
    } else {
        element.src = 'bmw/image1.png'
    }
}

function toggleImagesss(element) {
    var currentImage = element.src

    if (currentImage.includes('suzuki/image1.png')) {
        element.src = 'suzuki/image2.png'
    } else {
        element.src = 'suzuki/image1.png'
    }
}

function toggleImagessss(element) {
    var currentImage = element.src

    if (currentImage.includes('honda/image1.png')) {
        element.src = 'honda/image2.png'
    } else {
        element.src = 'honda/image1.png'
    }
}

function toggleImagesssss(element) {
    var currentImage = element.src

    if (currentImage.includes('ducati/image1.png')) {
        element.src = 'ducati/image2.png'
    } else {
        element.src = 'ducati/image1.png'
    }
}

function toggleImagessssss(element) {
    var currentImage = element.src

    if (currentImage.includes('can_am/image1.png')) {
        element.src = 'can_am/image2.png'
    } else {
        element.src = 'can_am/image1.png'
    }
}

function redirectToLink() {
    window.open("https://www.facebook.com/?locale=fr_FR", "_blank")
}

function redirectToLinkk() {
    window.open("https://www.instagram.com/", "_blank")
}
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }

  var motos=[]