// getElementById
const title = document.getElementById("mainTitle");
// getElementsByClassName
const box = document.getElementsByClassName("boxClass")[0];
// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
// querySelector
const firstPara = document.querySelector(".text");
// querySelectorAll
const allParas = document.querySelectorAll(".text");

const actionBtn = document.getElementById("actionBtn");
const resetBtn = document.getElementById("resetBtn");

function applyChanges() {
  title.textContent = "🚀 تغییر با getElementById";
  title.style.color = "#ffcc00";
  title.style.transform = "scale(1)";
  setTimeout(() => title.style.transform = "scale(1)", 400);

  box.style.backgroundColor = "#b8860b";
  box.style.transform = "rotate(8deg)";
  setTimeout(() => box.style.transform = "rotate(0deg)", 400);

  for (let p of paragraphs) {
    p.style.fontSize = "1.2rem";
    p.style.color = "#f0e68c";
  }

  firstPara.textContent = "💡 متن تغییر یافته با querySelector";

  allParas.forEach((p, i) => {
    p.textContent += " ✨";
    p.style.backgroundColor = i % 2 === 0 ? "#333" : "#4b3b00";
    p.style.padding = "6px";
    p.style.borderRadius = "6px";
  });

  document.body.style.background = "#2e2e2e";
}

function resetChanges() {
  title.textContent = "تمرین انتخاب عناصر";
  title.style.color = "#d4af37";
  title.style.transform = "scale(1)";

  box.style.backgroundColor = "#333";
  box.style.transform = "rotate(0deg)";

  for (let p of paragraphs) {
    p.style.fontSize = "";
    p.style.color = "";
    p.style.backgroundColor = "";
    p.style.padding = "";
    p.style.borderRadius = "";
    p.textContent = p.textContent.replace(/ ✨/g, "");
  }

  firstPara.textContent = "پاراگراف شماره ۱";

  document.body.style.background = "#121212";
}

actionBtn.addEventListener("click", applyChanges);
resetBtn.addEventListener("click", resetChanges);
