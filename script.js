//    // Initial Data


   let withdrawalAmt;
   document.getElementById('cashout').onclick = function(){
        withdrawalAmt = document.getElementById("withdraw").value;
        console.log(withdrawalAmt);
   };

   const cashBalanceElement = document.getElementById('cBalance').innerHTML;
   
   console.log(cashBalanceElement);
//    function to withdraw from the account

let answer;
    const withdrawal = ()=> {
        answer = cashBalanceElement - (withdrawalAmt);
    }

    console.log(answer); 

//    const bankBalanceElement = document.getElementById('bank-balance');
//    const durationElement = document.getElementById('duration');
//    const graphElement = document.getElementById('graph');
//    const graphBars = graphElement.querySelectorAll('.graph-bar');

//    // Function to update the displayed values
//    function updateValues() {
//        balanceElement.textContent = `$${netWorth.toLocaleString()}`;
//        cashBalanceElement.textContent = `$${cashBalance.toLocaleString()}`;
//        bankBalanceElement.textContent = `$${bankBalance.toLocaleString()}`;
//        durationElement.textContent = `📅 ${duration}`;
//    } 




const removeBtn = document.querySelector(".btn");


removeBtn.addEventListener("click", ()=>{
    document.getElementById("history").removeChild(hItem1);
    // history.textContent = "something";
    // document.historyContainer.appendChild(history);
})

// document.getElementById("superHeroes").removeChild(hhh);