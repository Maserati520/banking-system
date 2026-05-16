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

// =========================================================================
// QUESTION 2: PROCESSING LOAN APPLICATIONS
// =========================================================================
function processLoans(scores) {
    const eligible = scores.filter(score => score > 700);
    const adjustedScores = scores.map(score => score + 20);
    const totalRiskMetric = scores.reduce((sum, score) => sum + score, 0);
    const hasPerfectScore = scores.some(score => score === 900);
    const allMeetMinimum = scores.every(score => score >= 400);
    const severeRiskScore = scores.find(score => score < 500);
    const severeRiskIndex = scores.findIndex(score => score < 500);

    return {
        eligible,
        adjustedScores,
        totalRiskMetric,
        hasPerfectScore,
        allMeetMinimum,
        severeRiskScore,
        severeRiskIndex
    };
}

// --- TEST CODE TO RUN IN TERMINAL FOR QUESTION 2 ---
console.log("\n--- Question 2 Output ---");
const testScores = [450, 750, 900, 800];
console.log("Input Scores:", testScores);
console.log("Processed Loans Output:", processLoans(testScores));
// =========================================================================
// QUESTION 3: FRAUD DETECTION & LEDGER AUDITING
// =========================================================================
let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
let fraudID = 5510;

let hasFraud = dailyTransactions.includes(fraudID);
let fraudIndex = dailyTransactions.indexOf(fraudID);
let lastThree = dailyTransactions.slice(-3);

if (fraudIndex !== -1) {
    dailyTransactions.splice(fraudIndex, 1);
}

dailyTransactions.forEach(id => {
    console.log(`Transaction ${id} cleared.`);
});
// =========================================================================
// QUESTION 4: BANK MERGERS & DATA CLEANUP
// =========================================================================
let branchA = ["Alice", "Bob"];
let branchB = ["Charlie", "Diana"];

let allCustomers = branchA.concat(branchB);

let messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];
let flattenedData = messyData.flat();
let sortedAndReversed = flattenedData.sort().reverse();

let welcomeBanner = allCustomers.join(" - ");
let tellerWindows = new Array(5).fill("Closed");
// --- TEST CODE TO RUN IN TERMINAL FOR QUESTION 4 ---
console.log("\n--- Question 4 Output ---");
console.log("All Customers:", allCustomers);
console.log("Flattened Data:", flattenedData);
console.log("Sorted & Reversed:", sortedAndReversed);
console.log("Welcome Banner:", welcomeBanner);
console.log("Teller Windows:", tellerWindows);