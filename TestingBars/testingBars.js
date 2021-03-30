const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 50

//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
]

//draw all my blocks function
function addBlocks() {

    for (let i = 0; i < blocks.length; i++){

        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
        grid.appendChild(block)
    }
}

addBlocks()

const bar = document.createElement('div')
bar.classList.add('bar')
bar.style.left = getMinorPosition() + "px"
bar.style.bottom = 1 + "px"
bar.style.height = 20 + "px"
bar.style.width = getBiggerPosition() + blockWidth + "px"
grid.appendChild(bar)

console.log(getBiggerPosition())

function getBiggerPosition () {
    let position = 0;
    for (let i = 0; i < blocks.length; i++) {
        position = blocks[0].bottomLeft[0]
        if (position < blocks[i].bottomLeft[0]) {
            position = blocks[i].bottomLeft[0]
        }
    }
    return position - 10
}

function getMinorPosition () {
    let position = blocks[0].bottomLeft[0]
    for (let i = 0; i < blocks.length; i++) {
        if (position > blocks[i].bottomLeft[0]) {
            position = blocks[i].bottomLeft[0]
        }
    }
    return position
}

console.log(getMinorPosition())