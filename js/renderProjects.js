let renderProjects = () => {
  projects.forEach((project, index) => {
    if (index % 2 == 0) {
      renderProject({ project, index });
    }
    else {
      renderProjectReverse({ project, index });
    }
  })
}

let renderProject = (params) => {
  const { project, index } = params;
  let marginTop;

  if (index === 0) {
    marginTop = 'mt-secondary';
  }
  else {
    marginTop = 'mt-100';
  }

  containerProjectsItem.innerHTML += `
  <div class="project d-flex flex-column justify-content-center position-relative ${marginTop}">
      <div class="d-flex flex-column justify-content-center align-items-end">
          <div class="project__title">
              <p class="ff-secondary primary-txt-color fs-primary">
                  Featured Project
              </p>
              <h2 class="project__name gray-txt-color txt-align-right fs-22">
                  ${project.name}
              </h2>
          </div>

          <p
              class="project__content z-index-1 border-0 p-2 m-0 w-25 gray-txt-color light-dark-bg-color border-round txt-align-right fs-secondary">
               ${project.description}

              <span class="primary-txt-color">${project.note}</span>
          </p>

          <ul class="list-item pl-0 d-flex">
              ${renderTopics(project.topics)}
          </ul>

          <ul class="list-item pl-0 d-flex">
              ${renderRepos(project.repos)}
          </ul>
      </div>
      <div class="z-index-0 position-absolute d-flex w-60">
          <img class="project__src border-round w-100" src="${project.img}" alt="${project.name}" />
      </div>
    </div>
  `;
}

let renderProjectReverse = (params) => {
  const { project, index } = params;

  containerProjectsItem.innerHTML += `
      <div class="project mt-100 d-flex flex-column justify-content-center position-relative">
        <div class="d-flex flex-column justify-content-center align-items-start">
          <div class="project__title">
            <p class="ff-secondary primary-txt-color fs-primary">
              Featured Project
              </p>
            <h2 class="project__name gray-txt-color txt-align-left fs-22">
               ${project.name}
            </h2>
          </div>
          <p
            class="project__content z-index-1 border-0 p-2 m-0 w-25 gray-txt-color light-dark-bg-color border-round txt-align-left fs-secondary">
            ${project.description}
              <span class="primary-txt-color">${project.note}</span>
          </p>

          <ul class="list-item pl-0 d-flex">
              ${renderTopics(project.topics)}
          </ul>

          <ul class="list-item pl-0 d-flex">
              ${renderRepos(project.repos)}
          </ul>

        </div>
        <div class="z-index-0 position-absolute d-flex w-60 right-0">
          <img class="project__src border-round w-100" src="${project.img}" alt="${project.name}" />
        </div>
      </div>
  `;
}

