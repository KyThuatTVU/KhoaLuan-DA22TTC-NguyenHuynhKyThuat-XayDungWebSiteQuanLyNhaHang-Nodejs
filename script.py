import re

with open('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('\/categories', '\/menu/flavors')
text = text.replace('danh m?c', 'kh?u v?')
text = text.replace('Danh m?c', 'Kh?u v?')
text = text.replace('Danh M?c', 'Kh?u V?')
text = text.replace('loadCategories', 'loadFlavors')
text = text.replace('renderCategories(categories)', 'renderCategories(flavors)')
text = text.replace('categories = data.data', 'flavors = data.data')
text = text.replace('let categories = [];', 'let flavors = [];')
text = text.replace('categoryForm', 'flavorForm')
text = text.replace('filterCategories', 'filterFlavors')
text = text.replace('deleteCategory', 'deleteFlavor')
text = text.replace('editCategory', 'editFlavor')
text = text.replace('openAddModal', 'openAddModal')

# Specifically strip out mo_ta and trang_thai html code block manually if needed.
# Since it's easier, let's just do an empty replace if they exist.
text = re.sub(r'<th[^>]*>Mô T?.*?</th>', '', text, flags=re.DOTALL)
text = re.sub(r'<th[^>]*>Tr?ng Thái.*?</th>', '', text, flags=re.DOTALL)
text = re.sub(r'<td[^>]*>.*?mo_ta.*?</td>', '', text, flags=re.DOTALL)
text = re.sub(r'<td[^>]*>.*?trang_thai.*?</td>', '', text, flags=re.DOTALL)
text = re.sub(r'<div class="mb-4">.*?<label.*?Mô t?.*?</textarea>.*?</div>', '', text, flags=re.DOTALL)
text = re.sub(r'<div class="mb-4">.*?<label.*?Tr?ng thái.*?</select>.*?</div>', '', text, flags=re.DOTALL)

with open('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'w', encoding='utf-8') as f:
    f.write(text)
