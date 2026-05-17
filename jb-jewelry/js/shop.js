// =====================
// SHOP.JS
// Filter + render items
// Modal open/close
// =====================

document.addEventListener('DOMContentLoaded', function() {

  const grid = document.getElementById('shop-grid')
  const filterBtns = document.querySelectorAll('.filter-btn')
  const modal = document.getElementById('item-modal')
  const modalClose = document.querySelector('.modal-close')
  const modalOverlay = document.querySelector('.modal-overlay')

  let currentFilter = 'all'

  // RENDER ITEMS
  function renderItems(filter) {
    grid.innerHTML = ''

    const filtered = filter === 'all'
      ? items
      : items.filter(item => item.category === filter)

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="text-align:center; color: var(--gray); padding: 40px;">No items found.</p>'
      return
    }

    filtered.forEach(function(item) {
      const card = document.createElement('div')
      card.className = 'item-card'
      card.innerHTML = `
        <div class="item-card-img placeholder"></div>
        <div class="item-card-info">
          <p class="item-card-name">${item.name}</p>
          <p class="item-card-category">${item.category}</p>
          <p class="item-card-price">${formatPrice(item.price)}</p>
        </div>
      `
      card.addEventListener('click', function() {
        openModal(item)
      })
      grid.appendChild(card)
    })
  }

  // OPEN MODAL
  function openModal(item) {
    document.getElementById('modal-name').textContent = item.name
    document.getElementById('modal-category').textContent = item.category
    document.getElementById('modal-price').textContent = formatPrice(item.price)
    document.getElementById('modal-desc').textContent = item.description
    modal.classList.remove('hidden')
  }

  // CLOSE MODAL
  function closeModal() {
    modal.classList.add('hidden')
  }

  modalClose.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', closeModal)

  // FILTERS
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentFilter = btn.dataset.filter
      renderItems(currentFilter)
    })
  })

  // INIT
  renderItems('all')

  // CHECK URL PARAMS for category
  const params = new URLSearchParams(window.location.search)
  const categoryParam = params.get('category')
  if (categoryParam) {
    const matchBtn = document.querySelector(`[data-filter="${categoryParam}"]`)
    if (matchBtn) {
      matchBtn.click()
    }
  }

})
