// Contagem Regressiva
const countdown = () => {
    let targetDate = new Date().getTime() + 30 * 60 * 1000; // 30 minutos de contagem regressiva
    let timer = document.getElementById("timer");

    const updateTimer = () => {
        let now = new Date().getTime();
        let distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timerInterval);
            timer.innerHTML = "Oferta Expirada!";
        } else {
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timer.innerHTML = hours + ":" + minutes + ":" + seconds;
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
};

countdown();
