async function downloadPDF(){

  const { jsPDF } = window.jspdf;

  let doc = new jsPDF();

  // COMPANY

  doc.setFontSize(22);
  doc.text("Northwest Interiors", 20, 20);

  doc.setFontSize(11);
  doc.text("TIN: 1004567891", 20, 30);
  doc.text("Kampala, Uganda", 20, 37);

  // INVOICE INFO

  let invoiceNo =
    document.getElementById("invoiceNumber")
    .innerText;

  doc.text(`Invoice No: ${invoiceNo}`, 140, 20);

  // CLIENT

  let client =
    document.getElementById("clientName").value;

  doc.text(`Client: ${client}`, 20, 55);

  // TABLE HEADER

  let startY = 75;

  doc.setFillColor(230,230,230);

  doc.rect(20,startY,170,10,"F");

  doc.text("Description",25,startY+7);
  doc.text("Qty",110,startY+7);
  doc.text("Rate",135,startY+7);
  doc.text("Total",165,startY+7);

  // TABLE DATA

  let rows =
    document.querySelectorAll(".item-row");

  let y = startY + 20;

  rows.forEach(row=>{

    let desc =
      row.querySelector("input[type='text']").value;

    let qty =
      row.querySelector(".qty").value;

    let rate =
      row.querySelector(".rate").value;

    let total =
      row.querySelector(".row-total").innerText;

    doc.text(desc,25,y);
    doc.text(qty,110,y);
    doc.text(rate,135,y);
    doc.text(total,165,y);

    y += 12;
  });

  // TOTALS

  y += 10;

  doc.text(
    `Subtotal: UGX ${
      document.getElementById("subtotal").innerText
    }`,
    130,
    y
  );

  y += 10;

  doc.text(
    `VAT: UGX ${
      document.getElementById("vat").innerText
    }`,
    130,
    y
  );

  y += 10;

  doc.setFontSize(16);

  doc.text(
    `Total: UGX ${
      document.getElementById("grandTotal").innerText
    }`,
    130,
    y
  );

  // SAVE

  doc.save(`${invoiceNo}.pdf`);
}
