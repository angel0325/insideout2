const searchBox = document.getElementById('search-box');
const dropdown = document.getElementById('dropdown');

// 當輸入框獲得焦點時，顯示下拉選單
searchBox.addEventListener('focus', () => {
  dropdown.classList.remove('hidden');
});

// 當輸入框失去焦點時，隱藏下拉選單
searchBox.addEventListener('blur', () => {
  setTimeout(() => {
    dropdown.classList.add('hidden');
  }, 200); // 短暫延遲，讓點擊下拉選單有時間觸發
});

// 你也可以在這裡加入動態搜尋邏輯，例如過濾搜尋結果
