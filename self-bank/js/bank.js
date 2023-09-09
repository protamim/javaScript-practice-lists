const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const depositStatus = document.getElementById('deposit-status');
const withdrawStatus = document.getElementById('withdraw-status');
const balanceStatus = document.getElementById('balance-status');

const depositField = document.getElementById('deposit-field');
const withdrawField = document.getElementById('withdraw-field');

depositBtn.addEventListener('click', function(){
    const depositFieldString = depositField.value;
    const newDeposit = parseFloat(depositFieldString);
    const previousDeposit = parseFloat(depositStatus.innerText);
    depositStatus.innerText = previousDeposit + newDeposit;

    //Balance Update
    const previousBalance = parseFloat(balanceStatus.innerText);
    balanceStatus.innerText = newDeposit + previousBalance;
    // clearing field value after clicked
    depositField.value = '';
});

withdrawBtn.addEventListener('click', function(){
    const withdraw = parseFloat(withdrawField.value);
    const previousWithdraw = parseFloat(withdrawStatus.innerText);
    withdrawStatus.innerText = previousWithdraw + withdraw;

    // Main balance reduce when withdraw
    const previousBalance = parseFloat(balanceStatus.innerText);
    balanceStatus.innerText = previousBalance - withdraw;


    // clearing input field
    withdrawField.value = '';
});