// 윷던지기
let score = 0;
function randomGenerator(seq) {
  var randomNumber = Math.floor(Math.round(Math.random())); //0-1
  if (randomNumber === 0) {
    score++;
  }
  var randomYutImage = "yut" + randomNumber + ".png"; // yut0.png
  var randomImageSource = "images/" + randomYutImage;
  document
    .getElementsByClassName(seq)[0]
    .setAttribute("src", randomImageSource);
}

function throwYut() {
  randomGenerator("first");
  randomGenerator("second");
  randomGenerator("third");
  randomGenerator("fourth");
}
throwYut();

// 점수계산
const map = new Map();
map.set(0, "MO");
map.set(1, "DO");
map.set(2, "GAE");
map.set(3, "GEOL");
map.set(4, "YUT");

// key값으로 value값 가져오는 함수
function getKeyByValue(map, value) {
  for (let [key, val] of map.entries()) {
    if (val === value) {
      return key;
    }
  }
  return null;
}

// 결과보여주기
function showResult() {
  let step = getKeyByValue(map, map.get(score));
  if (map.get(score) == "MO") {
    step = 5;
  }
  document.querySelector(".score").innerHTML = map.get(score);
  document.querySelector(".move").innerHTML = "Move " + step + " step forward!";
  score = 0;
}
showResult();
score = 0; // 점수초기화

function retryButton() {
  throwYut();
  showResult();
}

// 모달 관련
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
