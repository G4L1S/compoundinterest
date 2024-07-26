let pie_chart;
let bar_chart;

document.getElementById('compoundInterestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let initialBalance = parseFloat(document.getElementById('initial_balance').value);
    let periodicDeposit = parseFloat(document.getElementById('periodic_deposit').value) * 12;
    let years = parseInt(document.getElementById('years').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;

    let balance = 0;
    let total_DEPOSIT = initialBalance;
    let total_INTEREST = 0;

    let totalDeposits = [];
    let totalInterests = [];
    let totalYears = [];

    const dataTableBody = document.getElementById('dataTableBody');
    dataTableBody.innerHTML = '';

    for (let year = 1; year <= years; year++) {
        if (year == 1) {

            balance += (initialBalance + periodicDeposit);
            let interest = balance * rate;
            total_INTEREST += interest;
            balance += interest;
            total_DEPOSIT += periodicDeposit;

        } else {

            balance += periodicDeposit;
            let interest = balance * rate;
            total_INTEREST += interest;
            balance += interest;
            total_DEPOSIT += periodicDeposit;

        };

        totalDeposits.push(total_DEPOSIT.toFixed(2));
        totalInterests.push(total_INTEREST.toFixed(2));
        totalYears.push(year);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${year}</td>
            <td>${periodicDeposit.toFixed(2)}€</td>
            <td>${total_DEPOSIT.toFixed(2)}€</td>
            <td>${total_INTEREST.toFixed(2)}€</td>
            <td>${balance.toFixed(2)}€</td>
        `;
        dataTableBody.appendChild(row);
    }

    document.getElementById('result').innerText = `Total accumulated after ${years} years: ${balance.toFixed(2)}€`;
    document.getElementById('result').style.display = 'block';

    if (pie_chart) {
        pie_chart.destroy();
    }

    if (bar_chart) {
        bar_chart.destroy();
    }

    document.getElementById('dotInitialBalance').style.backgroundColor = '#dda0dd';
    document.getElementById('dotTotalDeposit').style.backgroundColor = '#87cefa';
    document.getElementById('dotTotalInterest').style.backgroundColor = '#8fbc8f';
    document.getElementById('initialBalanceValue').innerText = `${initialBalance.toFixed(2)}€`;
    document.getElementById('totalDepositValue').innerText = `${(total_DEPOSIT - initialBalance).toFixed(2)}€`;
    document.getElementById('totalInterestValue').innerText = `${total_INTEREST.toFixed(2)}€`;
    document.getElementById('chartData').style.display = 'block';

    const pieData = {
        labels: ['Initial Investment', 'Total Contributions', 'Total Interests'],
        datasets: [{
            data: [initialBalance, (total_DEPOSIT - initialBalance), total_INTEREST],
            backgroundColor: ['#dda0dd', '#87cefa', '#8fbc8f']
        }]
    };

    const barData = {
        labels: Array.from({ length: years }, (_, i) => `Year ${i + 1}`),
        datasets: [
            {
                label: 'Initial Investment',
                data: Array(years).fill(initialBalance),
                backgroundColor: '#dda0dd',
                borderWidth: 1
            },
            {
                label: 'Total Contributions',
                data: totalDeposits,
                backgroundColor: '#87cefa',
                borderWidth: 1
            },
            {
                label: 'Total Interests',
                data: totalInterests,
                backgroundColor: '#8fbc8f',
                borderWidth: 1
            },
        ]
    };

    const pieConfig = {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true
        }
    };

    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (€)'
                    }
                }
            }
        }
    };

    pie_chart = new Chart(
        document.getElementById('pie_chart'),
        pieConfig
    );

    bar_chart = new Chart(
        document.getElementById('bar_chart'),
        barConfig
    );

    document.getElementById('dataTable').style.display = 'table';
});
