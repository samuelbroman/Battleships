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
    /*location2[1] = document.querySelector('size2-2')
    location3n1[0] = document.querySelector('size3n1-1')
    location3n1[1] = document.querySelector('size3n1-2')
    location3n1[2] = document.querySelector('size3n1-3')
    location3n2[0] = document.querySelector('size3n2-1')
    location3n2[1] = document.querySelector('size3n2-2')
    location3n2[2] = document.querySelector('size3n2-3')
    location4[0] = document.querySelector('size4-1')
    location4[1] = document.querySelector('size4-2')
    location4[2] = document.querySelector('size4-3')
    location4[3] = document.querySelector('size4-4')
    location5[0] = document.querySelector('size5-1')
    location5[1] = document.querySelector('size5-2')
    location5[2] = document.querySelector('size5-3')
    location5[3] = document.querySelector('size5-4')
    location5[4] = document.querySelector('size5-5')*/

    function Createbattlefield(grid, squares, prefix) {
        for (let i = 0; i < 100; i++){
            const square = document.createElement('div')
            square.id = prefix + i
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
                    location2[0] = document.getElementById('computer' + (random - 1))
                    location2[0].classList.add('s2')
                    location2[1] = document.getElementById('computer' + random)
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
                    location2[0] = document.getElementById('computer' + random)
                    location2[0].classList.add('s2')
                    location2[1] = document.getElementById('computer' + (random + 1))
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
                        location3n1[0] = document.getElementById('computer' + (random - 2))
                        location3n1[0].classList.add('s3n1')
                        location3n1[1] = document.getElementById('computer' + (random - 1))
                        location3n1[1].classList.add('s3n1')
                        location3n1[2] = document.getElementById('computer' + random)
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
                    location3n1[0] = document.getElementById('computer' + random)
                    location3n1[0].classList.add('s3n1')
                    location3n1[1] = document.getElementById('computer' + (random + 1))
                    location3n1[1].classList.add('s3n1')
                    location3n1[2] = document.getElementById('computer' + (random + 2))
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
                        location3n1[0] = document.getElementById('computer' + (random - 2))
                        location3n1[0].classList.add('s3n2')
                        location3n1[1] = document.getElementById('computer' + (random - 1))
                        location3n1[1].classList.add('s3n2')
                        location3n1[2] = document.getElementById('computer' + random)
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
                    location3n1[0] = document.getElementById('computer' + random)
                    location3n1[0].classList.add('s3n2')
                    location3n1[1] = document.getElementById('computer' + (random + 1))
                    location3n1[1].classList.add('s3n2')
                    location3n1[2] = document.getElementById('computer' + (random + 2))
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
                        location4[0] = document.getElementById('computer' + (random - 3))
                        location4[0].classList.add('s4')
                        location4[1] = document.getElementById('computer' + (random - 2))
                        location4[1].classList.add('s4')
                        location4[2] = document.getElementById('computer' + (random - 1))
                        location4[2].classList.add('s4')
                        location4[3] = document.getElementById('computer' + random)
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
                    location4[0] = document.getElementById('computer' + random)
                    location4[0].classList.add('s4')
                    location4[1] = document.getElementById('computer' + (random + 1))
                    location4[1].classList.add('s4')
                    location4[2] = document.getElementById('computer' + (random + 2))
                    location4[2].classList.add('s4')
                    location4[3] = document.getElementById('computer' + (random + 3))
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
                        location5[0] = document.getElementById('computer' + (random - 4))
                        location5[0].classList.add('s5')
                        location5[1] = document.getElementById('computer' + (random - 3))
                        location5[1].classList.add('s5')
                        location5[2] = document.getElementById('computer' + (random - 2))
                        location5[2].classList.add('s5')
                        location5[3] = document.getElementById('computer' + (random - 1))
                        location5[3].classList.add('s5')
                        location5[4] = document.getElementById('computer' + random)
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
                    location5[0] = document.getElementById('computer' + random)
                    location5[0].classList.add('s5')
                    location5[1] = document.getElementById('computer' + (random + 1))
                    location5[1].classList.add('s5')
                    location5[2] = document.getElementById('computer' + (random + 2))
                    location5[2].classList.add('s5')
                    location5[3] = document.getElementById('computer' + (random + 3))
                    location5[3].classList.add('s5')
                    location5[4] = document.getElementById('computer' + (random + 4))
                    location5[4].classList.add('s5')
                    console.log(random)
                    //classList.add('size5computer')
                }
            
        
        }
    //}
}

ships.forEach(ship => ship.addEventListener('dragstart', dragstart))
ships.forEach(ship => ship.addEventListener('dragover', dragover))
ships.forEach(ship => ship.addEventListener('dragenter', dragenter))
ships.forEach(ship => ship.addEventListener('dragleave', dragleave))
ships.forEach(ship => ship.addEventListener('drop', drop))
ships.forEach(ship => ship.addEventListener('dragend', dragend))

ships.forEach(ship => ship.addEventListener('mousedown', (e) =>{
    selectedship = e.target.id
}))

function dragstart(e){
    pickedship = this
    pickedshipsize = this.childNodes.length
}
        
function dragover(e){
    e.preventDefault()
}    
    
function dragenter(e){
    e.preventDefault()
}    

function dragleave(){

}

function drop(){
    let shipchildid = pickedship.lastChild.id
    let classship = shipchildid.slice(0,-2)
    let shipside = parseInt(shipchildid.substr(-1))
    let shipside2 = shipside + parseInt(this.dataset.id)
    chosenship = parseInt(selectedship.substr(-1))
    shipside2 -= chosenship
    for(let i = 0; i < shipsize; i++)
    {
        playersquares[parse.Int(this.dataset.id) - chosenship].classlist.add('taken', shipsize)
    }
    inventoryGrid.removeChild(pickedship)
}

function dragend(){
    
}


//})