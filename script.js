document.getElementById('compoundInterestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let initialBalance = parseFloat(document.getElementById('initial_balance').value);
    let periodicDeposit = parseFloat(document.getElementById('periodic_deposit').value) * 12;
    let years = parseInt(document.getElementById('years').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let balance = 0;

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            balance += initialBalance + periodicDeposit;
            let benefice = balance * rate;
            balance += benefice;
            console.log(`Year ${year}: Benefit = ${benefice.toFixed(2)}, Total Balance = ${balance.toFixed(2)}`);
        } else {
            balance += periodicDeposit;
            let benefice = balance * rate;
            balance += benefice;
            console.log(`Year ${year}: Benefit = ${benefice.toFixed(2)}, Total Balance = ${balance.toFixed(2)}`);
        }
    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerText = `Total amount after ${years} years: ${balance.toLocaleString('en-EN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`;
});
