const result = document.querySelector('#result');
const del = document.querySelector('#del');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const inputs = document.querySelectorAll('.inputs');
let equalValue = 0;

window.onload = function() {
  result.value = '';
}


equals.addEventListener('click', function(){
  equalValue = 1;
  let inputValue = result.value;
  try{
    let solution = eval(inputValue);
    
    if(Number.isInteger(solution)){
      result.value = solution
    }else{
      result.value = solution.toFixed(2)
    }
    
  }catch{
    console.error('Hay un error')
  }
})

inputs.forEach(item => {
  item.addEventListener('click', function(){
    if(equalValue == 1){
      result.value = ' ';
      equalValue = 0;
    }
    result.value += item.value;
  })
})

clear.addEventListener('click',function(){
  result.value = '';
})

del.addEventListener('click', function(){
  result.value = result.value.substring(0, result.value.length -1);
})