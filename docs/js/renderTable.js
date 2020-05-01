let renderTable = (params) => {
    const { container, list } = params;

    container.innerHTML = `
    <tr>
        <th class="dark-gray-txt-color">Time update</th>
        <th class="dark-gray-txt-color">Topic</th>
        <th class="dark-gray-txt-color">Code</th>
        <th class="dark-gray-txt-color">Quantiy</th>
        <th class="dark-gray-txt-color">Tags</th>
        <th class="dark-gray-txt-color">Link</th>
    </tr>
    `;

    list.forEach((item, index) => {
        renderTableRow({ container, item })
    })
}

let renderTableRow = (params) => {
    const { container, item } = params;

    container.innerHTML += `
    <tr class="table__row">
      <td class=" fs-13 dark-gray-txt-color">${item.updateAt}</td>
      <td title="Click me!" class=" fw-600 gray-txt-color cursor-pointer">${item.name}</td>
      <td title="Click me!" class=" primary-txt-color cursor-pointer">${item.code}</td>
      <td class=" dark-gray-txt-color txt-align-center"> ${item.quantity} </td>
      <td>
          <ul class="list-item mt-0 mb-0 pl-0 d-flex">
          ${renderTopics(item.topics)}
          </ul>
      </td>
      <td>
          <ul class="list-item mt-0 mb-0 pl-0 d-flex">
          ${renderRepos(item.repos)}
          </ul>
      </td>
    </tr>
  `;
}