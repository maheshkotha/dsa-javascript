// grab elemnets
const incEle = document.getElementById("increase");
const digitEle = document.getElementById("digit");
const decEle = document.getElementById("decrease")
const resEle = document.getElementById("reset")

const numGenEle = document.getElementById("numGen");

let count = 0;


incEle.onclick = function () {
  count++
  digitEle.textContent = count;
};

decEle.onclick = function(){
    count--;
    digitEle.textContent = count
}

resEle.onclick = function(){
    count = 0;
    digitEle.textContent = count
}


numGenEle.addEventListener('click', function() {
    let str = ''
    for(let i = 1; i < 6; i++) {
        str += random()
    }
    console.log(str)
})

function random() {
    return Math.floor(Math.random() * 10);
}