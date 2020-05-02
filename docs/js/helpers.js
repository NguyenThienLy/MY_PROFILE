const renderTopics = (list) => {
    let newList = list.map((item, index) => {
        let marginLeft;
        if (index === 0) {
            marginLeft = 'ml-0';
        } else {
            marginLeft = 'ml-17';
        }

        let newItem = `
      <li class="list-item__item ${marginLeft}">
        <a class="list-item__link txt-decoration-none dark-gray-txt-color ff-secondary"
          href="${item.link}" title="${item.title}">${item.name}</a>
      </li>
    `;

        return newItem;
    })

    return newList.join('');
}

const renderRepos = (list) => {
    let newList = list.map((item, index) => {
        let marginLeft;
        if (index === 0) {
            marginLeft = 'ml-0';
        } else {
            marginLeft = 'ml-17';
        }

        let newItem = `
      <li class="list-item__item ${marginLeft}">
        <a class="list-item__link txt-decoration-none dark-gray-txt-color ff-secondary list-item__link--big"
            href="${item.link}" target="_blank"
            title="${item.title}">
            <i class="${item.icon}"></i>
        </a>
      </li>
    `;

        return newItem;
    })

    return newList.join('');
}

const onSetScrollTop = (location) => {
    document.documentElement.scrollTop = location;
}

const onExtend = (params) => {
    renderOtherProjects({
        ...params,
        limit: 7,
        isExtend: true
    })
}

const onCollapse = (params) => {
    renderOtherProjects({
        ...params,
        limit: 6,
        isExtend: false
    })
}