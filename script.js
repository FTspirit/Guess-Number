"use strict";


// Dem so tu 1 den 20
const randomNumberFrom1To20 = () => {
    return  Math.trunc(Math.random() * 20) + 1
}

// Chon 1 so bat ki tu 1 den 20
let secretNumber = randomNumberFrom1To20();
let score = 20;
let highScore = 0;
// Tao the html 
document.querySelector('.score').textContent = score;

const displayMessage = (message) => {
    return  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // Khi khong co data
    if (!guess) {
        displayMessage("⛔️ Không có số, hãy nhập số..!");
        // Khi nguoi choi thang
    } else if (guess === secretNumber) {
        displayMessage("🎉 Chính xác...!")
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } // Khi nguoi choi chon sai
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Số quá cao..!" : "📉 Số quá thấp...!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("💥 Bạn đã thua game...");
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = randomNumberFrom1To20();
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage("Đang đoán số...");
    document.querySelector('.number').textContent = "?";
})

