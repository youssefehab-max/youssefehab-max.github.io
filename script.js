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
    track.style.transform = `translateX(${current * getCardWidth()}px)`;
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


// Close popup
function closePopup() {
    document.getElementById("ramadanPopup").style.display = "none";
}

// Ramadan date check
function isRamadan() {

    // حدد تاريخ بداية ونهاية رمضان
    // مثال: رمضان 2026 تقريبا من 18 فبراير إلى 19 مارس
    const ramadanStart = new Date("2026-02-18");
    const ramadanEnd   = new Date("2026-03-19");

    const today = new Date();

    return today >= ramadanStart && today <= ramadanEnd;
}

// Show popup only in Ramadan
window.onload = function () {

    if (isRamadan()) {

        setTimeout(() => {
            document.getElementById("ramadanPopup").style.display = "flex";
        }, 1000);

    } else {

        document.getElementById("ramadanPopup").style.display = "none";

    }

};
