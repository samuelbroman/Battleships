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
        for (let i = 0; i < 80; i++){
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

]
randomtaken = []
for(let i = 0; i < 5; i++)
{
    while(true)
    {
        const cornercheck = false
        const x = 0
        const random = Math.floor(Math.random(79))
        if (i == 0)
        {
            while (x < 72)
            {
                if (random > x + 7 && random < x + 8 )
                {
                    location2[0] = random - 1
                    location2[1] = random
                    randomtaken[0] = location2[0]
                    randomtaken[1] = location2[1]
                    x = 100;
                    cornercheck = true
                }
            }
                if (cornercheck == false)
                {
                    location2[0] = random
                    location2[1] = random + 1
                    randomtaken[0] = location2[0]
                    randomtaken[1] = location2[1]
                    break;
                }
                else
                {
                    break;
                }
        }
        else if (i == 1)
        {
            for (let i = 0; i < 2; i++)
            {
                if (random == randomtaken[i])
                {
                    random = Math.floor(Math.random(79))
                    i = 0;
                }
            }
                while (x < 72)
                {
                    if (random > x + 6 && random < x + 8 )
                    {
                        location3n1[0] = random - 2
                        location3n1[1] = random - 1
                        location3n1[2] = random
                        randomtaken[2] = location3n1[0]
                        randomtaken[3] = location3n1[1]
                        randomtaken[4] = location3n1[2]    
                        x = 100;
                        cornercheck = true
                    }
                }
                if (cornercheck == false)
                {
                    location3n1[0] = random
                    location3n1[1] = random + 1
                    location3n1[2] = random + 2
                    randomtaken[2] = location3n1[0]
                    randomtaken[3] = location3n1[1]
                    randomtaken[4] = location3n1[2]  
                    break;
                }
                else
                {
                    break;
                }
            
        }
        else if (i == 2)
        {
            for (let i = 0; i < 5; i++)
            {
                if (random == randomtaken[i])
                {
                    random = Math.floor(Math.random(79))
                    i = 0;
                }
            }
                while (x < 72)
                {
                    if (random > x + 6 && random < x + 8 )
                    {
                        location3n2[0] = random - 2
                        location3n2[1] = random - 1
                        location3n2[2] = random 
                        randomtaken[5] = location3n2[0]
                        randomtaken[6] = location3n2[1]
                        randomtaken[7] = location3n2[2]   
                        x = 100;
                        cornercheck = true
                    }
                    x += 8
                }
                if (cornercheck == false)
                {
                    location3n2[0] = random
                    location3n2[1] = random + 1
                    location3n2[2] = random + 2
                    randomtaken[5] = location3n2[0]
                    randomtaken[6] = location3n2[1]
                    randomtaken[7] = location3n2[2]
                    break;
                }
                else
                {
                    break;
                }
            
        }
        
        else if (i == 3)
        {
            for (let i = 0; i < 8; i++)
            {
                if (random == randomtaken[i])
                {
                    random = Math.floor(Math.random(79))
                    i = 0;
                }
            }
                while (x < 72)
                {
                    if (random > x + 5 && random < x + 8 )
                    {
                        location4[0] = random - 3
                        location4[1] = random - 2
                        location4[2] = random - 1
                        location4[3] = random 
                        randomtaken[8] = location4[0]
                        randomtaken[9] = location4[1]
                        randomtaken[10] = location4[2]
                        randomtaken[11] = location4[3]   
                        x = 100;
                        cornercheck = true
                    }
                    x += 8
                }
                if (cornercheck == false)
                {
                    location4[0] = random
                    location4[1] = random + 1
                    location4[2] = random + 2
                    location4[3] = random + 3
                    randomtaken[8] = location4[0]
                    randomtaken[9] = location4[1]
                    randomtaken[10] = location4[2]
                    randomtaken[11] = location4[3] 
                    break;
                }
                else
                {
                    break;
                }
            
        }
        else if (i == 4)
        {
            for (let i = 0; i < 12; i++)
            {
                if (random == randomtaken[i])
                {
                    random = Math.floor(Math.random(79))
                    i = 0;
                }
            }
                while (x < 72)
                {
                    if (random > x + 4 && random < x + 8 )
                    {
                        location5[0] = random - 4
                        location5[1] = random - 3
                        location5[2] = random - 2
                        location5[3] = random - 1
                        location5[4] = random 
                        x = 100;
                        cornercheck = true
                    }
                    x += 8
                }
                if (cornercheck == false)
                {
                    location5[0] = random
                    location5[1] = random + 1
                    location5[2] = random + 2
                    location5[3] = random + 3
                    location5[4] = random + 4
                    break;
                }
                else
                {
                    break;
                }
            
        
        }
        else
        {
            break;
        }
    }
}
        
    
    
    

//})