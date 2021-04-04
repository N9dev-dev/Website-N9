let counter = document.querySelector('.counter');
const addCount = document.querySelector('#hight');
const lowCount = document.querySelector('#low');

let count = 0;
addCount.addeEventListener('click',incrementCounter);
lowCount.addeEventListener('click',decrementCounter);


function incrementCounter () {
  count++;
  counter.innerHTML = count;
}

function decrementCounter () {
  count--;
  counter.innerHTML = count;
}
