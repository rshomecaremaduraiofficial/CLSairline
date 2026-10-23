/**
 * CLS Airline Supplies LTD — API Configuration
 *
 * 100% Direct Cloud Database & Backend
 */
const CLS_CONFIG = {
  // 1. Live Main Traceability Database Web API (Goods-In, Storage, Cooking, Blasting, Packing, Dispatch, Products, Login)
  GAS_API_URL: "https://script.google.com/macros/s/AKfycbyt11kkwTzRKWPoeCUYBk65wI0CT2pXVzy74eFnG0ejLWYR4bJ1U51EP0Kq7NPkmd9z/exec",

  // 2. Live Dedicated Temperature Monitoring Database Web API (temp.gs deployment)
  TEMP_API_URL: "https://script.google.com/macros/s/AKfycbyTjvK3UCzswBaxuClJRVEj9rgbARXgp57YziasUnVUHFtHqnOwGYcjANtvt6vk1asEKg/exec",

  // 3. Live Site Orders Database Web API (Harrow & Pinner branches)
  SITE_ORDERS_API_URL: "https://script.google.com/macros/s/AKfycbxwm0gmYmxWD7g4sPptxVHjKA7lJ06A5bCfBFEo3ndew08pVAez5OQ2RBS2cThPg4Xr/exec",

  // Fallback to local mock data if cloud API is offline / unreachable
  USE_MOCK_FALLBACK: true,

  // Heartbeat interval in milliseconds (30 seconds)
  HEARTBEAT_INTERVAL_MS: 30000,

  // Default Location area fallback
  DEFAULT_AREA: "London"
};

if (typeof module !== 'undefined') {
  module.exports = CLS_CONFIG;
}
