const wrapper = document.querySelector(".wrapper");
const question = document.querySelectorAll(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

yesBtn.addEventListener("click", () => {
  question[0].innerHTML = "Ơ đồng ý nhanh thế á";
  question[1].innerHTML =
    "Vậy thì chần chừ gì nữa mà không nhắn tin cho em bé nhỉ? ";
  img.src = "https://media.giphy.com/media/a3PCuCu45YIt09bKTX/giphy.gif";
  // Ẩn nút Yes và No
  https: yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Hiển thị nút mới
  newBtn.style.display = "block";

  // Thực hiện chuyển hướng đến đường dẫn Facebook
  newBtn.addEventListener("click", () => {
    window.location.href = "https://www.messenger.com/t/100021958673853";
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
