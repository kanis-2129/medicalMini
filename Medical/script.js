// Toggle search bar open/closed when clicking the search icon.
document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.querySelector('.search-toggle');
  const searchWrapper = document.querySelector('.search-wrapper');
  const searchInput = document.querySelector('.search-input');
  const searchSubmit = document.querySelector('.search-submit');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Start closed
  searchWrapper.classList.add('closed');

  function openSearch() {
    searchWrapper.classList.remove('closed');
    searchWrapper.setAttribute('aria-hidden', 'false');
    // animate width by setting a target width (auto sizing is tricky)
    searchWrapper.style.width = '320px';
    setTimeout(() => searchInput.focus(), 200);
  }

  function closeSearch() {
    searchWrapper.style.width = '';
    searchWrapper.classList.add('closed');
    searchWrapper.setAttribute('aria-hidden', 'true');
  }

  searchToggle.addEventListener('click', function (e) {
    if (searchWrapper.classList.contains('closed')) openSearch();
    else closeSearch();
  });

  // Submit search (demo behavior)
  searchSubmit.addEventListener('click', function () {
    const q = searchInput.value.trim();
    if (!q) return searchInput.focus();
    alert('Searching for: ' + q);
  });

  // Close search on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSearch();
    if (e.key === 'Enter' && document.activeElement === searchInput) searchSubmit.click();
  });

  // Simple hamburger toggle for small screens
  hamburger.addEventListener('click', function () {
    const shown = navLinks.style.display === 'flex';
    navLinks.style.display = shown ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = '#fff';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '16px';
    navLinks.style.padding = '12px';
    navLinks.style.boxShadow = '0 6px 18px rgba(2,6,23,0.08)';
  });

  // Banner: image upload, folder picker and description
  const uploadImageBtn = document.getElementById('uploadImageBtn');
  const imageInput = document.getElementById('imageInput');
  const bannerImg = document.getElementById('bannerImg');
  const bannerPreview = document.getElementById('bannerPreview');

  const chooseFolderBtn = document.getElementById('chooseFolderBtn');
  const folderInput = document.getElementById('folderInput');
  const folderList = document.getElementById('folderList');
  const folderFiles = document.getElementById('folderFiles');

  const descriptionBtn = document.getElementById('descriptionBtn');
  const bannerDescription = document.getElementById('bannerDescription');
  const descriptionText = document.getElementById('descriptionText');
  const saveDescBtn = document.getElementById('saveDescBtn');
  const cancelDescBtn = document.getElementById('cancelDescBtn');
  const bannerOverlay = document.getElementById('bannerOverlay');

  uploadImageBtn.addEventListener('click', () => imageInput.click());
  imageInput.addEventListener('change', function () {
    const file = this.files && this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      bannerImg.src = e.target.result;
      bannerImg.style.display = 'block';
      bannerPreview.style.background = 'none';
    };
    reader.readAsDataURL(file);
  });

  // Folder picker (will open a folder dialog in Chromium browsers)
  chooseFolderBtn.addEventListener('click', () => folderInput.click());
  folderInput.addEventListener('change', function () {
    const files = Array.from(this.files || []);
    folderFiles.innerHTML = '';
    if (files.length === 0) {
      folderList.hidden = true;
      return;
    }
    // Show brief list of selected files
    files.slice(0, 50).forEach(f => {
      const li = document.createElement('li');
      li.textContent = f.webkitRelativePath || f.name || f.path || f.name;
      folderFiles.appendChild(li);
    });
    folderList.hidden = false;
  });

  // Description toggle and save
  descriptionBtn.addEventListener('click', () => {
    bannerDescription.hidden = false;
    descriptionText.focus();
  });
  cancelDescBtn.addEventListener('click', () => {
    bannerDescription.hidden = true;
    descriptionText.value = '';
  });
  saveDescBtn.addEventListener('click', () => {
    const text = descriptionText.value.trim();
    if (!text) return;
    bannerOverlay.textContent = text;
    bannerDescription.hidden = true;
  });

  // Contact page: Track order demo and lazy-load map on request
  const trackForm = document.getElementById('trackForm');
  const trackInputEl = document.getElementById('trackInput');
  const trackResult = document.getElementById('trackResult');
  const contactMap = document.getElementById('contactMap');

  if (trackForm) {
    trackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const id = (trackInputEl.value || '').trim();
      if (!id) {
        trackResult.textContent = 'Please enter an order ID.';
        return;
      }
      // Demo logic: show a fake result for a known demo ID
      if (id.toLowerCase() === 'order123') {
        trackResult.innerHTML = '<strong>Status:</strong> In transit — last seen near MS Clinic.';
        // set map (if present) to store coordinates (example: San Francisco)
        if (contactMap) contactMap.src = 'https://www.google.com/maps?q=37.7749,-122.4194&z=15&output=embed';
      } else {
        trackResult.textContent = 'Order not found. Please check the ID or contact support.';
      }
    });
  }
});