function hobbies(data) {
    const hobbiesDOM = document.getElementById('hobbies_block');

    let HTML = '';
    for (let i = 0; i < 12; i++) {
        HTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 hobbie">
                    <div class="icon fa fa-mobile"></div>
                    <p class="label">wergt</p>
                </div>`;
    }

    hobbiesDOM.innerHTML = HTML;
}

export { hobbies };
