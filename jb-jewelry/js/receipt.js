// =====================
// RECEIPT.JS
// Populate receipt data
// Print functionality
// =====================

document.addEventListener('DOMContentLoaded', function() {

  // Set current date
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  document.getElementById('receipt-date').textContent = dateStr

  // Generate receipt number
  const receiptNo = '#' + String(Math.floor(Math.random() * 9000) + 1000)
  document.getElementById('receipt-no').textContent = receiptNo

  // TODO: Populate from actual transaction data later
  // For now showing placeholder data
  document.getElementById('receipt-customer').textContent = 'Walk-in Customer'
  document.getElementById('receipt-type').textContent = 'Purchase'

  const itemsList = document.getElementById('receipt-items-list')
  itemsList.innerHTML = `
    <div class="receipt-item-row">
      <span>Sample Item</span>
      <span>1</span>
      <span>₱0.00</span>
    </div>
  `

  document.getElementById('receipt-subtotal').textContent = '₱0.00'
  document.getElementById('receipt-grand-total').textContent = '₱0.00'
  document.getElementById('receipt-payment').textContent = 'Cash'
  document.getElementById('receipt-change').textContent = '₱0.00'

})
