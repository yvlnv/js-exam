function countTax(sum, default_tax = true) {
    if (sum < 0 || typeof sum != 'number') {
        console.log("Incorrect input type")
    } else {
        if (default_tax) {
            let basic_rate_net = basic_rate_tax = higher_rate_net 
            = higher_rate_tax = high_rate_net = high_rate_tax = 0;
            basic_rate_net = Math.min(37500, sum) * 0.8;
            basic_rate_tax = Math.min(37500, sum) * 0.2;
            if (sum > 37500) {
                higher_rate_net = Math.min(sum - 37500, 150000 - 37500) * 0.6;
                higher_rate_tax = Math.min(sum - 37500, 150000 - 37500) * 0.4;
            }
            if (sum > 150000) {
                high_rate_net = (sum - 150000) * 0.55;
                high_rate_tax = (sum - 150000) * 0.45;
            }
            net_sum = basic_rate_net + higher_rate_net + high_rate_net;
            tax_sum = basic_rate_tax + higher_rate_tax + high_rate_tax;
            net_per_month = net_sum / 12;
            }
        return "Your net pay per year: " + net_sum.toFixed(2) + "\nYour total tax deduction: " + tax_sum.toFixed(2) + "\nYou montly net pay: " + net_per_month.toFixed(2);
    }
}

console.log(countTax(4321));
console.log(countTax(31478));
console.log(countTax(66666));
console.log(countTax(294723));