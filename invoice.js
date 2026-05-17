document.getElementById("invoiceNumber")
.innerText = generateInvoiceNumber();

function addItem(){

  let table =
    document.getElementById("invoiceItems");

  let row = document.createElement("tr");

  row.classList.add("item-row");

  row.innerHTML = `

    <td>
      <input type="text"
      placeholder="Description">
    </td>

    <td>
      <input type="number"
      class="qty"
      value="1"
      oninput="calculateTotals()">
    </td>

    <td>
      <input type="number"
      class="rate"
      value="0"
      oninput="calculateTotals()">
    </td>

    <td class="row-total">
      0
    </td>

    <td>
      <button onclick="removeItem(this)">
        Delete
      </button>
    </td>
  `;

  table.appendChild(row);

  calculateTotals();
}

function removeItem(button){
  button.parentElement.parentElement.remove();
  calculateTotals();
}

addItem();
let editingInvoice =
  JSON.parse(localStorage.getItem("editingInvoice"));

if(editingInvoice){

  document.getElementById("clientName")
  .value = editingInvoice.client;

  document.getElementById("invoiceNumber")
  .innerText = editingInvoice.invoiceNo;

  localStorage.removeItem("editingInvoice");
}
