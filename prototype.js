// Up to ES 6 syntax

const Animal = function(options) {
    this.name = options.name
    this.color = options.color

//    this.voice = function() {
//        console.log('Base voice from ', this.name)
//  }
}
// Prototype from a class that can be overridden
Animal.prototype.voice = function() {
    console.log('Base voice from ', this.name)
}

//console.log(Animal.prototype)

const cat = new Animal({name: 'Musel', color: 'Leopard'})

//cat.voice()

// ES 5 inheritance
const Dog = function(options) {
    Animal.apply(this, arguments)
    this.hasTail = options.hasTail
    this.type = 'dog'
}
// Redefining Dog's Prototype Object throught Object.create()
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

// Change of functionality
Animal.prototype.voice = function() {
    console.log('That sound goes from: ', this.name)
}

Dog.prototype.voice = function() {
    Animal.prototype.voice.apply(this, arguments)
    console.log(this.name + ' says gaf-gaf')
}

const dog = new Dog({name: 'Bullet', color: 'Grey', hasTail: true})
console.log(dog)

