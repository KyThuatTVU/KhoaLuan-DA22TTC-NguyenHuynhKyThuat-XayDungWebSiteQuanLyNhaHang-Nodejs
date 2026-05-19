const fs = require('fs');
let html = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'utf-8');

html = html.replace(/<label class="block text-sm font-medium text-slate-700 mb-2">Mô t?<\/label>.*?<\/textarea>/s, '');
html = html.replace(/<label class="block text-sm font-medium text-slate-700 mb-2">Tr?ng thái<\/label>.*?<\/select>/s, '');
html = html.replace(/<th.*?Mô T?<\/th>/s, '');
html = html.replace(/<th.*?Tr?ng Thái<\/th>/s, '');
html = html.replace(/<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate" title="\$\{cat\.mo_ta[^}]*\}">\$\{cat\.mo_ta[^}]*\}<\/td>/s, '');
html = html.replace(/<td class="px-6 py-4 whitespace-nowrap">\s*<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full[^>]*>.*?<\/span>\s*<\/td>/s, '');
html = html.replace('<title>Qu?n lý Danh m?c - Admin</title>', '<title>Qu?n lý Kh?u v? - Admin</title>');
html = html.replace(/danh m?c/gi, 'kh?u v?');
html = html.replace(/Danh m?c/gi, 'Kh?u v?');
html = html.replace(/Danh M?c/gi, 'Kh?u V?');
html = html.replace(/id="mo_ta".*?<\/textarea>/s, '');
html = html.replace(/id="trang_thai".*?<\/select>/s, '');
html = html.replace(/document\.getElementById\('mo_ta'\)\.value = cat\.mo_ta \|\| '';/g, '');
html = html.replace(/document\.getElementById\('trang_thai'\)\.value = cat\.trang_thai;/g, '');
html = html.replace(/mo_ta: document\.getElementById\('mo_ta'\)\.value/g, '');
html = html.replace(/trang_thai: document\.getElementById\('trang_thai'\)\.value/g, '');
html = html.replace(/cat\./g, 'flavor.');

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', html);
