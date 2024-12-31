// // Donate For Noakhali floode
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const noakhaliFloodeInputField = getInputFieldById(
      "noakhali-floode-input-field"
    );
    if (isNaN(noakhaliFloodeInputField)) {
      alert("Faild to donate!");
      return;
    }

    const donationFund = parseFloat(
      document.getElementById("noakhali-donation-fund").innerText
    );
    const donateMoney = parseFloat(
      document.getElementById("donation-money").innerText
    );
    const newDonationMoney = donateMoney - noakhaliFloodeInputField;
    if (newDonationMoney < 0) {
      alert("You have not suficient money");
      return;
    }

    const newDonationFund = donationFund + noakhaliFloodeInputField;
    document.getElementById("noakhali-donation-fund").innerText =
      newDonationFund;
    document.getElementById("donation-money").innerText = newDonationMoney;
  });

// Donate For Feni floode
document.getElementById("feni-donate-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const feniFloodeInputField = getInputFieldById(
    "feni-floode-input-field"
  );
  if (isNaN(feniFloodeInputField)) {
    alert("Faild to donate!");
    return;
  }

  const FeniDonationFund = parseFloat(
    document.getElementById("feni-donation-fund").innerText
  );
  const donateMoney = parseFloat(
    document.getElementById("donation-money").innerText
  );
  const newFeniDonationMoney = donateMoney - feniFloodeInputField;
  if (newFeniDonationMoney < 0) {
    alert("You have not suficient money");
    return;
  }

  const newFeniDonationFund = FeniDonationFund + feniFloodeInputField;
  console.log(newFeniDonationFund,newFeniDonationMoney);
  
  document.getElementById("feni-donation-fund").innerText = newFeniDonationFund;
  document.getElementById("donation-money").innerText = newFeniDonationMoney;
});

// // Donate For student quota
document.getElementById("quota-donate-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const quotaInputField = getInputFieldById(
    "quota-input-field"
  );
  if (isNaN(quotaInputField)) {
    alert("Faild to donate!");
    return;
  }

  const donationFund = parseFloat(
    document.getElementById("quota-donation-fund").innerText
  );
  const donateMoney = parseFloat(
    document.getElementById("donation-money").innerText
  );
  const newDonationMoney = donateMoney - quotaInputField;
  if (newDonationMoney < 0) {
    alert("You have not suficient money");
    return;
  }

  const newDonationFund = donationFund + quotaInputField;
  document.getElementById("quota-donation-fund").innerText = newDonationFund;
  document.getElementById("donation-money").innerText = newDonationMoney;
});
