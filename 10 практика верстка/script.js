// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testButton');
    const output = document.getElementById('output');
    
    button.addEventListener('click', function() {
        output.textContent = 'Кнопка нажата! ';
        output.style.color = 'green';
        output.style.fontWeight = 'bold';
    });
    
    console.log('Сайт загружен! Проверка консоли.');
});