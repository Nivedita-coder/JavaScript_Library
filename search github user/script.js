
// getData()

// search input
const search = document.querySelector('#search');
// button for the search input
const btn = document.querySelector('#btn');
const box = document.querySelector('.box');

// keypress event listener for search input
search.addEventListener('keypress', function (e) {
    // if we press enter key
    if (e.code == "Enter") {
        // console.log('yey');
        searchGitHubUser(this.value.trim())
        this.value = '';
    }
})
// if the button for search input is on click..
btn.addEventListener('click', function (e) {
    // send the search input value which it's the previous element
    const me = searchGitHubUser(this.previousElementSibling.value.trim());
    this.previousElementSibling.value = '';
    // then we generate card
})

async function searchGitHubUser(keyword) {
    // console.log(keyword)
    const me = await getData(keyword);
    // console.log(me)
    generateCard(me);
}

// get user data by using github api
function getData(keyword) {
    return fetch(`https://api.github.com/search/users?q=${keyword}`)
        .then(response => response.json())
        .then(response => response)
}
// generate card
function generateCard({ items }) {
    let cards = ``;
    items.forEach(({ avatar_url, login }) => {
        cards += `
        <div class="card">
            <div class="imgWrapper">
                <img src="${avatar_url}" alt="">
            </div>
            <a href="https://github.com/${login}" target="blank">
                <h4 id="name">${login}</h4>
            </a>
        </div>
        `
    });
    box.innerHTML = cards;
}