// document.getElementById('count-el').innerText=1234567890;
let count=0;
let countEl=document.getElementById('count-el');
function increment(){
    count= count+1;
    countEl.textContent=count;
}
const newEntries=document.getElementById('new-entries');

function save(){
    console.log(count);
newEntries.textContent +=count +' - ';
countEl.textContent=0;
count=0;
}

document.getElementById('save-btn').innerHTML='SAVE';
// let buttonToBeColored=document.getElementById('save-btn');
// console.log(buttonToBeColored);
// function changeColor(){
//     buttonToBeColored.classList.add('button-clicked');

// }
//welcomeEl.innerText=welcomeEl.innerText+" 😅👀💕💕💕🙈🙈";

// how to read documentation

