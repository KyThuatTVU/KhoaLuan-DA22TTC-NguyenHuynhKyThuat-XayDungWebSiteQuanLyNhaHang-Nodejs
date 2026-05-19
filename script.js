const fs = require('fs');
let html = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/categories.html', 'utf-8');

html = html.split('Danh M?c').join('Kh?u V?')
           .split('danh m?c').join('kh?u v?')
           .split('Danh m?c').join('Kh?u v?')
           .split('\/categories').join('\/menu/flavors')
           .split('loadCategories').join('loadFlavors')
           .split('renderCategories').join('renderFlavors')
           .split('let categories = []').join('let flavors = []')
           .split('categories = data.data').join('flavors = data.data')
           .split('filterCategories').join('filterFlavors')
           .split('deleteCategory').join('deleteFlavor')
           .split('editCategory').join('editFlavor')
           .split('categoryForm').join('flavorForm')
           .split('category-modal').join('flavor-modal')
           .split('ma_danh_muc').join('id')
           .split('ten_danh_muc').join('ten_thuoc_tinh');

// we need to remove mo_ta and trang_thai
// remove mo_ta form input
html = html.replace(/<div class="space-y-2">[\s]*<label class="text-sm font-medium text-slate-700">Mô t?<\/label>.*?<\/textarea>[\s]*<\/div>/s, '');
// remove trang_thai block
html = html.replace(/<div class="space-y-2">[\s]*<label class="text-sm font-medium text-slate-700">Tr?ng thái<\/label>.*?<\/select>[\s]*<\/div>/s, '');
// remove th columns (Mô t?, Tr?ng thái)
html = html.replace(/<div class="text-sm font-semibold text-slate-500 uppercase">Mô t?<\/div>/g, '');
html = html.replace(/<div class="text-sm font-semibold text-slate-500 uppercase">Tr?ng thái<\/div>/g, '');

// The render function replaces
html = html.replace(/\$\{cat\.mo_ta \|\| ''\}/g, '');
html = html.replace(/<div class="col-span-4 max-w-sm">[\s]*<p class="text-sm text-slate-600 truncate">.*?<\/p>[\s]*<\/div>/s, '');
html = html.replace(/<div class="col-span-2">[\s]*<span class="px-3 py-1 text-xs font-medium rounded-full.*?>.*?<\/span>[\s]*<\/div>/s, '');

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', html);
