const inputCollabcode = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent =` 
            .input-collabcode {
                display: block;
                width: 100%;
                color: 3a4240;
                font-size; 18px;
                font-weight: bold;
                border-bottom: solid 2px rgba(58, 66, 64, 0.5);
                padding-top: 12px;
                padding-bottom: 12px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = ({ placeholder = "", type = "text"}) => {
        module._style();

        return `<input class="input-collabcode" type="${type}" placeholder=${placeholder}>`
    };
    return {
        render: module.render
    }

})();