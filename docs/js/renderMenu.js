const renderMenu = (params) => {
    const { container, list } = params;

    list.forEach(function(item, index) {
        renderMenuItem({ container, item })
    })
}

const renderMenuItem = (params) => {
    const { container, item } = params;
    let location = +item.location;

    container.innerHTML += `
    <li class="header__item primary-txt-color">${item.order}.<a onclick="onSetScrollTop(${location})" id="${item.id}" class="cursor-pointer header__link ml-7 gray-txt-color txt-decoration-none">${item.name}</a>
    </li>
    `;

    // closure in this
    // document.getElementById(item.id).addEventListener("click", () => {
    //     onSetScrollTop(location);
    // });
}