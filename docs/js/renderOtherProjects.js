const renderOtherProjects = (params) => {
    const { container, list, offset, limit } = params;

    container.innerHTML = '';

    list.slice(offset, limit).forEach((item, index) => {
        renderOtherProject({ container, item })
    })

    renderButtonExtendCollapse(params);
}

const renderOtherProject = (params) => {
    const { container, item } = params;

    container.innerHTML += `
    <div class="other-project light-dark-bg-color border-round d-flex flex-column">
      <div class="d-flex justify-content-between">
          <i class="fas fa-folder other-project__icon primary-txt-color"></i>

          <ul class="list-item mt-0 pl-0 d-flex">
              ${renderRepos(item.repos)}
          </ul>
      </div>

      <div class="other-project__body">
          <h3 class="gray-txt-color fs-20">
            ${item.name}
          </h3>
          <p class="mt-0 dark-gray-txt-color fs-secondary">
            ${item.description}

            <span class="primary-txt-color">${item.note}</span>
          </p>
      </div>

      <ul class="list-item mb-0 pl-0 d-flex">
        ${renderTopics(item.topics)}
      </ul>
    </div>
  `;
}