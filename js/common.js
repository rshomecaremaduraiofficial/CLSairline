/**
 * CLS Airline Supplies LTD — Operator Common UI Helpers & Theme Engine
 * Theme: Slate Gray & Dark/Light Emerald Green (Dual High-Contrast Theme)
 */

const CLS_Common = {
  loaderEl: null,
  loaderMsgEl: null,

  init() {
    this.initTheme();
    this.createLoaderElement();
    this.createToastContainer();
    this.bindThemeToggles();
    this.initTopNavigation();
  },

  initTheme() {
    const saved = localStorage.getItem('cls_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeButtonLabels(saved);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cls_theme', next);
    this.updateThemeButtonLabels(next);
  },

  updateThemeButtonLabels(theme) {
    const btns = document.querySelectorAll('.theme-toggle-btn');
    btns.forEach(btn => {
      const isDark = theme === 'dark';
      btn.innerHTML = `
        <span class="theme-toggle-indicator"></span>
        <span>${isDark ? 'Dark Mode' : 'Light Mode'}</span>
      `;
      btn.setAttribute('title', `Switch to ${isDark ? 'Light' : 'Dark'} Mode`);
    });
    const slideBtns = document.querySelectorAll('.theme-slide-btn');
    slideBtns.forEach(btn => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
      btn.setAttribute('title', `Switch to ${isDark ? 'Light' : 'Dark'} Mode`);
    });
  },

  bindThemeToggles() {
    const btns = document.querySelectorAll('.theme-toggle-btn, .theme-slide-btn');
    btns.forEach(btn => {
      btn.removeEventListener('click', this.handleThemeClick);
      btn.addEventListener('click', this.handleThemeClick);
    });
  },

  handleThemeClick(e) {
    e.preventDefault();
    CLS_Common.toggleTheme();
  },

  createLoaderElement() {
    if (document.getElementById('cls-loader')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cls-loader';
    overlay.className = 'cls-loader-overlay';
    
    const isInsideSubdir = window.location.pathname.includes('/management/') || window.location.pathname.includes('/website/');
    const logoSrc = isInsideSubdir ? 'assets/cls-logo.png' : 'website/assets/cls-logo.png';

    overlay.innerHTML = `
      <div class="cls-loader-card">
        <div class="cls-spinner-container">
          <div class="cls-spinner-ring"></div>
          <img src="${logoSrc}" alt="CLS Airline Supplies LTD" class="cls-loader-icon">
        </div>
        <div class="cls-loader-text-group">
          <div class="cls-loader-title" id="cls-loader-title">CLS Airline Supplies</div>
          <div class="cls-loader-msg" id="cls-loader-msg">Processing Traceability Data...</div>
        </div>
        <div class="cls-loader-progress-bar">
          <div class="cls-loader-progress-inner"></div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    this.loaderEl = overlay;
    this.loaderTitleEl = overlay.querySelector('#cls-loader-title');
    this.loaderMsgEl = overlay.querySelector('#cls-loader-msg');
  },

  createToastContainer() {
    if (document.getElementById('cls-toast-container')) return;
    const container = document.createElement('div');
    container.id = 'cls-toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  },

  showLoader(title = 'CLS Airline Supplies', subtitle = 'Processing Quality Data...') {
    if (!this.loaderEl) this.createLoaderElement();
    if (this.loaderTitleEl) {
      this.loaderTitleEl.textContent = title;
    }
    if (this.loaderMsgEl) {
      this.loaderMsgEl.textContent = subtitle || 'Synchronizing with operations ledger...';
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

    let tag = 'INFO';
    if (type === 'success') tag = 'SUCCESS';
    if (type === 'error') tag = 'ALERT';
    if (type === 'warning') tag = 'NOTICE';

    toast.innerHTML = `
      <span class="status-pill ${type === 'success' ? 'pass' : type === 'error' ? 'fail' : 'pending'}">${tag}</span>
      <div style="flex: 1; font-weight: 600; font-size: 0.88rem;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  },

  formatDateForInput(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  },

  formatDisplayDate(val) {
    if (!val) return '—';
    if (typeof val === 'string') {
      const trimmed = val.trim();
      if (!trimmed) return '—';
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
    if (!val) return '—';
    return String(val).padStart(6, '0');
  },

  getJulianBatchCode(dateInput) {
    let d;
    if (!dateInput) {
      d = new Date();
    } else if (typeof dateInput === 'string') {
      const cleanDate = dateInput.trim();
      if (cleanDate.includes('-')) {
        const parts = cleanDate.split('T')[0].split('-');
        if (parts.length === 3) {
          d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        } else {
          d = new Date(cleanDate);
        }
      } else if (cleanDate.includes('/')) {
        const parts = cleanDate.split('/');
        if (parts.length === 3) {
          d = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
        } else {
          d = new Date(cleanDate);
        }
      } else {
        d = new Date(cleanDate);
      }
    } else if (dateInput instanceof Date) {
      d = dateInput;
    } else {
      d = new Date();
    }

    if (isNaN(d.getTime())) {
      d = new Date();
    }

    const year = d.getFullYear();
    const yy = String(year).slice(-2);
    const targetMonth = d.getMonth(); // 0-11
    const targetDay = d.getDate(); // 1-31

    let dayCount = 0;
    // Count days for previous months, skipping 31st day
    for (let m = 0; m < targetMonth; m++) {
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      dayCount += Math.min(daysInMonth, 30);
    }
    // For current month, skip 31st day (so day 31 does not advance past 30)
    dayCount += Math.min(targetDay, 30);

    const julianDay = String(dayCount).padStart(3, '0');
    return `${yy}${julianDay}`;
  },

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  initTopNavigation() {
    const navPanel = document.querySelector('.app-sidebar-panel');
    if (!navPanel) return;

    // Remove any leftover side backdrop or edge tab elements from previous versions
    const oldBackdrop = document.querySelector('.sidebar-backdrop');
    if (oldBackdrop) oldBackdrop.remove();
    const oldEdgeTab = document.getElementById('sidebar-edge-tab');
    if (oldEdgeTab) oldEdgeTab.remove();
    const oldDrawerHeader = navPanel.querySelector('.sidebar-drawer-header');
    if (oldDrawerHeader) oldDrawerHeader.remove();

    // Ensure Header Toggle Button exists in .header-brand-group or .header-container
    const headerContainer = document.querySelector('.header-container');
    let toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (headerContainer && !toggleBtn) {
      let brandGroup = headerContainer.querySelector('.header-brand-group');
      if (!brandGroup) {
        brandGroup = document.createElement('div');
        brandGroup.className = 'header-brand-group';
        const brandWrapper = headerContainer.querySelector('.brand-wrapper');
        if (brandWrapper) {
          headerContainer.insertBefore(brandGroup, brandWrapper);
          brandGroup.appendChild(brandWrapper);
        } else {
          headerContainer.insertBefore(brandGroup, headerContainer.firstChild);
        }
      }
      toggleBtn = document.createElement('button');
      toggleBtn.id = 'sidebar-toggle-btn';
      toggleBtn.className = 'top-menu-btn sidebar-toggle-btn';
      toggleBtn.type = 'button';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
      toggleBtn.title = 'Navigation Menu';
      toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span class="toggle-label">Menu</span>
        <span class="menu-chevron">▾</span>
      `;
      brandGroup.insertBefore(toggleBtn, brandGroup.firstChild);
    } else if (toggleBtn && !toggleBtn.querySelector('.menu-chevron')) {
      const chevron = document.createElement('span');
      chevron.className = 'menu-chevron';
      chevron.textContent = '▾';
      toggleBtn.appendChild(chevron);
    }

    const openMenu = () => {
      navPanel.classList.add('top-menu-open');
      navPanel.classList.add('sidebar-open');
      if (toggleBtn) {
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    };

    const closeMenu = () => {
      navPanel.classList.remove('top-menu-open');
      navPanel.classList.remove('sidebar-open');
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    };

    const toggleMenu = () => {
      if (navPanel.classList.contains('top-menu-open') || navPanel.classList.contains('sidebar-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    this.openMenu = openMenu;
    this.closeMenu = closeMenu;
    this.toggleMenu = toggleMenu;
    this.openSidebar = openMenu;
    this.closeSidebar = closeMenu;

    // Toggle button click
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      });
    }

    // Clicking any navigation link closes menu immediately
    const navLinks = navPanel.querySelectorAll('.website-nav-btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Clicking anywhere outside top menu closes it cleanly (NO blur, NO full screen blocker)
    document.addEventListener('click', (e) => {
      if (navPanel.classList.contains('top-menu-open') || navPanel.classList.contains('sidebar-open')) {
        if (!navPanel.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
          closeMenu();
        }
      }
    });

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });
  },

  initSwipeableSidebar() {
    this.initTopNavigation();
  }
};

if (typeof window !== 'undefined') {
  window.CLS_Common = CLS_Common;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLS_Common;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    CLS_Common.init();
  });
}
