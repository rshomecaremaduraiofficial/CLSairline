/**
 * CLS Airline Supplies LTD — API Configuration
 *
 * 100% Direct Cloud Database & Backend
 */
const CLS_CONFIG = {
  // Live Cloud Database Web API Deployment URL
  GAS_API_URL: "https://script.google.com/macros/s/AKfycbxBAUPuUvuvc3CmK1qr414NQeV_YoO3QWL8YOHSWLlOjb6QpYfrtx_HWuGU2dGldhme/exec",

  // Set to false: strictly write to and read from live Cloud Database (no local storage)
  USE_MOCK_FALLBACK: false,

  // Heartbeat interval in milliseconds (30 seconds)
  HEARTBEAT_INTERVAL_MS: 30000,

  // Default Location area fallback
  DEFAULT_AREA: "London"
};

if (typeof module !== 'undefined') {
  module.exports = CLS_CONFIG;
}
