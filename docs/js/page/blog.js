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

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/technicalNotes.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            isShowedTechnicalNotes = true;

            technicalNotes = data;
            renderBlogs({
                container: containerTechnicalNotesItem,
                list: technicalNotes,
                type: 'technicals-note'
            });
        });

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/myStories.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            isShowedMyStories = true;

            myStories = data;
            renderBlogs({
                container: containerMyStoriesItem,
                list: myStories,
                type: 'my-stories'
            });
        });

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/mySeries.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            isShowedMySeries = true;

            mySeries = data;
            renderBlogs({
                container: containerMySeries1Item,
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