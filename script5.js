const fs = require('fs');
let html = fs.readFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', 'utf-8');

// The JS script block
const newScript = \
        const API_URL = 'http://localhost:3000/api';
        let flavors = [];

        // Ki?m tra quy?n
        const adminData = JSON.parse(localStorage.getItem('admin') || '{}');
        if(!adminData.id) {
            window.location.href = 'dang-nhap-admin.html';
        }

        async function loadFlavors() {
            try {
                const response = await fetch(\\\\/menu/flavors\\\);
                const data = await response.json();
                flavors = data.data || [];
                renderFlavors(flavors);
            } catch (error) {
                console.error('Errors:', error);
                showToast('L?i t?i danh sách kh?u v?', 'error');
            }
        }

        function renderFlavors(items) {
            const container = document.getElementById('categories-container');
            if (items.length === 0) {
                container.innerHTML = '<div class="col-span-full text-center py-12"><i class="fas fa-heart text-4xl text-slate-300 mb-4"></i><p class="text-slate-500">Chua có kh?u v? nào</p></div>';
                return;
            }
            container.innerHTML = items.map(flavor => {
                return \\\
                    <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition border border-slate-100 p-5">
                        <div class="flex justify-between items-start mb-4">
                            <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                                <i class="fas fa-heart text-xl"></i>
                            </div>
                        </div>
                        <h4 class="font-bold text-lg mb-2 text-slate-800">\\\</h4>
                        <div class="flex space-x-2 mt-4">
                            <button onclick="editFlavor(\\\)" class="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-xl hover:bg-blue-100 transition text-sm font-medium"><i class="fas fa-edit mr-1"></i>S?a</button>
                            <button onclick="deleteFlavor(\\\)" class="flex-1 bg-red-50 text-red-600 py-2.5 rounded-xl hover:bg-red-100 transition text-sm font-medium"><i class="fas fa-trash mr-1"></i>Xóa</button>
                        </div>
                    </div>\\\;
            }).join('');
        }

        function openAddModal() {
            document.getElementById('modal-title').textContent = 'Thêm Kh?u V? M?i';
            document.getElementById('flavor-form').reset();
            document.getElementById('id').value = '';
            document.getElementById('flavor-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('flavor-modal').classList.add('hidden');
        }

        function editFlavor(id) {
            const flavor = flavors.find(f => f.id === id);
            if (!flavor) return;

            document.getElementById('modal-title').textContent = 'S?a Kh?u V?';
            document.getElementById('id').value = flavor.id;
            document.getElementById('ten_thuoc_tinh').value = flavor.ten_thuoc_tinh;
            
            document.getElementById('flavor-modal').classList.remove('hidden');
        }

        async function deleteFlavor(id) {
            if (!confirm('B?n có ch?c mu?n xóa kh?u v? này? T?t c? các món an có kh?u v? này s? b? ?nh hu?ng!')) return;
            try {
                const response = await fetch(\\\\/menu/flavors/\\\\, { method: 'DELETE', credentials: 'include' });
                const data = await response.json();
                if (data.success) {
                    showToast('Xóa thành công!', 'success');
                    loadFlavors();
                } else {
                    showToast(data.message || 'L?i khi xóa', 'error');
                }
            } catch (error) {
                console.error(error);
                showToast('L?i h? th?ng', 'error');
            }
        }

        document.getElementById('flavor-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const id = document.getElementById('id').value;
            const payload = {
                ten_thuoc_tinh: document.getElementById('ten_thuoc_tinh').value
            };

            try {
                const url = id ? \\\\/menu/flavors/\\\\ : \\\\/menu/flavors\\\;
                const response = await fetch(url, {
                    method: id ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    credentials: 'include'
                });
                const data = await response.json();
                
                if (data.success) {
                    showToast(id ? 'C?p nh?t thành công!' : 'Thêm thành công!', 'success');
                    closeModal();
                    loadFlavors();
                } else {
                    showToast(data.message || 'L?i luu d? li?u', 'error');
                }
            } catch (error) {
                console.error(error);
                showToast('L?i h? th?ng', 'error');
            }
        });

        function filterFlavors() {
            const searchObj = document.getElementById('search').value.toLowerCase();
            const filtered = flavors.filter(f => f.ten_thuoc_tinh.toLowerCase().includes(searchObj));
            renderFlavors(filtered);
        }
        
        function applyFilters() { filterFlavors(); }
        document.getElementById('search').addEventListener('input', filterFlavors);

        window.onload = loadFlavors;
\;

// Replace script block
html = html.replace(/<script>\s*const API_URL[\s\S]*?<\/script>/, '<script>\n' + newScript + '\n    </script>');

// Also fix form id
html = html.replace('id="category-form"', 'id="flavor-form"');
html = html.replace('placeholder="Tên danh m?c"', 'placeholder="Ví d?: Chua, Cay, Sinh t?..."');
html = html.replace(/<label.*?Tên danh m?c.*?<\/label>/gi, '<label class="block text-sm font-medium text-slate-700 mb-2">Tên kh?u v? <span class="text-red-500">*</span></label>');

fs.writeFileSync('d:/KhoaLuanTotNghiep2026/frontend/admin/flavors.html', html, 'utf-8');
console.log('Fixed script block in flavors.html');
