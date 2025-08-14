// main.js - وظائف عامة للموقع
// تفعيل الوضع الليلي والفاتح
const toggleBtn = document.getElementById('toggle-mode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}
// تفعيل الوضع المحفوظ
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
