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
    var location2 = []
    var location3n1 = []
    var location3n2 = []
    var location4 = []
    var location5 = []
    let gameended = false
    let currentturn = 'player'

    function Createbattlefield(grid, squares, prefix) {
        for (let i = 0; i < 100; i++){
            const square = document.createElement('div')
            square.id = prefix + " " + i
            grid.appendChild(square)
            squares.push(square)
        }
    }
    Createbattlefield(playergrid, playersquares, "player")
    Createbattlefield(computergrid, comuptersquares, "computer")
/*const shipsarray = [
    {
    name: 's2', location2: [0, 1]
    },
    {
        name: 's3n1', location3n1: [0, 1, 2]
    },
    {
        name: 's3n2', location3n2: [0, 1, 2]
    },
    {
        name: 's4', location4: [0, 1, 2, 3]
    },
    {
        name: 's5', location5: [0, 1, 2, 3, 4]
    }

]*/
randomtaken = []
for(let i = 0; i < 5; i++)
{
    //while(true)
    //{
        var cornercheck = false
        var x = 0
        var random = Math.floor(Math.random() * 100)
        if (i == 0)
        {
            while (x < 100)
            {
                if (random > x + 8 && random < x + 10)
                {
                    //location2[0] = random - 1
                    location2[0] = document.getElementById('computer ' + (random - 1))
                    location2[0].classList.add('s2')
                    location2[1] = document.getElementById('computer '+ random)
                    location2[1].classList.add('s2')
                    randomtaken[0] = random 
                    randomtaken[1] = random - 1
                    console.log(random)
                    //classList.add('s2')
                    x = 100;
                    cornercheck = true
                }
                x += 10
            }
                if (cornercheck == false)
                {
                    location2[0] = document.getElementById('computer ' + random)
                    location2[0].classList.add('s2')
                    location2[1] = document.getElementById('computer ' + (random + 1))
                    location2[1].classList.add('s2')
                    randomtaken[0] = random + 1
                    randomtaken[1] = random
                    //classList.add('s2')
                    console.log(random)
                }
                else
                {
                }
        }
        else if (i == 1)
        {
            for (let y = 0; y < 2; y++)
            {
                if (random == randomtaken[y] || (random > randomtaken[y] - 4 && random < randomtaken[y] + 4))
                {
                    random = Math.floor(Math.random()*100)
                    y = 0;
                }
            }
                while (x < 100)
                {
                    if (random > x + 7 && random < x + 10 )
                    {
                        location3n1[0] = document.getElementById('computer ' + (random - 2))
                        location3n1[0].classList.add('s3n1')
                        location3n1[1] = document.getElementById('computer ' + (random - 1))
                        location3n1[1].classList.add('s3n1')
                        location3n1[2] = document.getElementById('computer ' + random)
                        location3n1[2].classList.add('s3n1')
                        randomtaken[2] = random
                        randomtaken[3] = random - 1
                        randomtaken[4] = random - 2
                        //classList.add('s3n1')    
                        x = 100;
                        cornercheck = true
                        console.log(random)
                    }
                    x += 10
                }
                if (cornercheck == false)
                {
                    location3n1[0] = document.getElementById('computer ' + random)
                    location3n1[0].classList.add('s3n1')
                    location3n1[1] = document.getElementById('computer ' + (random + 1))
                    location3n1[1].classList.add('s3n1')
                    location3n1[2] = document.getElementById('computer ' + (random + 2))
                    location3n1[2].classList.add('s3n1')
                    randomtaken[2] = random
                    randomtaken[3] = random + 1
                    randomtaken[4] = random + 2
                    console.log(random)
                    //classList.add('s3n1')  
                }
        }
        else if (i == 2)
        {
            for (let y = 0; y < 5; y++)
            {
                if (random == randomtaken[y] || (random > randomtaken[y] - 4 && random < randomtaken[y] + 4))
                {
                    random = Math.floor(Math.random()*100)
                    y = 0;
                }
            }
                while (x < 100)
                {
                    if (random > x + 7 && random < x + 10 )
                    {
                        location3n1[0] = document.getElementById('computer ' + (random - 2))
                        location3n1[0].classList.add('s3n2')
                        location3n1[1] = document.getElementById('computer ' + (random - 1))
                        location3n1[1].classList.add('s3n2')
                        location3n1[2] = document.getElementById('computer ' + random)
                        location3n1[2].classList.add('s3n2')
                        randomtaken[5] = random
                        randomtaken[6] = random - 1
                        randomtaken[7] = random - 2
                        console.log(random)
                        //classList.add('s3n2')   
                        x = 100;
                        cornercheck = true
                    }
                    x += 10
                }
                if (cornercheck == false)
                {
                    location3n1[0] = document.getElementById('computer ' + random)
                    location3n1[0].classList.add('s3n2')
                    location3n1[1] = document.getElementById('computer ' + (random + 1))
                    location3n1[1].classList.add('s3n2')
                    location3n1[2] = document.getElementById('computer ' + (random + 2))
                    location3n1[2].classList.add('s3n2')
                    randomtaken[5] = random
                    randomtaken[6] = random + 1
                    randomtaken[7] = random + 2
                    console.log(random)
                    //classList.add('s3n2')
                }
            
        }
        
        else if (i == 3)
        {
            for (let y = 0; y < 8; y++)
            {
                if (random == randomtaken[y] || (random > randomtaken[y] - 5 && random < randomtaken[y] + 5))
                {
                    random = Math.floor(Math.random()*100)
                    y = 0;
                }
            }
                while (x < 100)
                {
                    if (random > x + 6 && random < x + 10 )
                    {
                        location4[0] = document.getElementById('computer ' + (random - 3))
                        location4[0].classList.add('s4')
                        location4[1] = document.getElementById('computer ' + (random - 2))
                        location4[1].classList.add('s4')
                        location4[2] = document.getElementById('computer ' + (random - 1))
                        location4[2].classList.add('s4')
                        location4[3] = document.getElementById('computer ' + random)
                        location4[3].classList.add('s4') 
                        randomtaken[8] = random 
                        randomtaken[9] = random - 1
                        randomtaken[10] = random - 2
                        randomtaken[11] = random - 3
                        console.log(random)
                        //classList.add('s4')   
                        x = 100;
                        cornercheck = true
                    }
                    x += 10
                }
                if (cornercheck == false)
                {
                    location4[0] = document.getElementById('computer ' + random)
                    location4[0].classList.add('s4')
                    location4[1] = document.getElementById('computer ' + (random + 1))
                    location4[1].classList.add('s4')
                    location4[2] = document.getElementById('computer ' + (random + 2))
                    location4[2].classList.add('s4')
                    location4[3] = document.getElementById('computer ' + (random + 3))
                    location4[3].classList.add('s4') 
                    randomtaken[8] = random 
                    randomtaken[9] = random + 1
                    randomtaken[10] = random + 2
                    randomtaken[11] = random + 3
                    console.log(random)
                    //classList.add('s4')
                }            
        }
        else if (i == 4)
        {
            for (let y = 0; y < 12; y++)
            {
                if (random == randomtaken[y] || (random > randomtaken[y] - 6 && random < randomtaken[y] + 6))
                {
                    random = Math.floor(Math.random()*100)
                    y = 0;
                }
            }
                while (x < 100)
                {
                    if (random > x + 5 && random < x + 10 )
                    {
                        location5[0] = document.getElementById('computer ' + (random - 4))
                        location5[0].classList.add('s5')
                        location5[1] = document.getElementById('computer ' + (random - 3))
                        location5[1].classList.add('s5')
                        location5[2] = document.getElementById('computer ' + (random - 2))
                        location5[2].classList.add('s5')
                        location5[3] = document.getElementById('computer ' + (random - 1))
                        location5[3].classList.add('s5')
                        location5[4] = document.getElementById('computer ' + random)
                        location5[4].classList.add('s5')
                        console.log(random)
                        //classList.add('s5')
                        x = 100;
                        cornercheck = true
                    }
                    x += 10
                }
                if (cornercheck == false)
                {
                    location5[0] = document.getElementById('computer ' + random)
                    location5[0].classList.add('s5')
                    location5[1] = document.getElementById('computer ' + (random + 1))
                    location5[1].classList.add('s5')
                    location5[2] = document.getElementById('computer ' + (random + 2))
                    location5[2].classList.add('s5')
                    location5[3] = document.getElementById('computer ' + (random + 3))
                    location5[3].classList.add('s5')
                    location5[4] = document.getElementById('computer ' + (random + 4))
                    location5[4].classList.add('s5')
                    console.log(random)
                    //classList.add('size5computer')
                }
            
        
        }
    //}
}

ships.forEach(ship => ship.addEventListener('dragstart', dragstart))
playersquares.forEach(square => square.addEventListener('dragover', dragover))
playersquares.forEach(square => square.addEventListener('dragenter', dragenter))
playersquares.forEach(square => square.addEventListener('dragleave', dragleave))
playersquares.forEach(square => square.addEventListener('drop', drop))
playersquares.forEach(square => square.addEventListener('dragend', dragend))
let selectedship
let pickedship
let pickedshipsize
ships.forEach(ship => ship.addEventListener('mousedown', (e) =>{
    selectedship = e.target.id
}))

function dragstart(e){
    pickedship = this
    pickedshipsize = this.childNodes.length.toString()
    console.log(pickedshipsize)
}
        
function dragover(e){
    e.preventDefault()
}    
    
function dragenter(e){
    e.preventDefault()
}    

function dragleave(){
    console.log('drag leave')
}

function drop(e){
    let shipchildid = pickedship.lastChild.id
    let classship = shipchildid.slice(0,-2)
    console.log(classship)
    let shipside = parseInt(shipchildid.substr(-1))
    let shipside2 = shipside + parseInt(this.dataset.id)
    chosenship = parseInt(selectedship.substr(-1))
    shipside2 = shipside2 - chosenship
    //console.log('chosenship', chosenship)
    //console.log(playersquares)
    /*const cornercollision = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 3, 13, 23, 33, 43, 53, 63, 73, 83, 93]
    let cornercollisioncheck = cornercollision.splice(0, 10 * chosenship)
    if (!cornercollisioncheck.includes(shipside2))*/
    for(let i = 0; i < pickedshipsize; i++)
    {
        let netsquareid = parseInt(e.target.id.split(" ")[1], 10)
        console.log(parseInt(netsquareid))// - chosenship + i)
        playersquares[netsquareid - chosenship + i].classList.add('taken', classship)
    }
    inventoryGrid.removeChild(pickedship)
    
}

function dragend(){
    console.log('dragend')
}
/*Startbutton.addEventListener('click', Game)
let size2hit = 0
let size3n1hit = 0
let size3n2hit = 0
let size4hit = 0
let size5hit = 0
let totalhit = 0*/
function Game()
{
    if(gameended)
    {
        return;
    }
    if (currentturn === 'player')
    {
        Turnoutput.innerHTML = 'Your turn'
        comuptersquares.forEach(square => square.addEventListener('click', function(e) {
            chosensquare(square)
        }))
    }
    if (currentturn === 'computer')
    {
        Turnoutput.innerHTML = 'Computers turn'
        setTimeout (computerturn, 1000)
    }
}
Startbutton.addEventListener('click', Game)
let size2hit = 0
let size3n1hit = 0
let size3n2hit = 0
let size4hit = 0
let size5hit = 0
let totalhit = 0
let Csize2hit = 0
let Csize3n1hit = 0
let Csize3n2hit = 0
let Csize4hit = 0
let Csize5hit = 0
let Ctotal = 0
function chosensquare(square)
{
    if (!square.classList.contains('hit') && !square.classList.contains('miss'))
    {
        console.log('clicked')
        console.log(currentturn)
    if (square.classList.contains('s2'))
    {
        square.classList.add('hit')
        size2hit++
        totalhit++
    }
    else if (square.classList.contains('s3n1'))
    {
        square.classList.add('hit')
        size3n1hit++
        totalhit++
    }
    else if (square.classList.contains('s3n2'))
    {
        square.classList.add('hit')
        size3n2hit++
        totalhit++
    }
    else if (square.classList.contains('s4'))
    {
        square.classList.add('hit')
        size4hit++
        totalhit++
    }
    else if (square.classList.contains('s5'))
    {
        square.classList.add('hit')
        size5hit++
        totalhit++
    }
    else
    {
        square.classList.add('miss')
    }
    currentturn = 'computer'
    Game()
    GameState()
}
}

function computerturn()
{
    let Chit = Math.floor(Math.random() * 100)
    if (!playersquares[Chit].classList.contains('hit') && !playersquares[Chit].classList.contains('miss'))
    {
        console.log(currentturn)
        if (playersquares[Chit].classList.contains('size2'))
    {
        playersquares[Chit].classList.add('hit')
        Csize2hit++
        Ctotalhit++
    }
    else if (playersquares[Chit].classList.contains('size3n1'))
    {
        playersquares[Chit].classList.add('hit')
        Csize3n1hit++
        Ctotalhit++
    }
    else if (playersquares[Chit].classList.contains('size3n2'))
    {
        playersquares[Chit].classList.add('hit')
        Csize3n2hit++
        Ctotalhit++
    }
    else if (playersquares[Chit].classList.contains('size4'))
    {
        playersquares[Chit].classList.add('hit')
        Csize4hit++
        Ctotalhit++
    }
    else if (playersquares[Chit].classList.contains('size5'))
    {
        playersquares[Chit].classList.add('hit')
        Csize5hit++
        Ctotalhit++
    }
    else
    {
        playersquares[Chit].classList.add('miss')
    }
    }
    else
    {
        computerturn()
    }
    currentturn = 'player'
    Game()
    GameState()
}

function GameState()
{
    if (size2hit === 2)
    {
        Info.innerHTML = 'Enemy 2 sized ship sunk'
    }
    if (size3n1hit === 3)
    {
        Info.innerHTML = 'First enemy 3 sized ship sunk'
    }
    if (size3n2hit === 3)
    {
        Info.innerHTML = 'Second enemy 3 sized ship sunk'
    }
    if (size4hit === 4)
    {
        Info.innerHTML = 'Enemy 4 sized ship sunk'
    }
    if (size5hit === 5)
    {
        Info.innerHTML = 'Enemy 5 sized ship sunk'
    }
    if (totalhit === 17)
    {
        Info.innerHTML = 'You win!'
        gameover()
    }
    if (Csize2 === 2)
    {
        Info.innerHTML = 'Your 2 sized ship sunk'
    }
    if (Csize3n1 === 3)
    {
        Info.innerHTML = 'Your first 3 sized ship sunk'
    }
    if (Csize3n2 === 3)
    {
        Info.innerHTML = 'Your second 3 sized ship sunk'
    }
    if (Csize4 === 4)
    {
        Info.innerHTML = 'Your 4 sized ship sunk'
    }
    if (Csize5 === 5)
    {
        Info.innerHTML = 'Your 5 sized ship sunk'
    }
    if (Ctotalhit === 17)
    {
        Info.innerHTML = 'Computer win!'
        gameover()
    }
}

function gameover()
{
    gameended = true;
    Startbutton.removeEventListener('click', Game)
}