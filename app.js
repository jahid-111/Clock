


const secondHand = document.getElementById('secondHand') 
const hourHand = document.getElementById('hourHand') 

function setDate(){

    const now = new Date(); 
    const second = now.getSeconds();
    const secondDeg = ((second/60) * 360 - 180)
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    secondHand.style.transformOrigin = '50%  0%';
    secondHand.style.top = '50%';
    // console.log(second)
    
    const hour = now.getHours();
     const hourss = hour/60 
    hourHand.style.transform = `rotate(${hourss}deg)`
    hourHand.style.transformOrigin = '50%  0%';
    hourHand.style.top = '50%';
    
    // const setHrs =  
    console.log(hour)
    console.log(second  )


}

setInterval(setDate, 1000)
// setDate()