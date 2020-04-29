document.addEventListener('DOMContentLoaded', (event) => {
    fetch(`${host}/data/socials.json`)
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

    fetch(`${host}/data/projects.json`)
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

    fetch(`${host}/data/otherProjects.json`)
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