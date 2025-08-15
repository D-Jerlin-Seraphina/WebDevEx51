document.addEventListener('DOMContentLoaded', () => {
    const loanAmountInput = document.getElementById('loanAmount');
    const interestRateInput = document.getElementById('interestRate');
    const tenureInput = document.getElementById('tenure');

    const displayLoanAmount = document.getElementById('displayLoanAmount');
    const displayTotalInterest = document.getElementById('displayTotalInterest');
    const displayEMI = document.getElementById('displayEMI');
    const displayTotalRepayment = document.getElementById('displayTotalRepayment');

    function calculateAndDisplayEMI() {
        const P = parseFloat(loanAmountInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const tenureInYears = parseFloat(tenureInput.value);

        if (isNaN(P) || isNaN(annualInterestRate) || isNaN(tenureInYears) || P <= 0 || tenureInYears <= 0) {
            return; 
        }

        const R = (annualInterestRate / 12) / 100; 
        const N = tenureInYears * 12; 

        const numerator = P * R * Math.pow(1 + R, N);
        const denominator = Math.pow(1 + R, N) - 1;
        const emi = numerator / denominator;

        const totalRepayment = emi * N;
        const totalInterest = totalRepayment - P;

        displayLoanAmount.innerText = `₹${P.toLocaleString('en-IN')}`;
        displayTotalInterest.innerText = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
        displayEMI.innerText = `₹${Math.round(emi).toLocaleString('en-IN')}`;
        displayTotalRepayment.innerText = `₹${Math.round(totalRepayment).toLocaleString('en-IN')}`;
    }

    loanAmountInput.addEventListener('input', calculateAndDisplayEMI);
    interestRateInput.addEventListener('input', calculateAndDisplayEMI);
    tenureInput.addEventListener('input', calculateAndDisplayEMI);

    calculateAndDisplayEMI();
});