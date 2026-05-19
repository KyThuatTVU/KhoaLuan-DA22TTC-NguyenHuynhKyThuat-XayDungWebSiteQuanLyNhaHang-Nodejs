const fs = require('fs');
let txt = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', 'utf-8');

txt = txt.replace(/'categories\.html': \['xem_menu'\],/g, "'categories.html': ['xem_menu'],\n        'flavors.html': ['xem_menu'],");
fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', txt, 'utf-8');
