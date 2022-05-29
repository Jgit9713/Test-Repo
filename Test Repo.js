const button = document.getElementById('button');
const box = document.getElementById('box');
let hasRedClass = true;

button.addEventListener("click", function(){
  if(hasRedClass){
    box.classList.remove('red');
    box.classList.add('white');
    hasRedClass = false
  }else{
    box.classList.toggle('white');
    box.classList.toggle('blue');
  }
});


