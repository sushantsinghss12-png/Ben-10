const aliens = [
  {
    name: "Heatblast",
    desc: "A fire alien who can shoot flames and create explosions.",
    details:
      "Heatblast is a Pyronite from the planet Pyros. He can generate and control fire, shoot fireballs, create heat blasts, and produce intense heat waves. He can also use flames to fly for short distances. Heatblast is one of Ben’s strongest aliens for offensive attacks and is extremely useful in battles.",
    img: "images/heatblast.jpg",
    theme: "linear-gradient(135deg, #ff4500, #ffcc00, #000)",
    glow: "#ff4500"
  },
  {
    name: "Wildmutt",
    desc: "A beast alien with super smell and extreme strength.",
    details:
      "Wildmutt is a Vulpimancer from the planet Vulpin. He has no eyes but uses smell and sound to detect enemies. He has sharp claws, powerful jaws, and great agility. Wildmutt is strong, fast, and excellent for tracking opponents and surviving in dangerous environments.",
    img: "images/wildmutt.jpg",
    theme: "linear-gradient(135deg, #8b0000, #ff0000, #000)",
    glow: "#ff0000"
  },
  {
    name: "Diamondhead",
    desc: "A crystal alien who can create sharp diamond weapons.",
    details:
      "Diamondhead is a Petrosapien from the planet Petropia. His body is made of nearly indestructible crystal. He can create sharp crystal weapons like swords and shields, shoot crystal projectiles, and reflect lasers. Diamondhead is very durable and is one of Ben’s best defensive and combat aliens.",
    img: "images/diamondhead.jpg",
    theme: "linear-gradient(135deg, #00ffff, #00ff88, #000)",
    glow: "#00ffff"
  },
  {
    name: "XLR8",
    desc: "A super fast alien that runs at extreme speed.",
    details:
      "XLR8 is a Kineceleran from the planet Kinet. He can run at extremely high speeds, move faster than the human eye can follow, and perform quick attacks. His speed allows him to dodge attacks easily and create wind gusts by running. XLR8 is perfect for fast missions and rescue operations.",
    img: "images/xlr8.jpg",
    theme: "linear-gradient(135deg, #00ccff, #0044ff, #000)",
    glow: "#00ccff"
  },
  {
    name: "Grey Matter",
    desc: "A tiny alien genius with high intelligence.",
    details:
      "Grey Matter is a Galvan from the planet Galvan Prime. He is very small but has super intelligence. He can solve complex problems, hack technology, and create inventions quickly. Grey Matter is best used when Ben needs brains over strength, especially for science and technology challenges.",
    img: "images/grey matter.jpg",
    theme: "linear-gradient(135deg, #777777, #00ff88, #000)",
    glow: "#bbbbbb"
  },
  {
    name: "Four Arms",
    desc: "A powerful alien with four arms and incredible strength.",
    details:
      "Four Arms is a Tetramand from the planet Khoros. He has four arms, super strength, and powerful fighting skills. He can lift heavy objects, jump high, and defeat enemies using brute force. Four Arms is one of Ben’s strongest aliens and is perfect for hand-to-hand combat.",
    img: "images/four arms.jpg",
    theme: "linear-gradient(135deg, #ff0000, #550000, #000)",
    glow: "#ff0000"
  },
  {
    name: "Stinkfly",
    desc: "A flying alien who shoots sticky slime.",
    details:
      "Stinkfly is a Lepidopterran from the planet Lepidopterra. He has wings that allow him to fly fast and avoid enemies. He can shoot sticky slime from his eyes to trap opponents. Stinkfly also has strong claws and good agility, making him useful for aerial battles and capturing enemies.",
    img: "images/stinkfly.jpg",
    theme: "linear-gradient(135deg, #00ff00, #aaff00, #000)",
    glow: "#00ff00"
  },
  {
    name: "Ripjaws",
    desc: "A water alien with sharp teeth and strong swimming ability.",
    details:
      "Ripjaws is a Piscciss Volann from the planet Piscciss. He is extremely powerful underwater and can swim very fast. He has sharp teeth and strong jaws that can bite through almost anything. However, Ripjaws becomes weaker on land because he needs water to survive. He is best used in underwater missions.",
    img: "images/ripjaws.jpg",
    theme: "linear-gradient(135deg, #0066ff, #00ccff, #000)",
    glow: "#0066ff"
  },
  {
    name: "Upgrade",
    desc: "A tech alien that can merge with machines and upgrade them.",
    details:
      "Upgrade is a Galvanic Mechamorph from the planet Galvan B. He can merge with machines and control them, upgrading their abilities. Upgrade can transform technology into stronger weapons or vehicles. He is one of Ben’s most useful aliens when fighting robotic enemies or hacking advanced systems.",
    img: "images/upgrade.jpg",
    theme: "linear-gradient(135deg, #00ff88, #006644, #000)",
    glow: "#00ff88"
  },
  {
    name: "Ghostfreak",
    desc: "A spooky alien that can become invisible and pass through walls.",
    details:
      "Ghostfreak is an Ectonurite from the planet Anur Phaetos. He can turn invisible, pass through solid objects, and possess enemies. He is very useful for stealth missions and spying. Ghostfreak also has a terrifying appearance and strong supernatural abilities, making him one of Ben’s most dangerous aliens.",
    img: "images/ghostfreak.jpg",
    theme: "linear-gradient(135deg, #8000ff, #111111, #000)",
    glow: "#8000ff"
  }
];

// ELEMENTS
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const alienDetail = document.getElementById("alienDetail");
const closeDetail = document.getElementById("closeDetail");

const detailImg = document.getElementById("detailImg");
const detailName = document.getElementById("detailName");
const detailDesc = document.getElementById("detailDesc");
const detailFull = document.getElementById("detailFull");
const detailBox = document.getElementById("detailBox");

const sliderWrapper = document.querySelector(".slider-wrapper");

// START SCREEN ELEMENTS
const startScreen = document.getElementById("startScreen");
const mainInterface = document.getElementById("mainInterface");
const openAliens = document.getElementById("openAliens");

// SEARCH ELEMENT
const searchInput = document.getElementById("searchInput");

// VARIABLES
let selectedIndex = 0;
let scrollAmount = 0;

const cardWidth = 282;
const visibleCards = 4;

let filteredAliens = [...aliens];

// OPEN MAIN INTERFACE ON OMNITRIX CLICK
openAliens.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  mainInterface.classList.remove("hidden");
  renderAliens(filteredAliens);
});

// RENDER FUNCTION
function renderAliens(list) {
  slider.innerHTML = "";

  list.forEach((alien, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${alien.img}" alt="${alien.name}">
      <div class="card-content">
        <h2>${alien.name}</h2>
        <p>${alien.desc}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      selectedIndex = index;
      updateSelectedCard();
      openPopup(selectedIndex);
    });

    slider.appendChild(card);
  });

  selectedIndex = 0;
  scrollAmount = 0;
  slider.style.transform = `translateX(0px)`;

  updateSelectedCard();
}

// SELECTED CARD UPDATE
function updateSelectedCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("selected"));

  if (cards[selectedIndex]) {
    cards[selectedIndex].classList.add("selected");
  }
}

// SCROLL TO SELECTED
function scrollToSelected() {
  const maxScroll = (filteredAliens.length - visibleCards) * cardWidth;

  scrollAmount = selectedIndex * cardWidth;

  if (scrollAmount > maxScroll) scrollAmount = maxScroll;
  if (scrollAmount < 0) scrollAmount = 0;

  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// SLIDER MOVE
function nextSlide() {
  if (selectedIndex < filteredAliens.length - 1) {
    selectedIndex++;
    updateSelectedCard();
    scrollToSelected();
  }
}

function prevSlide() {
  if (selectedIndex > 0) {
    selectedIndex--;
    updateSelectedCard();
    scrollToSelected();
  }
}

// OPEN POPUP
function openPopup(index) {
  const alien = filteredAliens[index];

  sliderWrapper.classList.add("fade-out");

  detailImg.src = alien.img;
  detailName.textContent = alien.name;
  detailDesc.textContent = alien.desc;
  detailFull.textContent = alien.details;

  document.body.style.background = alien.theme;

  detailBox.style.border = `2px solid ${alien.glow}`;
  detailBox.style.boxShadow = `0px 0px 50px ${alien.glow}`;

  detailImg.style.border = `3px solid ${alien.glow}`;
  detailImg.style.boxShadow = `0px 0px 40px ${alien.glow}`;

  alienDetail.classList.remove("hidden");
}

// CLOSE POPUP
function closePopup() {
  alienDetail.classList.add("hidden");
  sliderWrapper.classList.remove("fade-out");

  document.body.style.background =
    "radial-gradient(circle at top, #0aff7a33, #000000 70%)";
}

closeDetail.addEventListener("click", closePopup);

// CLOSE POPUP OUTSIDE CLICK
alienDetail.addEventListener("click", (event) => {
  if (event.target === alienDetail) closePopup();
});

// BUTTONS
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// KEYBOARD SUPPORT
document.addEventListener("keydown", (event) => {
  if (mainInterface.classList.contains("hidden")) return;

  if (!alienDetail.classList.contains("hidden")) {
    if (event.key === "Escape") closePopup();
    return;
  }

  if (event.key === "ArrowRight") nextSlide();
  if (event.key === "ArrowLeft") prevSlide();

  if (event.key === "Enter") {
    openPopup(selectedIndex);
  }
});

// SEARCH FUNCTION
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  filteredAliens = aliens.filter((alien) =>
    alien.name.toLowerCase().includes(searchValue)
  );

  renderAliens(filteredAliens);
});
