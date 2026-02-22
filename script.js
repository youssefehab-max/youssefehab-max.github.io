// ===== Slider =====
const track = document.getElementById('sliderTrack');
const cards = track.querySelectorAll('.transform-card');
let current = 0;

function getCardWidth() {
    return cards[0].offsetWidth + 25;
}

function getVisible() {
    return Math.max(1, Math.floor(track.parentElement.offsetWidth / getCardWidth()));
}

function updateSlider() {
    const maxIndex = Math.max(0, cards.length - getVisible());
    if (current > maxIndex) current = maxIndex;
    if (current < 0) current = 0;
    track.style.transform = `translateX(${-current * getCardWidth()}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    const maxIndex = Math.max(0, cards.length - getVisible());
    if (current < maxIndex) current++;
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (current > 0) current--;
    updateSlider();
});

window.addEventListener('resize', updateSlider);


// ===== FAQ =====
function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}
