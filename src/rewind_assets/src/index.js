import { rewind } from "../../declarations/rewind";


window.addEventListener("load", async function () {
    const checkBalance = await rewind.checkBalance();
    document.getElementById("value").innerText = Math.round(checkBalance * 100) / 100;
});


document.querySelector("form").addEventListener("submit", async function (event){
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    const topUpValue = parseFloat(document.getElementById("input-amount").value);
    const withdrawValue = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);
    // button here is enabled.
    // ---------------------------------------------------------------------------------

    if (document.getElementById("input-amount").value.length != 0){
        await rewind.addNumber(topUpValue);
    }

    await rewind.subtractNumber(withdrawValue);



    const currentAmount = await rewind.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;


    // ----------------------------------------------------------------------------------
    //button here is disabled
    button.removeAttribute("disabled");
    
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
});