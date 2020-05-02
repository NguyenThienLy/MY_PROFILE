const renderSeries = (params) => {
    const { container, list, type } = params;

    list.forEach((item, index) => {
        renderSeriesItem({
            container,
            item,
            index,
            type
        })
    })
}

const renderSeriesItem = (params) => {
    const { container, item } = params;

    container.innerHTML += `
      <div class="mt-5 d-flex flex-column txt-align-center align-items-center">
        <h1 class="gray-txt-color mb-0">
            ${item.name}
        </h1>
        <p class="mt-1 primary-txt-color ff-secondary">
            #${item.code}
        </p>
      </div>

      <div class="mt-secondary d-grid grid-col-2 grid-gap-2" id="${item.container}">
      </div>
    `;

    renderBlogs({
        container: document.getElementById(item.container),
        list: item.list,
        type: 'my-series'
    });
}