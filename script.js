window.onload = async function() {

    const dayCounter = document.getElementById("days");
    const hourCounter = document.getElementById("hours");
    const minuteCounter = document.getElementById("minutes");
    const secondCounter = document.getElementById("seconds");

    let target = new Date();
    target.setFullYear(2022, 3, 8);
    target.setHours(14);
    target.setMinutes(51);
    target.setSeconds(30);
    target.setMilliseconds(0);

    while (true) {

        let delta = target.getTime() - Date.now();

        if (delta < 1000) return singleDayTimer.innerText = "00:00:00";

        dayCounter.innerText = String(Math.floor(delta / (3600000 * 24))).padStart(2, '0');
        hourCounter.innerText = String(Math.floor(delta % (3600000 * 24) / 3600000)).padStart(2, '0');
        minuteCounter.innerText = String(Math.floor(delta % 3600000 / 60000)).padStart(2, '0');
        secondCounter.innerText = String(Math.floor(delta % 60000 / 1000)).padStart(2, '0');

        await sleep(100);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}