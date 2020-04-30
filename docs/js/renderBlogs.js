const renderBlogs = (params) => {
    const { container, list, type } = params;

    list.forEach((item, index) => {
        renderBlog({
            container,
            item,
            index,
            type
        })
    })
}

const renderBlog = (params) => {
    const { container, item, index, type } = params;
    let marginTop;

    if (type === 'my-stories') {
        marginTop = 'mt-2';
    } else {
        marginTop = '';
    }

    container.innerHTML += `
    <div class="post light-dark-bg-color border-round d-flex flex-column ${marginTop}">
      <div class="d-flex justify-content-between align-items-center">
        <div class="txt-decoration-none primary-txt-color ff-secondary fs-primary">
          <i class="far fa-calendar-alt"></i>
           ${item.date}
        </div>

        <ul class="list-item mt-0 mb-0 pl-0 d-flex">
            ${renderRepos(item.repos)}
        </ul>
      </div>

      <div class="post__body">
        <h3 class="gray-txt-color fs-20">
          ${item.name}
          <a class="btn btn--small ml-2 txt-decoration-none primary-txt-color cursor-pointer ff-secondary border-round txt-align-center primary-bd-color"
            onclick="openModalGist('${item._id}')">
            ${ item._id.length === 1 ? 'comming soon' : 'view now'} !</a>
        </h3>
        <p class="mt-0 dark-gray-txt-color fs-secondary">
          ${item.description}
        </p>
      </div>

      <ul class="list-item mb-0 pl-0 d-flex">
        ${renderTopics(item.topics)}
      </ul>
    </div>
  `;
}