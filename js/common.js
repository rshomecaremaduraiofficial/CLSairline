/**
 * CLS Airline Supplies LTD — Common UI Helpers, Loader & Notifications
 */

const CLS_Common = {
  loaderEl: null,
  loaderMsgEl: null,

  init() {
    this.createLoaderElement();
    this.createToastContainer();
  },

  createLoaderElement() {
    if (document.getElementById('cls-loader')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cls-loader';
    overlay.className = 'cls-loader-overlay';
    
    // Determine relative path to logo asset based on current location
    const isInsideSubdir = window.location.pathname.includes('/management/') || window.location.pathname.includes('/website/');
    const logoSrc = isInsideSubdir ? 'assets/cls-logo.png' : 'website/assets/cls-logo.png';

    overlay.innerHTML = `
      <div class="cls-loader-content">
        <img src="${logoSrc}" alt="CLS Airline Supplies LTD" class="cls-loader-img">
        <div class="cls-loader-msg" id="cls-loader-msg">Loading...</div>
        <div class="cls-dots-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    this.loaderEl = overlay;
    this.loaderMsgEl = overlay.querySelector('#cls-loader-msg');
  },

  createToastContainer() {
    if (document.getElementById('cls-toast-container')) return;
    const container = document.createElement('div');
    container.id = 'cls-toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  },

  showLoader(title = 'Loading...', subtitle = 'Please wait') {
    if (!this.loaderEl) this.createLoaderElement();
    if (this.loaderMsgEl) {
      this.loaderMsgEl.textContent = `${title} ${subtitle ? '— ' + subtitle : ''}`;
    }
    if (this.loaderEl) {
      this.loaderEl.classList.add('active');
    }
  },

  hideLoader() {
    if (this.loaderEl) {
      this.loaderEl.classList.remove('active');
    }
  },

  showToast(message, type = 'info', duration = 3500) {
    if (!document.getElementById('cls-toast-container')) this.createToastContainer();
    const container = document.getElementById('cls-toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';
    if (type === 'warning') icon = '🔔';

    toast.innerHTML = `
      <span style="font-size: 1.15rem;">${icon}</span>
      <div style="flex: 1;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  formatDateForInput(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  },

  formatDisplayDate(val) {
    if (!val) return '-';
    if (typeof val === 'string') {
      const trimmed = val.trim();
      if (!trimmed) return '-';
      if (trimmed.includes('T')) {
        const d = new Date(trimmed);
        if (!isNaN(d.getTime())) {
          const y = d.getFullYear();
          const m = String(d.getMonth() + 1).padStart(2, '0');
          const day = String(d.getDate()).padStart(2, '0');
          return `${y}-${m}-${day}`;
        }
        return trimmed.split('T')[0];
      }
      return trimmed;
    }
    if (val instanceof Date) {
      const y = val.getFullYear();
      const m = String(val.getMonth() + 1).padStart(2, '0');
      const day = String(val.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }
    return String(val);
  },

  formatBatchCode(val) {
    if (!val) return '-';
    return String(val).padStart(6, '0');
  },

  calculateBatchCodeFromInput(dateStr) {
    if (!dateStr) return '------';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const yearShort = parts[0].slice(-2);
      return `${parts[2]}${parts[1]}${yearShort}`;
    }
    return '010126';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CLS_Common.init();
});
