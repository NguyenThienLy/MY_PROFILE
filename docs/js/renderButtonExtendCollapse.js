const renderButtonExtendCollapse = (params) => {
    const { container, list, isExtend, defaultQuantity, btn } = params;

    if (list.length > defaultQuantity && !isExtend) {
        container.innerHTML += `
        <a id="${btn}" class="btn btn--big txt-decoration-none primary-txt-color ff-secondary border-round txt-align-center position-absolute  bottom-100px right-50 transform-translate-X-50 cursor-pointer"></a>
        `;

        document.getElementById(btn).innerHTML = `Extend`;
        document.getElementById(btn).addEventListener("click", () => {
            onExtend(params);
        });
    } else if (list.length > defaultQuantity && isExtend) {
        container.innerHTML += `
        <a id="${btn}" class="btn btn--big txt-decoration-none primary-txt-color ff-secondary border-round txt-align-center position-absolute  bottom-100px right-50 transform-translate-X-50 cursor-pointer"></a>
        `;

        document.getElementById(btn).innerHTML = `Collapse`;
        document.getElementById(btn).addEventListener("click", () => {
            onCollapse(params);
        });
    }
}