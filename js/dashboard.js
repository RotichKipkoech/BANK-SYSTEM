
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown");
    dropdownContent.classList.toggle("show");
}

function toggleTransactDropdown() {
    var transactDropdown = document.getElementById("transact-dropdown");
    transactDropdown.classList.toggle("show");
}
function sendMoney() {
  var mobileNumber = prompt("Enter the mobile number:");
  var amount = prompt("Enter the amount in kshs:");
  if (isDecimalNumber(mobileNumber) && isDecimalNumber(amount)) {
    alert("Sent Kshs " + amount + " to: " + mobileNumber);
  } else {
    alert("Weka Numbers pekee");
  }
}


function payBill() {
  var paybillNumber = prompt("Enter the paybill number")
  var accountNumber = prompt("Enter the account number:");
  var amount = prompt("Enter the amount in kshs:");


  if (isDecimalNumber(accountNumber) && isDecimalNumber(amount)) {
    alert("Payment of kshs " + amount + " to acc no: " + accountNumber);
  } else {
    alert("Weka Numbers pekee");
  }
}

function buyGoods() {
  var tillNumber = prompt("Enter the till number:");
  var amount = prompt("Enter the amount in kshs:");
  if (isDecimalNumber(tillNumber) && isDecimalNumber(amount)) {
    alert("Payment of goods worth Kshs " + amount + " made to till number: " + tillNumber);
  } else {
    alert("Weka Numbers pekee");
  }
}

function isDecimalNumber(value) {

  var decimalPattern = /^\d*\.?\d+$/;
  return decimalPattern.test(value);
}


var budgetData = [];
function enterAmount(category) {
  var amount = prompt("Enter the amount in kshs for " + category + ":");
  if (amount !== null) {
    console.log("Amount for " + category + ": " + amount);
    var data = { category: category, amount: amount }; 
    budgetData.push(data); 
    updateBudgetList(); 
  } else {
    console.log("Amount not entered for " + category);
  }
  var Amount = confirm("Confirm " + category + " : " + amount);
  
}

function updateBudgetList() {
  var budgetList = document.getElementById("budget-list");
  budgetList.innerHTML = ""; 

  for (var i = 0; i < budgetData.length; i++) {
    var item = budgetData[i];
    var listItem = document.createElement("li");
    listItem.textContent = item.category + ": " + item.amount + " shs";
    budgetList.appendChild(listItem);
  }
}
