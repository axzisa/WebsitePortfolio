function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
