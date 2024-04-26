String(25);
console.log('25' - 5);
console.log('25' + 5);

window.document
window.console.log('window');
window.alert

function handleCostKeydown(event){
  if(event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.cost-input');
  let cost = Number(inputElement.value);
  let result =  document.querySelector('.js-total-cost')
  if(cost < 0){
    result.classList.add('negative');
    result.innerHTML = `Error: cost cannot be less than $0.`
    return;
  }
  
  if(cost > 0 && cost < 40){
    cost = cost + 10;
  }

  result.classList.remove('negative');
  result.innerHTML = `$${cost}`;

}

