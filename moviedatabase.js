const searchShow = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=' + keyword;
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                        <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                        <h2 class="cardprem">(${value.show.premiered})</h2>
                            <div class="imageresult col-6"
                                <a href="">
                                <img class="back-image" src="${value.show.image.medium}">
                            </div>
                            <div class="cardtext col-6"
                                <p>${value.show.summary}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
             </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchAction = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=action';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <div class="row">
                                                <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                                                <h2 class="cardprem">(${value.show.premiered})</h2>
                                                    <div class="imageresult col-6"
                                                    <a href="">
                                                        <img class="back-image" src="${value.show.image.medium}">
                                                    </div>
                                                    <div class="cardtext col-6"
                                                        <p>${value.show.summary}</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>`;                          
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchDrama = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=drama';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                                                    <h2 class="cardprem">(${value.show.premiered})</h2>
                                                <div class="imageresult col-6"
                                                <a href="">
                                                    <img class="back-image" src="${value.show.image.medium}">
                                                </div>
                                                <div class="cardtext col-6"
                                                <p>${value.show.summary}</p>                               
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchFantasy = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=fantasy';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                                                    <h2 class="cardprem">(${value.show.premiered})</h2>
                                                <div class="imageresult col-6"
                                                <a href="">
                                                    <img class="back-image" src="${value.show.image.medium}">
                                                </div>
                                                 <div class="cardtext col-6"
                                                 <p>${value.show.summary}</p>
                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchScifi = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=Sci-fi';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                        <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                        <h2 class="cardprem">(${value.show.premiered})</h2>
                            <div class="imageresult col-6"
                                <a href="">
                                <img class="back-image" src="${value.show.image.medium}">
                            </div>
                            <div class="cardtext col-6"
                                <p>${value.show.summary}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
             </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchRomance = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=romance';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                        <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                        <h2 class="cardprem">(${value.show.premiered})</h2>
                            <div class="imageresult col-6"
                            <a href="">
                                <img class="back-image" src="${value.show.image.medium}">
                            </div>
                            <div class="cardtext col-6"
                                <p>${value.show.summary}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
             </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchThriller = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/shows?q=thriller';
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                        <h1 class="cardtitle"><b>${value.show.name}</b></h1>
                        <h2 class="cardprem">(${value.show.premiered})</h2>
                            <div class="imageresult col-6"
                            <a href="">
                                <img class="back-image" src="${value.show.image.medium}">
                            </div>
                            <div class="cardtext col-6"
                                <p>${value.show.summary}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
             </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}
const searchActor = (event) => {
    event.preventDefault();
    const keyword = document.querySelector('#keywords').value;

    const url = 'https://api.tvmaze.com/search/people?q=' + keyword;
    const resultList = document.querySelector('#results');
    resultList.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function (value) {
                console.log(value);
                const movieElement = `<div class="col-12 col-md-6 text-center mt-1">
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                        <h1 class="cardtitle"><b>${value.person.name}</b></h1>
                            <div class="imageresult col-6"
                                <a href="">
                                <img class="back-image" src="${value.person.image.medium}">
                            </div>
                            <div class="cardtextactor col-6"
                                <p>Date of Birth: ${value.person.birthday}</p>
                                <p>Gender: ${value.person.gender}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
             </div>`;
                resultList.insertAdjacentHTML('beforeend', movieElement);
            });
        });


}




