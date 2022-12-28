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
  1 : 'football watcher 🏈',
  2 : 'Lord of the Rings nerd 🗡',
  3 : 'Warhammer fan 🔨',
  4 : 'hiker 🥾',
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
  setInterval(cycleHobby, 2000);
});