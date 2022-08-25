console.log("selamat anda menggunakan js");

const calculator = {
    displayNumber : '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber:false
};

const buttons = document.querySelectorAll('.button')

function inputDigit(digit){
    if(calculator.displayNumber === '0'){
    calculator.displayNumber =digit;
    }else{
    calculator.displayNumber +=digit;
    }
}

function updateDisplay(){
    document.querySelector('#displayNumber').innerHTML = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
      return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
  }

  function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
      calculator.operator = operator;
      calculator.isWaitForSecondNumber = true;
      calculator.firstNumber = calculator.displayNumber;
   
      // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
      calculator.displayNumber = '0';
    } else {
      alert('Operator sudah ditetapkan');
    }
  }

  
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
      alert('Anda belum menetapkan operator');
      return;
    }
   
    let result = 0;
    if (calculator.operator === '+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)

    } else if (calculator.operator === '-'){
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)

    }else if(calculator.operator ==='/'){
        result = parseFloat(calculator.firstNumber) / parseFloat(calculator.displayNumber)

    }
    calculator.displayNumber = result;

    // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
    
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    renderHistory();
}
    
for (const button of buttons){
    button.addEventListener('click', function(event){
    // mendapatkan objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
          }

          if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
          }

          if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
          }

          if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
          } 


        inputDigit(target.innerText);
        updateDisplay();
    })
}
