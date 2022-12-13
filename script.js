const storaBen = document.getElementById('storaBen');
const lillaBen = document.getElementById('lillaBen');

let x = 0;
let y = 0;

lillaBen.addEventListener('click', () => {
  x = Math.floor(Math.random() * 300);
  y = Math.floor(Math.random() * 300);

  lillaBen.style.left = x + 'px';
  lillaBen.style.top = y + 'px';
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    if (x > 0) {
      x--;
      littleSquare.style.left = x + 'px';
    }
  } else if (event.keyCode === 38) {
    if (y > 0) {
      y--;
      lillaBen.style.top = y + 'px';
    }
  } else if (event.keyCode === 39) {
    if (x < 300) {
      x++;
      lillaBen.style.left = x + 'px';
    }
  } else if (event.keyCode === 40) {
    if (y < 300) {
      y++;
      lillaBen.style.top = y + 'px';
    }
  }
});