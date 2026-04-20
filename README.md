# SAP SD Order-to-Cash (O2C) Capstone Project & Simulator

![SAP O2C Simulator Demo](docs/o2c_simulator_demo.webp)

## 📌 Project Overview
This repository houses a comprehensive Capstone Project bridging **SAP Sales and Distribution (SD)** configuration concepts with a functional **Web-Based Interactive Simulator**. It demonstrates the end-to-end execution of a complete sales lifecycle for a fictional enterprise, "Aurora Electronics," illustrating the critical integration points between SAP SD, MM (Materials Management), and FI (Financial Accounting).

## ✨ Key Features
* **Interactive Fiori-Style Simulator:** A custom-built, responsive web application (`/src`) utilizing modern glassmorphism UI to visually simulate the 6 core stages of the SAP O2C cycle without requiring a live SAP backend.
* **State Management:** Emulates SAP system behaviors including automated Document Number generation, availability checks, dynamic pricing, and a live tracking "Document Flow".
* **Comprehensive Technical Documentation:** In-depth breakdown of business scenarios, SAP organizational configurations (Sales Area setup), master data (Customer/Material), and pricing procedure logic (V/08).
* **Process Flow Architecture:** Detailed Mermaid.js diagramming visually representing the sequential data flow.

## 🛠️ Tech Stack
* **Simulator Core:** HTML5, Vanilla JavaScript (ES6+), Modern CSS3 (CSS Variables, Flexbox/Grid, Animations).
* **Documentation Setup:** Markdown, Mermaid.js.
* **Business Logic Domain:** SAP ERP ECC 6.0 / S/4HANA (SD, MM, FI Modules).

## 🔄 Core Modules Executed (The O2C Flow)
The project strictly maps the standard SAP transaction flow:
1. **Customer Inquiry (`VA11`):** Capturing pre-sales interest and evaluating product demand.
2. **Quotation (`VA21`):** Issuing a legally binding offer with specific pricing and validity via document reference.
3. **Sales Order (`VA01`):** Formally agreeing to fulfillment, triggering ATP (Availability to Promise) checks.
4. **Outbound Delivery & PGI (`VL01N` / `VL02N`):** Managing warehouse picking, packing, and Posting Goods Issue (PGI) to update COGS.
5. **Billing (`VF01`):** Translating the completed delivery into a formal invoice, integrating directly with SAP FI.
6. **Payment Receipt (`F-28`):** Concluding the cycle by clearing open accounts receivable.

## 📂 Repository Structure
```text
/O2C-SAP-Project
├── src/                                       # Web Application Simulator Source Code
│    ├── index.html                            # Main Dashboard UI
│    ├── styles.css                            # Glassmorphism Theme & UI Styling
│    └── app.js                                # O2C State Management & Logic
├── docs/                                      # Project Documentation & Assets
│    ├── O2C_Project_Documentation.md          # Comprehensive Capstone Report (Config/Master Data)
│    └── o2c_simulator_demo.webp               # UI Demonstration Recording
├── diagrams/                                  # Architectural Flowcharts
│    └── process_flow.md                       # Mermaid diagram of O2C process
├── sample-data/                               # System Configurations
│    └── sample_data.txt                       # Mock Org Structure & Transaction Data
└── README.md                                  # Project Overview
```

## 🚀 How to Run the Simulator Locally
The interactive simulator is built with zero external dependencies. To run it:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/SwetabhSuman-Code/O2C-SAP-Project.git
   ```
2. Navigate to the `src/` directory.
3. Open `index.html` in any modern web browser.
4. Click on the sequentially active cards starting from **Customer Inquiry** to execute the simulated transactions.

## 📄 Deep Dive Documentation
For the absolute specifics on how this maps to SAP back-end configurations, please review the [Project Documentation](docs/O2C_Project_Documentation.md).
