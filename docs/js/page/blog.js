document.addEventListener('DOMContentLoaded', (event) => {
    window.onload = audioPlaySong;

    fetch(`${host}/data/menu.json`)
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

    fetch(`${host}/data/technicalNotes.json`)
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

    fetch(`${host}/data/myStories.json`)
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

    fetch(`${host}/data/topicSeries.json`)
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

    fetch(`${host}/data/mySeries.json`)
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