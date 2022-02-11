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
function totalCashInOut(totalCashField, inputAmount) {
    const totalInput = document.getElementById(totalCashField);
    const totalInputText = totalInput.innerText;
    const previousInputAmount = parseFloat(totalInputText)

    const newInputAmount = previousInputAmount + inputAmount;
    totalInput.innerText = newInputAmount;
}

//total balance 
function totalbalance(amount, isAdition) {
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + amount;
    if (isAdition == true) {
        totalBalance.innerText = newTotalBanlance;
    }
    else {
        totalBalance.innerText = parseFloat(previousBalance) - amount;
    }
}

// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        totalCashInOut('total-deposit', depositAmount)
        totalbalance(depositAmount, true)
    }
    else {
        alert('Enter positive number')
    }


})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        totalCashInOut('total-withdraw', withdrawAmount)
        totalbalance(withdrawAmount, false)
    }
    else {
        alert('Enter positive number ')
    }


})

