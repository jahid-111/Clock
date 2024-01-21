


const secondHand = document.getElementById('secondHand') 

function setDate(){

    const now = new Date(); 
    const second = now.getSeconds();
    const secondDeg = ((second/60) * 360 - 180)
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    secondHand.style.transformOrigin = '50%  0%';
    secondHand.style.top = '50%';
    console.log(second)
    



}

setInterval(setDate, 1000)
setDate()