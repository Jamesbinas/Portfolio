// =====================
// CONTACT.JS
// Contact form
// =====================

document.addEventListener('DOMContentLoaded', function() {

  const submitBtn = document.getElementById('contact-submit')
  if (!submitBtn) return

  submitBtn.addEventListener('click', function() {
    const name = document.getElementById('contact-name').value.trim()
    const phone = document.getElementById('contact-phone').value.trim()
    const message = document.getElementById('contact-message').value.trim()

    if (!name || !phone || !message) {
      alert('Please fill in all fields.')
      return
    }

    // TODO: Connect to WhatsApp API or backend later
    alert(`Thank you ${name}! We received your message and will reply to ${phone} shortly.`)
  })

})
