let renderSocials = (params) => {
    const { container, list } = params;

    list.forEach((item, index) => {
        renderSocial({
            container,
            item,
            index,
        })
    })
}

let renderSocial = (params) => {
    const { container, item, index } = params;

    container.innerHTML += `
    <li class="social__item">
      <a class="social__link dark-gray-txt-color" href="${item.link}" title="${item.title}" target="_blank">
          <i class="${item.icon}">
          </i>
      </a>
    </li>
    `;
}