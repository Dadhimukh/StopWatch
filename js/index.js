let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
// by defualt timer is false
let timer = false;
// after clicking on start btn timer get true and start running
function start(){
    timer = true;
    stopWatch();
}
// after clicking on reset btn timer set defualt and reset everything
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
// displaying String value "00" on reset position
        document.getElementById("hr").innerHTML = "00";
        
        document.getElementById("min").innerHTML = "00";

        document.getElementById("sec").innerHTML = "00";

        document.getElementById("msec").innerHTML = "00";
}

function stop(){
    timer = false;
}

function stopWatch(){
// timer get true and increase msec by 1.
    if(timer == true){
        msec += 1;
// when msec reach 100 inceaesing the sec value and reset the msc value at 0 .
    if(msec == 100){
        sec += 1;
        msec = 0;
    }
// when sec reach 60 inceaesing the min value and reset the sec value at 0.
    if(sec == 60){
        min += 1;
        sec = 0;
    }
// when min reach 60 inceaesing the hr value and reset the sec and msc value at 0.
    if(min == 60){
        hr += 1;
        min = 0;
        sec = 0;
    }

    let hrstr = hr;
    let minstr = min;
    let secstr = sec;
    let msecstr = msec;

    if(hrstr < 10){
        hrstr = "0" + hrstr;
    }
    
    if(minstr < 10){
        minstr = "0" + minstr;
    }

    if(secstr < 10){
        secstr = "0" + secstr;
    }

    if(msecstr < 10){
        msecstr = "0" + msecstr;
    }


        document.getElementById("hr").innerHTML = hrstr;
        
        document.getElementById("min").innerHTML = minstr;

        document.getElementById("sec").innerHTML = secstr;

        document.getElementById("msec").innerHTML = msecstr;

        setTimeout("stopWatch()",10);
    }
}