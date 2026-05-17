let historyTable =
  document.getElementById("historyTable");

let invoices =
  JSON.parse(localStorage.getItem("invoices"))
  || [];

function renderInvoices(){

  historyTable.innerHTML = "";

  invoices.forEach((invoice,index)=>{

    let row = document.createElement("tr");

    row.innerHTML = `

      <td>${invoice.invoiceNo}</td>

      <td>${invoice.client}</td>

      <td>UGX ${invoice.total}</td>

      <td>${invoice.createdAt}</td>

      <td>

        <button onclick="editInvoice(${index})">
          Edit
        </button>

        <button onclick="deleteInvoice(${index})">
          Delete
        </button>

      </td>
    `;

    historyTable.appendChild(row);
  });
}

function deleteInvoice(index){

  invoices.splice(index,1);

  localStorage.setItem(
    "invoices",
    JSON.stringify(invoices)
  );

  renderInvoices();
}

function editInvoice(index){

  let invoice = invoices[index];

  localStorage.setItem(
    "editingInvoice",
    JSON.stringify(invoice)
  );

  window.location.href = "invoice.html";
}

renderInvoices();
