// slow down the scroll speed after clicking an anchor tag
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 
const hobbies = {
  0 : 'hockey player 🏒',
  1 : 'football fanatic 🏈',
  2 : 'Lord of the Rings nerd 🗡',
  3 : 'Warhammer fan 🔨',
  4 : 'enjoy hiking 🥾',
  5 : 'mediocre fisherman 🎣',
  6 : 'spicy food enjoyer 🌶',
  7 : 'uninformed film snob 🎥',
}
// cache the span text in the header
const headerText = document.getElementById('hobby');
headerText.innerText = hobbies[Math.floor(Math.random() * 8)];
// initialize the idx for the hobby cycler
let randIdx;
let lastIdx;
let lastLastIdx;

function cycleHobby() {
  if (lastIdx) lastLastIdx = lastIdx;
  if (randIdx) lastIdx = randIdx;
  randIdx = Math.floor(Math.random() * 8);
  while (randIdx === lastIdx|| randIdx === lastLastIdx) {
    randIdx = Math.floor(Math.random() * 8);
  }
  headerText.innerText = hobbies[randIdx];
}
// initialize the hobby to cycle when the window loads
window.addEventListener('load', function() {
  setInterval(cycleHobby, 2500);
});

const picRef = [
  'https://i.imgur.com/U2LER2X.jpg?1',
  'https://i.imgur.com/yb9ZbZn.jpg',
  'https://i.imgur.com/rzTwoPH.png',
  'https://i.imgur.com/g7IsOhS.jpg'
];

const aboutImg = document.getElementById('about-img');

function changeImage() {
  const currIdx = picRef.indexOf(aboutImg.src);
  const nextIdx = (currIdx + 1) % picRef.length;
  aboutImg.src = picRef[nextIdx];
}

window.addEventListener('load', function() {
  setInterval(changeImage, 4000);
});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
