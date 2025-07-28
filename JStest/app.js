// 運勢の一覧
const fortunes = ["ポリン", "ポポリン", "マーリン", "ドロップス", "デビルリング", "ゴーストリング","エンジェリング"];
const imageMap = {
  "ポリン"        : "JStest/img/porin0.png",
  "ポポリン"      : "JStest/img/porin1.png",
  "マーリン"      : "JStest/img/porin2.png",
  "ドロップス"    : "JStest/img/porin3.png",
  "デビルリング"  :   "JStest/img/porin4.png",
  "ゴーストリング": "JStest/img/porin5.png",
  "エンジェリング":   "JStest/img/porin6.png"
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
