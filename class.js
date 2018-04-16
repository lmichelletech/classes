function Auto(wheels){

    this.wheels = wheels
    this.setColor = (color)=>{
        this.color = color
    }
    this.getColor = ()=>{
        return this.color
    }
}


class Automobile{
    constructor(wheels){
        this.wheels = wheels
    }

    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}

class moto extends Automobile{
    constructor(make,model, year){
        super(2)
        this.make = make
        this.model = model
        this.year = year
        // this.setMake = (make)=>{
        //     this.make = make
        // }
        // this.getMake = ()=>{
        //     return this.make
        // }
        // this.setModel = (model)=>{
        //     this.model = model
        // }
        // this.getModel = ()=>{
        //     return this.model
        // }
        // this.setYear = (year)=>{
        //     this.year = year
        // }
        // this.getYear = ()=>{
        //     return this.year
        // }
    }
    
}

function Sedan(doors){
    //you need 4 doors and 4 wheels
   
    this.doors = doors //saying = 4 instead would make it a static property
    
}

function Camry(year, model){
    this.make = "Toyota"
    // this.setModel = (model)=>{
    //     this.model = model
    // }
    // this.getModel = ()=>{
    //     return this.model
    // }
    this.model = model
    this.year = year
}

const auto = new Auto(4)
auto.color = 'blue'

Sedan.prototype = new Auto(4)
const sedan = new Sedan(4)

Camry.protoype = new Sedan(2)
const camry = new Camry('2010', 'Camry')


console.log(sedan.wheels + " " + sedan.doors + " " + camry.year + " " + camry.make + " " + camry.model + " ")

mymoto = new moto('ford', 'mustang', '2005')
console.log(mymoto)

class Maybach extends moto{
    constructor(make,model, year){
        super(make,model, year)
        this.manufacturer = 'manufacturer'
    }
}

may = new Maybach('Mercedes', 'Maybach', '2012')

console.log(may + " " + may.manufacturer)


// console.log(camry.wheels)