// script.js
const rooms = document.querySelectorAll('.room');

rooms.forEach((room) => {
    room.addEventListener('mouseenter', () => {
        room.style.transform = 'scale(1.1)';
    });

    room.addEventListener('mouseleave', () => {
        room.style.transform = 'scale(1)';
    });
});
