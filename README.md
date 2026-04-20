# SAP O2C (Order-to-Cash) Capstone Project

![SAP O2C Simulator Demo](docs/o2c_simulator_demo.webp)

Welcome to the SAP SD Order-to-Cash Capstone Project repository. This project demonstrates the configuration, execution, and documentation of a complete sales lifecycle using the SAP Sales and Distribution (SD) module.

## Project Overview
This repository contains the documentation, process flows, and sample master/transactional data for the complete Order-to-Cash process of a fictional enterprise, "Aurora Electronics". The objective is to highlight the integration of SAP SD with MM (Materials Management) and FI (Financial Accounting) through an end-to-end sales cycle simulation.

### What is Order-to-Cash?
The O2C process encompasses the entirety of the order processing system. In SAP, it standardizes and tracks the cycle from the initial customer inquiry all the way through to final invoice payment.

## Repository Structure

```text
/O2C-SAP-Project
├── README.md                                  # This file
├── docs/
│    └── O2C_Project_Documentation.md          # Comprehensive Project Report
├── diagrams/
│    └── process_flow.md                       # Mermaid diagram of O2C process
└── sample-data/
     └── sample_data.txt                       # Master data & org structure references
```

## O2C Steps Covered
1. **Customer Inquiry (VA11)** - Pre-sales request for information.
2. **Quotation (VA21)** - Legally binding price offering.
3. **Sales Order (VA01)** - Agreement to deliver specific goods.
4. **Outbound Delivery & PGI (VL01N/VL02N)** - Picking, packing, and shipping.
5. **Billing (VF01)** - Generating the final customer invoice.
6. **Payment Receipt (F-28)** - Clearing accounts receivable.

## How to Review This Project
1. Read the comprehensive report located in `docs/O2C_Project_Documentation.md`.
2. Review the process flow architecture in `diagrams/process_flow.md`.
3. Consult the sample inputs used for system execution in `sample-data/sample_data.txt`.

---

## How to Upload to Your GitHub Account (Step-by-Step Instructions)

If you are a student or developer looking to host these files in your own portfolio, follow these instructions:

**Prerequisites:**
* Create an account on [GitHub](https://github.com)
* Download and install [Git](https://git-scm.com/) on your machine

**Steps:**
1. **Initialize Git Repository:**
   Open your terminal (Command Prompt, PowerShell, or Git Bash), navigate to the `O2C-SAP-Project` folder, and type:
   ```bash
   git init
   ```
2. **Add Files:**
   Stage all your files for the first commit:
   ```bash
   git add .
   ```
3. **Commit the Files:**
   Create your initial commit:
   ```bash
   git commit -m "Initial commit of SAP O2C Capstone Project"
   ```
4. **Create a Repository on GitHub:**
   * Go to your GitHub profile.
   * Click the **"+"** icon in the top right and select **"New repository"**.
   * Name it precisely `O2C-SAP-Project`.
   * **Do NOT** check the box that says "Initialize this repository with a README" (since you already have this amazing README generated!).
   * Click the green **"Create repository"** button.
5. **Link Your Local Code to GitHub:**
   Copy the commands provided by GitHub under the section titled *"…or push an existing repository from the command line"* and paste them into your terminal. They should look exactly like this:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YourUsername/O2C-SAP-Project.git
   git push -u origin main
   ```
   *(Note: Replace `YourUsername` with your actual GitHub username)*

6. **Success!** 
   Refresh your GitHub page in your browser to see your brand new, completed SAP Capstone Project beautifully synced and live for employers!
