const fs = require('fs');
let html = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'utf-8');
const newScript = fs.readFileSync('newScript.js', 'utf-8');

const parts = html.split('<script>');
const top = parts[0];
const bottom = parts[parts.length - 1].split('</script>')[1];

html = top + '<script>\n' + newScript + '\n</script>' + bottom;

html = html.replace(/category-form/g, 'flavor-form');
html = html.replace(/Tên danh m?c/g, 'Tên kh?u v?');
html = html.replace(/T?t c? danh m?c/g, 'T?t c? kh?u v?');

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', html, 'utf-8');
console.log('Fixed exactly!');
