function generateInvoiceNumber(prefix) {
  let count = localStorage.getItem("docCount") || 0;
  count++;

  localStorage.setItem("docCount", count);

  return `${prefix}-${Date.now()}-${count}`;
}

function addItem() {
  let table = document.querySelector("#items tbody");
  let row = table.insertRow();

  row.innerHTML = `
    <td><input></td>
    <td><input type="number" value="1" oninput="calculate()"></td>
    <td><input type="number" value="0" oninput="calculate()"></td>
    <td class="total">0</td>
  `;
}

function calculate() {
  let rows = document.querySelectorAll("#items tbody tr");
  let subtotal = 0;

  rows.forEach(row => {
    let qty = row.cells[1].querySelector("input").value;
    let price = row.cells[2].querySelector("input").value;

    let total = qty * price;
    row.cells[3].innerText = total;

    subtotal += total;
  });

  let discount = document.getElementById("discount").value || 0;
  let afterDiscount = subtotal - discount;

  let vat = afterDiscount * 0.18;
  let final = afterDiscount + vat;

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("vat").innerText = vat.toFixed(2);
  document.getElementById("total").innerText = final.toFixed(2);
}

function saveDocument(type) {
  let docs = JSON.parse(localStorage.getItem("docs")) || [];

  docs.push({
    type,
    client: document.getElementById("client").value,
    total: document.getElementById("total").innerText
  });

  localStorage.setItem("docs", JSON.stringify(docs));
  alert("Saved");
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  doc.text("Northwest Interiors", 20, 20);
  doc.text("TIN: 123456789", 20, 30);
  doc.text("Client: " + document.getElementById("client").value, 20, 40);
  doc.text("Total: UGX " + document.getElementById("total").innerText, 20, 50);

  doc.save("document.pdf");
}
