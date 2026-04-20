// State tracking
const state = {
    stepsComplete: 0,
    inquiryNum: '',
    quotationNum: '',
    soNum: '',
    deliveryNum: '',
    invoiceNum: '',
    paymentNum: '',
    activeData: {
        qty: 0,
        materialPrice: 199,
        discount: 0,
        total: 0
    }
};

const STEPS = ['inquiry', 'quotation', 'order', 'delivery', 'billing', 'payment'];

// Modal Logic
function openModal(id) {
    if (id === 'modal-quotation') {
        const d = new Date(); d.setDate(d.getDate() + 15);
        document.getElementById('quot-date').value = d.toISOString().split('T')[0];
    }
    document.getElementById(id).classList.add('show');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

function generateDocNum(prefix) {
    return prefix + Math.floor(100000 + Math.random() * 900000);
}

function addLog(action, docNum, details) {
    const list = document.getElementById('doc-flow-list');
    const emptyState = list.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    const li = document.createElement('li');
    li.innerHTML = `<span><strong>${action}</strong> (${details})</span> <span>Doc Number: <strong>${docNum}</strong></span>`;
    list.appendChild(li);
}

function advanceStep(currentStepIndex) {
    const currentCard = document.getElementById('card-' + STEPS[currentStepIndex]);
    currentCard.classList.remove('active');
    currentCard.classList.add('completed');
    currentCard.querySelector('.status-badge').className = 'status-badge done';
    currentCard.querySelector('.status-badge').innerText = 'Completed';
    currentCard.onclick = null; 

    if (currentStepIndex + 1 < STEPS.length) {
        const nextCard = document.getElementById('card-' + STEPS[currentStepIndex + 1]);
        nextCard.classList.remove('disabled');
        nextCard.classList.add('active');
        nextCard.querySelector('.status-badge').className = 'status-badge pending';
        nextCard.querySelector('.status-badge').innerText = 'Action Required';
    } else {
        setTimeout(() => alert("🎉 Excellent! The entire Order-To-Cash Cycle has been completed successfully in the simulated SAP FI/SD modules."), 500);
    }
}

// Transaction Functions
function submitInquiry() {
    const qty = parseInt(document.getElementById('inq-qty').value) || 50;
    const material = document.getElementById('inq-material').options[document.getElementById('inq-material').selectedIndex].text;
    
    state.activeData.qty = qty;
    if (material.includes('LPT')) state.activeData.materialPrice = 1250;
    else state.activeData.materialPrice = 199;

    state.inquiryNum = generateDocNum('10');
    addLog('Customer Inquiry Created [VA11]', state.inquiryNum, `Qty: ${qty} | ${material}`);
    
    document.getElementById('ref-inq-num').innerText = state.inquiryNum;
    closeModal('modal-inquiry');
    advanceStep(0);
}

function submitQuotation() {
    const discount = parseInt(document.getElementById('quot-discount').value) || 0;
    state.activeData.discount = discount;
    
    state.quotationNum = generateDocNum('20');
    addLog('Quotation Generated [VA21]', state.quotationNum, `Valid Offer Sent | Discount: ${discount}%`);
    
    document.getElementById('ref-quot-num').innerText = state.quotationNum;
    closeModal('modal-quotation');
    advanceStep(1);
}

function submitOrder() {
    state.soNum = generateDocNum('14');
    addLog('Sales Order Saved [VA01]', state.soNum, `Stock reserved automatically via ATP Check`);
    
    document.getElementById('ref-so-num').innerText = state.soNum;
    document.getElementById('del-pick-qty').value = state.activeData.qty;
    closeModal('modal-order');
    advanceStep(2);
}

function submitDelivery() {
    state.deliveryNum = generateDocNum('80');
    addLog('Outbound Delivery & PGI [VL02N]', state.deliveryNum, `Physically Shipped Qty: ${state.activeData.qty} from DC 1100`);
    
    document.getElementById('ref-del-num').innerText = state.deliveryNum;
    
    const subtotal = state.activeData.qty * state.activeData.materialPrice * (1 - (state.activeData.discount / 100));
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    state.activeData.total = total;

    document.getElementById('inv-sub').innerText = "$" + subtotal.toFixed(2);
    document.getElementById('inv-tax').innerText = "$" + tax.toFixed(2);
    document.getElementById('inv-tot').innerText = "$" + total.toFixed(2);
    
    closeModal('modal-delivery');
    advanceStep(3);
}

function submitBilling() {
    state.invoiceNum = generateDocNum('90');
    addLog('Billing Document / FI Post [VF01]', state.invoiceNum, `Receivable Generated: $${state.activeData.total.toFixed(2)}`);
    
    document.getElementById('ref-inv-num').innerText = state.invoiceNum;
    document.getElementById('pay-amt').value = "$" + state.activeData.total.toFixed(2);
    
    closeModal('modal-billing');
    advanceStep(4);
}

function submitPayment() {
    state.paymentNum = generateDocNum('100');
    addLog('Incoming Payment Cleared FI [F-28]', state.paymentNum, `Account Settled: $${state.activeData.total.toFixed(2)}`);
    
    closeModal('modal-payment');
    advanceStep(5);
}

function resetSimulator() {
    location.reload();
}
