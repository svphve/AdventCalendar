document.querySelectorAll('.door').forEach((door, index) => {
    door.addEventListener('click', () => {
        door.classList.add('opened');
        alert(`Surprise for Day ${index + 1}!`);
    });
});
