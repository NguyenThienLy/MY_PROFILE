document.addEventListener('DOMContentLoaded', (event) => {
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {

    fetch('../../../docs/data/projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedProjects = true;

        projects = data;
        renderProjects();
      }).catch((err) => {
        console.log("err", err)

      });
  }

  if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {

    fetch('../../../docs/data/otherProjects.json')
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

      fetch('../../../docs/data/projects.json')
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

      fetch('../../../docs/data/otherProjects.json')
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