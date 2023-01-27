import { IsValid } from '../isValid/IsValid.js';

function tiles(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        throw new Error('Selector must be type of string');
    }

    if (!IsValid.nonEmtyArray(data)) {
        throw new Error('Data must be not empty array');
    }

    const hobbiesDOM = document.getElementById(selector);
    if (hobbiesDOM === null) {
        throw new Error(`Selector not find by given '${selector}' input`);
    }

    let HTML = '';

    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.icon(item.icon) ||
            !IsValid.text(item.text)
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 hobbie">
                    <div class="icon fa fa-${item.icon}"></div>
                    <p class="label">${item.text}</p>
                </div>`;
    }

    hobbiesDOM.innerHTML = HTML;
}

export { tiles };
