let openModalGist = (_id) => {

    let index = gists.findIndex(e => e._id === _id);

    if (index > -1) {
        let gist = gists[index];
        let url = `https://gist.github.com/${gist.author}/${gist._id}.json`;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            success: (gistdata) => {
                modalGistContent.innerHTML = gistdata.div;
            },
            error: (err) => {
                modalGistContent.innerHTML = "Can't not load data from gist";
            }
        });

        modalGistHeader.innerHTML = gist.title;
        headerPage.style.display = "none";

        modalGist.style.display = "block";
    }
}

modalGistClose.onclick = () => {
    modalGistContent.scrollTop = 0;
    modalGist.style.display = "none";
    modalGistContent.innerHTML = '';
    headerPage.style.display = "flex";
}

window.onclick = (event) => {
    if (event.target == modalGist) {
        modalGistContent.scrollTop = 0;
        modalGist.style.display = "none";
        modalGistContent.innerHTML = '';
        headerPage.style.display = "flex";
    }
}