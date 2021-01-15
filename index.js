const lower = document.querySelector('#lowerCount');
const higher = document.querySelector('#higherCount');
let counter = document.querySelector('.counter');

let number = 0;

lower.addEventListener('click', lowerFunction);
higher.addEventListener('click', addFunction);




function addFunction(){
    number++;
    if(number < 0 ){
        counter.style.color = 'red'
    }else{
      counter.style.color = 'green'
    }
  
    counter.innerHTML= number;
}

function lowerFunction(){
    number--;
  if(number < 0 ){
      counter.style.color = 'red'
  }else{
    counter.style.color = 'green'
  }

  counter.innerHTML=number;
}



