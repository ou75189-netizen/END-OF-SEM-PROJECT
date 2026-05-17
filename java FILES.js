function calculateTotals(){

  let rows = document.querySelectorAll(".item-row");

  let subtotal = 0;

  rows.forEach(row=>{

    let qty = parseFloat(row.querySelector(".qty").value)||0;
    let rate = parseFloat(row.querySelector(".rate").value)||0;

    let total = qty * rate;

    row.querySelector(".row-total").innerText = total.toFixed(2);

    subtotal += total;
  });

  let discount =
    parseFloat(document.getElementById("discount").value)||0;

  let taxable = subtotal - discount;

  let vat = taxable * 0.18;

  let finalTotal = taxable + vat;

  document.getElementById("subtotal").innerText =
    subtotal.toFixed(2);

  document.getElementById("vat").innerText =
    vat.toFixed(2);

  document.getElementById("grandTotal").innerText =
    finalTotal.toFixed(2);
}
