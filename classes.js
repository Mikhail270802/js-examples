class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice() {
        console.log('Base voice from ', this.name)
    }
}

const cat = new Animal({name: 'Muselka', color: 'Leopard'})

class Dog extends Animal {
    constructor(options) {
        super(options)

        this.hasTail = options.hasTail
        this.type = 'dog'
    }

    voice() {
        super.voice()
        console.log(this.name + ' says gaf-gaf')
    }
}

const dog = new Dog({name: 'Bullet', color: 'Grey', hasTail: true})

// Examples
// The arrow function will not work because does not create a scope
Object.prototype.print = function() {
    console.log(`I am object: `, this)
}

cat.print()

Array.prototype.mapAndLog = function() {
    console.log('Array to map ', this)
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4, 5].mapAndLog(x => x ** 2))

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('Trippie Red'.toTag('strong'))
console.log('Trippie Red'.toTag('em'))

Number.prototype.toBigInt = function() {
    return BigInt(this)
}

const num = 19
console.log(num.toBigInt())