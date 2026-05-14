// =========================================================================
// QUESTION 1: THE SMART ATM & TRANSACTION HISTORY
// =========================================================================

// Starting bank setup
let balance = 1000;
let transactionHistory = [];

function atmTransaction(type, amount) {

    // 1. Handling Deposits (+ Money)
    if (type === "Deposit" && amount > 0) {
        balance = balance + amount;
        transactionHistory.push(`Deposit: $${amount}`); // Adds to the end
    }

    // 2. Handling Withdrawals (- Money)
    else if (type === "Withdrawal" && amount <= balance && amount > 0) {
        balance = balance - amount;
        transactionHistory.push(`Withdrawal: $${amount}`); // Adds to the end
    }

    // 3. Handling Fees (- $10)
    else if (type === "Fee") {
        balance = balance - 10;
        transactionHistory.unshift("Maintenance Fee: $10"); // Adds to the front
    }

    // 4. Handling Undo (Reverses the last step)
    else if (type === "Undo") {
        if (transactionHistory.length > 0) {
            let lastAction = transactionHistory.pop(); // Removes the last item

            // Reverse the math based on what the last action was
            if (lastAction.includes("Withdrawal")) {
                balance = balance + amount; // Put money back
            } else if (lastAction.includes("Deposit")) {
                balance = balance - amount; // Take money away
            }
        }
    }

    // 5. Keep history clean (Max 5 items)
    if (transactionHistory.length > 5) {
        transactionHistory.shift(); // Removes the oldest item from the front
    }
}

// --- TEST CODE TO RUN IN TERMINAL ---
console.log("Starting Balance:", balance);

atmTransaction("Deposit", 200);   // Balance becomes 1200
atmTransaction("Withdrawal", 50); // Balance becomes 1150
atmTransaction("Fee");            // Balance becomes 1140

console.log("Final Balance:", balance);
console.log("History Log:", transactionHistory);

