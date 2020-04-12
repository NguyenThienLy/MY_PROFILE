let renderProjects = (params) => {
  const { container, list } = params;
  list.forEach((item, index) => {
    if (index % 2 == 0) {
      renderProject({ container, item, index });
    }
    else {
      renderProjectReverse({ container, item, index });
    }
  })
}

let renderProject = (params) => {
  const { container, item, index } = params;
  let marginTop;

  if (index === 0) {
    marginTop = 'mt-secondary';
  }
  else {
    marginTop = 'mt-100';
  }

  container.innerHTML += `
  <div class="project d-flex flex-column justify-content-center position-relative ${marginTop}">
      <div class="d-flex flex-column justify-content-center align-items-end">
          <div class="project__title">
              <p class="ff-secondary primary-txt-color fs-primary">
                  Featured Project
              </p>
              <h2 class="project__name gray-txt-color txt-align-right fs-22">
                  ${item.name}
              </h2>
          </div>

          <p
              class="project__content z-index-1 border-0 p-2 m-0 w-25 gray-txt-color light-dark-bg-color border-round txt-align-right fs-secondary">
               ${item.description}

              <span class="primary-txt-color">${item.note}</span>
          </p>

          <ul class="list-item pl-0 d-flex">
              ${renderTopics(item.topics)}
          </ul>

          <ul class="list-item pl-0 d-flex">
              ${renderRepos(item.repos)}
          </ul>
      </div>
      <div class="z-index-0 position-absolute d-flex w-60">
          <img class="project__src border-round w-100" src="${item.img}" alt="${item.name}" />
      </div>
    </div>
  `;
}

let renderProjectReverse = (params) => {
  const { container, item, index } = params;

  container.innerHTML += `
      <div class="project mt-100 d-flex flex-column justify-content-center position-relative">
        <div class="d-flex flex-column justify-content-center align-items-start">
          <div class="project__title">
            <p class="ff-secondary primary-txt-color fs-primary">
              Featured Project
              </p>
            <h2 class="project__name gray-txt-color txt-align-left fs-22">
               ${item.name}
            </h2>
          </div>
          <p
            class="project__content z-index-1 border-0 p-2 m-0 w-25 gray-txt-color light-dark-bg-color border-round txt-align-left fs-secondary">
            ${item.description}
              <span class="primary-txt-color">${item.note}</span>
          </p>

          <ul class="list-item pl-0 d-flex">
              ${renderTopics(item.topics)}
          </ul>

          <ul class="list-item pl-0 d-flex">
              ${renderRepos(item.repos)}
          </ul>

        </div>
        <div class="z-index-0 position-absolute d-flex w-60 right-0">
          <img class="project__src border-round w-100" src="${item.img}" alt="${item.name}" />
        </div>
      </div>
  `;
}

