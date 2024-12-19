var startButton = document.getElementById('startButton');
var refresh_interval = null;


function newLaps() {

    let new_lap = document.createElement("li");
    new_lap.textContent = "10000";
    let p = document.getElementById('laps');
    p.parentElement.appendChild(new_lap);
}

function removeLaps() {
    clearInterval(refresh_interval);
    refresh_interval = null;
    let p = document.getElementById('laps');
    if (p.parentElement.lastChild) {
        p.parentElement.lastChild.remove();
    }


}

function startTime() {
    if (typeof (un) == undefined) {
        start = Date.now();
    } else {

        startButton.setAttribute('disabled', 'disabled');
        refresh_interval = setInterval(() => test(start), 50);

    }
}

function end_time() {
    un = start;
    deux = new_start;
    startButton.removeAttribute('disabled');
    clearInterval(refresh_interval);
    refresh_interval = null;

}


function test(start) {
    if (typeof (un) == undefined) {
        new_start = Date.now();
    } else {

        let time = document.getElementById('timer');
        if (time.parentElement.lastChild) {
            time.parentElement.lastChild.remove();
        }

        let new_time = document.createElement("p");
        new_time.textContent = (new_start - start) + " ms";
        time.parentElement.appendChild(new_time);
        console.log(new_start - start)

    }
}