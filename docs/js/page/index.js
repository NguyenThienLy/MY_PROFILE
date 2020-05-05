document.addEventListener('DOMContentLoaded', (event) => {
    audioPlaySong();

    fetch(`data/menu.json`)
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

    fetch(`data/socials.json`)
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

    fetch(`data/projects.json`)
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

    fetch(`data/otherProjects.json`)
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

document.addEventListener('scroll', (event) => {
    const maxPage = document.body.offsetHeight - window.innerHeight;

    if (document.documentElement.scrollTop === 0 || document.documentElement.scrollTop === maxPage) {
        headerPage.style.height = '100px';
        headerPage.style.transition = 'inherit'
    }
    else {
        headerPage.style.height = '60px';
        headerPage.style.transition = 'inherit'
    }
})
