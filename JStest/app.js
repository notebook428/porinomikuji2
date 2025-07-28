// 運勢の一覧
const fortunes = ["ポリン", "ポポリン", "マーリン", "ドロップス", "デビルリング", "ゴーストリング","エンジェリング"];
const imageMap = {
  "ポリン"        : "./img/porin0.png",
  "ポポリン"      : "./img/porin1.png",
  "マーリン"      : "./img/porin2.png",
  "ドロップス"    : "./img/porin3.png",
  "デビルリング"  :   "./img/porin4.png",
  "ゴーストリング": "./img/porin5.png",
  "エンジェリング":   "./img/porin6.png"
};

const button = document.getElementById("draw");
const resultText = document.getElementById("result");
const image = document.getElementById("fortune-image");

button.addEventListener("click", function () {
  const index = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[index];

  // 結果をテキストに表示
  resultText.innerText = "今日のラッキーポリンは…「" + result + "」です！";

  // 運勢に応じて画像を切り替える
  image.src = imageMap[result];
  image.style.display = "block"; // 非表示を解除
});