document.addEventListener('DOMContentLoaded', (event) => {
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {

    fetch('../../../data/projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data)
        isShowedProjects = true;

        projects = data;
        renderProjects();
      });
  }

  if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {

    fetch('../../../data/otherProjects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedOtherProjects = true;

        otherProjects = data;
        renderOtherProjects();
      });
  }
});

document.addEventListener('scroll', (event) => {
  setTimeout(() => {
    if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {

      fetch('../../../data/projects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedProjects = true;

          projects = data;
          renderProjects();
        });
    }

    if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {

      fetch('../../../data/otherProjects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedOtherProjects = true;

          otherProjects = data;
          renderOtherProjects();
        });
    }
  }, 1000)
});