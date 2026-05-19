import re

with open('d:/KhoaLuanTotNghiep2026/frontend/admin/admin-layout.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add to Sidebar HTML
sidebar_item_flavors = '''<a href="categories.html" class="sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl menu-categories">
                    <i class="fas fa-tags w-5"></i><span class="text-sm font-medium">Danh m\u1ee5c</span>
                </a>
                <a href="flavors.html" class="sidebar-item flex items-center space-x-3 px-4 py-3 rounded-xl menu-flavors">
                    <i class="fas fa-heart w-5"></i><span class="text-sm font-medium">Kh\u1ea9u v\u1ecb</span>
                </a>'''

# Handle UTF-8 safely by doing a string replace based on content:
# First let's find the exact string of categories
import base64
print(text.find('href="categories.html"'))

