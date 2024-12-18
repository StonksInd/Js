


console.log(document.getElementById('timer'));

function newLaps(){

    let new_lap = document.createElement("li");
    new_lap.textContent = "10000";
    let p = document.getElementById('laps');
    p.parentElement.appendChild(new_lap);
}

function removeLaps(){

    let p = document.getElementById('laps');
    p.parentElement.lastChild.remove()
}

function startTime(){

    const start = Date.now();
    for(let i = 0; i<10000;i++){
        let new_start = Date.now(); 
        let time = document.getElementById('timer');
        time.parentElement.lastChild.remove()
        
        let new_time = document.createElement("p");
        new_time.textContent = new_start - start;
        time.parentElement.appendChild(new_time);
        console.log(start)
    
        


    }50;
}