

const boxes = document.querySelectorAll('.col')
var i = 0

for (var x = 0; x < boxes.length; x++) {
    i = x;
    boxes[x].textContent = (i + 1).toString()
}

class Squares {
    constructor() {
        // this.changeNumber()
        // this.changeColor()
        this.colors = [
            'rgb(255, 255, 255)', 
            'rgb(255, 165,0)', 
            'rgb(0, 128, 0)', 
            'rgb(128, 0, 128)', 
            'rgb(255, 192, 203)'
        ]
        this.addClickHandlers()
    }

    changeNumber(num) {
        // console.log("running method changeNUmber")
        for (var i = num; i > 0; i--) {

            //parse means take a string and turn it into a number
            let value = parseInt(boxes[i - 1].textContent)
            // console.log(value)

            //if value is greater than or equal to boxes.lngth make it 1 but if not make value + 1
            value = (value >= boxes.length) ? 1 : value + 1

            //turn number back into string
            boxes[i - 1].textContent = value.toString()
        }
    }

    changeColor(num) {
        // console.log("running method changeColor")
        for (var i = num; i > 0; i--) {
            let style = window.getComputedStyle(boxes[i - 1]);
            //run this console to see all available css elements
            // console.log(style)
            let index = this.colors.indexOf(style.backgroundColor)
            index = (index >= this.colors.length - 1) ? 0 : index + 1
            boxes[i - 1].style.backgroundColor = this.colors[index]
        }
    }

    addClickHandlers() {
        boxes.forEach(box => {
            box.addEventListener('click', e => {
                // this.style.background = "yellow"
                this.changeNumber(box.dataset.number)
                this.changeColor(box.dataset.number)
            })
        })
    }
}

const squares = new Squares()