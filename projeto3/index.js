let nickname 
let age
let type

class Hero {
    constructor(nickname ,age, type){
        this.nickname = nickname
        this.age = age
        this.type = type
    }
    attack(){
        this.hit = ""
        if(this.type = "mago"){
            this.hit = "magia"
        }
        else if(this.type = "guerreiro"){
            this.hit = "espada"
        }
        else if(this.type = "monge"){
            this.hit = "artes marciais"
        }
        else if (this.type = "ninja"){
            this.hit ="shuriken"
        }
        return this.hit
    }
}

let warrior = new Hero("Zeus",33, "guerreiro")
let wizard = new Hero("Merlim",89,"mago")
console.log(`O ${warrior.type} atacou usando ${warrior.attack()}`)
console.log(`O ${wizard.type} atacou usando ${wizard.attack()}`)