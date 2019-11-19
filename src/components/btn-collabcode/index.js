const btnCollabcode = (function () {
    const module = {};

    module._sytle = () => {
        $head = document.querySelector("head");
        $style = document.createElement("style");

        $style.textContent = `
            .btn-collabcode {
                height: 48px;
                border-radius: 24px;
                width: 100%;
                color: white;
                font-size: 14px;
                text-transform: uppercase;
                background-color: #f25a70;
                cursor: pointer;
            }
            .input-collabcode + .btn-collabcode {
                margin-top: 45px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = content => {
        module._sytle();
        return `<input class="btn-collabcode" type="submit" value=${content}`;
};

    return {
        render: module.render
    };
})();