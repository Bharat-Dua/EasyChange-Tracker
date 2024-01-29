const Bill = document.querySelector("#bill-given");
const Cash = document.querySelector("#Cash-given");
const btnCalculateChange = document.querySelector("#calculate-change");
const message = document.querySelector(".message-returned");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

btnCalculateChange.addEventListener("click", validateAmount);

function validateAmount() {
  hideMessage();

  const billAmount = parseInt(Bill.value);
  const cashGiven = parseInt(Cash.value);

  if (billAmount > 0) {
    if (cashGiven >= billAmount) {
      const amountToBeReturn = cashGiven - billAmount;
      calculateChange(amountToBeReturn);
    } else {
      showMessage("😄Do you wanna wash plates?😄");
    }
  } else {
    showMessage("Invalid Bill amount");
  }
}

function showMessage(msg) {
  message.classList.add("show");
  message.innerText = msg;
}

function hideMessage() {
  message.classList.remove("show");
}

function calculateChange(amountToBeReturn) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
    amountToBeReturn %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
