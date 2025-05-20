const customers = [
    { card: "4829103746", pin: "8592", name: "Alice", balance: 1570.25 },
    { card: "3958271048", pin: "6041", name: "Bob", balance: 324.80 },
];


function login() {
    const cardInput = document.getElementById("cardNumber").value.trim();
    const pinInput = document.getElementById("pin").value.trim();
    const errorMsg = document.getElementById("errorMsg");
    
    const customer = customers.find(c => c.card === cardInput && c.pin === pinInput);

    if (customer) {
        document.querySelector(".atm-box").classList.add("hidden");
        document.getElementById("welcomeBox").classList.remove("hidden");
        document.getElementById("userName").textContent = customer.name;
    } else {
        errorMsg.textContent = "Invalid card number or PIN.";
    }
}


document.getElementById("submitBtn").addEventListener("click", login);
