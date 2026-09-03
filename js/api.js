/**
 * CLS Airline Supplies LTD — Unified Frontend API Client & Mock Store
 */

const CLS_MockStore = {
  getStoreKey: 'cls_traceability_data_v2',

  getDefaultData() {
    return {
      productIdCounter: 1,
      sessionIdCounter: 1,
      users: [
        { userId: 'USR-001', username: 'ID 1', password: 'password123', pin: '123456', role: 'User', fullName: 'Operator 1', active: 'Yes' },
        { userId: 'USR-002', username: 'ID 2', password: 'password123', pin: '654321', role: 'User', fullName: 'Operator 2', active: 'Yes' },
        { userId: 'ADM-001', username: 'admin', password: 'admin123', pin: '999888', role: 'Admin', fullName: 'Administrator', active: 'Yes' }
      ],
      sessions: [],
      goodsIn: [],
      rejectedGoods: [],
      storage: [],
      cooking: [],
      blasting: [],
      packing: []
    };
  },

  getData() {
    try {
      const stored = localStorage.getItem(this.getStoreKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    const defaultData = this.getDefaultData();
    this.saveData(defaultData);
    return defaultData;
  },

  saveData(data) {
    try {
      localStorage.setItem(this.getStoreKey, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  },

  getNextProductId() {
    const data = this.getData();
    data.productIdCounter = (data.productIdCounter || 0) + 1;
    this.saveData(data);
    return `CLS-${String(data.productIdCounter).padStart(6, '0')}`;
  },

  generateBatchCode(dateStr) {
    if (!dateStr) {
      const now = new Date();
      return `${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getFullYear()).slice(-2)}`;
    }
    const clean = dateStr.replace(/[^0-9]/g, '');
    if (dateStr.includes('-')) {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        return `${parts[2].padStart(2, '0')}${parts[1].padStart(2, '0')}${parts[0].slice(-2)}`;
      }
    }
    return clean.slice(0, 6);
  }
};

const CLS_API = {
  async execute(action, payload = {}) {
    const useLive = Boolean(CLS_CONFIG.GAS_API_URL && CLS_CONFIG.GAS_API_URL.trim().length > 10);

    if (useLive) {
      const requestPayload = { action, ...payload };
      
      // 1. Try POST transport
      try {
        const response = await fetch(CLS_CONFIG.GAS_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(requestPayload)
        });
        
        if (response.ok) {
          const json = await response.json();
          return json;
        }
      } catch (postErr) {
        console.warn('POST transport failed, trying GET transport:', postErr);
      }

      // 2. Try GET transport (resolves local file:/// browser cross-origin redirects)
      try {
        const queryParams = new URLSearchParams();
        queryParams.append('action', action);
        queryParams.append('payload', JSON.stringify(payload));
        
        const response = await fetch(`${CLS_CONFIG.GAS_API_URL}?${queryParams.toString()}`, {
          method: 'GET'
        });

        if (response.ok) {
          const json = await response.json();
          return json;
        }
      } catch (getErr) {
        console.error('All GAS transports failed:', getErr);
      }

      if (!CLS_CONFIG.USE_MOCK_FALLBACK) {
        throw new Error('Could not connect to Cloud Database. Please check your internet connection.');
      }
    }

    if (!CLS_CONFIG.USE_MOCK_FALLBACK) {
      throw new Error('Cloud Database Web API URL is not configured.');
    }
  },

  executeMock(action, payload) {
    const data = CLS_MockStore.getData();

    switch (action) {
      case 'ping':
        return { success: true, mode: 'Mock Mode', timestamp: new Date().toISOString() };

      case 'login': {
        const username = String(payload.username || '').trim().toLowerCase();
        const password = String(payload.password || '').trim();
        const pin = String(payload.pin || '').trim();
        const area = String(payload.area || 'London').trim();

        const user = data.users.find(u => 
          u.username.toLowerCase() === username && 
          u.password === password && 
          u.pin === pin && 
          u.active.toLowerCase() === 'yes'
        );

        if (!user) {
          return { success: false, error: 'Invalid Username, Password, or 6-digit PIN.' };
        }

        const now = new Date();
        const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const sessionKey = 'ses_' + Math.random().toString(36).substring(2, 12);
        const loginId = 'LOG-' + String(data.sessions.length + 1).padStart(4, '0');

        data.sessions.unshift({
          loginId,
          username: user.username,
          date: dateStr,
          loginTime: timeStr,
          logoutTime: 'Active',
          activeDuration: 'Active',
          area,
          role: user.role,
          status: 'Active',
          sessionKey,
          loginTimestamp: now.getTime()
        });

        CLS_MockStore.saveData(data);

        return {
          success: true,
          user: {
            userId: user.userId,
            username: user.username,
            role: user.role,
            fullName: user.fullName
          },
          sessionId: sessionKey,
          loginId,
          loginTime: timeStr,
          loginDate: dateStr,
          area
        };
      }

      case 'logout': {
        const sessionId = payload.sessionId;
        if (sessionId) {
          const session = data.sessions.find(s => s.sessionKey === sessionId && s.status === 'Active');
          if (session) {
            const now = new Date();
            const logoutTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            const [lh, lm] = String(session.loginTime).split(':').map(Number);
            const [oh, om] = logoutTimeStr.split(':').map(Number);
            let totalMins = (oh * 60 + om) - (lh * 60 + lm);
            if (totalMins < 0) totalMins += 1440;
            const dur = `${Math.floor(totalMins / 60)}h ${totalMins % 60}m`;

            session.logoutTime = logoutTimeStr;
            session.activeDuration = dur;
            session.status = 'Logged Out';
            CLS_MockStore.saveData(data);
          }
        }
        return { success: true };
      }

      case 'heartbeat': {
        const sessionId = payload.sessionId;
        if (sessionId) {
          const session = data.sessions.find(s => s.sessionKey === sessionId && s.status === 'Active');
          if (session) {
            const now = new Date();
            const curTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            const [lh, lm] = String(session.loginTime).split(':').map(Number);
            const [oh, om] = curTimeStr.split(':').map(Number);
            let totalMins = (oh * 60 + om) - (lh * 60 + lm);
            if (totalMins < 0) totalMins += 1440;
            session.activeDuration = `${Math.floor(totalMins / 60)}h ${totalMins % 60}m`;
            CLS_MockStore.saveData(data);
          }
        }
        return { success: true };
      }

      case 'saveGoodsIn': {
        const record = payload.record || payload;
        const isRejected = (record.reject === 'Yes' || record.reject === true);
        const productId = CLS_MockStore.getNextProductId();
        const batchCode = CLS_MockStore.generateBatchCode(record.date);
        const timestamp = new Date().toISOString();

        const newRecord = {
          productId,
          batchCode,
          date: record.date || '',
          category: record.category || '',
          productName: record.productName || '',
          supplier: record.supplier || '',
          invoiceNo: record.invoiceNo || '',
          quantity: record.quantity || '',
          unit: record.unit || '',
          vehicleCondition: record.vehicleCondition || 'Good',
          pestFree: record.freeFromPests || 'Yes',
          packagingCondition: record.productPackaging || 'Good',
          supplierBatchCode: record.supplierBatchCode || '',
          bestBefore: record.productBestBefore || '',
          healthMark: record.healthMark || '',
          coa: record.certificateOfAnalysis || 'Yes',
          notes: record.notes || '',
          receivedBy: record.receivedBy || 'Staff',
          timestamp
        };

        if (isRejected) {
          newRecord.reasonForRejection = record.reasonForRejection || 'Rejected during receiving inspection';
          newRecord.rejectedBy = record.receivedBy || 'Staff';
          data.rejectedGoods.unshift(newRecord);
        } else {
          data.goodsIn.unshift(newRecord);
        }

        CLS_MockStore.saveData(data);

        return {
          success: true,
          productId,
          batchCode,
          isRejected,
          message: isRejected ? 'Goods rejected and filed in Rejected_Goods.' : 'Goods successfully recorded.'
        };
      }

      case 'saveStorage': {
        const record = payload.record || payload;
        const recordId = 'STR-' + String(data.storage.length + 1).padStart(5, '0');
        const timestamp = new Date().toISOString();

        const newEntry = {
          recordId,
          date: record.date || '',
          category: record.category || '',
          productName: record.productName || '',
          productId: record.productId || '',
          batchCode: record.batchCode || '',
          quantity: record.quantity || '',
          storageArea: record.storageArea || '',
          notes: record.notes || '',
          loggedBy: record.loggedBy || 'Staff',
          timestamp
        };

        data.storage.unshift(newEntry);
        CLS_MockStore.saveData(data);

        return {
          success: true,
          recordId,
          message: `Product successfully allocated to ${record.storageArea}.`
        };
      }

      case 'saveCooking': {
        const record = payload.record || payload;
        const recordId = 'CK-' + String(data.cooking.length + 1).padStart(5, '0');
        data.cooking.unshift({ recordId, ...record, timestamp: new Date().toISOString() });
        CLS_MockStore.saveData(data);
        return { success: true, recordId, message: 'Cooking log recorded.' };
      }

      case 'saveBlasting': {
        const record = payload.record || payload;
        const recordId = 'BL-' + String(data.blasting.length + 1).padStart(5, '0');
        data.blasting.unshift({ recordId, ...record, timestamp: new Date().toISOString() });
        CLS_MockStore.saveData(data);
        return { success: true, recordId, message: 'Blasting log recorded.' };
      }

      case 'savePacking': {
        const record = payload.record || payload;
        const recordId = 'PK-' + String(data.packing.length + 1).padStart(5, '0');
        data.packing.unshift({ recordId, ...record, timestamp: new Date().toISOString() });
        CLS_MockStore.saveData(data);
        return { success: true, recordId, message: 'Packing log recorded.' };
      }

      case 'getProductsByCategory': {
        const category = String(payload.category || '').toUpperCase();
        const products = data.goodsIn.filter(g => g.category.toUpperCase() === category);
        return { success: true, products };
      }

      case 'getGoodsInData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const category = payload.category ? String(payload.category).toUpperCase().trim() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = data.goodsIn;
        if (date) {
          filtered = filtered.filter(item => item.date === date || item.date.replace(/-/g, '/') === date.replace(/-/g, '/'));
        }
        if (category) {
          filtered = filtered.filter(item => item.category.toUpperCase() === category);
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.productId} ${item.batchCode} ${item.productName} ${item.supplier} ${item.invoiceNo}`.toLowerCase().includes(search)
          );
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getStorageData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const area = payload.area ? String(payload.area).trim() : null;

        let filtered = data.storage;
        if (date) {
          filtered = filtered.filter(item => item.date === date || item.date.replace(/-/g, '/') === date.replace(/-/g, '/'));
        }
        if (area) {
          filtered = filtered.filter(item => item.storageArea === area);
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getRejectedData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = data.rejectedGoods;
        if (date) {
          filtered = filtered.filter(item => item.date === date || item.date.replace(/-/g, '/') === date.replace(/-/g, '/'));
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.productId} ${item.batchCode} ${item.productName} ${item.supplier} ${item.reasonForRejection}`.toLowerCase().includes(search)
          );
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getLoginActivity': {
        const date = payload.date ? String(payload.date).trim() : null;
        let filtered = data.sessions;
        if (date) {
          filtered = filtered.filter(s => s.date === date || s.date.replace(/-/g, '/') === date.replace(/-/g, '/'));
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getDashboardMetrics': {
        const activeCount = data.sessions.filter(s => s.status === 'Active').length;
        return {
          success: true,
          metrics: {
            totalGoodsReceived: data.goodsIn.length,
            totalRejected: data.rejectedGoods.length,
            totalStorageAllocations: data.storage.length,
            activeSessions: activeCount
          }
        };
      }

      default:
        return { success: false, error: 'Unknown action: ' + action };
    }
  }
};
