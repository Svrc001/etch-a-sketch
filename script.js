function getRandomColor() {
    let color = '#';

    let letters = '0123456789ABCDEF';

    for(let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function createDivs(size) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('square-div');  

    div.style.width = size + 'px';
    div.style.height = size + 'px';

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = getRandomColor();

        let opacity = div.style.opacity;
        if(opacity === '') {
            opacity = '0.55';
        } else if(opacity !== '1') {
            opacity = String(parseFloat(opacity) + 0.05);
        }
        
        div.style.opacity = opacity;
        
    });
    
    //To remove bg-color of the squares once mouse leaves
    // div.addEventListener('mouseleave', () => {
    //     div.style.backgroundColor = '';
    // });

    container.appendChild(div);
    
}

function createGrid(n) {
    const container = document.querySelector('.container');

    let cWidth = container.clientWidth;
     
    // let size = (cWidth / n) - 2; //due to adding 1px border to the squares
    let size = (cWidth / n);
    container.replaceChildren();

    for(let i=0; i<n*n; i++) {
        createDivs(size);
    } 
}

function click() {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        let n = 1;
        while(1) {
            n = prompt("Enter no. of squares per side", 16);
            
            if(n === null || (n >= 1 && n <= 100)) {
                break;
            }
            alert("Enter value between 1 and 100");
        }
 
        if(n !== null) {
            createGrid(n);
        }
    });
}





createGrid(16);
click();