const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Đồ ácc nhân 🥺<br>Thiên không xong với em đâu✊🏻";
  gif.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDE5bzZ2eXVjNWw4YTlkdGw4bnZ3NXBpZW5zbnR3ODRzcmZ2bDM2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W4RizlO6qZWQRYw9mb/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
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
