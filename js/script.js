document.addEventListener("DOMContentLoaded", function () {
    const tetDate = new Date("2025-01-29T00:00:00Z");

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = tetDate - currentDate;

        if (timeDifference <= 0) {
            document.getElementById("countdown").innerHTML = "Chúc mừng năm mới 2025!";
        } else {
            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            document.getElementById("countdown").innerHTML = `Còn ${daysRemaining} ngày nữa là đến Tết Nguyên đán`;
        }
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
