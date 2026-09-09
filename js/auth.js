/**
 * CLS Airline Supplies LTD — Auth & Session Controller
 */

const CLS_Auth = {
  SESSION_STORAGE_KEY: 'cls_active_session',
  heartbeatTimer: null,

  getSession() {
    try {
      const data = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  setSession(sessionData) {
    try {
      sessionStorage.setItem(this.SESSION_STORAGE_KEY, JSON.stringify(sessionData));
      this.startHeartbeat();
    } catch (e) {
      console.warn('Session save failed:', e);
    }
  },

  clearSession() {
    this.stopHeartbeat();
    try {
      sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
    } catch (e) {}
  },

  requireAuth(requiredRole = null) {
    const session = this.getSession();
    if (!session || !session.sessionId) {
      window.location.href = 'login.html';
      return null;
    }

    if (requiredRole && session.user.role !== requiredRole && session.user.role !== 'Admin') {
      alert('Access restricted: Higher privileges required.');
      window.location.href = 'dashboard.html';
      return null;
    }

    this.renderHeaderUser(session);
    this.startHeartbeat();
    return session;
  },

  renderHeaderUser(session) {
    const nameEl = document.getElementById('header-username');
    const roleEl = document.getElementById('header-role');
    const areaEl = document.getElementById('header-area');

    if (nameEl) nameEl.textContent = session.user.fullName || session.user.username;
    if (roleEl) roleEl.textContent = session.user.role;
    if (areaEl) areaEl.textContent = session.area || 'London';
  },

  async login(username, password, pin) {
    let area = CLS_CONFIG.DEFAULT_AREA || 'London';
    try {
      // Approximate timezone area
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz.includes('/')) {
        const city = tz.split('/')[1].replace(/_/g, ' ');
        if (city) area = city;
      }
    } catch (e) {}

    const res = await CLS_API.execute('login', { username, password, pin, area });
    if (res && res.success) {
      this.setSession(res);
      return res;
    }
    throw new Error(res ? res.error : 'Login failed. Please verify credentials.');
  },

  async logout() {
    const session = this.getSession();
    if (session && session.sessionId) {
      CLS_Common.showLoader('Logging Out...', 'Updating session activity record');
      try {
        await CLS_API.execute('logout', { sessionId: session.sessionId });
      } catch (e) {
        console.warn('Logout report failed:', e);
      }
      this.clearSession();
      CLS_Common.hideLoader();
    }
    window.location.href = 'login.html';
  },

  startHeartbeat() {
    if (this.heartbeatTimer) return;
    const interval = CLS_CONFIG.HEARTBEAT_INTERVAL_MS || 30000;
    this.heartbeatTimer = setInterval(async () => {
      const session = this.getSession();
      if (session && session.sessionId) {
        try {
          await CLS_API.execute('heartbeat', { sessionId: session.sessionId });
        } catch (e) {}
      }
    }, interval);
  },

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
};

// Automatic cleanup on page unload if needed
window.addEventListener('beforeunload', () => {
  const session = CLS_Auth.getSession();
  if (session && session.sessionId && CLS_CONFIG.GAS_API_URL) {
    // Send beacon if live backend is configured
    try {
      navigator.sendBeacon(CLS_CONFIG.GAS_API_URL, JSON.stringify({
        action: 'heartbeat',
        sessionId: session.sessionId
      }));
    } catch (e) {}
  }
});
