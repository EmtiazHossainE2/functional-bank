/* function dubbleIt(num) {
    const result = num * 2
    return result;
}
const first = dubbleIt(5)
const second = dubbleIt(7)
console.log(first);
console.log(second); */

function getInputValue() {
    const inputAmount = document.getElementById('deposit-input');
    const depositAmount = inputAmount.value;

    //remove value 
    inputAmount.value = '';
    return depositAmount;
}


// Recap Module 26  
// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue();

    //total deposit calculation 
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount);

    totalDeposit.innerText = newDepositAmount;

    // total balance calculation 
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + parseFloat(depositAmount);
    totalBalance.innerText = newTotalBanlance;

})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    //totalWithdraw 
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdraw = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
    totalWithdraw.innerText = newTotalWithdraw;

    // total balance calculation after withdraw  
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) - parseFloat(withdrawAmount);
    totalBalance.innerText = newTotalBanlance;

    withdrawInput.value = ''
})


/* 
// Recap Module 26  
// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputAmount = document.getElementById('deposit-input');
    const depositAmount = inputAmount.value;
    // console.log(depositAmount)

    //total deposit calculation 
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount);

    totalDeposit.innerText = newDepositAmount;

    // total balance calculation 
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + parseFloat(depositAmount);
    totalBalance.innerText = newTotalBanlance;

    //remove value 
    inputAmount.value = '';
})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    //totalWithdraw 
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdraw = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
    totalWithdraw.innerText = newTotalWithdraw;

    // total balance calculation after withdraw  
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) - parseFloat(withdrawAmount);
    totalBalance.innerText = newTotalBanlance;

    withdrawInput.value = ''
})


*/