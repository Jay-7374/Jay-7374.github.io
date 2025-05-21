const customers = [
    { card: "1234567890", pin: "1234", name: "John", balance: 0 },
    { card: "1234567891", pin: "2345", name: "Cathy", balance: 0 }
];

let currentCustomer = null;

document.getElementById("submitBtn").addEventListener("click", login);
document.getElementById("transactionType").addEventListener("change", toggleTransactionFields);

function login() {
    const cardInput = document.getElementById("cardNumber").value.trim();
    const pinInput = document.getElementById("pin").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    currentCustomer = customers.find(c => c.card === cardInput && c.pin === pinInput);

    if (currentCustomer) {
        document.querySelector(".atm-box").classList.add("hidden");
        document.getElementById("welcomeBox").classList.remove("hidden");
        document.getElementById("userName").textContent = currentCustomer.name;
        displayBalance();
    } else {
        errorMsg.textContent = "Invalid card number or PIN.";
    }
}

function displayBalance() {
    document.getElementById("balanceAmount").textContent = `$${currentCustomer.balance}`;
}

function toggleTransactionFields() {
    const type = document.getElementById("transactionType").value;
    document.getElementById("amountField").classList.toggle("hidden", !(type === "deposit" || type === "withdraw" || type === "transfer"));
    document.getElementById("transferField").classList.toggle("hidden", type !== "transfer");
    document.getElementById("transactionSubmitBtn").classList.toggle("hidden", type === "");
}




function handleTransaction() {
    const type = document.getElementById("transactionType").value;
    const amount = parseFloat(document.getElementById("transactionAmount").value.trim());
    const transferAccount = document.getElementById("transferAccount").value.trim();

    if (type === "deposit" && amount > 0) {
        currentCustomer.balance += amount;
        displayBalance();
        showMessage(`Deposited: $${amount}`, "#4caf50");

    } else if (type === "withdraw" && amount > 0) {
        if (currentCustomer.balance >= amount) {
            currentCustomer.balance -= amount;
            displayBalance();
            showMessage(`Withdrawn: $${amount}`, "#ff9800");
        } else {
            showMessage("Insufficient funds!", "#ff5252");
        }

    } else if (type === "transfer" && amount > 0 && transferAccount) {
        let recipient = customers.find(c => c.card === transferAccount);

        if (recipient) {
            if (currentCustomer.balance >= amount) {
                currentCustomer.balance -= amount;
                recipient.balance += amount;
                displayBalance();
                showMessage(`Transferred $${amount} to ${recipient.name}`, "#3b5998");
            } else {
                showMessage("Insufficient funds!", "#ff5252");
            }
        } else {
            showMessage("Invalid account number!", "#ff5252");
        }

    } else {
        showMessage("Invalid transaction details!", "#ff5252");
    }

    document.getElementById("transactionAmount").value = "";
    document.getElementById("transferAccount").value = "";
}


function logout() {
    document.querySelector(".atm-box").classList.remove("hidden");
    document.getElementById("welcomeBox").classList.add("hidden");
    currentCustomer = null;

    document.getElementById("transactionType").value = "";
    
    document.getElementById("amountField").classList.add("hidden");
    document.getElementById("transferField").classList.add("hidden");
    document.getElementById("transactionSubmitBtn").classList.add("hidden");
}


function showMessage(message, color) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "20px";
    messageDiv.style.right = "20px";
    messageDiv.style.background = color;
    messageDiv.style.color = "#fff";
    messageDiv.style.padding = "12px 20px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.zIndex = "1000";
    messageDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 1200);
}
