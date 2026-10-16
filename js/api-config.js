/**
 * CLS Airline Supplies LTD — API Configuration
 *
 * 100% Direct Cloud Database & Backend
 */
const CLS_CONFIG = {
  // 1. Live Main Traceability Database Web API (Goods-In, Storage, Cooking, Blasting, Packing, Dispatch, Products, Login)
  GAS_API_URL: "https://script.google.com/macros/s/AKfycbxSuDJb1pHvIN2sntoUT244-Ix1NYUtmdLp1zTDkrNkAKrUPorBynqByVFSCC25p7ew/exec",

  // 2. Live Dedicated Temperature Monitoring Database Web API (temp.gs deployment)
  TEMP_API_URL: "https://script.google.com/macros/s/AKfycbyTjvK3UCzswBaxuClJRVEj9rgbARXgp57YziasUnVUHFtHqnOwGYcjANtvt6vk1asEKg/exec",

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
