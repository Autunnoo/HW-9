function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function generateBlocks() {
    const countSquere = 25;
    for(let i = 0; i < countSquere; i++) { 
        let div = document.createElement('div');
        document.body.append(div);
        setInterval(() => { 
            div.style.backgroundColor = generateColor();
         }, 1000)
    }
}

generateBlocks();

