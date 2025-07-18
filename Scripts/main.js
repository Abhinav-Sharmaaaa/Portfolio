document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.querySelector('.cursor-glow');

    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});