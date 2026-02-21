let multiplier = 1.00;
let crashPoint = 0;
let interval = null;
let balance = 1000;
let bet = 100;

const plane = document.getElementById("plane");
const multiplierText = document.getElementById("multiplier");
const startBtn = document.getElementById("startBtn");
const cashoutBtn = document.getElementById("cashoutBtn");
const balanceText = document.getElementById("balance");

function generateCrashPoint() {
    const r = Math.random();
    return +(1 / (1 - r)).toFixed(2);
}

function startGame() {
    multiplier = 1.00;
    crashPoint = generateCrashPoint();

    startBtn.disabled = true;
    cashoutBtn.disabled = false;

    interval = setInterval(() => {
        multiplier += 0.01;
        multiplier = +multiplier.toFixed(2);

        multiplierText.innerText = multiplier + "x";

        const x = multiplier * 20;
        const y = 200 - multiplier * 5;

        plane.style.transform = `translate(${x}px, ${-y}px)`;

        if (multiplier >= crashPoint) {
            crash();
        }

    }, 100);
}

function crash() {
    clearInterval(interval);
    startBtn.disabled = false;
    cashoutBtn.disabled = true;

    multiplierText.innerText = "💥 CRASH at " + crashPoint + "x";
}

function cashout() {
    clearInterval(interval);
    startBtn.disabled = false;
    cashoutBtn.disabled = true;

    const win = bet * multiplier;
    balance += win;

    balanceText.innerText = "Balance: " + Math.floor(balance) + " FUN";
    multiplierText.innerText = "💰 You cashed out at " + multiplier + "x";
}

startBtn.addEventListener("click", startGame);
cashoutBtn.addEventListener("click", cashout);
