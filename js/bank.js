// reduce repeated code using function deposit & withdraw value 
function getInputValue(inputValue) {
    const inputAmount = document.getElementById(inputValue);
    const inputAmountText = inputAmount.value;
    const amountValue = parseFloat(inputAmountText);

    //remove value 
    inputAmount.value = '';
    return amountValue;
}

// total deposit & withdraw calculation using  function 
function totalCashInOut(inputField, inputAmount) {
    const totalInput = document.getElementById(inputField);
    const totalInputText = totalInput.innerText;
    const previousInputAmount = parseFloat(totalInputText)

    const newInputAmount = previousInputAmount + inputAmount;
    totalInput.innerText = newInputAmount;
}

// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    totalCashInOut('total-deposit', depositAmount)

    // total balance calculation 
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + depositAmount;
    totalBalance.innerText = newTotalBanlance;

})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');

    totalCashInOut('total-withdraw', withdrawAmount)

    // total balance calculation after withdraw  
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) - withdrawAmount;
    totalBalance.innerText = newTotalBanlance;

})

