document.addEventListener('DOMContentLoaded', (event) => {
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {
    isShowedProjects = true;

    renderProjects();
  }

  if (document.documentElement.scrollTop > 3600 && isShowedOtherProjects === false) {
    isShowedOtherProjects = true;

    renderOtherProjects();
  }
});

document.addEventListener('scroll', (event) => {
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {
    isShowedProjects = true;

    renderProjects();
  }

  if (document.documentElement.scrollTop > 3600 && isShowedOtherProjects === false) {
    isShowedOtherProjects = true;

    renderOtherProjects();
  }

});