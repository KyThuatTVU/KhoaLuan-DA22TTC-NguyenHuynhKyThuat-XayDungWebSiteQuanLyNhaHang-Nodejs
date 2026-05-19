const fs = require('fs');
let html = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'utf-8');

html = html.replace(/ChÆ°a cÃ³ kháº©u vá»‹ nÃo/g, 'Chưa có khẩu vị nào');
html = html.replace(/ThÃªm kháº©u vá»‹ má»›i/g, 'Thêm Khẩu Vị Mới');
html = html.replace(/LÃ¡Â»Â—i tÃ¡ÂºÂ£i danh sÃ¡ÂºÂ¡ch khÃ¡ÂºÂ©u vÃ¡Â»Â‹/g, 'Lỗi tải danh sách khẩu vị');
html = html.replace(/SÃ¡Â»Âa kháº©u vá»‹/g, 'Sửa Khẩu Vị');
html = html.replace(/XÃ³a thÃnh cÃ´ng/g, 'Xóa thành công');

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', html, 'utf-8');
console.log('Fixed text');
