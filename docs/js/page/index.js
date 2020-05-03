document.addEventListener('DOMContentLoaded', (event) => {
    audioPlaySong();

    fetch(`${host}/data/menu.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            menu = data;
            renderMenu({
                container: containerMenuItem,
                list: menu[0].list
            });
        });

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
                list: otherProjects,
                offset: 0,
                limit: 6,
                defaultQuantity: 6,
                btn: 'btn-other-projects',
                isExtend: false
            });
        });
});