document.addEventListener('DOMContentLoaded', (event) => {
  if (document.documentElement.scrollTop > 300 && !isShowedTechnicalNotes) {
    isShowedTechnicalNotes = true;

    renderBlogs({
      container: containerTechnicalNotesItem,
      list: technicalNotes,
      type: 'technicals-note'
    });
  }

  if (document.documentElement.scrollTop > 1600 && !isShowedMyStories) {
    isShowedMyStories = true;

    renderBlogs({
      container: containerMyStoriesItem,
      list: myStories,
      type: 'my-stories'
    });
  }

  if (document.documentElement.scrollTop > 1650 && !isShowedMySeries) {
    isShowedMySeries = true;

    renderBlogs({
      container: containerMySeries1Item,
      list: mySeries,
      type: 'my-series'
    });
  }
});

document.addEventListener('scroll', (event) => {
  if (document.documentElement.scrollTop > 300 && !isShowedTechnicalNotes) {
    isShowedTechnicalNotes = true;

    renderBlogs({
      container: containerTechnicalNotesItem,
      list: technicalNotes,
      type: 'technicals-note'
    });
  }

  if (document.documentElement.scrollTop > 1300 && !isShowedMyStories) {
    isShowedMyStories = true;

    renderBlogs({
      container: containerMyStoriesItem,
      list: myStories,
      type: 'my-stories'
    });
  }

  if (document.documentElement.scrollTop > 1650 && !isShowedMySeries) {
    isShowedMySeries = true;

    renderBlogs({
      container: containerMySeries1Item,
      list: mySeries,
      type: 'my-series'
    });
  }
});