// const log = document.getElementById('log');

// document.addEventListener('keyup', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

// const log = document.getElementById('log');

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
