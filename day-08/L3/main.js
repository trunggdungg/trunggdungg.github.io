const apiUrls = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/photos'
};

// hiển thị dữ liệu
async function fetchAndDisplay(type) {
    try {
        const response = await fetch(apiUrls[type]);
        const data = await response.json();

        // Cập nhật tiêu đề
        document.getElementById('type').textContent = `Type : ${type}`;

        // Highlight nút được chọn
        document.querySelectorAll('.button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.type === type) {
                btn.classList.add('active');
            }
        });

        // Hiển thị dữ liệu
        const listElement = document.getElementById('dataList');
        listElement.innerHTML = '';
        data.slice(0, 15).forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            listElement.appendChild(li);
        });
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// Thiết lập sự kiện cho các nút
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            fetchAndDisplay(type);
        });
    });


    fetchAndDisplay('posts');
});