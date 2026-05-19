const fs = require('fs');
let txt = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', 'utf-8');

const targetStr = '<a href="categories.html" class="sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl menu-categories">\n' +
'                    <i class="fas fa-tags w-5"></i><span class="text-sm font-medium">Danh m?c</span>\n' + 
'                </a>';
const replacementStr = targetStr + '\n' +
'                <a href="flavors.html" class="sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl menu-flavors">\n' +
'                    <i class="fas fa-heart w-5"></i><span class="text-sm font-medium">Qu?n Lý Kh?u V?</span>\n' +
'                </a>';

txt = txt.replace(targetStr, replacementStr);

const p1 = "'categories.html': ['xem_menu'],";
const p2 = p1 + "\n        'flavors.html': ['xem_menu'],";
txt = txt.replace(new RegExp(p1, 'g'), p2);

const map1 = "'products.html': 'products', 'categories.html': 'categories',";
const map2 = "'products.html': 'products', 'categories.html': 'categories', 'flavors.html': 'flavors',";
txt = txt.replace(map1, map2);

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', txt, 'utf-8');
console.log('updated admin-layout.js');
