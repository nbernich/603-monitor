window.onload = async ()=> {

    const dayCounter = document.querySelector("#days");
    const hourCounter = document.querySelector("#hours");
    const minuteCounter = document.querySelector("#minutes");
    const secondCounter = document.querySelector("#seconds");

    // Set target time
    let target = new Date();
    target.setFullYear(2022, 3, 8);
    target.setHours(14);
    target.setMinutes(46);
    target.setSeconds(0);
    target.setMilliseconds(0);

    while (true) {
        
        let delta = target.getTime() - Date.now();

        // Display finished screen when time is here
        if (delta < 1000) {
            const heading = document.querySelector("#heading");
            heading.innerHTML = 'The <span class="color">603 Challenge</span> is here!';
            heading.setAttribute("role", "finished");
            document.querySelector("#subheading").setAttribute("role", "finished");
            document.querySelector("#timer").style.display = "none";
            return;
        }

        // Update timer
        dayCounter.innerText = pad(Math.floor(delta / (3600000 * 24)));
        hourCounter.innerText = pad(Math.floor(delta % (3600000 * 24) / 3600000));
        minuteCounter.innerText = pad(Math.floor(delta % 3600000 / 60000));
        secondCounter.innerText = pad(Math.floor(delta % 60000 / 1000));

        await sleep(100);
    }
}

function pad(number) {
    return String(number).padStart(2, '0')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}