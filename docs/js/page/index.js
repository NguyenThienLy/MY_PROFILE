document.addEventListener('DOMContentLoaded', (event) => {
  console.log("isShowedProject_out1", isShowedProjects)
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {
    console.log("isShowedProject_in1", isShowedProjects)
    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedProjects = true;
        console.log("isShowedProject_inin1", isShowedProjects)

        projects = data;
        renderProjects();
      });
  }

  console.log("isShowedOtherProjects_out1", isShowedOtherProjects)
  if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {
    console.log("isShowedOtherProjects_in1", isShowedOtherProjects)
    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/otherProjects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedOtherProjects = true;
        console.log("isShowedOtherProjects_inin1", isShowedOtherProjects)

        otherProjects = data;
        renderOtherProjects();
      });
  }
});

document.addEventListener('scroll', (event) => {

  setTimeout(() => {
    console.log("isShowedProject_out1", isShowedProjects)
    if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {
      console.log("isShowedProject_in1", isShowedProjects)
      fetch('https://nguyenthienly.github.io/MY_PROFILE/data/projects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedProjects = true;
          console.log("isShowedProject_inin1", isShowedProjects)

          projects = data;
          renderProjects();
        });
    }

    console.log("isShowedOtherProjects_out1", isShowedOtherProjects)
    if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {
      console.log("isShowedOtherProjects_in1", isShowedOtherProjects)
      fetch('https://nguyenthienly.github.io/MY_PROFILE/data/otherProjects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedOtherProjects = true;
          console.log("isShowedOtherProjects_inin1", isShowedOtherProjects)

          otherProjects = data;
          renderOtherProjects();
        });
    }
  }, 1000)
});