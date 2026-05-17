// =====================
// REPAIR.JS
// Repair form validation
// =====================

document.addEventListener('DOMContentLoaded', function() {

  const submitBtn = document.getElementById('repair-submit')
  if (!submitBtn) return

  submitBtn.addEventListener('click', function() {
    const name = document.getElementById('repair-name').value.trim()
    const contact = document.getElementById('repair-contact').value.trim()
    const type = document.getElementById('repair-type').value
    const service = document.getElementById('repair-service').value
    const desc = document.getElementById('repair-desc').value.trim()

    if (!name || !contact || !type || !service || !desc) {
      alert('Please fill in all fields before submitting.')
      return
    }

    // TODO: Connect to backend later
    alert(`Thank you ${name}! Your repair request has been submitted. We will contact you at ${contact} shortly.`)
  })

})
