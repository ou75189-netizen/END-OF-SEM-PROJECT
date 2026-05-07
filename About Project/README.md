OLUOCH UMARU BDA 2202
CAVENDISH UNIVERSITY UGANDA
# END-OF-SEM-PROJECT/ TITLE
NORTHWEST INTERIOR'S-SMART INVOICING WEB APPLICATION

    Project Overview
This is a responsive front-end web application designed for Northwest Interiors, an interior design company. The system simplifies the creation and management of:
Invoices.
Proforma Invoices.
Receipts.
It helps improve billing accuracy, automate calculations (VAT, discounts), and generate downloadable documents for clients.

    Problem Statement
Interior design businesses often rely on manual invoicing like papers And writing down, which leads to:
Calculation errors (VAT, totals)
Poor record keeping
Time-consuming document creation
Lack of professional presentation

    Objectives
Automate invoice, receipt, and proforma generation
Ensure accurate VAT (18% as per Uganda tax guidelines)
Provide a clean, professional UI
Enable downloadable/printable documents (PDF-ready)
Support responsive design (mobile + desktop)

    Target Users
Interior design businesses
Freelance designers
Small and medium enterprises (SMEs)

    Technology Stack
HTML5 – Structure
CSS3 – Styling & responsiveness
JavaScript (Vanilla) – Interactivity & calculations

    Key Features
📄 Document Generation
Create Invoices, Proformas, Receipts
Auto-generate document numbers

    Export Options
Print-ready layout
Download as PDF

    Structure
    
1.     Dashboard
Overview of created documents
Quick actions (Create Invoice / Receipt / Proforma)

2.     🧾 Create Invoice Page
Client details (Name, Contact, Address)
Item table
VAT toggle
Discount field
Live total calculation

3.     📄 Proforma Invoice Page
Similar to invoice
Marked clearly as “Proforma”
No payment confirmation

4.     💵 Receipt Page
Payment confirmation
Reference to invoice number
Payment method (Cash, Mobile Money, Bank)

5.     📁 Document History Page
List of all generated documents
Filter by type (Invoice, Receipt, Proforma)
View / Download options

6.     ⚙️ Settings Page
Company details:
Name: Northwest Interiors
Logo upload
Address
TIN number
Default VAT settings

7.     🧱 System Structure (Frontend Logic)
Components:
Header / Navigation
Form Section
Item Table Component
Calculation Engine (JavaScript)
Preview Panel

8.     🧪 Sample Calculation Logic
Subtotal = Σ (Qty × Unit Price)
Discount Applied
VAT = 18% of (Subtotal - Discount)
Total = Final Amount

aGENDa
For academic and demonstration purposes.
