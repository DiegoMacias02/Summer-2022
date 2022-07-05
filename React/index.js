const incrementBtn = document.getElementById('increment-btn');
const countDis = document.getElementById('count-display');

let currentCount = 0;
incrementBtn.addEventListener("click", ()=>{
    currentCount++
    countDis.innerText = currentCount;
})
