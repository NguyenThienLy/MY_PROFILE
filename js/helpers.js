let renderTopics = (topics) => {
  let newTopics = topics.map((topic, index) => {
    let marginLeft;
    if (index === 0) {
      marginLeft = 'ml-0';
    }
    else {
      marginLeft = 'ml-17';
    }

    let item = `
      <li class="list-item__item ${marginLeft}">
        <a class="list-item__link txt-decoration-none dark-gray-txt-color ff-secondary"
          href="${topic.link}" title="${topic.title}">${topic.name}</a>
      </li>
    `;

    return item;
  })

  return newTopics.join();
}

let renderRepos = (repos) => {
  let newRepos = repos.map((repo, index) => {
    let marginLeft;
    if (index === 0) {
      marginLeft = 'ml-0';
    }
    else {
      marginLeft = 'ml-17';
    }

    let item = `
      <li class="list-item__item ${marginLeft}">
        <a class="list-item__link txt-decoration-none dark-gray-txt-color ff-secondary list-item__link--big"
            href="${repo.link}" target="_blank"
            title="${repo.title}">
            <i class="${repo.icon}"></i>
        </a>
      </li>
    `;

    return item;
  })

  return newRepos.join();
}

let onSetScrollTop = (location) => {
  document.documentElement.scrollTop = location;
}