document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/socials.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            socials = data;
            renderSocials({
                container: containerSocialsItem,
                list: socials
            });
        });

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/projects.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            projects = data;
            renderProjects({
                container: containerProjectsItem,
                list: projects
            });
        });

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/otherProjects.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            otherProjects = data;
            renderOtherProjects({
                container: containerOtherProjectsItem,
                list: otherProjects
            });
        });
});