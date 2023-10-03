var buttonElement = document.querySelector(".button button");

buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");

  var outputElement = document.getElementById("camelcase");

  var inputText = inputElement.value;

  var words = inputText.split(" ");

  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var camelCaseText = words.join("");

  outputElement.value = camelCaseText;
});

buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");

  var outputElement = document.getElementById("Pascalcase");

  var inputText = inputElement.value;

  var words = inputText.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  var PascalcaseText = words.join("");
  outputElement.value = PascalcaseText;
});
buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");
  var outputElement = document.getElementById("Snakecase");
  var inputText = inputElement.value;
  var words = inputText.split(" ");
  for (var i = 0; i < words.length - 1; i++) {
    words[i] = words[i] + "_";
  }
  var SankeCaseText = words.join("");
  outputElement.value = SankeCaseText;
});
buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");
  var outputElement = document.getElementById("ScreamingSnakecase");
  var inputText = inputElement.value;
  var words = inputText.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  var ScreamingSnakecase = words.join("_");
  outputElement.value = ScreamingSnakecase;
});
buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");
  var outputElement = document.getElementById("Kebabcase");
  var inputText = inputElement.value;
  var words = inputText.split(" ");
  for (var i = 0; i < words.length - 1; i++) {
    words[i] = words[i] + "-";
  }
  var Kebabcase = words.join("");
  outputElement.value = Kebabcase;
});
buttonElement.addEventListener("click", () => {
  const inputElement = document.getElementById("textfield_id");
  var outputElement = document.getElementById("ScreamingKebabcase");
  var inputText = inputElement.value;
  var words = inputText.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  var ScreamingSnakecase = words.join("-");
  outputElement.value = ScreamingSnakecase;
});
