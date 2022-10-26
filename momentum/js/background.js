const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;

bgImg.classList.add("hidden");
document.body.style.backgroundImage = `url(${bgImg.src})`;

document.body.appendChild(bgImg);