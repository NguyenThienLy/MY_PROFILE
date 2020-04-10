span.onclick = () => {
  modalContent.scrollTop = 0;
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modalContent.scrollTop = 0;
    modal.style.display = "none";
  }
}