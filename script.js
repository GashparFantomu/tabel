document.addEventListener('DOMContentLoaded', ()=> {
    const toggleBtn = document.getElementById('toggleBtn');
    let isDark = false;
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        isDark = !isDark;
        toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
    const counterBtn = document.getElementById('counterBtn');
    let counter = 0;
    counterBtn.addEventListener('click', () => {
        counter++;
        counterBtn.textContent = `Counter: ${counter}`;
    });

    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'red';
    });

    hoverBox.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'blue';
    });

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
        counter = 0;
        counterBtn.textContent = `Counter: ${counter}`;
        document.body.classList.remove('dark-mode');
    });
});