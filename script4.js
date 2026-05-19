const fs = require('fs');
let txt = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', 'utf-8');

txt = txt.replace(
    /<a href="categories\.html"[^>]*>[\s\S]*?<\/a>/,
    match => match + '\n                <a href="flavors.html" class="sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl menu-flavors">\n                    <i class="fas fa-heart w-5"></i><span class="text-sm font-medium">Qu?n lý Kh?u v?</span>\n                </a>'
);
fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', txt, 'utf-8');
console.log(txt.includes('flavors.html'), txt.includes('Qu?n lý Kh?u v?'));
