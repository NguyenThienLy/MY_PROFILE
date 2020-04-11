let renderOtherProjects = () => {
  otherProjects.forEach((otherProject, index) => {
    renderOtherProject(otherProject)
  })
}

let renderOtherProject = (otherProject) => {
  containerOtherProjectsItem.innerHTML += `
    <div class="other-project light-dark-bg-color border-round d-flex flex-column">
      <div class="d-flex justify-content-between">
          <i class="fas fa-folder other-project__icon primary-txt-color"></i>

          <ul class="list-item mt-0 pl-0 d-flex">
              ${renderRepos(otherProject.repos)}
          </ul>
      </div>

      <div class="other-project__body">
          <h3 class="gray-txt-color fs-20">
            ${otherProject.name}
          </h3>
          <p class="mt-0 dark-gray-txt-color fs-secondary">
            ${otherProject.description}

            <span class="primary-txt-color">${otherProject.note}</span>
          </p>
      </div>

      <ul class="list-item mb-0 pl-0 d-flex">
        ${renderTopics(otherProject.topics)}
      </ul>
    </div>
  `;
}
