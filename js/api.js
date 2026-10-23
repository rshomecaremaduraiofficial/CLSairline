/**
 * CLS Airline Supplies LTD — Unified Frontend API Client & Mock Store
 */

const CLS_MockStore = {
  getStoreKey: 'cls_traceability_data_v2',

  getDefaultProductCategories() {
    return [
      { itemId: 'PRD-001', category: 'DRY ITEMS', productName: 'Aged Basmati Rice Long Grain', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-002', category: 'DRY ITEMS', productName: 'Plain Flour Wheat Grade A', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-003', category: 'DRY ITEMS', productName: 'Caster Fine Sugar Pure', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-004', category: 'DRY ITEMS', productName: 'Jaffna Style Curry Powder', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-005', category: 'DRY ITEMS', productName: 'Tomato Paste Double Concentrate', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-006', category: 'DRY ITEMS', productName: 'Vegetable Cooking Oil Pure', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-007', category: 'DRY ITEMS', productName: 'Extra Virgin Olive Oil', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-008', category: 'DRY ITEMS', productName: 'White Pepper Ground', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-009', category: 'DRY ITEMS', productName: 'Crushed Black Pepper', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-010', category: 'DRY ITEMS', productName: 'Fine Pure Sea Salt', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-011', category: 'DRY ITEMS', productName: 'Dried Penne Rigate Pasta', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-012', category: 'DRY ITEMS', productName: 'Coconut Milk Cream 24%', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-013', category: 'DRY ITEMS', productName: 'Beef Stock Concentrated Jus', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-014', category: 'DRY ITEMS', productName: 'Rolled Breakfast Oats', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-015', category: 'DRY ITEMS', productName: 'Instant Yeast & Baking Powder', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-016', category: 'DRY ITEMS', productName: 'Belgian Chocolate Drops', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-017', category: 'DRY ITEMS', productName: 'Organic Maple Syrup', defaultUnit: 'Litre', active: 'Yes' },

      { itemId: 'PRD-101', category: 'FISH', productName: 'Atlantic Salmon Fresh Fillets', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-102', category: 'FISH', productName: 'Oak Smoked Salmon Slices', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-103', category: 'FISH', productName: 'Fresh Atlantic Cod Loins', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-104', category: 'FISH', productName: 'Wild Atlantic Haddock Fillets', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-105', category: 'FISH', productName: 'King Prawns Raw Peeled Tail-On', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-106', category: 'FISH', productName: 'Yellowfin Tuna Steaks', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-107', category: 'FISH', productName: 'Mediterranean Sea Bass Fillets', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-108', category: 'FISH', productName: 'Smoked Mackerel Fillets', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-109', category: 'FISH', productName: 'Fresh White Crab Meat', defaultUnit: 'KG', active: 'Yes' },

      { itemId: 'PRD-201', category: 'MEAT', productName: 'Fresh Chicken Breast Fillets', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-202', category: 'MEAT', productName: 'Boneless Skinless Chicken Thighs', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-203', category: 'MEAT', productName: 'Prime British Beef Diced Chuck', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-204', category: 'MEAT', productName: 'Lean Minced Beef 90/10', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-205', category: 'MEAT', productName: 'British Lamb Diced Leg', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-206', category: 'MEAT', productName: 'Fresh Trimmed Lamb Chops', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-207', category: 'MEAT', productName: 'Roast Turkey Breast Slices', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-208', category: 'MEAT', productName: 'Prime Beef Sirloin Steaks', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-209', category: 'MEAT', productName: 'Halal Breakfast Beef Sausages', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-210', category: 'MEAT', productName: 'Cured Back Bacon Slices', defaultUnit: 'KG', active: 'Yes' },

      { itemId: 'PRD-301', category: 'FRUIT & VEGETABLES', productName: 'Orange', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-302', category: 'FRUIT & VEGETABLES', productName: 'WaterMelon', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-303', category: 'FRUIT & VEGETABLES', productName: 'Grapes - Red', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-304', category: 'FRUIT & VEGETABLES', productName: 'Grapes - Green', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-305', category: 'FRUIT & VEGETABLES', productName: 'Grapes - Black', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-306', category: 'FRUIT & VEGETABLES', productName: 'Strawberry', defaultUnit: 'BOX', active: 'Yes' },
      { itemId: 'PRD-307', category: 'FRUIT & VEGETABLES', productName: 'Tomato', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-308', category: 'FRUIT & VEGETABLES', productName: 'Potato', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-309', category: 'FRUIT & VEGETABLES', productName: 'Carrot', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-310', category: 'FRUIT & VEGETABLES', productName: 'Onion - White', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-311', category: 'FRUIT & VEGETABLES', productName: 'Onion - Red', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-312', category: 'FRUIT & VEGETABLES', productName: 'Ginger', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-313', category: 'FRUIT & VEGETABLES', productName: 'Garlic', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-314', category: 'FRUIT & VEGETABLES', productName: 'Capsicum - Red', defaultUnit: 'KG', active: 'Yes' },

      { itemId: 'PRD-401', category: 'DAIRY PRODUCTS', productName: 'Pasteurised Whole Milk 3.5%', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-402', category: 'DAIRY PRODUCTS', productName: 'Pasteurised Whole Liquid Eggs', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-403', category: 'DAIRY PRODUCTS', productName: 'Salted Butter Pure Block', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-404', category: 'DAIRY PRODUCTS', productName: 'Pure Unsalted Creamery Butter', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-405', category: 'DAIRY PRODUCTS', productName: 'Mature Cheddar Cheese Grated', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-406', category: 'DAIRY PRODUCTS', productName: 'Mozzarella Cheese Block', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-407', category: 'DAIRY PRODUCTS', productName: 'Fresh Double Cream 48%', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-408', category: 'DAIRY PRODUCTS', productName: 'Authentic Greek Style Yogurt', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-409', category: 'DAIRY PRODUCTS', productName: 'Cultured Buttermilk Grade A', defaultUnit: 'Litre', active: 'Yes' },
      { itemId: 'PRD-410', category: 'DAIRY PRODUCTS', productName: 'Fresh Brioche Burger Buns', defaultUnit: 'Each', active: 'Yes' },
      { itemId: 'PRD-501', category: 'FROZEN', productName: 'Frozen Green Peas', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-502', category: 'FROZEN', productName: 'Frozen Sweetcorn', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-503', category: 'FROZEN', productName: 'Frozen Mixed Vegetables', defaultUnit: 'KG', active: 'Yes' },
      { itemId: 'PRD-504', category: 'FROZEN', productName: 'Frozen Puff Pastry Sheets', defaultUnit: 'Box', active: 'Yes' },
      { itemId: 'PRD-505', category: 'FROZEN', productName: 'Frozen French Fries', defaultUnit: 'KG', active: 'Yes' }
    ];
  },

  getDefaultTemperatureReadings() {
    const units = [
      { name: 'Vegetable Chiller', area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', isFreezer: false, baseGauge: 3.4, baseInternal: 3.8 },
      { name: 'Dairy Product Chiller', area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', isFreezer: false, baseGauge: 2.8, baseInternal: 3.2 },
      { name: 'Meat and Fish Chiller', area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', isFreezer: false, baseGauge: 1.9, baseInternal: 2.3 },
      { name: 'Holding Chiller', area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', isFreezer: false, baseGauge: 2.5, baseInternal: 3.0 },
      { name: 'Dispatched Chiller', area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', isFreezer: false, baseGauge: 3.1, baseInternal: 3.5 },
      { name: 'Freezer', area: 'Freezer', target: '≤ -18.0°C', max: '≤ -16.0°C', isFreezer: true, baseGauge: -20.2, baseInternal: -19.4 }
    ];

    const today = new Date();
    const currentMonthYear = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    const todayDay = today.getDate();
    const list = [];

    units.forEach(unit => {
      const daysToSeed = Math.min(todayDay, 28);
      for (let d = 1; d <= daysToSeed; d++) {
        const amGauge = unit.isFreezer ? (unit.baseGauge + (Math.random() * 1.5 - 0.75)).toFixed(1) : (unit.baseGauge + (Math.random() * 0.8 - 0.4)).toFixed(1);
        const amInternal = unit.isFreezer ? (unit.baseInternal + (Math.random() * 1.2 - 0.6)).toFixed(1) : (unit.baseInternal + (Math.random() * 0.8 - 0.4)).toFixed(1);
        list.push({
          recordId: `TMP-${unit.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()}-${String(list.length + 1).padStart(4, '0')}`,
          monthYear: currentMonthYear,
          day: d,
          date: `${String(d).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`,
          timeSlot: 'AM',
          unitName: unit.name,
          area: unit.area,
          gaugeTemp: parseFloat(amGauge),
          internalTemp: parseFloat(amInternal),
          target: unit.target,
          criticalMax: unit.max,
          actionTaken: 'Routine check normal',
          nameSign: 'Operator 1',
          status: 'PASS',
          timestamp: new Date().toISOString()
        });

        if (d < todayDay || today.getHours() >= 14) {
          const pmGauge = unit.isFreezer ? (unit.baseGauge + (Math.random() * 1.5 - 0.75)).toFixed(1) : (unit.baseGauge + (Math.random() * 0.9 - 0.3)).toFixed(1);
          const pmInternal = unit.isFreezer ? (unit.baseInternal + (Math.random() * 1.2 - 0.6)).toFixed(1) : (unit.baseInternal + (Math.random() * 0.9 - 0.3)).toFixed(1);
          list.push({
            recordId: `TMP-${unit.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()}-${String(list.length + 1).padStart(4, '0')}`,
            monthYear: currentMonthYear,
            day: d,
            date: `${String(d).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`,
            timeSlot: 'PM',
            unitName: unit.name,
            area: unit.area,
            gaugeTemp: parseFloat(pmGauge),
            internalTemp: parseFloat(pmInternal),
            target: unit.target,
            criticalMax: unit.max,
            actionTaken: 'Routine check normal',
            nameSign: 'Operator 2',
            status: 'PASS',
            timestamp: new Date().toISOString()
          });
        }
      }
    });

    return list;
  },

  getDefaultGoodsIn() {
    const today = new Date().toISOString().slice(0, 10);
    const dateCode = today.split('-').reverse().map(x => x.length === 4 ? x.slice(-2) : x).join('');
    return [
      { goodsInId: 'GIN-000001', productId: 'CLS-000027', productName: 'Boneless Skinless Chicken Thighs', category: 'MEAT', batchCode: dateCode, supplierBatchCode: 'SUP-CK-882', quantity: 80, unit: 'KG', date: today, storageArea: 'Chiller 1', supplier: 'Crown Quality Meats' },
      { goodsInId: 'GIN-000002', productId: 'CLS-000008', productName: 'Fresh Chicken Breast Fillets', category: 'MEAT', batchCode: dateCode, supplierBatchCode: 'SUP-CK-883', quantity: 100, unit: 'KG', date: today, storageArea: 'Chiller 1', supplier: 'Crown Quality Meats' },
      { goodsInId: 'GIN-000003', productId: 'CLS-000018', productName: 'Atlantic Salmon Fresh Fillets', category: 'FISH', batchCode: dateCode, supplierBatchCode: 'SUP-SL-401', quantity: 50, unit: 'KG', date: today, storageArea: 'Chiller 3', supplier: 'Ocean Fresh Seafood' },
      { goodsInId: 'GIN-000004', productId: 'CLS-000030', productName: 'British Lamb Diced Leg', category: 'MEAT', batchCode: dateCode, supplierBatchCode: 'SUP-LM-112', quantity: 60, unit: 'KG', date: today, storageArea: 'Chiller 1', supplier: 'Highland Farm Meats' },
      { goodsInId: 'GIN-000005', productId: 'CLS-000001', productName: 'Aged Basmati Rice Long Grain', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-RC-991', quantity: 200, unit: 'KG', date: today, storageArea: 'Dry Room', supplier: 'Royal Basmati Mills' },
      { goodsInId: 'GIN-000006', productId: 'CLS-000004', productName: 'Roasted Curry Powder', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-CP-331', quantity: 40, unit: 'KG', date: today, storageArea: 'Dry Room', supplier: 'Spice Masters Ltd' },
      { goodsInId: 'GIN-000007', productId: 'CLS-000005', productName: 'Tomato Paste Double Concentrate', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-TP-129', quantity: 60, unit: 'KG', date: today, storageArea: 'Dry Room', supplier: 'Mediterranean Direct' },
      { goodsInId: 'GIN-000008', productId: 'CLS-000006', productName: 'Vegetable Cooking Oil Pure', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-VO-774', quantity: 150, unit: 'Litre', date: today, storageArea: 'Dry Room', supplier: 'Golden Harvest Oils' },
      { goodsInId: 'GIN-000009', productId: 'CLS-000007', productName: 'Fine Pure Sea Salt', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-ST-002', quantity: 80, unit: 'KG', date: today, storageArea: 'Dry Room', supplier: 'Pure Sea Essentials' },
      { goodsInId: 'GIN-000010', productId: 'CLS-000009', productName: 'Crushed Black Pepper', category: 'DRY ITEMS', batchCode: dateCode, supplierBatchCode: 'SUP-BP-441', quantity: 30, unit: 'KG', date: today, storageArea: 'Dry Room', supplier: 'Spice Masters Ltd' },
      { goodsInId: 'GIN-000011', productId: 'PRD-503', productName: 'Frozen Mixed Vegetables', category: 'FROZEN', batchCode: dateCode, supplierBatchCode: 'SUP-MV-611', quantity: 90, unit: 'KG', date: today, storageArea: 'Freezer 1', supplier: 'Frost Fresh Organics' },
      { goodsInId: 'GIN-000012', productId: 'CLS-000037', productName: 'Brown Onions Sliced Grade A', category: 'FRUIT & VEGETABLES', batchCode: dateCode, supplierBatchCode: 'SUP-ON-501', quantity: 100, unit: 'KG', date: today, storageArea: 'Vegetable Chiller', supplier: 'Fresh Valley Produce' },
      { goodsInId: 'GIN-000013', productId: 'CLS-000036', productName: 'Red Onions Diced 10mm', category: 'FRUIT & VEGETABLES', batchCode: dateCode, supplierBatchCode: 'SUP-RO-502', quantity: 60, unit: 'KG', date: today, storageArea: 'Vegetable Chiller', supplier: 'Fresh Valley Produce' },
      { goodsInId: 'GIN-000014', productId: 'CLS-000040', productName: 'Grade A Carrots Diced', category: 'FRUIT & VEGETABLES', batchCode: dateCode, supplierBatchCode: 'SUP-CR-221', quantity: 70, unit: 'KG', date: today, storageArea: 'Vegetable Chiller', supplier: 'Fresh Valley Produce' },
      { goodsInId: 'GIN-000015', productId: 'CLS-000041', productName: 'Maris Piper Potatoes Diced', category: 'FRUIT & VEGETABLES', batchCode: dateCode, supplierBatchCode: 'SUP-PT-118', quantity: 120, unit: 'KG', date: today, storageArea: 'Vegetable Chiller', supplier: 'Fresh Valley Produce' },
      { goodsInId: 'GIN-000016', productId: 'CLS-000047', productName: 'Pasteurised Whole Liquid Eggs', category: 'DAIRY PRODUCTS', batchCode: dateCode, supplierBatchCode: 'SUP-EG-771', quantity: 80, unit: 'Litre', date: today, storageArea: 'Dairy Chiller', supplier: 'Valley Farm Dairy' },
      { goodsInId: 'GIN-000017', productId: 'CLS-000048', productName: 'Salted Butter Pure Block', category: 'DAIRY PRODUCTS', batchCode: dateCode, supplierBatchCode: 'SUP-BT-309', quantity: 45, unit: 'KG', date: today, storageArea: 'Dairy Chiller', supplier: 'Valley Farm Dairy' },
      { goodsInId: 'GIN-000018', productId: 'CLS-000049', productName: 'Mature Cheddar Cheese Grated', category: 'DAIRY PRODUCTS', batchCode: dateCode, supplierBatchCode: 'SUP-CH-902', quantity: 40, unit: 'KG', date: today, storageArea: 'Dairy Chiller', supplier: 'Valley Farm Dairy' },
      { goodsInId: 'GIN-000019', productId: 'CLS-000050', productName: 'Fresh Double Cream 48%', category: 'DAIRY PRODUCTS', batchCode: dateCode, supplierBatchCode: 'SUP-DC-442', quantity: 50, unit: 'Litre', date: today, storageArea: 'Dairy Chiller', supplier: 'Valley Farm Dairy' },
      { goodsInId: 'GIN-000020', productId: 'CLS-000028', productName: 'Prime British Beef Diced Chuck', category: 'MEAT', batchCode: dateCode, supplierBatchCode: 'SUP-BF-601', quantity: 80, unit: 'KG', date: today, storageArea: 'Chiller 1', supplier: 'Crown Quality Meats' }
    ];
  },

  getDefaultPacking() {
    const today = new Date().toISOString().slice(0, 10);
    const d = new Date(today);
    const yy = String(d.getFullYear()).slice(-2);
    const start = new Date(d.getFullYear(), 0, 1);
    const day = Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1;
    const julian = `${yy}${String(day).padStart(3, '0')}`;

    return [
      {
        packingId: 'PCK-00001',
        recordId: 'PCK-00001',
        julianCode: julian,
        finalBatchCode: julian,
        date: today,
        finalProductName: 'Jaffna Style Chicken Curry',
        recipeName: 'Jaffna Style Chicken Curry',
        choiceNum: 'Choice 01',
        cycle: 'Cycle 1',
        mealService: 'BC LDN',
        portionProduce: 180,
        packCount: 180,
        startingTime: '08:00',
        endingTime: '09:30',
        startingTemperature: '12.4°C',
        endingTemperature: '11.8°C',
        qualityCheck: 'Pass (✔️)',
        weightCheck: 'Pass (✔️)',
        recipeCount: 3,
        recipes: [
          { recipeName: 'Jaffna Chicken Base', cookingBatchCode: `${julian.slice(0, 4)}1-01`, expireDate: today, timestamp: '08:15' },
          { recipeName: 'Steamed Basmati Rice', cookingBatchCode: `${julian.slice(0, 4)}1-02`, expireDate: today, timestamp: '08:25' },
          { recipeName: 'Tempered Dhal Curry', cookingBatchCode: `${julian.slice(0, 4)}1-03`, expireDate: today, timestamp: '08:35' }
        ],
        staffNames: ['Kamal Silva', 'Nimal Perera', 'Sunil Fernando']
      },
      {
        packingId: 'PCK-00002',
        recordId: 'PCK-00002',
        julianCode: julian,
        finalBatchCode: julian,
        date: today,
        finalProductName: 'Traditional English Breakfast Omelette',
        recipeName: 'Traditional English Breakfast Omelette',
        choiceNum: 'Choice 02',
        cycle: 'Cycle 1',
        mealService: 'BC HBK',
        portionProduce: 120,
        packCount: 120,
        startingTime: '09:45',
        endingTime: '11:15',
        startingTemperature: '12.2°C',
        endingTemperature: '11.5°C',
        qualityCheck: 'Pass (✔️)',
        weightCheck: 'Pass (✔️)',
        recipeCount: 3,
        recipes: [
          { recipeName: 'Breakfast Egg Omelette', cookingBatchCode: `${julian.slice(0, 4)}1-04`, expireDate: today, timestamp: '10:00' },
          { recipeName: 'Grilled Chicken Sausage', cookingBatchCode: `${julian.slice(0, 4)}1-05`, expireDate: today, timestamp: '10:15' },
          { recipeName: 'Parsley Potato Wedges', cookingBatchCode: `${julian.slice(0, 4)}1-06`, expireDate: today, timestamp: '10:30' }
        ],
        staffNames: ['Anura Jayasinghe', 'Sunil Fernando']
      },
      {
        packingId: 'PCK-00003',
        recordId: 'PCK-00003',
        julianCode: julian,
        finalBatchCode: julian,
        date: today,
        finalProductName: 'Braised Beef Stew with Root Vegetables',
        recipeName: 'Braised Beef Stew with Root Vegetables',
        choiceNum: 'Choice 03',
        cycle: 'Cycle 1',
        mealService: 'YC LDN',
        portionProduce: 240,
        packCount: 240,
        startingTime: '11:30',
        endingTime: '13:00',
        startingTemperature: '12.5°C',
        endingTemperature: '11.9°C',
        qualityCheck: 'Pass (✔️)',
        weightCheck: 'Pass (✔️)',
        recipeCount: 3,
        recipes: [
          { recipeName: 'Braised Diced Beef Chuck', cookingBatchCode: `${julian.slice(0, 4)}1-07`, expireDate: today, timestamp: '11:45' },
          { recipeName: 'Roasted Root Vegetables', cookingBatchCode: `${julian.slice(0, 4)}1-08`, expireDate: today, timestamp: '12:00' },
          { recipeName: 'Mashed Maris Piper Potatoes', cookingBatchCode: `${julian.slice(0, 4)}1-09`, expireDate: today, timestamp: '12:15' }
        ],
        staffNames: ['Ruwan Wickramasinghe', 'Chaminda Bandara', 'Kasun Dissanayake']
      }
    ];
  },

  getDefaultCooking() {
    const today = new Date().toISOString().slice(0, 10);
    const d = new Date(today);
    const yy = String(d.getFullYear()).slice(-2);
    const start = new Date(d.getFullYear(), 0, 1);
    const day = Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1;
    const julian = `${yy}${String(day).padStart(3, '0')}`;
    const batchCode = `CK-${julian}-01`;

    return [
      {
        cookingRecordId: 'COOK-000001',
        recordId: 'COOK-000001',
        cookingDate: today,
        date: today,
        cookingBatchId: batchCode,
        batchCode: batchCode,
        cycle: 'Cycle 1',
        mealService: 'BC LDN',
        recipeId: 'REC-001',
        recipeCode: 'JFCC',
        recipeName: 'Jaffna Style Chicken Curry',
        productName: 'Jaffna Style Chicken Curry',
        productId: 'CLS-000027',
        storageArea: 'Hot Kitchen',
        storageDate: today,
        totalQuantityCooked: '45 KG',
        cookingStartTime: '08:00',
        cookingEndTime: '09:15',
        cookingDuration: '1 hour 15 mins',
        coreTemperature: 82.5,
        chefName: 'Head Chef Marcus',
        userId: 'Operator 1',
        notes: 'HACCP compliant batch production',
        status: 'Completed',
        timestamp: new Date().toISOString(),
        ingredients: []
      },
      {
        cookingRecordId: 'COOK-000002',
        recordId: 'COOK-000002',
        cookingDate: today,
        date: today,
        cookingBatchId: batchCode,
        batchCode: batchCode,
        cycle: 'Cycle 1',
        mealService: 'BC HBK',
        recipeId: 'REC-002',
        recipeCode: 'BREGG',
        recipeName: 'Traditional English Breakfast Omelette',
        productName: 'Traditional English Breakfast Omelette',
        productId: 'CLS-000047',
        storageArea: 'Hot Kitchen',
        storageDate: today,
        totalQuantityCooked: '30 KG',
        cookingStartTime: '09:30',
        cookingEndTime: '10:45',
        cookingDuration: '1 hour 15 mins',
        coreTemperature: 79.2,
        chefName: 'Head Chef Marcus',
        userId: 'Operator 1',
        notes: 'Breakfast batch production',
        status: 'Completed',
        timestamp: new Date().toISOString(),
        ingredients: []
      },
      {
        cookingRecordId: 'COOK-000003',
        recordId: 'COOK-000003',
        cookingDate: today,
        date: today,
        cookingBatchId: batchCode,
        batchCode: batchCode,
        cycle: 'Cycle 1',
        mealService: 'YC LDN',
        recipeId: 'REC-003',
        recipeCode: 'YCBEEF',
        recipeName: 'Braised Beef Stew with Root Vegetables',
        productName: 'Braised Beef Stew with Root Vegetables',
        productId: 'CLS-000028',
        storageArea: 'Hot Kitchen',
        storageDate: today,
        totalQuantityCooked: '60 KG',
        cookingStartTime: '11:00',
        cookingEndTime: '12:30',
        cookingDuration: '1 hour 30 mins',
        coreTemperature: 84.0,
        chefName: 'Sous Chef David',
        userId: 'Operator 2',
        notes: 'Lunch beef stew batch production',
        status: 'Completed',
        timestamp: new Date().toISOString(),
        ingredients: []
      }
    ];
  },

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
      goodsIn: this.getDefaultGoodsIn(),
      rejectedGoods: [],
      storage: [],
      cooking: this.getDefaultCooking(),
      blasting: [],
      packing: this.getDefaultPacking(),
      temperature: this.getDefaultTemperatureReadings(),
      productCategoriesMaster: this.getDefaultProductCategories()
    };
  },

  getData() {
    try {
      const stored = localStorage.getItem(this.getStoreKey);
      if (stored) {
        const data = JSON.parse(stored);
        if (!data.productCategoriesMaster || data.productCategoriesMaster.length === 0) {
          data.productCategoriesMaster = this.getDefaultProductCategories();
          this.saveData(data);
        }
        if (!data.temperature || data.temperature.length === 0) {
          data.temperature = this.getDefaultTemperatureReadings();
          this.saveData(data);
        }
        if (!data.goodsIn || data.goodsIn.length === 0) {
          data.goodsIn = this.getDefaultGoodsIn();
          this.saveData(data);
        }
        if (!data.cooking || data.cooking.length === 0) {
          data.cooking = this.getDefaultCooking();
          this.saveData(data);
        }
        if (!data.packing || data.packing.length === 0) {
          data.packing = this.getDefaultPacking();
          this.saveData(data);
        }
        return data;
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

  getNextFinalBatchCode(dateStr) {
    if (typeof CLS_Common !== 'undefined' && CLS_Common.getJulianBatchCode) {
      return CLS_Common.getJulianBatchCode(dateStr);
    }
    const d = dateStr ? new Date(dateStr) : new Date();
    const yy = String(d.getFullYear()).slice(-2);
    const start = new Date(d.getFullYear(), 0, 1);
    const day = Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1;
    return `${yy}${String(day).padStart(3, '0')}`;
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
        { recipeId: "REC-301", recipeCode: "Choice 2", recipeName: "Chicken Ambul Thial", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-302", recipeCode: "Choice 4", recipeName: "Coconut Chutney", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-303", recipeCode: "Choice 3", recipeName: "Creamed Spinach", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-304", recipeCode: "Other", recipeName: "Deep Fried Onion Sambol", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-305", recipeCode: "Choice 3", recipeName: "Grilled Chicken Medalion", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-306", recipeCode: "Choice 3", recipeName: "Grilled Tomato Half", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-307", recipeCode: "Choice 2", recipeName: "Kata Sambal", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-308", recipeCode: "Choice 4", recipeName: "Masala Dosa", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-309", recipeCode: "Choice 3", recipeName: "Mini Lamb Kebab", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-310", recipeCode: "Choice 1", recipeName: "Parsley Potato Wedges", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-311", recipeCode: "Choice 4", recipeName: "Samber", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-312", recipeCode: "Choice 1", recipeName: "Sauteed mushrooms", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-313", recipeCode: "Choice 1", recipeName: "Cherry Tomato", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-314", recipeCode: "Choice 2", recipeName: "Seeni sambol", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-315", recipeCode: "Choice 1", recipeName: "Spinach Omelette", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-317", recipeCode: "Choice 4", recipeName: "Ulundu Wada", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-318", recipeCode: "Choice 2", recipeName: "White Milk Rice", mealService: "BC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-319", recipeCode: "Choice 2", recipeName: "Beef Fillet Steak", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-320", recipeCode: "Other", recipeName: "Boiled Okra Tips", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-321", recipeCode: "Choice 1", recipeName: "Broccoli Tempered With Dry Chilli Flakes", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-322", recipeCode: "Choice 4", recipeName: "Brown Onion Pilaf", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-323", recipeCode: "Choice 2", recipeName: "Buttered Carrot", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-324", recipeCode: "Other", recipeName: "Cabbage Leaf Blanched", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-325", recipeCode: "Choice 1", recipeName: "Carrot Poriyal", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-326", recipeCode: "Choice 2", recipeName: "Cauliflower Florettes", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-327", recipeCode: "Choice 1", recipeName: "Chicken Kalupol Curry", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-328", recipeCode: "Other", recipeName: "Coconut Chutney", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-329", recipeCode: "Choice 2", recipeName: "Creamed Spinach", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-330", recipeCode: "Choice 1", recipeName: "Curry Leaves", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-331", recipeCode: "Choice 4", recipeName: "Dhal Fry", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-333", recipeCode: "Choice 1", recipeName: "Fried Chilli", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-334", recipeCode: "Salad", recipeName: "Greek salad", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-335", recipeCode: "Choice 3", recipeName: "Grilled Carrot Sticks", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-336", recipeCode: "Choice 3", recipeName: "Grilled Green Pepper Sticks", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-337", recipeCode: "Other", recipeName: "Grilled Pumpkin Triangles", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-338", recipeCode: "Choice 3", recipeName: "Grilled Green Pepper Sticks", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-339", recipeCode: "Other", recipeName: "Grilled Red Pepper Triangles", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-340", recipeCode: "Salad", recipeName: "Mango Salsa", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-341", recipeCode: "Salad", recipeName: "Marianted Vegetables", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-342", recipeCode: "Salad", recipeName: "Mix Seafood", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-343", recipeCode: "Choice 3", recipeName: "Mushroom Pepper Cream Sauce", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-344", recipeCode: "Choice 2", recipeName: "Oven Rosted baby potatoes", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-345", recipeCode: "Choice 2", recipeName: "Oven Rosted salmon Steak", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-347", recipeCode: "Salad", recipeName: "Pol Kiri Custard", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-348", recipeCode: "Salad", recipeName: "Pol Peni Filling", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-349", recipeCode: "Choice 4", recipeName: "Potato Cauliflower Dry curry", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-350", recipeCode: "Other", recipeName: "Spicy Chicken Sandwich mix", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-351", recipeCode: "Choice 3", recipeName: "Spicy potato Wedges With Chopped Parsley", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-352", recipeCode: "Choice 1", recipeName: "Spinach & Dhal curry", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-353", recipeCode: "Choice 4", recipeName: "Srilankan Style Mixed Pickle", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-354", recipeCode: "Choice 1", recipeName: "Tempered Cashew With Dry Chilli Flakes", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-355", recipeCode: "Choice 1", recipeName: "Veg Cuttlet", mealService: "BC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-356", recipeCode: "Choice 3", recipeName: "Channa Curry", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-357", recipeCode: "Choice 1", recipeName: "Cheese Sauce", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-358", recipeCode: "Choice 1", recipeName: "Chicken Sausage", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-359", recipeCode: "Choice 3", recipeName: "Deep Fried Onion Sambol", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-360", recipeCode: "Choice 2", recipeName: "Red Fish Curry", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-361", recipeCode: "Choice 1", recipeName: "Herbed Diced Potato", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-362", recipeCode: "Choice 2", recipeName: "Kiri buth ( Milk Rice )", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-363", recipeCode: "Choice 1", recipeName: "Sautees Sliced Mushroom", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-364", recipeCode: "Choice 2&3", recipeName: "Seeni sambol", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-365", recipeCode: "Choice 1", recipeName: "Tempered Spinach", mealService: "YC HBK", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-366", recipeCode: "Choice 1", recipeName: "Chicken Mild Curry", mealService: "YC HLM", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-367", recipeCode: "Choice 3", recipeName: "Dhal Fry", mealService: "YC HLM", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-368", recipeCode: "Choice 3", recipeName: "Soya Meat Curry", mealService: "YC HLM", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-369", recipeCode: "Choice 2", recipeName: "Stir Fried in Black Bean Sauce", mealService: "YC HLM", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-370", recipeCode: "Choice 1", recipeName: "Veg Mixed Kotthu", mealService: "YC HLM", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-371", recipeCode: "Choice 2", recipeName: "Baked Potato Wedges", mealService: "YC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-372", recipeCode: "Choice 2", recipeName: "Baked Salmon FRZ", mealService: "YC LDN", cycle: 'Cycle 3', targetWeight: '350g' },
        { recipeId: "REC-373", recipeCode: "Choice 3", recipeName: "Bean Potato White Curry", mealService: "YC LDN", cycle: 'Cycle 3', targetWeight: '350g' }
      ],
      'Cycle 3 - HLM Meal': [
        { recipeId: "REC-HLM-301", recipeCode: "Choice 1", recipeName: "Chicken Mild Curry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-302", recipeCode: "Choice 3", recipeName: "Dhal Fry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-303", recipeCode: "Choice 3", recipeName: "Soya Meat Curry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-304", recipeCode: "Choice 2", recipeName: "Stir Fried in Black Bean Sauce", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-305", recipeCode: "Choice 1", recipeName: "Veg Mixed Kotthu", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-306", recipeCode: "Choice 1", recipeName: "Halal Chicken Biryani with Saffron Rice", mealService: "BC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '380g' },
        { recipeId: "REC-HLM-307", recipeCode: "Choice 2", recipeName: "Halal Lamb Rogan Josh with Pilau Rice", mealService: "BC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '400g' }
      ],
      'HLM Meal': [
        { recipeId: "REC-HLM-301", recipeCode: "Choice 1", recipeName: "Chicken Mild Curry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-302", recipeCode: "Choice 3", recipeName: "Dhal Fry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-303", recipeCode: "Choice 3", recipeName: "Soya Meat Curry", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-304", recipeCode: "Choice 2", recipeName: "Stir Fried in Black Bean Sauce", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-305", recipeCode: "Choice 1", recipeName: "Veg Mixed Kotthu", mealService: "YC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '350g' },
        { recipeId: "REC-HLM-306", recipeCode: "Choice 1", recipeName: "Halal Chicken Biryani with Saffron Rice", mealService: "BC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '380g' },
        { recipeId: "REC-HLM-307", recipeCode: "Choice 2", recipeName: "Halal Lamb Rogan Josh with Pilau Rice", mealService: "BC HLM", cycle: 'Cycle 3 - HLM Meal', targetWeight: '400g' }
      ]
    };
    if (cycle && String(cycle).toLowerCase().includes('hlm')) {
      return recipesMap['Cycle 3 - HLM Meal'];
    }
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
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Chicken Thigh", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Goraka", productId: "", baseQuantity: 30, baseUnit: "G", perQuantity: "30G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Ginger", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-302': [
        { ingredient: "Fresh coconut", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Lime Juice", productId: "", baseQuantity: 5, baseUnit: "ML", perQuantity: "5ML" }
      ],
      'REC-303': [
        { ingredient: "Spinach Leaf FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Cream UHT", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Plain Flour", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Butter", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" }
      ],
      'REC-304': [
        { ingredient: "Salt", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 5, baseUnit: "KG", perQuantity: "5KG" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Crused chilli", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Termerin Sause", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-305': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Chicken Breast", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Salt", productId: "", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" }
      ],
      'REC-306': [
        { ingredient: "Tomato (Half)", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Salt", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" }
      ],
      'REC-307': [
        { ingredient: "Salt", productId: "", baseQuantity: 80, baseUnit: "G", perQuantity: "80G" },
        { ingredient: "Lime Juice", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Onion - Red", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Chilli Flakes", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-308': [
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Ulundhu", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Termaric Powder", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" }
      ],
      'REC-309': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Lamb Dice", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Peppers - Green", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Peppers - Red", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Peppers - yellow", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Salt", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" }
      ],
      'REC-310': [
        { ingredient: "Potatoes", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Parsley", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-311': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Termarin sause", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Corrindaer Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Mix Vegetable FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Chopped Tomato", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Dhal - Red", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" }
      ],
      'REC-312': [
        { ingredient: "Mushroom", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Salt", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-313': [
        { ingredient: "Cherry Tomato", productId: "", baseQuantity: 20, baseUnit: "PCS", perQuantity: "20PCS" },
        { ingredient: "Salt", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Chopped Tomato", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Parsley", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-314': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Crused chilli", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 5, baseUnit: "KG", perQuantity: "5KG" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Termerin Sause", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-315': [
        { ingredient: "Egg whole Liquid", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Salt", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Spinach Leaf FRZ", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 1, baseUnit: "ML", perQuantity: "1ML" }
      ],
      'REC-317': [
        { ingredient: "Ulundhu", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Salt", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" },
        { ingredient: "Cumin Seed", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-318': [
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "coconut Powder", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Rice - Broken Basmati", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Cordomman", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-319': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Beef Stake", productId: "", baseQuantity: 120, baseUnit: "G", perQuantity: "120G" },
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-320': [
        { ingredient: "Okra", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Onion - Red", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-321': [
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Chilli Flakes", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Broccoli", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Musted Seed", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" }
      ],
      'REC-322': [
        { ingredient: "Rice - Basmati", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Onion - Red", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Ginger", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Lemon Grass", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-323': [
        { ingredient: "Carrot", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Butter - Cooked Bake", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" }
      ],
      'REC-324': [
        { ingredient: "Cabbage", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" }
      ],
      'REC-325': [
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Carrot", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Musteard Seed", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Cumine Seed", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Graded Coconut", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Crused chilli", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-326': [
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Butter", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Cauliflower", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" }
      ],
      'REC-327': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Coriander Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Tomato", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Chicken Thigh", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Graded Coconut", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Ginger", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-328': [
        { ingredient: "Fresh coconut", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-329': [
        { ingredient: "Spinach Leaf FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Cream UHT", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-330': [
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" }
      ],
      'REC-331': [
        { ingredient: "Channa Dhal", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Curry Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Garlic", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-333': [
        { ingredient: "Dry Chilli", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" }
      ],
      'REC-334': [
        { ingredient: "Mix Vegetable FRZ", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Salt", productId: "", baseQuantity: 80, baseUnit: "G", perQuantity: "80G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-335': [
        { ingredient: "Carrot", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Butter", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" }
      ],
      'REC-336': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Peppers - Green", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-337': [
        { ingredient: "Pumpkin", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" }
      ],
      'REC-338': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Peppers - Red", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" }
      ],
      'REC-339': [
        { ingredient: "Peppers - Red", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" }
      ],
      'REC-340': [
        { ingredient: "Mango", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 40, baseUnit: "G", perQuantity: "40G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Chopped Corriander", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-341': [
        { ingredient: "Mix Vegetable FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Salt", productId: "", baseQuantity: 40, baseUnit: "G", perQuantity: "40G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Vinegar", productId: "", baseQuantity: 500, baseUnit: "ML", perQuantity: "500ML" },
        { ingredient: "Musted Sause", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-342': [
        { ingredient: "Salmon FRZ", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 4, baseUnit: "G", perQuantity: "4G" },
        { ingredient: "Italian Herbs", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-343': [
        { ingredient: "Mushroom", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Cream UHT", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Butter", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-344': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Potatoes", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Rosemary", productId: "", baseQuantity: 8, baseUnit: "G", perQuantity: "8G" },
        { ingredient: "Italian Herbs", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-345': [
        { ingredient: "Slamon FRZ (100g)", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Thyme", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-347': [
        { ingredient: "Sugar - White", productId: "", baseQuantity: 40, baseUnit: "G", perQuantity: "40G" },
        { ingredient: "Custard Powder", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Milk", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "vannila", productId: "", baseQuantity: 5, baseUnit: "ML", perQuantity: "5ML" },
        { ingredient: "coconut Powder", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" }
      ],
      'REC-348': [
        { ingredient: "Fresh coconut", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Honey", productId: "", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" },
        { ingredient: "vannila", productId: "", baseQuantity: 10, baseUnit: "ML", perQuantity: "10ML" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-349': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Corrindaer Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Chopped Tomato", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Potatoes", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Cauliflower", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Coconut Powder", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Musted Sause", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-350': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Papirack Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Chopped red and Green Pepper", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Chicken Mince", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" }
      ],
      'REC-351': [
        { ingredient: "Potatoes", productId: "", baseQuantity: 1, baseUnit: "Kg", perQuantity: "1KG" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Paprika", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Italian Herbs", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-352': [
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Spinach Leaf FRZ", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Channa Dhal", productId: "", baseQuantity: 1, baseUnit: "Kg", perQuantity: "1KG" },
        { ingredient: "coconut Powder", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 30, baseUnit: "G", perQuantity: "30G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Cumine Seed", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Musted Seed", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-353': [
        { ingredient: "Vinegar", productId: "", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" },
        { ingredient: "Small Onion", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Salt", productId: "", baseQuantity: 8, baseUnit: "G", perQuantity: "8G" },
        { ingredient: "Carrot", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Raw Papaya", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Musted Sause", productId: "", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" }
      ],
      'REC-354': [
        { ingredient: "Onion - White", productId: "", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Cashew Nut", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" },
        { ingredient: "Chilli Flakes", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" },
        { ingredient: "Cinnamon Stick", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 25, baseUnit: "G", perQuantity: "25G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-355': [
        { ingredient: "Mix Vegetable FRZ", productId: "", baseQuantity: 300, baseUnit: "G", perQuantity: "300G" },
        { ingredient: "Salt", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 2, baseUnit: "G", perQuantity: "2G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 90, baseUnit: "G", perQuantity: "90G" },
        { ingredient: "Cumin Powder", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Plain Flour", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" },
        { ingredient: "Egg", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Curry Leaves", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Patan Leaves", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Green Chilli", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Garlic", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Bread crumbs", productId: "", baseQuantity: 100, baseUnit: "G", perQuantity: "100G" }
      ],
      'REC-356': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Corrindaer Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Chopped Tomato", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Chick Peas", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" }
      ],
      'REC-357': [
        { ingredient: "Cream UHT", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Cheddar Cheese", productId: "", baseQuantity: 80, baseUnit: "G", perQuantity: "80G" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-358': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 5, baseUnit: "ML", perQuantity: "5ML" },
        { ingredient: "Chicken Sausage", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" }
      ],
      'REC-359': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 5, baseUnit: "KG", perQuantity: "5KG" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" }
      ],
      'REC-360': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Rosted Curry Powder", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Salmon FRZ", productId: "", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" }
      ],
      'REC-361': [
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 25, baseUnit: "ML", perQuantity: "25ML" },
        { ingredient: "Potatoes", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Mix Herbs", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" }
      ],
      'REC-362': [
        { ingredient: "Salt", productId: "", baseQuantity: 1, baseUnit: "G", perQuantity: "1G" },
        { ingredient: "coconut Powder", productId: "", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Rice - Basmati", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" }
      ],
      'REC-363': [
        { ingredient: "Mushroom", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Salt", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" }
      ],
      'REC-364': [
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 5, baseUnit: "KG", perQuantity: "5KG" },
        { ingredient: "Sugar - White", productId: "", baseQuantity: 500, baseUnit: "G", perQuantity: "500G" }
      ],
      'REC-365': [
        { ingredient: "Spinach Leaf FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Salt", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Black Pepper", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Onion - White", productId: "", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Vegetable - oil", productId: "", baseQuantity: 70, baseUnit: "ML", perQuantity: "70ML" }
      ],
      'REC-366': [
        { ingredient: "Fine Pure Sea Salt", productId: "CLS-000007", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Crushed Black Pepper", productId: "CLS-000009", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Coriander Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Frozen Mixed Vegetables", productId: "PRD-503", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Tomato Paste Double Concentrate", productId: "CLS-000005", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Boneless Skinless Chicken Thighs", productId: "CLS-000027", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Mustard Seeds", productId: "", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" }
      ],
      'REC-367': [
        { ingredient: "Channa Dhal", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" }
      ],
      'REC-368': [
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Fine Pure Sea Salt", productId: "CLS-000007", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Crushed Black Pepper", productId: "CLS-000009", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Soya Meat", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 15, baseUnit: "G", perQuantity: "15G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 4, baseUnit: "G", perQuantity: "4G" },
        { ingredient: "Chilli Powder", productId: "", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Tomato Paste Double Concentrate", productId: "CLS-000005", baseQuantity: 210, baseUnit: "G", perQuantity: "210G" }
      ],
      'REC-369': [
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Fresh Leeks", productId: "", baseQuantity: 300, baseUnit: "G", perQuantity: "300G" },
        { ingredient: "Grade A Carrots Diced", productId: "CLS-000040", baseQuantity: 300, baseUnit: "G", perQuantity: "300G" },
        { ingredient: "Atlantic Salmon Fresh Fillets", productId: "CLS-000018", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Soy Sauce Dark", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 150, baseUnit: "G", perQuantity: "150G" },
        { ingredient: "Peppers - Red", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" },
        { ingredient: "Peppers - Green", productId: "", baseQuantity: 50, baseUnit: "G", perQuantity: "50G" }
      ],
      'REC-370': [
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 100, baseUnit: "ML", perQuantity: "100ML" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" },
        { ingredient: "Grade A Carrots Diced", productId: "CLS-000040", baseQuantity: 300, baseUnit: "G", perQuantity: "300G" },
        { ingredient: "Fresh Leeks", productId: "", baseQuantity: 300, baseUnit: "G", perQuantity: "300G" },
        { ingredient: "Fine Pure Sea Salt", productId: "CLS-000007", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Crushed Black Pepper", productId: "CLS-000009", baseQuantity: 3, baseUnit: "G", perQuantity: "3G" },
        { ingredient: "Kothu Roti", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2KG" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" }
      ],
      'REC-371': [
        { ingredient: "Maris Piper Potatoes Diced", productId: "CLS-000041", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 50, baseUnit: "ML", perQuantity: "50ML" },
        { ingredient: "Mix Herbs", productId: "", baseQuantity: 7, baseUnit: "G", perQuantity: "7G" }
      ],
      'REC-372': [
        { ingredient: "Atlantic Salmon Fresh Fillets", productId: "CLS-000018", baseQuantity: 1, baseUnit: "PCS", perQuantity: "1PCS" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 2.5, baseUnit: "ML", perQuantity: "2.5ML" }
      ],
      'REC-373': [
        { ingredient: "Fine Pure Sea Salt", productId: "CLS-000007", baseQuantity: 5, baseUnit: "G", perQuantity: "5G" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 20, baseUnit: "G", perQuantity: "20G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Coriander Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10G" },
        { ingredient: "Tomato Paste Double Concentrate", productId: "CLS-000005", baseQuantity: 250, baseUnit: "G", perQuantity: "250G" },
        { ingredient: "Maris Piper Potatoes Diced", productId: "CLS-000041", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "Cut Beans FRZ", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1KG" },
        { ingredient: "coconut Powder", productId: "", baseQuantity: 75, baseUnit: "G", perQuantity: "75G" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 200, baseUnit: "G", perQuantity: "200G" }
      ],
      'REC-HLM-301': [
        { ingredient: "Boneless Skinless Chicken Thighs", productId: "CLS-000027", baseQuantity: 2, baseUnit: "KG", perQuantity: "2 KG" },
        { ingredient: "Frozen Mixed Vegetables", productId: "PRD-503", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Tomato Paste Double Concentrate", productId: "CLS-000005", baseQuantity: 250, baseUnit: "G", perQuantity: "250 G" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 150, baseUnit: "G", perQuantity: "150 G" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 20, baseUnit: "G", perQuantity: "20 G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 10, baseUnit: "G", perQuantity: "10 G" },
        { ingredient: "Fine Pure Sea Salt", productId: "CLS-000007", baseQuantity: 5, baseUnit: "G", perQuantity: "5 G" },
        { ingredient: "Crushed Black Pepper", productId: "CLS-000009", baseQuantity: 5, baseUnit: "G", perQuantity: "5 G" }
      ],
      'REC-HLM-302': [
        { ingredient: "Channa Dhal", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 150, baseUnit: "G", perQuantity: "150 G" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 50, baseUnit: "ML", perQuantity: "50 ML" },
        { ingredient: "Roasted Curry Powder", productId: "CLS-000004", baseQuantity: 10, baseUnit: "G", perQuantity: "10 G" },
        { ingredient: "Turmeric Powder", productId: "", baseQuantity: 5, baseUnit: "G", perQuantity: "5 G" }
      ],
      'REC-HLM-303': [
        { ingredient: "Soya Meat", productId: "", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Brown Onions Sliced Grade A", productId: "CLS-000037", baseQuantity: 200, baseUnit: "G", perQuantity: "200 G" },
        { ingredient: "Tomato Paste Double Concentrate", productId: "CLS-000005", baseQuantity: 210, baseUnit: "G", perQuantity: "210 G" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 100, baseUnit: "ML", perQuantity: "100 ML" }
      ],
      'REC-HLM-304': [
        { ingredient: "Atlantic Salmon Fresh Fillets", productId: "CLS-000018", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Fresh Leeks", productId: "", baseQuantity: 300, baseUnit: "G", perQuantity: "300 G" },
        { ingredient: "Grade A Carrots Diced", productId: "CLS-000040", baseQuantity: 300, baseUnit: "G", perQuantity: "300 G" },
        { ingredient: "Soy Sauce Dark", productId: "", baseQuantity: 20, baseUnit: "G", perQuantity: "20 G" }
      ],
      'REC-HLM-305': [
        { ingredient: "Kothu Roti", productId: "", baseQuantity: 2, baseUnit: "KG", perQuantity: "2 KG" },
        { ingredient: "Grade A Carrots Diced", productId: "CLS-000040", baseQuantity: 300, baseUnit: "G", perQuantity: "300 G" },
        { ingredient: "Fresh Leeks", productId: "", baseQuantity: 300, baseUnit: "G", perQuantity: "300 G" },
        { ingredient: "Vegetable Cooking Oil Pure", productId: "CLS-000006", baseQuantity: 100, baseUnit: "ML", perQuantity: "100 ML" }
      ],
      'REC-HLM-306': [
        { ingredient: "Fresh Chicken Breast Fillets", productId: "CLS-000008", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Aged Basmati Rice Long Grain", productId: "CLS-000001", baseQuantity: 500, baseUnit: "G", perQuantity: "500 G" },
        { ingredient: "Biryani Spice Blend", productId: "CLS-000004", baseQuantity: 30, baseUnit: "G", perQuantity: "30 G" }
      ],
      'REC-HLM-307': [
        { ingredient: "British Lamb Diced Leg", productId: "CLS-000030", baseQuantity: 1, baseUnit: "KG", perQuantity: "1 KG" },
        { ingredient: "Aged Basmati Rice Long Grain", productId: "CLS-000001", baseQuantity: 500, baseUnit: "G", perQuantity: "500 G" }
      ]
    };

    if (ingredientsMap[recipeId]) {
      return ingredientsMap[recipeId];
    }

    // Only return ingredients configured in database
    return [];
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
  _cache: {},
  _cacheTtlMs: 90000, // 90 seconds cache for fast tab navigation

  _getCacheKey(action, payload) {
    try {
      return `${action}__${JSON.stringify(payload || {})}`;
    } catch (e) {
      return `${action}`;
    }
  },

  _invalidateCacheForWrite(action) {
    const act = action.toLowerCase();
    if (act.includes('temp')) {
      for (const k in this._cache) {
        if (k.toLowerCase().includes('temperature')) delete this._cache[k];
      }
    } else if (act.includes('good') || act.includes('category')) {
      for (const k in this._cache) {
        if (k.includes('ProductCategories') || k.includes('StockBatches')) delete this._cache[k];
      }
    } else if (act.includes('cooking')) {
      for (const k in this._cache) {
        if (k.includes('Cooking') || k.includes('StockBatches') || k.includes('Recipe')) delete this._cache[k];
      }
    } else if (act.includes('blast')) {
      for (const k in this._cache) {
        if (k.includes('Cooking') || k.includes('Blast')) delete this._cache[k];
      }
    } else if (act.includes('storage') || act.includes('pack')) {
      for (const k in this._cache) {
        if (k.includes('StockBatches') || k.includes('Cooking') || k.includes('Packing')) delete this._cache[k];
      }
    }
  },

  async execute(action, payload = {}) {
    // Route temperature-specific actions to dedicated TEMP_API_URL if configured
    const isTempAction = action.toLowerCase().includes('temperature') || action === 'initTemperatureSheets';
    const isSiteOrderAction = action === 'getSiteOrders' || action === 'getOrders';

    let targetApiUrl = (CLS_CONFIG.GAS_API_URL || '').trim();
    if (isTempAction && CLS_CONFIG.TEMP_API_URL && CLS_CONFIG.TEMP_API_URL.trim().length > 10) {
      targetApiUrl = CLS_CONFIG.TEMP_API_URL.trim();
    } else if (isSiteOrderAction && CLS_CONFIG.SITE_ORDERS_API_URL && CLS_CONFIG.SITE_ORDERS_API_URL.trim().length > 10) {
      targetApiUrl = CLS_CONFIG.SITE_ORDERS_API_URL.trim();
    }

    const useLive = Boolean(targetApiUrl && targetApiUrl.length > 10);
    const isReadAction = action.startsWith('get') || action === 'ping' || action === 'initDatabase';

    // Invalidate relevant cache on mutations
    if (!isReadAction) {
      this._invalidateCacheForWrite(action);
    }

    // Check fast cache for read actions to ensure instant UI rendering
    const cacheKey = this._getCacheKey(action, payload);
    if (isReadAction && this._cache[cacheKey]) {
      const entry = this._cache[cacheKey];
      if (Date.now() - entry.time < this._cacheTtlMs) {
        return entry.data;
      }
    }

    // If saving temperature, record locally first for instant responsiveness
    if (action === 'saveTemperature' || action === 'saveTemperatureRecord') {
      try {
        this.executeMock('saveTemperature', payload);
      } catch (e) {
        console.warn('Local mirror save error:', e);
      }
    }

    if (useLive) {
      const preferGetFirst = isTempAction || isReadAction;

      const fetchWithTimeout = async (url, options = {}, timeoutMs = 15000) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        try {
          const response = await fetch(url, { ...options, signal: controller.signal });
          clearTimeout(timeoutId);
          return response;
        } catch (err) {
          clearTimeout(timeoutId);
          throw err;
        }
      };

      const tryGet = async () => {
        const queryParams = new URLSearchParams();
        const requestAction = (action === 'getSiteOrders') ? 'getOrders' : action;
        queryParams.append('action', requestAction);
        if (payload && typeof payload === 'object') {
          queryParams.append('payload', JSON.stringify(payload));
          for (const [k, v] of Object.entries(payload)) {
            if (v !== undefined && v !== null && typeof v !== 'object') {
              queryParams.append(k, String(v));
            }
          }
        }
        const response = await fetchWithTimeout(`${targetApiUrl}?${queryParams.toString()}`, {
          method: 'GET',
          redirect: 'follow'
        }, 15000);
        if (response.ok) {
          const json = await response.json();
          return json;
        }
        throw new Error(`GET request failed with status: ${response.status}`);
      };

      const tryPost = async () => {
        const requestPayload = { action, ...payload };
        const response = await fetchWithTimeout(targetApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(requestPayload),
          redirect: 'follow'
        }, 15000);
        if (response.ok) {
          const json = await response.json();
          return json;
        }
        throw new Error(`POST request failed with status: ${response.status}`);
      };

      let liveRes = null;
      if (preferGetFirst) {
        try {
          liveRes = await tryGet();
        } catch (getErr) {
          console.warn(`GET transport failed for action "${action}", trying POST:`, getErr);
          try {
            liveRes = await tryPost();
          } catch (postErr) {
            console.error(`All cloud database transports failed for action "${action}":`, postErr);
          }
        }
      } else {
        try {
          liveRes = await tryPost();
        } catch (postErr) {
          console.warn(`POST transport failed for action "${action}", trying GET:`, postErr);
          try {
            liveRes = await tryGet();
          } catch (getErr) {
            console.error(`All cloud database transports failed for action "${action}":`, getErr);
          }
        }
      }

      if (liveRes && liveRes.success) {
        if (isSiteOrderAction && Array.isArray(liveRes.orders)) {
          try {
            localStorage.setItem('cls_site_orders_cache', JSON.stringify(liveRes.orders));
          } catch (e) {}
        }
        if (isReadAction) {
          this._cache[cacheKey] = { time: Date.now(), data: liveRes };
        }
        return liveRes;
      }

      if (!CLS_CONFIG.USE_MOCK_FALLBACK) {
        throw new Error('Could not connect to Cloud Database. Please check your internet connection.');
      }
    }

    if (!CLS_CONFIG.USE_MOCK_FALLBACK) {
      throw new Error('Cloud Database Web API URL is not configured.');
    }

    const mockResult = this.executeMock(action, payload);
    if (isReadAction && mockResult) {
      this._cache[cacheKey] = { time: Date.now(), data: mockResult };
    }
    return mockResult;
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

      case 'saveGoodsIn':
      case 'saveGoodsInBatch': {
        const rawRecords = payload.records || payload.record || payload;
        const records = Array.isArray(rawRecords) ? rawRecords : [rawRecords];
        const results = [];
        const timestamp = new Date().toISOString();

        for (const record of records) {
          if (!record) continue;
          const isRejected = (record.reject === 'Yes' || record.reject === true);
          const productId = CLS_MockStore.getNextProductId();
          const batchCode = CLS_MockStore.generateBatchCode(record.date);

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
            vehicleTemperature: record.vehicleTemperature || '',
            pestFree: record.freeFromPests || record.pestFree || 'Yes',
            packagingCondition: record.productPackaging || record.packagingCondition || 'Good',
            supplierBatchCode: record.supplierBatchCode || '',
            bestBefore: record.productBestBefore || record.bestBefore || '',
            healthMark: record.healthMark || '',
            coa: record.certificateOfAnalysis || record.coa || 'Yes',
            notes: record.notes || '',
            receivedBy: record.receivedBy || record.personName || 'Staff',
            timestamp
          };

          if (isRejected) {
            newRecord.reasonForRejection = record.reasonForRejection || 'Rejected during receiving inspection';
            newRecord.rejectedBy = record.receivedBy || record.personName || 'Staff';
            data.rejectedGoods.unshift(newRecord);
          } else {
            data.goodsIn.unshift(newRecord);
          }

          results.push({
            productId,
            batchCode,
            productName: newRecord.productName,
            category: newRecord.category,
            quantity: newRecord.quantity,
            unit: newRecord.unit,
            isRejected
          });
        }

        CLS_MockStore.saveData(data);

        return {
          success: true,
          count: results.length,
          savedRecords: results,
          productId: results.length === 1 ? results[0].productId : results.map(r => r.productId).join(', '),
          batchCode: results.length > 0 ? results[0].batchCode : '',
          isRejected: results.some(r => r.isRejected),
          message: `Successfully saved ${results.length} product(s) into database.`
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

        // 1. Gather all Inbound Goods-In records
        (data.goodsIn || []).forEach(g => {
          const prodId = String(g.productId || '').trim();
          const batchCode = String(g.batchCode || '').trim();
          const key = `${prodId}_${batchCode}_GoodsIn`;
          if (prodId && batchCode && !seen[key]) {
            seen[key] = true;
            stockBatches.push({
              productId: prodId,
              batchCode: batchCode,
              productName: g.productName || '',
              category: g.category || '',
              storageArea: 'Goods In Stock',
              date: g.date || '',
              quantity: g.quantity || '',
              unit: g.unit || 'KG',
              supplierBatchCode: g.supplierBatchCode || '',
              supplier: g.supplier || ''
            });
          }
        });

        // 2. Gather Storage records
        (data.storage || []).forEach(s => {
          const prodId = String(s.productId || '').trim();
          const batchCode = String(s.batchCode || '').trim();
          const key = `${prodId}_${batchCode}_Storage`;
          if (prodId && batchCode && !seen[key]) {
            seen[key] = true;
            stockBatches.push({
              productId: prodId,
              batchCode: batchCode,
              productName: s.productName || '',
              category: s.category || '',
              storageArea: s.storageArea || 'Storage',
              date: s.date || '',
              quantity: s.quantity || '',
              unit: s.unit || 'KG'
            });
          }
        });

        // 3. Fallback sample items if empty
        if (stockBatches.length === 0) {
          const fallbackToday = new Date().toISOString().slice(0, 10);
          const fallbackCode = fallbackToday.split('-').reverse().map(x => x.length === 4 ? x.slice(-2) : x).join('');
          stockBatches.push(
            { productId: 'CLS-000027', batchCode: fallbackCode, date: fallbackToday, productName: 'Boneless Skinless Chicken Thighs', storageArea: 'Chiller 1', quantity: '50 KG' },
            { productId: 'CLS-000008', batchCode: fallbackCode, date: fallbackToday, productName: 'Fresh Chicken Breast Fillets', storageArea: 'Chiller 1', quantity: '80 KG' },
            { productId: 'CLS-000018', batchCode: fallbackCode, date: fallbackToday, productName: 'Atlantic Salmon Fresh Fillets', storageArea: 'Chiller 3', quantity: '35 KG' },
            { productId: 'CLS-000030', batchCode: fallbackCode, date: fallbackToday, productName: 'British Lamb Diced Leg', storageArea: 'Chiller 1', quantity: '40 KG' },
            { productId: 'CLS-000001', batchCode: fallbackCode, date: fallbackToday, productName: 'Aged Basmati Rice Long Grain', storageArea: 'Dry Room', quantity: '120 KG' },
            { productId: 'CLS-000004', batchCode: fallbackCode, date: fallbackToday, productName: 'Roasted Curry Powder', storageArea: 'Dry Room', quantity: '30 KG' },
            { productId: 'CLS-000005', batchCode: fallbackCode, date: fallbackToday, productName: 'Tomato Paste Double Concentrate', storageArea: 'Dry Room', quantity: '50 KG' },
            { productId: 'CLS-000006', batchCode: fallbackCode, date: fallbackToday, productName: 'Vegetable Cooking Oil Pure', storageArea: 'Dry Room', quantity: '100 Litre' },
            { productId: 'CLS-000007', batchCode: fallbackCode, date: fallbackToday, productName: 'Fine Pure Sea Salt', storageArea: 'Dry Room', quantity: '60 KG' },
            { productId: 'CLS-000009', batchCode: fallbackCode, date: fallbackToday, productName: 'Crushed Black Pepper', storageArea: 'Dry Room', quantity: '25 KG' },
            { productId: 'PRD-503', batchCode: fallbackCode, date: fallbackToday, productName: 'Frozen Mixed Vegetables', storageArea: 'Freezer 1', quantity: '70 KG' },
            { productId: 'CLS-000037', batchCode: fallbackCode, date: fallbackToday, productName: 'Brown Onions Sliced Grade A', storageArea: 'Vegetable Chiller', quantity: '50 KG' },
            { productId: 'CLS-000040', batchCode: fallbackCode, date: fallbackToday, productName: 'Grade A Carrots Diced', storageArea: 'Vegetable Chiller', quantity: '45 KG' },
            { productId: 'CLS-000041', batchCode: fallbackCode, date: fallbackToday, productName: 'Maris Piper Potatoes Diced', storageArea: 'Dry Room', quantity: '90 KG' },
            { productId: 'CLS-000047', batchCode: fallbackCode, date: fallbackToday, productName: 'Pasteurised Whole Liquid Eggs', storageArea: 'Chiller 2', quantity: '100 L' },
            { productId: 'CLS-000050', batchCode: fallbackCode, date: fallbackToday, productName: 'Fresh Double Cream 48%', storageArea: 'Chiller 2', quantity: '60 L' },
            { productId: 'CLS-000049', batchCode: fallbackCode, date: fallbackToday, productName: 'Mature Cheddar Cheese Grated', storageArea: 'Chiller 2', quantity: '30 KG' },
            { productId: 'CLS-000036', batchCode: fallbackCode, date: fallbackToday, productName: 'Red Onions Diced 10mm', storageArea: 'Chiller 1', quantity: '45 KG' }
          );
        }

        // 4. CRITICAL: Sort ALL stock batches strictly chronologically descending (LATEST FIRST)
        stockBatches.sort((a, b) => {
          const tA = (typeof CLS_Common !== 'undefined' && CLS_Common.parseDateToTimestamp)
            ? CLS_Common.parseDateToTimestamp(a.date || a.batchCode)
            : (new Date(a.date).getTime() || 0);
          const tB = (typeof CLS_Common !== 'undefined' && CLS_Common.parseDateToTimestamp)
            ? CLS_Common.parseDateToTimestamp(b.date || b.batchCode)
            : (new Date(b.date).getTime() || 0);
          if (tB !== tA) return tB - tA;
          return String(b.batchCode || '').localeCompare(String(a.batchCode || ''));
        });

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
        const rawList = Array.isArray(payload) ? payload : (payload && payload.records && Array.isArray(payload.records) ? payload.records : [payload && (payload.record || payload)]);
        const records = rawList.filter(function(r) { return r && typeof r === 'object'; });
        data.packing = data.packing || [];
        data.finalRecipeList = data.finalRecipeList || [];
        const timestamp = new Date().toISOString();
        let commonBatch = '';

        records.forEach((rec, idx) => {
          const safeDate = rec.date || rec.packingDate || CLS_Common.formatDateForInput();
          const finalBatchCode = rec.julianCode || rec.finalBatchCode || CLS_MockStore.getNextFinalBatchCode(safeDate);
          if (!commonBatch) commonBatch = finalBatchCode;
          const packingId = rec.packingId || ('PCK-' + String(data.packing.length + 1).padStart(5, '0'));
          const finalProductName = rec.finalProductName || rec.recipeName || rec.productName || 'Meal Product';
          const portionProduce = rec.portionProduce !== undefined ? rec.portionProduce : (rec.packCount || 0);
          const startingTime = rec.startingTime || rec.startTime || '';
          const endingTime = rec.endingTime || rec.endTime || '';
          const startTemp = rec.startingTemperature || rec.startRoomTemp || '';
          const endTemp = rec.endingTemperature || rec.endRoomTemp || '';
          const qualityCheck = rec.qualityCheck || rec.weightCheck || 'Pass (✔️)';
          const staffName = Array.isArray(rec.staffNames) ? rec.staffNames.join(', ') : (rec.staffName || rec.staffNames || '');

          // 1. Sheet: Packing_Process record
          const newPackingRecord = {
            packingId,
            recordId: packingId,
            julianCode: finalBatchCode,
            finalBatchCode,
            date: safeDate,
            finalProductName,
            recipeName: finalProductName,
            portionProduce,
            packCount: portionProduce,
            startingTime: CLS_Common.formatTimeOnly(startingTime),
            startTime: CLS_Common.formatTimeOnly(startingTime),
            endingTime: CLS_Common.formatTimeOnly(endingTime),
            endTime: CLS_Common.formatTimeOnly(endingTime),
            startingTemperature: startTemp,
            startRoomTemp: startTemp,
            endingTemperature: endTemp,
            endRoomTemp: endTemp,
            qualityCheck,
            weightCheck: qualityCheck,
            goldStandard: qualityCheck,
            labelCheck: qualityCheck,
            staffName,
            staffNames: rec.staffNames || (staffName ? staffName.split(',').map(s => s.trim()) : []),
            notes: rec.notes || '',
            cycle: rec.cycle || 'Cycle 3',
            mealService: (rec.mealService && rec.mealService !== 'Single-Shot Packing') ? rec.mealService : 'YC LDN',
            choiceNum: rec.choiceNum || 'Choice 01',
            recipeCode: rec.choiceNum || rec.recipeCode || 'Choice 01',
            recipeCount: subRecipes.length,
            recipes: rec.recipes || [],
            timestamp
          };
          data.packing.unshift(newPackingRecord);

          // 2. Calculate Expire Date: exactly 5 days after packing date
          let expireDate = '';
          if (safeDate) {
            const parts = safeDate.split('-');
            if (parts.length === 3) {
              const d = new Date(Date.UTC(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10) + 5));
              expireDate = d.toISOString().slice(0, 10);
            } else {
              const d = new Date(safeDate);
              d.setDate(d.getDate() + 5);
              expireDate = d.toISOString().slice(0, 10);
            }
          }

          // 3. Sheet: Final_Recipe_List records
          const subRecipes = Array.isArray(rec.recipes) && rec.recipes.length > 0
            ? rec.recipes
            : [finalProductName];

          // Lookup matching cooking batch or fallback to date cooking batch code
          const dateCookingBatch = CLS_Common.calculateBatchCodeFromInput(safeDate);
          const srvClean = String(rec.mealService || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          const cycClean = String(rec.cycle || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          const chClean = String(rec.choiceNum || rec.choice || '').toLowerCase().replace(/[^a-z0-9]/g, '');

          subRecipes.forEach(sub => {
            const rName = typeof sub === 'string' ? sub : (sub.recipeName || sub.name || finalProductName);
            let cBatch = (typeof sub === 'object' && sub.cookingBatchCode) ? sub.cookingBatchCode : null;
            if (!cBatch) {
              const rClean = rName.toLowerCase().trim();
              let bestScore = -1;
              let bestBatch = '';
              const cookingList = data.cooking || [];

              for (let ci = 0; ci < cookingList.length; ci++) {
                const c = cookingList[ci];
                const cName = String(c.recipeName || c.productName || '').toLowerCase().trim();
                const bCode = String(c.batchCode || c.cookingBatchId || '').trim();
                if (!bCode) continue;

                const nameMatch = cName.includes(rClean) || rClean.includes(cName);
                if (!nameMatch) continue;

                const cSrv = String(c.mealService || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                const cCyc = String(c.cycle || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                const cChoice = String(c.choiceNum || c.choice || c.recipeCode || '').toLowerCase().replace(/[^a-z0-9]/g, '');

                let score = 20;
                if (cName === rClean) score += 20;
                if (srvClean && cSrv && (cSrv.includes(srvClean) || srvClean.includes(cSrv))) score += 20;
                if (cycClean && cCyc && (cCyc.includes(cycClean) || cycClean.includes(cCyc))) score += 20;
                if (chClean && cChoice && (cChoice.includes(chClean) || chClean.includes(cChoice))) score += 20;

                if (score > bestScore) {
                  bestScore = score;
                  bestBatch = bCode;
                  if (score >= 100) break;
                }
              }
              cBatch = bestBatch || dateCookingBatch;
            }

            data.finalRecipeList.unshift({
              packingId,
              julianCode: finalBatchCode,
              recipeName: rName,
              cookingBatchCode: cBatch,
              expireDate,
              stampTime: timestamp,
              timestamp
            });
          });
        });

        CLS_MockStore.saveData(data);
        return {
          success: true,
          count: records.length,
          finalBatchCode: commonBatch,
          packingId: records[0] ? ('PCK-' + String(data.packing.length).padStart(5, '0')) : '',
          message: records.length === 1 
            ? `Saved ${records[0].finalProductName || records[0].recipeName || 'Meal'} to Packing Process & Final Recipe List! (Julian: ${commonBatch})`
            : `Successfully saved ${records.length} packed meals with Julian Batch: ${commonBatch}`
        };
      }

      case 'getFinalRecipeList': {
        const pId = payload && payload.packingId ? String(payload.packingId).trim() : null;
        const jCode = payload && payload.julianCode ? String(payload.julianCode).trim() : null;
        let list = data.finalRecipeList || [];
        if (pId) list = list.filter(r => r.packingId === pId);
        if (jCode) list = list.filter(r => r.julianCode === jCode);
        return { success: true, count: list.length, data: list };
      }

      case 'getPackingStaff': {
        return {
          success: true,
          staff: data.packingStaff || CLS_MockStore.getDefaultStaff()
        };
      }

      case 'getFinishedProducts': {
        const date = payload.date ? String(payload.date).trim() : null;
        const airline = payload.airline ? String(payload.airline).trim().toLowerCase() : null;
        const search = payload.search ? String(payload.search).toLowerCase().trim() : null;

        let filtered = (data.packing || []).map(item => {
          const pDate = item.date || item.packingDate || '';
          let useBy = item.useByDate || '';
          if (!useBy && pDate) {
            const d = new Date(pDate);
            d.setDate(d.getDate() + 2);
            useBy = d.toISOString().slice(0, 10);
          }
          return {
            julianBatchCode: item.finalBatchCode || '',
            batchCode: item.finalBatchCode || '',
            finalBatchCode: item.finalBatchCode || '',
            recipeCode: item.recipeCode || '',
            recipeName: item.recipeName || item.productName || '',
            productName: item.recipeName || item.productName || '',
            mealService: item.mealService || '',
            cycle: item.cycle || 'Cycle 1',
            flightNumber: item.flightNumber || item.flightNo || '',
            airlines: item.airlines || item.airlineName || '',
            packCount: item.packCount || '',
            quantity: item.packCount || '',
            packingDate: pDate,
            date: pDate,
            useByDate: useBy,
            status: 'Ready for Dispatch'
          };
        });

        if (date) {
          filtered = filtered.filter(item => item.date === date || (item.date && item.date.replace(/-/g, '/') === date.replace(/-/g, '/')));
        }
        if (airline) {
          filtered = filtered.filter(item => String(item.airlines || '').toLowerCase().includes(airline));
        }
        if (search) {
          filtered = filtered.filter(item => 
            `${item.julianBatchCode || ''} ${item.recipeCode || ''} ${item.recipeName || ''} ${item.flightNumber || ''} ${item.airlines || ''}`.toLowerCase().includes(search)
          );
        }
        return { success: true, count: filtered.length, data: filtered };
      }

      case 'getRecipes': {
        const cycle = payload.cycle || 'Cycle 1';
        const mealService = payload.mealService ? String(payload.mealService).trim() : '';
        let list = CLS_MockStore.getRecipesList(cycle).map(r => ({
          ...r,
          ingredients: CLS_MockStore.getRecipeIngredients(cycle, r.recipeId)
        }));
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
        if (cycle && cycle !== 'All' && cycle !== 'all') {
          filtered = filtered.filter(item => item.cycle === cycle || String(item.cycle || '').includes(cycle));
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
            `${item.packingId || ''} ${item.julianCode || ''} ${item.finalBatchCode || ''} ${item.recordId || ''} ${item.finalProductName || ''} ${item.recipeName || ''} ${item.recipeCode || ''} ${item.mealService || ''} ${item.cookingBatchCode || ''} ${item.staffNames || ''} ${item.staffName || ''}`.toLowerCase().includes(search)
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

      case 'getProductCategoriesMaster': {
        const filterCat = payload && payload.category ? String(payload.category).trim().toUpperCase() : null;
        let items = data.productCategoriesMaster || [];
        if (filterCat && filterCat !== 'ALL') {
          items = items.filter(i => String(i.category || '').toUpperCase() === filterCat);
        }
        return { success: true, items: items.filter(i => (i.active || 'Yes') === 'Yes') };
      }

      case 'addProductCategoryItem': {
        const category = String(payload.category || 'DRY ITEMS').trim().toUpperCase();
        const productName = String(payload.productName || '').trim();
        const defaultUnit = String(payload.defaultUnit || payload.unit || 'KG').trim();

        if (!productName) {
          return { success: false, error: 'Product Name is required.' };
        }

        if (!data.productCategoriesMaster) {
          data.productCategoriesMaster = CLS_MockStore.getDefaultProductCategories();
        }

        // Check if item exists
        const existing = data.productCategoriesMaster.find(i =>
          i.category.toUpperCase() === category && i.productName.toLowerCase() === productName.toLowerCase()
        );

        if (existing) {
          existing.active = 'Yes';
          existing.defaultUnit = defaultUnit;
          CLS_MockStore.saveData(data);
          return { success: true, message: `Product "${productName}" updated in ${category} master list.`, item: existing };
        }

        const nextNum = data.productCategoriesMaster.length + 1;
        const newItem = {
          itemId: `PRD-${String(nextNum).padStart(3, '0')}`,
          category,
          productName,
          defaultUnit,
          active: 'Yes'
        };

        data.productCategoriesMaster.push(newItem);
        CLS_MockStore.saveData(data);

        return {
          success: true,
          message: `Added "${productName}" to ${category} master database.`,
          item: newItem
        };
      }

      case 'deleteProductCategoryItem': {
        const itemId = payload.itemId ? String(payload.itemId).trim() : null;
        const productName = payload.productName ? String(payload.productName).trim().toLowerCase() : null;
        const category = payload.category ? String(payload.category).trim().toUpperCase() : null;

        if (!data.productCategoriesMaster) {
          data.productCategoriesMaster = CLS_MockStore.getDefaultProductCategories();
        }

        const initialLen = data.productCategoriesMaster.length;
        data.productCategoriesMaster = data.productCategoriesMaster.filter(i => {
          if (itemId && i.itemId === itemId) return false;
          if (productName && i.productName.toLowerCase() === productName && (!category || i.category.toUpperCase() === category)) return false;
          return true;
        });

        CLS_MockStore.saveData(data);

        return {
          success: true,
          message: `Product deleted from master categories database.`,
          deleted: initialLen > data.productCategoriesMaster.length
        };
      }

      case 'updateProductCategoryItem': {
        const itemId = String(payload.itemId || '').trim();
        if (!itemId) return { success: false, error: 'Missing Item ID.' };

        if (!data.productCategoriesMaster) {
          data.productCategoriesMaster = CLS_MockStore.getDefaultProductCategories();
        }

        const item = data.productCategoriesMaster.find(i => i.itemId === itemId);
        if (!item) return { success: false, error: `Product item ${itemId} not found.` };

        if (payload.category) item.category = String(payload.category).trim().toUpperCase();
        if (payload.productName) item.productName = String(payload.productName).trim();
        if (payload.defaultUnit) item.defaultUnit = String(payload.defaultUnit).trim();
        if (payload.active) item.active = String(payload.active).trim();

        CLS_MockStore.saveData(data);

        return { success: true, message: `Product item ${itemId} updated successfully.`, item };
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

      case 'saveTemperature':
      case 'saveTemperatureRecord': {
        const record = payload.record || payload;
        const normalizeUnit = (raw) => {
          if (!raw) return 'Vegetable Chiller';
          const s = String(raw).trim().toLowerCase();
          if (s.includes('veg')) return 'Vegetable Chiller';
          if (s.includes('dairy')) return 'Dairy Product Chiller';
          if (s.includes('meat') || s.includes('fish')) return 'Meat and Fish Chiller';
          if (s.includes('hold')) return 'Holding Chiller';
          if (s.includes('dispatch')) return 'Dispatched Chiller';
          if (s.includes('freeze')) return 'Freezer';
          if (s.includes('chiller 1') || s.includes('chiller1')) return 'Vegetable Chiller';
          if (s.includes('chiller 2') || s.includes('chiller2')) return 'Dairy Product Chiller';
          if (s.includes('chiller 3') || s.includes('chiller3')) return 'Meat and Fish Chiller';
          return String(raw).trim() || 'Vegetable Chiller';
        };

        const unitName = normalizeUnit(record.unitName || record.chiller || '');
        const day = parseInt(record.day, 10) || new Date().getDate();
        const timeSlotRaw = String(record.timeSlot || record.time || 'AM').toUpperCase().trim();
        const timeSlot = timeSlotRaw.includes('PM') || timeSlotRaw.includes('EVENING') || timeSlotRaw.startsWith('12') || timeSlotRaw.startsWith('13') || timeSlotRaw.startsWith('14') || timeSlotRaw.startsWith('15') || timeSlotRaw.startsWith('16') || timeSlotRaw.startsWith('17') || timeSlotRaw.startsWith('18') ? 'PM' : 'AM';
        
        let monthYear = String(record.monthYear || record.month || '').trim();
        const now = new Date();
        if (!monthYear) {
          monthYear = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        }

        let reqYear = now.getFullYear();
        let reqMonthNum = now.getMonth() + 1;
        if (monthYear.includes('-')) {
          const parts = monthYear.split('-');
          if (parts.length >= 2) {
            reqYear = parseInt(parts[0], 10) || reqYear;
            reqMonthNum = parseInt(parts[1], 10) || reqMonthNum;
          }
        } else if (monthYear.includes('/')) {
          const parts = monthYear.split('/');
          if (parts.length >= 2) {
            reqMonthNum = parseInt(parts[0], 10) || reqMonthNum;
            reqYear = parseInt(parts[1], 10) || reqYear;
          }
        }

        const unitsMap = {
          'Vegetable Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Dairy Product Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Meat and Fish Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Holding Chiller': { area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Dispatched Chiller': { area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Freezer': { area: 'Freezer', target: '≤ -18.0°C', max: '≤ -16.0°C', maxVal: -16.0, isFreezer: true }
        };

        const spec = unitsMap[unitName] || { area: 'Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false };
        const cleanG = String(record.gaugeTemp !== undefined ? record.gaugeTemp : '').replace(/[^\d\.\-\+]/g, '').trim();
        const cleanI = String(record.internalTemp !== undefined ? record.internalTemp : (record.productTemp !== undefined ? record.productTemp : '')).replace(/[^\d\.\-\+]/g, '').trim();
        
        const gaugeTemp = cleanG !== '' ? parseFloat(cleanG) : '';
        const internalTemp = cleanI !== '' ? parseFloat(cleanI) : '';
        
        let status = 'PASS';
        if ((gaugeTemp !== '' && gaugeTemp > spec.maxVal) || (internalTemp !== '' && internalTemp > spec.maxVal)) {
          status = 'CRITICAL LIMIT EXCEEDED';
        } else if (gaugeTemp === '' && internalTemp === '') {
          status = '';
        }

        data.temperature = data.temperature || [];
        const existingIdx = data.temperature.findIndex(t => 
          normalizeUnit(t.unitName) === unitName && 
          (String(t.monthYear).includes(`${reqYear}-${String(reqMonthNum).padStart(2, '0')}`) || String(t.monthYear).trim() === monthYear) && 
          parseInt(t.day, 10) === day && 
          String(t.timeSlot).toUpperCase().trim() === timeSlot
        );

        let recordId = '';
        const dateStr = record.date ? String(record.date).trim() : `${String(day).padStart(2, '0')}/${String(reqMonthNum).padStart(2, '0')}/${reqYear}`;

        if (existingIdx !== -1) {
          recordId = data.temperature[existingIdx].recordId;
          data.temperature[existingIdx] = {
            ...data.temperature[existingIdx],
            monthYear: `${reqYear}-${String(reqMonthNum).padStart(2, '0')}`,
            day,
            date: dateStr,
            timeSlot,
            unitName,
            gaugeTemp,
            internalTemp,
            actionTaken: String(record.actionTaken || record.action || '').trim(),
            nameSign: String(record.nameSign || record.operator || record.name || '').trim(),
            status,
            updatedAt: new Date().toISOString()
          };
        } else {
          recordId = `TMP-${unitName.replace(/[^A-Za-z0-9]/g, '').slice(0, 3).toUpperCase()}-${String(data.temperature.length + 1).padStart(4, '0')}`;
          data.temperature.push({
            recordId,
            monthYear: `${reqYear}-${String(reqMonthNum).padStart(2, '0')}`,
            day,
            date: dateStr,
            timeSlot,
            unitName,
            area: spec.area,
            gaugeTemp,
            internalTemp,
            target: spec.target,
            criticalMax: spec.max,
            actionTaken: String(record.actionTaken || record.action || '').trim(),
            nameSign: String(record.nameSign || record.operator || record.name || '').trim(),
            status,
            timestamp: new Date().toISOString()
          });
        }

        CLS_MockStore.saveData(data);
        return {
          success: true,
          recordId,
          unitName,
          monthYear: `${reqYear}-${String(reqMonthNum).padStart(2, '0')}`,
          day,
          date: dateStr,
          timeSlot,
          gaugeTemp,
          internalTemp,
          actionTaken: String(record.actionTaken || record.action || '').trim(),
          nameSign: String(record.nameSign || record.operator || record.name || '').trim(),
          status,
          message: `Temperature record for ${unitName} (Day ${day} ${timeSlot}) saved.`
        };
      }

      case 'getTemperatureReportData':
      case 'getTemperatureData': {
        const normalizeUnit = (raw) => {
          if (!raw) return 'Vegetable Chiller';
          const s = String(raw).trim().toLowerCase();
          if (s.includes('veg')) return 'Vegetable Chiller';
          if (s.includes('dairy')) return 'Dairy Product Chiller';
          if (s.includes('meat') || s.includes('fish')) return 'Meat and Fish Chiller';
          if (s.includes('hold')) return 'Holding Chiller';
          if (s.includes('dispatch')) return 'Dispatched Chiller';
          if (s.includes('freeze')) return 'Freezer';
          if (s.includes('chiller 1') || s.includes('chiller1')) return 'Vegetable Chiller';
          if (s.includes('chiller 2') || s.includes('chiller2')) return 'Dairy Product Chiller';
          if (s.includes('chiller 3') || s.includes('chiller3')) return 'Meat and Fish Chiller';
          return String(raw).trim() || 'Vegetable Chiller';
        };

        const unitName = normalizeUnit(payload.unitName || payload.chiller || 'Vegetable Chiller');
        const unitsMap = {
          'Vegetable Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Dairy Product Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Meat and Fish Chiller': { area: 'Low Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Holding Chiller': { area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Dispatched Chiller': { area: 'High Risk Area Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false },
          'Freezer': { area: 'Freezer', target: '≤ -18.0°C', max: '≤ -16.0°C', maxVal: -16.0, isFreezer: true }
        };
        const spec = unitsMap[unitName] || { area: 'Chiller', target: '≤ 5.0°C', max: '≤ 8.0°C', maxVal: 8.0, isFreezer: false };
        
        const now = new Date();
        let requestedMonth = String(payload.monthYear || payload.month || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`).trim();
        
        let reqYear = now.getFullYear();
        let reqMonthNum = now.getMonth() + 1;
        if (requestedMonth.includes('-')) {
          const parts = requestedMonth.split('-');
          if (parts.length >= 2) {
            reqYear = parseInt(parts[0], 10) || reqYear;
            reqMonthNum = parseInt(parts[1], 10) || reqMonthNum;
          }
        } else if (requestedMonth.includes('/')) {
          const parts = requestedMonth.split('/');
          if (parts.length >= 2) {
            reqMonthNum = parseInt(parts[0], 10) || reqMonthNum;
            reqYear = parseInt(parts[1], 10) || reqYear;
          }
        }

        const daysMap = {};
        for (let d = 1; d <= 31; d++) {
          daysMap[d] = {
            day: d,
            AM: { gaugeTemp: '', internalTemp: '', actionTaken: '', nameSign: '', status: '', date: '' },
            PM: { gaugeTemp: '', internalTemp: '', actionTaken: '', nameSign: '', status: '', date: '' }
          };
        }

        let totalReadings = 0;
        let passedReadings = 0;
        let alertReadings = 0;

        const allTemps = data.temperature || [];
        allTemps.forEach(t => {
          const tUnit = normalizeUnit(t.unitName);
          if (tUnit === unitName) {
            let tYear = null;
            let tMonth = null;
            if (t.monthYear) {
              const mStr = String(t.monthYear).trim();
              if (mStr.includes('-')) {
                const parts = mStr.split('-');
                tYear = parseInt(parts[0], 10);
                tMonth = parseInt(parts[1], 10);
              } else if (mStr.includes('/')) {
                const parts = mStr.split('/');
                tMonth = parseInt(parts[0], 10);
                tYear = parseInt(parts[1], 10);
              }
            } else if (t.date) {
              const dStr = String(t.date).trim();
              const m1 = dStr.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/);
              if (m1) {
                tMonth = parseInt(m1[2], 10);
                tYear = parseInt(m1[3], 10);
                if (tYear < 100) tYear += 2000;
              }
            }

            const monthMatches = (!tYear || tYear === reqYear) && (!tMonth || tMonth === reqMonthNum);

            if (monthMatches) {
              const d = parseInt(t.day, 10);
              let slotRaw = String(t.timeSlot || 'AM').toUpperCase().trim();
              let slot = slotRaw.includes('PM') || slotRaw.includes('EVENING') || slotRaw.startsWith('12') || slotRaw.startsWith('13') || slotRaw.startsWith('14') || slotRaw.startsWith('15') || slotRaw.startsWith('16') || slotRaw.startsWith('17') || slotRaw.startsWith('18') ? 'PM' : 'AM';

              if (d >= 1 && d <= 31) {
                const gauge = t.gaugeTemp !== undefined && t.gaugeTemp !== '' ? t.gaugeTemp : '';
                const internal = t.internalTemp !== undefined && t.internalTemp !== '' ? t.internalTemp : '';
                let status = t.status || '';
                if (!status && (gauge !== '' || internal !== '')) {
                  status = ((gauge !== '' && gauge > spec.maxVal) || (internal !== '' && internal > spec.maxVal)) ? 'CRITICAL LIMIT EXCEEDED' : 'PASS';
                }

                if (gauge !== '' || internal !== '' || t.actionTaken || t.nameSign) {
                  daysMap[d][slot] = {
                    gaugeTemp: gauge,
                    internalTemp: internal,
                    actionTaken: t.actionTaken || '',
                    nameSign: t.nameSign || '',
                    status: status || 'PASS',
                    date: t.date || `${String(d).padStart(2, '0')}/${String(reqMonthNum).padStart(2, '0')}/${reqYear}`
                  };
                  totalReadings++;
                  if (String(status).includes('EXCEEDED') || status === 'FAIL') {
                    alertReadings++;
                  } else {
                    passedReadings++;
                  }
                }
              }
            }
          }
        });

        const daysList = [];
        for (let d = 1; d <= 31; d++) {
          daysList.push(daysMap[d]);
        }

        return {
          success: true,
          unitName,
          area: spec.area,
          target: spec.target,
          criticalMax: spec.max,
          isFreezer: spec.isFreezer,
          monthYear: requestedMonth,
          days: daysList,
          totalReadings,
          passedReadings,
          alertReadings,
          complianceRate: totalReadings > 0 ? ((passedReadings / totalReadings) * 100).toFixed(1) + '%' : '100%'
        };
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

      case 'getSiteOrders':
      case 'getOrders': {
        const cached = typeof localStorage !== 'undefined' ? localStorage.getItem('cls_site_orders_cache') : null;
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              return { success: true, orders: parsed, mode: 'Cached' };
            }
          } catch (e) {}
        }
        const mockOrdersList = [
          {
            id: "CLS-HAR-20261016-4044",
            site: "Harrow",
            senderName: "Chaminda Fonseka",
            senderEmail: "chamindafonseka@yahoo.com",
            orderDate: "2026-10-16 21:48:05",
            deliveryDate: "2026-10-17",
            status: "Confirmed",
            confirmedAt: "",
            confirmedBy: "",
            notes: "",
            items: [
              { category: "Bun & Short Eat", name: "Mutton roll", unit: "50 Each", quantity: 2, clsSendQty: 2, clsSendWeight: "" },
              { category: "Bun & Short Eat", name: "Chicken roll", unit: "50 Each", quantity: 1, clsSendQty: 1, clsSendWeight: "" },
              { category: "Bun & Short Eat", name: "Egg & Fish Trangle", unit: "40 Each", quantity: 2, clsSendQty: 2, clsSendWeight: "" },
              { category: "Bun & Short Eat", name: "Butter cake", unit: "Tray", quantity: 1, clsSendQty: 1, clsSendWeight: "" },
              { category: "Frozen Food", name: "Frozen coconut", unit: "400g pack", quantity: 5, clsSendQty: 5, clsSendWeight: "" },
              { category: "Cooked Product", name: "Roast chicken", unit: "2 Kg", quantity: 1, clsSendQty: 1, clsSendWeight: "" }
            ]
          },
          {
            id: "CLS-PIN-20261016-5120",
            site: "Pinner",
            senderName: "Niroshan Perera",
            senderEmail: "niroshan.pinner@clsairline.com",
            orderDate: "2026-10-16 22:15:30",
            deliveryDate: "2026-10-17",
            status: "Confirmed",
            confirmedAt: "",
            confirmedBy: "",
            notes: "",
            items: [
              { category: "Bun & Short Eat", name: "Vegetable Rotti", unit: "40 Each", quantity: 2, clsSendQty: 2, clsSendWeight: "" },
              { category: "Bun & Short Eat", name: "Fish cutlet", unit: "50 Each", quantity: 3, clsSendQty: 3, clsSendWeight: "" },
              { category: "Alcohol", name: "Lion Lager 330ml", unit: "24 Cans", quantity: 2, clsSendQty: 2, clsSendWeight: "" },
              { category: "Cooked Product", name: "Chicken Curry", unit: "2 Kg", quantity: 2, clsSendQty: 2, clsSendWeight: "" },
              { category: "Dry Food and Spices", name: "Basmati Rice 20kg", unit: "Bag", quantity: 1, clsSendQty: 1, clsSendWeight: "" }
            ]
          }
        ];

        const reqSite = payload && payload.site ? String(payload.site).trim() : 'ALL';
        const filteredMock = (reqSite === 'ALL' || !reqSite)
          ? mockOrdersList
          : mockOrdersList.filter(o => o.site.toLowerCase() === reqSite.toLowerCase());

        return {
          success: true,
          orders: filteredMock,
          mode: 'Mock Store (Harrow & Pinner Linked)'
        };
      }

      default:
        return { success: false, error: 'Unknown action: ' + action };
    }
  },

  async getSiteOrders(options = {}) {
    return this.execute('getSiteOrders', options);
  }
};

if (typeof window !== 'undefined') {
  window.CLS_MockStore = CLS_MockStore;
  window.CLS_API = CLS_API;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLS_MockStore, CLS_API };
}
