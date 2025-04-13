var food = document.querySelectorAll(".food");
var isContained = [];
var stock = 14;
let disabledClick = false;

for (let i = 0; i < food.length; i++) {
  food[i].addEventListener("click", function () {
    if (disabledClick) return; // bloque si clics trop rapides
    var audio = new Audio("./click.mp3");
    audio.play();
    if (stock != 0) {
      if (this.innerHTML === "CRACKERS") {
        food[0].innerHTML = "CRACKER 1";
        food[1].innerHTML = "CRACKER 2";
        food[2].innerHTML = "";
        food[3].innerHTML = "";
        food[4].innerHTML = "GO BACK";
      } else if (this.innerHTML === "CEREAL") {
        food[0].innerHTML = "CEREAL 1";
        food[1].innerHTML = "CEREAL 2";
        food[2].innerHTML = "CEREAL 3";
        food[3].innerHTML = "CEREAL 4";
        food[4].innerHTML = "GO BACK";
      } else if (this.innerHTML === "GO BACK") {
        goBack(food);
      } else if (this.innerHTML === "CHIPS") {
        food[0].innerHTML = "CHIPS 1";
        food[1].innerHTML = "CHIPS 2";
        food[2].innerHTML = "CHIPS 3";
        food[3].innerHTML = "";
        food[4].innerHTML = "GO BACK";
      } else if (this.innerHTML === "DRINKS") {
        food[0].innerHTML = "DRINK 1";
        food[1].innerHTML = "DRINK 2";
        food[2].innerHTML = "DRINK 3";
        food[3].innerHTML = "DRINK 4";
        food[4].innerHTML = "GO BACK";
      } else if (this.innerHTML === "CRACKER 1") {
        if (!isItemAlreadyDroped(isContained, "CRACKER1")) {
          disabledClick = true;
          var crackers = document.querySelector("#crackers1");
          drop(crackers);
          isContained.push("CRACKER1");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CRACKER 2") {
        if (!isItemAlreadyDroped(isContained, "CRACKER2")) {
          disabledClick = true;
          var crackers = document.querySelector("#crackers2");
          drop(crackers);
          isContained.push("CRACKER2");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CEREAL 1") {
        if (!isItemAlreadyDroped(isContained, "CEREAL1")) {
          disabledClick = true;
          var crackers = document.querySelector("#cereal1");
          drop(crackers);
          isContained.push("CEREAL1");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CEREAL 2") {
        if (!isItemAlreadyDroped(isContained, "CEREAL2")) {
          disabledClick = true;
          var crackers = document.querySelector("#cereal2");
          drop(crackers);
          isContained.push("CEREAL2");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CEREAL 3") {
        if (!isItemAlreadyDroped(isContained, "CEREAL3")) {
          disabledClick = true;
          var crackers = document.querySelector("#cereal3");
          drop(crackers);
          isContained.push("CEREAL3");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CEREAL 4") {
        if (!isItemAlreadyDroped(isContained, "CEREAL4")) {
          disabledClick = true;
          var crackers = document.querySelector("#cereal4");
          drop(crackers);
          isContained.push("CEREAL4");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CHIPS 1") {
        if (!isItemAlreadyDroped(isContained, "CHIPS1")) {
          disabledClick = true;
          var crackers = document.querySelector("#chips1");
          drop(crackers);
          isContained.push("CHIPS1");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CHIPS 2") {
        if (!isItemAlreadyDroped(isContained, "CHIPS2")) {
          disabledClick = true;
          var crackers = document.querySelector("#chips2");
          drop(crackers);
          isContained.push("CHIPS2");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "CHIPS 3") {
        if (!isItemAlreadyDroped(isContained, "CHIPS3")) {
          disabledClick = true;
          var crackers = document.querySelector("#chips3");
          drop(crackers);
          isContained.push("CHIPS3");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "DRINK 1") {
        if (!isItemAlreadyDroped(isContained, "DRINK1")) {
          disabledClick = true;
          var crackers = document.querySelector("#drink1");
          drop(crackers);
          isContained.push("DRINK1");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "DRINK 2") {
        if (!isItemAlreadyDroped(isContained, "DRINK2")) {
          disabledClick = true;
          var crackers = document.querySelector("#drink2");
          drop(crackers);
          isContained.push("DRINK2");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "DRINK 3") {
        if (!isItemAlreadyDroped(isContained, "DRINK3")) {
          disabledClick = true;
          var crackers = document.querySelector("#drink3");
          drop(crackers);
          isContained.push("DRINK3");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        }else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      } else if (this.innerHTML === "DRINK 4") {
        if (!isItemAlreadyDroped(isContained, "DRINK4")) {
          disabledClick = true;
          var crackers = document.querySelector("#drink4");
          drop(crackers);
          isContained.push("DRINK4");
          stock--;
          randomMessage();
          setTimeout(() => {
            disabledClick = false; // réactive après un court délai
          }, 300);
        } else {
          var thanksMSG = document.querySelector(".check");
          thanksMSG.innerHTML = "OUT OF STOCK";
          thanksMSG.style.backgroundColor = "red";
    
        }
      }
    } else {
      var thanksMSG = document.querySelector(".check");
      thanksMSG.innerHTML = "OUT OF STOCK";

      thanksMSG.style.backgroundColor = "red";
    }
  });
}
function isItemAlreadyDroped(array, item) {
  return array.includes(item);
}

function drop(food) {
  var positionFood = food.getBoundingClientRect();

  var positionContener = document
    .querySelector(".receive")
    .getBoundingClientRect();

  var deltatop = 10 + positionContener.top - positionFood.top;
  var deltaleft = 50 + positionContener.left - positionFood.left;
  var randomRotation = Math.floor(Math.random() * 180);
  food.style.transition = "transform 1s linear"; // Animation en douceur
  food.style.transform = ` translate(0px, ${deltatop}px) rotate(${randomRotation}deg)`; // ✅ backticks + bons noms
  setTimeout(() => {
    food.style.visibility = "hidden";
  }, 1000);
}

function goBack(food) {
  food[0].innerHTML = "CRACKERS";
  food[1].innerHTML = "CEREAL";
  food[2].innerHTML = "CHIPS";
  food[3].innerHTML = "DRINKS";
  food[4].innerHTML = "MORE";
}

function randomMessage() {
  var thanksMSG = document.querySelector(".check");
  var random = Math.floor(Math.random() * 5);
  thanksMSG.style.backgroundColor = "#69ec71";
  if (random === 1) {
    thanksMSG.innerHTML = "<3";
  } else if (random === 2) {
    thanksMSG.innerHTML = "THANKS !";
  } else if (random === 3) {
    thanksMSG.innerHTML = "OMG ";
  } else if (random === 4) {
    thanksMSG.innerHTML = "WOW";
  } else if (random === 5) {
    thanksMSG.innerHTML = "GREAT";
  }
}

var container = document.querySelector(".receive");
container.addEventListener("click", function () {
  var overlay = document.querySelector(".overlay");
  var itemsWon = document.querySelector(".itemswon");
  if (isContained != 0) {
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.alignContent = "center";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.gap = "20px";
    overlay.style.padding = "20px";
    itemsWon.innerHTML = "";
    overlay.classList.add(".show");
    for (let i = 0; i < isContained.length; i++) {
      var imageSource = "./" + isContained[i] + ".png";
      var img = document.createElement("img");
      img.src = imageSource;
      img.height = "50";
      itemsWon.appendChild(img);
    }
  }
});

var buttonOverlay = document.querySelector(".overlay button");

buttonOverlay.addEventListener("click", function () {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
  overlay.classList.remove("show");
});
