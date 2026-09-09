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

  getNextFinalBatchCode() {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return String(randomNum);
  },

  getDefaultStaff() {
    return [
      { staffId: 'STF-001', staffName: 'Kamal Silva', role: 'Packing Lead', active: 'Yes' },
      { staffId: 'STF-002', staffName: 'Nimal Perera', role: 'QC Inspector', active: 'Yes' },
      { staffId: 'STF-003', staffName: 'Sunil Fernando', role: 'Tray Assembly Line', active: 'Yes' },
      { staffId: 'STF-004', staffName: 'Anura Jayasinghe', role: 'Sealing Operator', active: 'Yes' },
      { staffId: 'STF-005', staffName: 'Ruwan Wickramasinghe', role: 'Portioning Specialist', active: 'Yes' },
      { staffId: 'STF-006', staffName: 'Chaminda Bandara', role: 'Label QA Check', active: 'Yes' },
      { staffId: 'STF-007', staffName: 'Kasun Dissanayake', role: 'Cold Room Lead', active: 'Yes' },
      { staffId: 'STF-008', staffName: 'Dinesh Kumar', role: 'Dispatch Officer', active: 'Yes' },
      { staffId: 'STF-009', staffName: 'Roshan Jayawardena', role: 'Assembly Technician', active: 'Yes' },
      { staffId: 'STF-010', staffName: 'Malik Jayasooriya', role: 'Packing QA Lead', active: 'Yes' }
    ];
  },

  getDefaultChefs() {
    return [
      { chefId: 'CHF-001', chefName: 'Head Chef Marco Rossi', role: 'Executive Chef', active: 'Yes' },
      { chefId: 'CHF-002', chefName: 'Chef John Smith', role: 'Sous Chef', active: 'Yes' },
      { chefId: 'CHF-003', chefName: 'Chef David Chen', role: 'Senior Hot Kitchen Lead', active: 'Yes' },
      { chefId: 'CHF-004', chefName: 'Chef Amara Khan', role: 'Breakfast & Pastry Specialist', active: 'Yes' },
      { chefId: 'CHF-005', chefName: 'Chef Sunil Bandara', role: 'Curry & Asian Section Lead', active: 'Yes' }
    ];
  },

  getRecipesList(cycle) {
    const recipesMap = {
      'Cycle 1': [
        { recipeId: 'REC-001', recipeCode: 'JFCC', recipeName: 'Jaffna Style Chicken Curry', mealService: 'BC LDN - Business Class Dinner', cycle: 'Cycle 1', targetWeight: '350g' },
        { recipeId: 'REC-002', recipeCode: 'BREGG', recipeName: 'Traditional English Breakfast Omelette', mealService: 'BC HBK - Business Class Breakfast', cycle: 'Cycle 1', targetWeight: '280g' },
        { recipeId: 'REC-003', recipeCode: 'YCBEEF', recipeName: 'Braised Beef Stew with Root Vegetables', mealService: 'YC LDN - Economy Dinner', cycle: 'Cycle 1', targetWeight: '380g' },
        { recipeId: 'REC-004', recipeCode: 'YCPAN', recipeName: 'Buttermilk Pancakes with Berry Compote', mealService: 'YC HBK - Economy Breakfast', cycle: 'Cycle 1', targetWeight: '250g' },
        { recipeId: 'REC-005', recipeCode: 'CRWCUR', recipeName: 'Crew Fragrant Chicken Biryani', mealService: 'CREW LDN - Crew Dinner', cycle: 'Cycle 1', targetWeight: '400g' },
        { recipeId: 'REC-006', recipeCode: 'CRWBRK', recipeName: 'Crew Continental Breakfast Box', mealService: 'CREW HBK - Crew Breakfast', cycle: 'Cycle 1', targetWeight: '320g' }
      ],
      'Cycle 2': [
        { recipeId: 'REC-201', recipeCode: 'LMTIK', recipeName: 'Lamb Tikka Masala with Pilau Rice', mealService: 'BC LDN - Business Class Dinner', cycle: 'Cycle 2', targetWeight: '380g' },
        { recipeId: 'REC-202', recipeCode: 'BCPAN', recipeName: 'Eggs Royale with Smoked Salmon', mealService: 'BC HBK - Business Class Breakfast', cycle: 'Cycle 2', targetWeight: '260g' },
        { recipeId: 'REC-203', recipeCode: 'YCCHK', recipeName: 'Roast Chicken Breast with Herb Jus', mealService: 'YC LDN - Economy Dinner', cycle: 'Cycle 2', targetWeight: '360g' },
        { recipeId: 'REC-204', recipeCode: 'YCWAF', recipeName: 'Belgian Waffles with Maple Syrup', mealService: 'YC HBK - Economy Breakfast', cycle: 'Cycle 2', targetWeight: '240g' },
        { recipeId: 'REC-205', recipeCode: 'CRWSTW', recipeName: 'Crew Beef Goulash with Creamy Mash', mealService: 'CREW LDN - Crew Dinner', cycle: 'Cycle 2', targetWeight: '420g' },
        { recipeId: 'REC-206', recipeCode: 'CRWOAT', recipeName: 'Crew Warm Porridge & Organic Honey', mealService: 'CREW HBK - Crew Breakfast', cycle: 'Cycle 2', targetWeight: '280g' }
      ],
      'Cycle 3': [
        { recipeId: 'REC-301', recipeCode: 'SLMGR', recipeName: 'Grilled Atlantic Salmon with Lemon Dill', mealService: 'BC LDN - Business Class Dinner', cycle: 'Cycle 3', targetWeight: '340g' },
        { recipeId: 'REC-302', recipeCode: 'AVOTO', recipeName: 'Poached Eggs & Smashed Avocado Brioche', mealService: 'BC HBK - Business Class Breakfast', cycle: 'Cycle 3', targetWeight: '270g' },
        { recipeId: 'REC-303', recipeCode: 'YCPST', recipeName: 'Creamy Penne Alfredo with Mushroom', mealService: 'YC LDN - Economy Dinner', cycle: 'Cycle 3', targetWeight: '360g' },
        { recipeId: 'REC-304', recipeCode: 'YCMUF', recipeName: 'Fresh Blueberry Muffin Breakfast Platter', mealService: 'YC HBK - Economy Breakfast', cycle: 'Cycle 3', targetWeight: '230g' },
        { recipeId: 'REC-305', recipeCode: 'CRWFSH', recipeName: 'Crew Fisherman Pie with Cheesy Mash', mealService: 'CREW LDN - Crew Dinner', cycle: 'Cycle 3', targetWeight: '400g' },
        { recipeId: 'REC-306', recipeCode: 'CRWFRT', recipeName: 'Crew Fresh Seasonal Fruit & Pastry', mealService: 'CREW HBK - Crew Breakfast', cycle: 'Cycle 3', targetWeight: '250g' }
      ]
    };
    return recipesMap[cycle] || recipesMap['Cycle 1'];
  },

  getRecipeIngredients(cycle, recipeId) {
    const ingredientsMap = {
      'REC-001': [
        { ingredient: 'Chicken Thigh Boneless', baseQuantity: 0.65, baseUnit: 'KG', perQuantity: '0.65 KG' },
        { ingredient: 'Jaffna Curry Powder', baseQuantity: 0.04, baseUnit: 'KG', perQuantity: '0.04 KG' },
        { ingredient: 'Coconut Milk Cream', baseQuantity: 0.20, baseUnit: 'L', perQuantity: '0.20 L' },
        { ingredient: 'Onions Red Diced', baseQuantity: 0.15, baseUnit: 'KG', perQuantity: '0.15 KG' },
        { ingredient: 'Garlic Cloves Peeled', baseQuantity: 0.03, baseUnit: 'KG', perQuantity: '0.03 KG' },
        { ingredient: 'Ginger Fresh Minced', baseQuantity: 0.02, baseUnit: 'KG', perQuantity: '0.02 KG' },
        { ingredient: 'Vegetable Oil Refined', baseQuantity: 0.05, baseUnit: 'L', perQuantity: '0.05 L' }
      ],
      'REC-002': [
        { ingredient: 'Pasteurised Whole Eggs', baseQuantity: 0.70, baseUnit: 'L', perQuantity: '0.70 L' },
        { ingredient: 'Cheddar Cheese Mature Grated', baseQuantity: 0.15, baseUnit: 'KG', perQuantity: '0.15 KG' },
        { ingredient: 'Salted Butter Block', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' },
        { ingredient: 'Whole Milk Pasteurised', baseQuantity: 0.10, baseUnit: 'L', perQuantity: '0.10 L' },
        { ingredient: 'White Pepper Ground', baseQuantity: 0.01, baseUnit: 'KG', perQuantity: '0.01 KG' }
      ],
      'REC-003': [
        { ingredient: 'Beef Diced Prime Chuck', baseQuantity: 0.60, baseUnit: 'KG', perQuantity: '0.60 KG' },
        { ingredient: 'Carrots Diced Grade A', baseQuantity: 0.18, baseUnit: 'KG', perQuantity: '0.18 KG' },
        { ingredient: 'Potatoes Diced Maris Piper', baseQuantity: 0.22, baseUnit: 'KG', perQuantity: '0.22 KG' },
        { ingredient: 'Beef Stock Concentrated Jus', baseQuantity: 0.15, baseUnit: 'L', perQuantity: '0.15 L' },
        { ingredient: 'Tomato Paste Double Concentrate', baseQuantity: 0.05, baseUnit: 'KG', perQuantity: '0.05 KG' },
        { ingredient: 'Onions Brown Sliced', baseQuantity: 0.12, baseUnit: 'KG', perQuantity: '0.12 KG' }
      ],
      'REC-004': [
        { ingredient: 'Plain Flour Wheat', baseQuantity: 0.45, baseUnit: 'KG', perQuantity: '0.45 KG' },
        { ingredient: 'Cultured Buttermilk', baseQuantity: 0.40, baseUnit: 'L', perQuantity: '0.40 L' },
        { ingredient: 'Whole Free Range Eggs', baseQuantity: 0.15, baseUnit: 'L', perQuantity: '0.15 L' },
        { ingredient: 'Mixed Wild Berries Frozen', baseQuantity: 0.25, baseUnit: 'KG', perQuantity: '0.25 KG' },
        { ingredient: 'Caster Fine Sugar', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' },
        { ingredient: 'Butter Unsalted Pure', baseQuantity: 0.06, baseUnit: 'KG', perQuantity: '0.06 KG' }
      ],
      'REC-005': [
        { ingredient: 'Aged Basmati Rice Long Grain', baseQuantity: 0.45, baseUnit: 'KG', perQuantity: '0.45 KG' },
        { ingredient: 'Chicken Breast Diced Fillet', baseQuantity: 0.55, baseUnit: 'KG', perQuantity: '0.55 KG' },
        { ingredient: 'Biryani Whole & Ground Spices', baseQuantity: 0.04, baseUnit: 'KG', perQuantity: '0.04 KG' },
        { ingredient: 'Pure Cow Ghee Butter', baseQuantity: 0.06, baseUnit: 'KG', perQuantity: '0.06 KG' },
        { ingredient: 'Crispy Fried Onions', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' },
        { ingredient: 'Fresh Coriander Bunches', baseQuantity: 0.03, baseUnit: 'KG', perQuantity: '0.03 KG' }
      ],
      'REC-006': [
        { ingredient: 'Butter Croissant Dough Pastry', baseQuantity: 0.50, baseUnit: 'KG', perQuantity: '0.50 KG' },
        { ingredient: 'Strawberry Jam Conserve', baseQuantity: 0.15, baseUnit: 'KG', perQuantity: '0.15 KG' },
        { ingredient: 'Individual Butter Portions', baseQuantity: 0.10, baseUnit: 'KG', perQuantity: '0.10 KG' },
        { ingredient: 'Greek Style Natural Yogurt', baseQuantity: 0.25, baseUnit: 'KG', perQuantity: '0.25 KG' },
        { ingredient: 'Honey Toasted Granola Mix', baseQuantity: 0.15, baseUnit: 'KG', perQuantity: '0.15 KG' }
      ],
      'REC-201': [
        { ingredient: 'Lamb Leg Boneless Diced', baseQuantity: 0.65, baseUnit: 'KG', perQuantity: '0.65 KG' },
        { ingredient: 'Tikka Spice Marinade Paste', baseQuantity: 0.06, baseUnit: 'KG', perQuantity: '0.06 KG' },
        { ingredient: 'Double Cream British Dairy', baseQuantity: 0.18, baseUnit: 'L', perQuantity: '0.18 L' },
        { ingredient: 'Basmati Rice Pilau', baseQuantity: 0.35, baseUnit: 'KG', perQuantity: '0.35 KG' },
        { ingredient: 'Tomato Puree Concentrated', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' }
      ],
      'REC-202': [
        { ingredient: 'Artisan English Muffins', baseQuantity: 0.40, baseUnit: 'KG', perQuantity: '0.40 KG' },
        { ingredient: 'Smoked Scottish Salmon Slices', baseQuantity: 0.35, baseUnit: 'KG', perQuantity: '0.35 KG' },
        { ingredient: 'Pasteurised Whole Eggs', baseQuantity: 0.45, baseUnit: 'L', perQuantity: '0.45 L' },
        { ingredient: 'Classic Hollandaise Sauce', baseQuantity: 0.20, baseUnit: 'L', perQuantity: '0.20 L' },
        { ingredient: 'Fresh Chives Chopped', baseQuantity: 0.02, baseUnit: 'KG', perQuantity: '0.02 KG' }
      ],
      'REC-203': [
        { ingredient: 'Farm Assured Chicken Breast', baseQuantity: 0.75, baseUnit: 'KG', perQuantity: '0.75 KG' },
        { ingredient: 'Chicken Rich Herb Jus', baseQuantity: 0.20, baseUnit: 'L', perQuantity: '0.20 L' },
        { ingredient: 'Fresh Rosemary Sprigs', baseQuantity: 0.02, baseUnit: 'KG', perQuantity: '0.02 KG' },
        { ingredient: 'Fresh Thyme Leaves', baseQuantity: 0.02, baseUnit: 'KG', perQuantity: '0.02 KG' },
        { ingredient: 'Garlic Puree Crushed', baseQuantity: 0.03, baseUnit: 'KG', perQuantity: '0.03 KG' },
        { ingredient: 'Extra Virgin Olive Oil', baseQuantity: 0.05, baseUnit: 'L', perQuantity: '0.05 L' }
      ],
      'REC-204': [
        { ingredient: 'Belgian Waffle Batter Mix', baseQuantity: 0.50, baseUnit: 'KG', perQuantity: '0.50 KG' },
        { ingredient: 'Whole Pasteurised Milk', baseQuantity: 0.35, baseUnit: 'L', perQuantity: '0.35 L' },
        { ingredient: 'Pure Maple Canadian Syrup', baseQuantity: 0.20, baseUnit: 'L', perQuantity: '0.20 L' },
        { ingredient: 'Unsalted Butter Block', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' }
      ],
      'REC-205': [
        { ingredient: 'Beef Chuck Steak Prime', baseQuantity: 0.65, baseUnit: 'KG', perQuantity: '0.65 KG' },
        { ingredient: 'Hungarian Smoked Paprika', baseQuantity: 0.04, baseUnit: 'KG', perQuantity: '0.04 KG' },
        { ingredient: 'Bell Peppers Sweet Diced', baseQuantity: 0.20, baseUnit: 'KG', perQuantity: '0.20 KG' },
        { ingredient: 'Mashed Potato Real Flakes', baseQuantity: 0.30, baseUnit: 'KG', perQuantity: '0.30 KG' },
        { ingredient: 'Double Cream Dairy', baseQuantity: 0.10, baseUnit: 'L', perQuantity: '0.10 L' }
      ],
      'REC-206': [
        { ingredient: 'Scottish Rolled Jumbo Oats', baseQuantity: 0.40, baseUnit: 'KG', perQuantity: '0.40 KG' },
        { ingredient: 'Whole Fresh Milk', baseQuantity: 0.70, baseUnit: 'L', perQuantity: '0.70 L' },
        { ingredient: 'Organic Blossom Honey', baseQuantity: 0.12, baseUnit: 'KG', perQuantity: '0.12 KG' },
        { ingredient: 'Organic Chia Seeds', baseQuantity: 0.04, baseUnit: 'KG', perQuantity: '0.04 KG' }
      ],
      'REC-301': [
        { ingredient: 'Fresh Atlantic Salmon Fillets', baseQuantity: 0.75, baseUnit: 'KG', perQuantity: '0.75 KG' },
        { ingredient: 'Fresh Lemon Juice Pressed', baseQuantity: 0.08, baseUnit: 'L', perQuantity: '0.08 L' },
        { ingredient: 'Fresh Dill Chopped', baseQuantity: 0.03, baseUnit: 'KG', perQuantity: '0.03 KG' },
        { ingredient: 'Extra Virgin Olive Oil', baseQuantity: 0.06, baseUnit: 'L', perQuantity: '0.06 L' },
        { ingredient: 'Maldon Sea Salt Flakes', baseQuantity: 0.01, baseUnit: 'KG', perQuantity: '0.01 KG' }
      ],
      'REC-302': [
        { ingredient: 'Brioche Loaf Slices', baseQuantity: 0.35, baseUnit: 'KG', perQuantity: '0.35 KG' },
        { ingredient: 'Ripe Hass Avocados Smashed', baseQuantity: 0.40, baseUnit: 'KG', perQuantity: '0.40 KG' },
        { ingredient: 'Pasteurised Whole Eggs', baseQuantity: 0.40, baseUnit: 'L', perQuantity: '0.40 L' },
        { ingredient: 'Fresh Lime Juice', baseQuantity: 0.04, baseUnit: 'L', perQuantity: '0.04 L' },
        { ingredient: 'Crushed Red Chilli Flakes', baseQuantity: 0.01, baseUnit: 'KG', perQuantity: '0.01 KG' }
      ],
      'REC-303': [
        { ingredient: 'Durum Wheat Penne Rigate', baseQuantity: 0.45, baseUnit: 'KG', perQuantity: '0.45 KG' },
        { ingredient: 'British Double Cream', baseQuantity: 0.30, baseUnit: 'L', perQuantity: '0.30 L' },
        { ingredient: 'Button White Mushrooms Sliced', baseQuantity: 0.25, baseUnit: 'KG', perQuantity: '0.25 KG' },
        { ingredient: 'Parmigiano Reggiano Grated', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' },
        { ingredient: 'Garlic Puree Minced', baseQuantity: 0.02, baseUnit: 'KG', perQuantity: '0.02 KG' }
      ],
      'REC-304': [
        { ingredient: 'Gourmet Muffin Batter Mix', baseQuantity: 0.55, baseUnit: 'KG', perQuantity: '0.55 KG' },
        { ingredient: 'Fresh Blueberries Hand-picked', baseQuantity: 0.25, baseUnit: 'KG', perQuantity: '0.25 KG' },
        { ingredient: 'Natural Vanilla Extract', baseQuantity: 0.02, baseUnit: 'L', perQuantity: '0.02 L' },
        { ingredient: 'Pure Salted Butter', baseQuantity: 0.08, baseUnit: 'KG', perQuantity: '0.08 KG' }
      ],
      'REC-305': [
        { ingredient: 'Smoked Haddock Fillet Diced', baseQuantity: 0.40, baseUnit: 'KG', perQuantity: '0.40 KG' },
        { ingredient: 'Atlantic Salmon Diced Fillet', baseQuantity: 0.30, baseUnit: 'KG', perQuantity: '0.30 KG' },
        { ingredient: 'Creamy Bechamel Sauce Base', baseQuantity: 0.25, baseUnit: 'L', perQuantity: '0.25 L' },
        { ingredient: 'Mature Cheddar Grated', baseQuantity: 0.12, baseUnit: 'KG', perQuantity: '0.12 KG' },
        { ingredient: 'Creamy Mashed Potato Base', baseQuantity: 0.35, baseUnit: 'KG', perQuantity: '0.35 KG' }
      ],
      'REC-306': [
        { ingredient: 'Danish Pastry Mixed Assortment', baseQuantity: 0.45, baseUnit: 'KG', perQuantity: '0.45 KG' },
        { ingredient: 'Honeydew & Cantaloupe Melon', baseQuantity: 0.30, baseUnit: 'KG', perQuantity: '0.30 KG' },
        { ingredient: 'Sweet Pineapple Chunks', baseQuantity: 0.20, baseUnit: 'KG', perQuantity: '0.20 KG' },
        { ingredient: 'Seedless Red Grapes', baseQuantity: 0.15, baseUnit: 'KG', perQuantity: '0.15 KG' }
      ]
    };

    if (ingredientsMap[recipeId]) {
      return ingredientsMap[recipeId];
    }

    // Default fallback ingredient breakdown for custom recipes
    return [
      { ingredient: 'Primary Base Protein / Ingredient', baseQuantity: 0.60, baseUnit: 'KG', perQuantity: '0.60 KG' },
      { ingredient: 'Secondary Fresh Produce / Vegetable', baseQuantity: 0.25, baseUnit: 'KG', perQuantity: '0.25 KG' },
      { ingredient: 'Sauce / Liquid Base / Marinade', baseQuantity: 0.15, baseUnit: 'L', perQuantity: '0.15 L' },
      { ingredient: 'Seasoning & Spice Master Blend', baseQuantity: 0.03, baseUnit: 'KG', perQuantity: '0.03 KG' }
    ];
  },

  getRecipeDetails(cycle, recipeId) {
    const list = this.getRecipesList(cycle);
    const r = list.find(item => item.recipeId === recipeId) || list[0] || {
      recipeId: recipeId || 'REC-001',
      recipeCode: 'CUST',
      recipeName: 'Custom Culinary Recipe',
      mealService: 'BC LDN - Business Class Dinner',
      cycle: cycle || 'Cycle 1'
    };
    return {
      recipe: r,
      ingredients: this.getRecipeIngredients(cycle, r.recipeId)
    };
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
        const recordId = 'CK-' + String((data.cooking || []).length + 1).padStart(5, '0');
        data.cooking = data.cooking || [];
        data.cooking.unshift({ recordId, ...record, timestamp: new Date().toISOString() });
        CLS_MockStore.saveData(data);
        return { success: true, recordId, message: 'Cooking log recorded.' };
      }

      case 'saveCookingRecord': {
        data.cooking = data.cooking || [];
        const main = payload.cookingRecord || payload;
        const ingredients = payload.ingredients || [];

        // Support batch array or single record
        const recordsToSave = Array.isArray(main) ? main : [main];
        const savedIds = [];
        let lastBatchCode = '';

        recordsToSave.forEach((item, idx) => {
          const recNum = (data.cooking || []).length + 1;
          const recordId = 'COOK-' + String(recNum).padStart(6, '0');
          
          let cookingBatchCode = item.cookingBatchId || item.cookingBatchCode || item.batchCode || '';
          if (!cookingBatchCode) {
            cookingBatchCode = `CK-${CLS_MockStore.generateBatchCode(item.cookingDate || item.date)}`;
          }
          lastBatchCode = cookingBatchCode;

          const itemIngredients = (Array.isArray(main) && Array.isArray(ingredients[idx]))
            ? ingredients[idx]
            : (Array.isArray(item.ingredients) ? item.ingredients : ingredients);

          const fullCookingEntry = {
            cookingRecordId: recordId,
            recordId: recordId,
            cookingDate: item.cookingDate || item.date || CLS_MockStore.generateBatchCode(),
            date: item.cookingDate || item.date || '',
            cookingBatchId: cookingBatchCode,
            batchCode: cookingBatchCode,
            cycle: item.cycle || 'Cycle 1',
            mealService: item.mealService || '',
            recipeId: item.recipeId || '',
            recipeCode: item.recipeCode || '',
            recipeName: item.recipeName || item.productName || '',
            productName: item.recipeName || item.productName || '',
            productId: item.productId || '',
            storageArea: item.storageArea || 'Hot Kitchen',
            storageDate: item.storageDate || item.cookingDate || '',
            totalQuantityCooked: item.totalQuantityCooked || item.quantityCooked || '0 KG',
            cookingStartTime: item.cookingStartTime || item.startTime || '',
            cookingEndTime: item.cookingEndTime || item.endTime || '',
            cookingDuration: item.cookingDuration || item.duration || '',
            coreTemperature: item.coreTemperature || item.coreTemp || '',
            chefName: item.chefName || item.chef || 'Head Chef',
            userId: item.userId || 'Operator',
            notes: item.notes || '',
            status: 'Completed',
            timestamp: new Date().toISOString(),
            ingredients: itemIngredients || []
          };

          data.cooking.unshift(fullCookingEntry);
          savedIds.push(recordId);
        });

        CLS_MockStore.saveData(data);

        return {
          success: true,
          recordId: savedIds[0] || 'COOK-000001',
          savedCount: savedIds.length,
          savedIds: savedIds,
          cookingBatchCode: lastBatchCode,
          message: `Saved ${savedIds.length} cooking batch records successfully.`
        };
      }

      case 'getChefList': {
        return {
          success: true,
          data: CLS_MockStore.getDefaultChefs()
        };
      }

      case 'getAvailableStockBatches': {
        const stockBatches = [];
        const seen = {};

        (data.storage || []).forEach(s => {
          const key = `${s.productId}_${s.batchCode}`;
          if (s.productId && !seen[key]) {
            seen[key] = true;
            stockBatches.push({
              productId: s.productId,
              batchCode: s.batchCode,
              productName: s.productName,
              storageArea: s.storageArea,
              date: s.date,
              quantity: s.quantity
            });
          }
        });

        (data.goodsIn || []).forEach(g => {
          const key = `${g.productId}_${g.batchCode}`;
          if (g.productId && !seen[key]) {
            seen[key] = true;
            stockBatches.push({
              productId: g.productId,
              batchCode: g.batchCode,
              productName: g.productName,
              storageArea: 'Goods In Stock',
              date: g.date,
              quantity: g.quantity
            });
          }
        });

        // Add some standard stock batch samples if empty
        if (stockBatches.length === 0) {
          stockBatches.push(
            { productId: 'CLS-000101', batchCode: '090926', productName: 'Chicken Thigh Boneless', storageArea: 'Chiller 1', quantity: '50 KG' },
            { productId: 'CLS-000102', batchCode: '090926', productName: 'Pasteurised Whole Eggs', storageArea: 'Chiller 2', quantity: '100 L' },
            { productId: 'CLS-000103', batchCode: '090926', productName: 'Beef Diced Prime Chuck', storageArea: 'Chiller 1', quantity: '40 KG' },
            { productId: 'CLS-000104', batchCode: '090926', productName: 'Plain Flour Wheat', storageArea: 'Dry Room', quantity: '80 KG' },
            { productId: 'CLS-000105', batchCode: '090926', productName: 'Aged Basmati Rice Long Grain', storageArea: 'Dry Room', quantity: '120 KG' },
            { productId: 'CLS-000106', batchCode: '090926', productName: 'Fresh Atlantic Salmon Fillets', storageArea: 'Chiller 3', quantity: '35 KG' },
            { productId: 'CLS-000107', batchCode: '090926', productName: 'Double Cream British Dairy', storageArea: 'Chiller 2', quantity: '60 L' },
            { productId: 'CLS-000108', batchCode: '090926', productName: 'Cheddar Cheese Mature Grated', storageArea: 'Chiller 2', quantity: '30 KG' },
            { productId: 'CLS-000109', batchCode: '090926', productName: 'Onions Red Diced', storageArea: 'Chiller 1', quantity: '45 KG' },
            { productId: 'CLS-000110', batchCode: '090926', productName: 'Potatoes Diced Maris Piper', storageArea: 'Dry Room', quantity: '90 KG' }
          );
        }

        return {
          success: true,
          count: stockBatches.length,
          data: stockBatches
        };
      }

      case 'getRecipeDetails': {
        const cycle = payload.cycle || 'Cycle 1';
        const recipeId = payload.recipeId || '';
        const details = CLS_MockStore.getRecipeDetails(cycle, recipeId);
        return {
          success: true,
          recipe: details.recipe,
          ingredients: details.ingredients
        };
      }

      case 'saveBlasting': {
        const record = payload.record || payload;
        const recordId = 'BL-' + String((data.blasting || []).length + 1).padStart(5, '0');
        data.blasting = data.blasting || [];
        data.blasting.unshift({ recordId, ...record, timestamp: new Date().toISOString() });
        CLS_MockStore.saveData(data);
        return { success: true, recordId, message: 'Blasting log recorded.' };
      }

      case 'savePacking': {
        const record = payload.record || payload;
        const recordId = 'PK-' + String((data.packing || []).length + 1).padStart(5, '0');
        const finalBatchCode = record.finalBatchCode || CLS_MockStore.getNextFinalBatchCode();
        const timestamp = new Date().toISOString();
        const newRecord = {
          recordId,
          finalBatchCode,
          ...record,
          timestamp
        };
        data.packing = data.packing || [];
        data.packing.unshift(newRecord);
        CLS_MockStore.saveData(data);
        return {
          success: true,
          recordId,
          finalBatchCode,
          message: `Packing dispatch recorded! Assigned Final Batch: ${finalBatchCode}`
        };
      }

      case 'getPackingStaff': {
        return {
          success: true,
          staff: data.packingStaff || CLS_MockStore.getDefaultStaff()
        };
      }

      case 'getRecipes': {
        const cycle = payload.cycle || 'Cycle 1';
        const mealService = payload.mealService ? String(payload.mealService).trim() : '';
        let list = CLS_MockStore.getRecipesList(cycle);
        if (mealService) {
          const prefix = mealService.split('-')[0].trim();
          list = list.filter(r => r.mealService.includes(prefix) || mealService.includes(r.mealService));
        }
        return { success: true, count: list.length, data: list };
      }

      case 'getCookingReportData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const cycle = payload.cycle ? String(payload.cycle).trim() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = data.cooking || [];
        if (date) {
          filtered = filtered.filter(item => item.cookingDate === date || item.date === date || (item.cookingDate && item.cookingDate.replace(/-/g, '/') === date.replace(/-/g, '/')));
        }
        if (cycle) {
          filtered = filtered.filter(item => item.cycle === cycle);
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.cookingRecordId || item.recordId || ''} ${item.mealService || ''} ${item.recipeCode || ''} ${item.recipeName || item.productName || ''} ${item.batchCode || ''}`.toLowerCase().includes(search)
          );
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getPackingReportData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const cycle = payload.cycle ? String(payload.cycle).trim() : null;
        const airline = payload.airline ? String(payload.airline).trim().toLowerCase() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = data.packing || [];
        if (date) {
          filtered = filtered.filter(item => item.date === date || (item.date && item.date.replace(/-/g, '/') === date.replace(/-/g, '/')));
        }
        if (cycle) {
          filtered = filtered.filter(item => item.cycle === cycle);
        }
        if (airline) {
          filtered = filtered.filter(item => String(item.airlines || item.airlineName || '').toLowerCase().includes(airline));
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.finalBatchCode || ''} ${item.recordId || ''} ${item.flightNumber || item.flightNo || ''} ${item.airlines || ''} ${item.mealService || ''} ${item.recipeCode || ''} ${item.recipeName || ''} ${item.cookingBatchCode || ''} ${item.staffNames || ''}`.toLowerCase().includes(search)
          );
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'updatePacking': {
        const record = payload.record || payload;
        const recordId = record.recordId;
        const idx = (data.packing || []).findIndex(p => p.recordId === recordId);
        if (idx !== -1) {
          data.packing[idx] = { ...data.packing[idx], ...record };
          CLS_MockStore.saveData(data);
          return { success: true, message: `Packing record ${recordId} updated.` };
        }
        return { success: false, error: `Packing record ${recordId} not found.` };
      }

      case 'deletePacking': {
        const recordId = payload.recordId;
        const initLen = (data.packing || []).length;
        data.packing = (data.packing || []).filter(p => p.recordId !== recordId);
        if (data.packing.length < initLen) {
          CLS_MockStore.saveData(data);
          return { success: true, message: `Packing record ${recordId} deleted.` };
        }
        return { success: false, error: `Packing record ${recordId} not found.` };
      }

      case 'getDashboardMetrics': {
        const activeCount = (data.sessions || []).filter(s => s.status === 'Active').length;
        return {
          success: true,
          metrics: {
            totalGoodsReceived: (data.goodsIn || []).length,
            totalGoods: (data.goodsIn || []).length,
            totalRejected: (data.rejectedGoods || []).length,
            totalRejectedGoods: (data.rejectedGoods || []).length,
            totalStorageAllocations: (data.storage || []).length,
            totalStorage: (data.storage || []).length,
            totalCookingBatches: (data.cooking || []).length,
            totalCooking: (data.cooking || []).length,
            totalBlastingCycles: (data.blasting || []).length,
            totalBlasting: (data.blasting || []).length,
            totalPackingBatches: (data.packing || []).length,
            totalPacking: (data.packing || []).length,
            activeSessions: activeCount
          }
        };
      }

      case 'getProductsByCategory': {
        const category = String(payload.category || '').toUpperCase().trim();
        const dateFilter = payload.date ? String(payload.date).trim() : null;
        let products = data.goodsIn.filter(g => String(g.category || '').toUpperCase().trim() === category);
        if (dateFilter) {
          products = products.filter(g => {
            if (!g.date) return false;
            const gDate = String(g.date).trim();
            if (gDate === dateFilter) return true;
            if (gDate.replace(/-/g, '/') === dateFilter.replace(/-/g, '/')) return true;
            if (gDate.includes('-') && dateFilter.includes('/')) {
              const parts = gDate.split('-');
              if (parts.length === 3 && `${parts[2].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[0]}` === dateFilter) return true;
            }
            if (gDate.includes('/') && dateFilter.includes('-')) {
              const parts = gDate.split('/');
              if (parts.length === 3 && `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}` === dateFilter) return true;
            }
            return false;
          });
        }
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

      case 'getBlastingReportData': {
        const date = payload.date ? String(payload.date).trim() : null;
        const cycle = payload.cycle ? String(payload.cycle).trim() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = data.blasting || [];
        if (date) {
          filtered = filtered.filter(item => item.date === date || item.date.replace(/-/g, '/') === date.replace(/-/g, '/'));
        }
        if (cycle) {
          filtered = filtered.filter(item => item.cycle === cycle);
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.recordId} ${item.mealService} ${item.recipeCode || ''} ${item.recipeName || ''} ${item.batchId || ''} ${item.blastUnit || ''} ${item.operator || ''}`.toLowerCase().includes(search)
          );
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
            totalCookingBatches: data.cooking ? data.cooking.length : 0,
            totalBlastingCycles: data.blasting ? data.blasting.length : 0,
            activeSessions: activeCount
          }
        };
      }

      default:
        return { success: false, error: 'Unknown action: ' + action };
    }
  }
};
