const field = document.getElementById('field');
const ball = document.getElementById("ball");

field.addEventListener("click", moveMyBall)

function moveMyBall(event) {

    let fieldCordinates = this.getBoundingClientRect();


    let ballCordinates = {
      top: event.clientY - fieldCordinates.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCordinates.left - field.clientLeft - ball.clientWidth / 2
    };


    if (ballCordinates.top < 0) ballCordinates.top = 0;
    if (ballCordinates.left < 0) ballCordinates.left = 0;
    if (ballCordinates.left + ball.clientWidth > field.clientWidth) {
      ballCordinates.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCordinates.top + ball.clientHeight > field.clientHeight) {
      ballCordinates.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCordinates.left + 'px';
    ball.style.top = ballCordinates.top + 'px';
  }
