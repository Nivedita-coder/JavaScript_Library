let name, pokemon, sprite, abilities
const showDiv = document.querySelector('#show')

async function getPokemon() {
    
    name = document.querySelector('#pokemon_name').value

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()

        sprite = data.sprites.front_default
        type = data.types[0].type.name
        abilities = data.abilities
        console.log(data, data.abilities)
        renderPokemon(sprite, type, abilities)
    } catch (error) {
        alert('pokemon not found')
    }
}

function renderPokemon(sprite, pokemonType, abilities) {
    const divImg = document.querySelector('img')
    divImg ? divImg.remove() : ''
    const img = document.createElement('img')
    img.setAttribute('src', sprite)

    const typeElement = document.querySelector('#type')
    typeElement ? typeElement.remove() : ''
    const type = document.createElement('p')
    type.setAttribute('id', 'type')
    const textType = document.createTextNode(`Type: ${pokemonType}`)
    type.appendChild(textType)

    const ul = document.querySelector('ul')
    ul ? ul.remove() : ''
    const ulElement = document.createElement('ul')
    
    abilities.map((ab, index) => {
        const li = document.createElement('li')
        const textLi = document.createTextNode(`Ability ${index+1}: ${ab.ability.name}`)
        li.appendChild(textLi)
        ulElement.appendChild(li)
    })

    showDiv.appendChild(img)
    showDiv.appendChild(type)
    showDiv.appendChild(ulElement)
}

const button = document.querySelector('button')
button.addEventListener('click', getPokemon)