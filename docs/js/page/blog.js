document.addEventListener('DOMContentLoaded', (event) => {
    window.onload = audioPlaySong;

    fetch(`data/menu.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            menu = data;
            renderMenu({
                container: containerMenuItem,
                list: menu[1].list
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

    fetch(`data/technicalNotes.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            technicalNotes = data;
            renderBlogs({
                container: containerTechnicalNotesItem,
                list: technicalNotes,
                type: 'technicals-note'
            });
        });

    fetch(`data/myStories.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            myStories = data;
            renderBlogs({
                container: containerMyStoriesItem,
                list: myStories,
                type: 'my-stories'
            });
        });

    fetch(`data/topicSeries.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            topicSeries = data;
            renderTable({
                container: containerTopicSeriesItem,
                list: topicSeries
            });
        });

    fetch(`data/mySeries.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            mySeries = data;
            renderSeries({
                container: containerMySeriesItem,
                list: mySeries,
                type: 'my-series'
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


// document.addEventListener('scroll', (event) => {
//   if (document.documentElement.scrollTop > 300 && !isShowedTechnicalNotes) {
//     isShowedTechnicalNotes = true;

//     renderBlogs({
//       container: containerTechnicalNotesItem,
//       list: technicalNotes,
//       type: 'technicals-note'
//     });
//   }

//   if (document.documentElement.scrollTop > 1300 && !isShowedMyStories) {
//     isShowedMyStories = true;

//     renderBlogs({
//       container: containerMyStoriesItem,
//       list: myStories,
//       type: 'my-stories'
//     });
//   }

//   if (document.documentElement.scrollTop > 1650 && !isShowedMySeries) {
//     isShowedMySeries = true;

//     renderBlogs({
//       container: containerMySeries1Item,
//       list: mySeries,
//       type: 'my-series'
//     });
//   }
// });