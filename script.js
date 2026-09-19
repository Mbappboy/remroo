const spent = document.getElementById("money spent");
let moneySpent = 0;

function buyTicket() {
    if (Math.random() > 0.97) {
      alert(`Oh My God! It took you $${moneySpent}, but you finally won the lottery!`);
    } else {
      moneySpent += 2;
      spent.textContent = moneySpent;
    }
}
