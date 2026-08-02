
const secondsHand = document.getElementById("seconds_hand");
const minutesHand = document.getElementById("minutes_hand");
const hoursHand = document.getElementById("hours_hand");

console.log(secondsHand);

function getTime(){
    const now =new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const timeInterval=6
    
    secondsHand.style.transform = "rotate("+ (seconds*timeInterval)+"deg)"
    minutesHand.style.transform = "rotate("+ (minutes*timeInterval +seconds/10)+"deg)"
}

setInterval(getTime,100)