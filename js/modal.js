let openModal = (_id) => {

  let index = gists.findIndex(e => e._id === _id)

  if (index > -1) {
    let gist = gists[index];
    let url = `https://gist.github.com/${gist.author}/${gist._id}.json`;

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      success: (gistdata) => {
        modalContent.innerHTML = gistdata.div;
      },
      error: (err) => {
        modalContent.innerHTML = "Can't not load data from gist";
      }
    });

    modalHeader.innerHTML = gist.title;
    headerPage.style.display = "none";

    modal.style.display = "block";
  }
}

modalClose.onclick = () => {
  modalContent.scrollTop = 0;
  modal.style.display = "none";
  headerPage.style.display = "flex";
  modalContent.innerHTML = '';
}

window.onclick = (event) => {
  if (event.target == modal) {
    modalContent.scrollTop = 0;
    modal.style.display = "none";
    headerPage.style.display = "flex";
    modalContent.innerHTML = '';
  }
}