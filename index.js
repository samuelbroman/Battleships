//document.addEventListener('DOMcontentloaded', () =>{
    const playergrid = document.querySelector('.grid-user')
    const computergrid = document.querySelector('.grid-computer')
    const inventoryGrid = document.querySelector('.grid-inventory')
    const ships = document.querySelectorAll('.ship')
    const size2 = document.querySelector('.size2-container')
    const size3n1 = document.querySelector('.size3n1-container')
    const size3n2 = document.querySelector('.size3n2-container')
    const size4 = document.querySelector('.size4-container')
    const size5 = document.querySelector('.size5-container')
    const Startbutton = document.querySelector('#start')
    const Turnoutput = document.querySelector('#turn')
    const Info = document.querySelector('#combatlog')
    const width = 10
    const playersquares = []
    const comuptersquares = []

    function Createbattlefield(grid, squares) {
        for (let i = 0; i < 100; i++){
            const square = document.createElement('div')
            square.dataset.id = i
            grid.appendChild(square)
            squares.push(square)
        }
    }
    Createbattlefield(playergrid, playersquares)
    Createbattlefield(computergrid, comuptersquares)
const shipsarray = [
    {
    name: 's2', location2: [0, 1]
    },
    {
        name: 's3n1', location3n1: [0, 1, 2]
    }

]

    const size2random = Math.floor(Math.random(99))
    if (size2random >= 9 || size2random >= 19 || size2random >= 29 || size2random >= 39 || size2random >= 49 || size2random >= 59 || size2random >= 69 || size2random >= 79 || size2random >= 89 || size2random >= 99)
    {
        location2[0] = size2random - 1
        location2[1] = size2random
    }
    else{
        location2[0] = size2random
        location2[1] = size2random + 1
    }

//})