lucide.createIcons();

function openModal(type) {
    document.getElementById('reservationModal').classList.remove('hidden');
    document.getElementById('modalTitle').innerText = type;
}

function closeModal() {
    document.getElementById('reservationModal').classList.add('hidden');
}

window.onclick = function (event) {
    let modal = document.getElementById('reservationModal');
    if (event.target == modal) {
        closeModal();
    }
};