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
randomGenerator("first");
randomGenerator("second");
randomGenerator("third");
randomGenerator("fourth");

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
}
showResult();
