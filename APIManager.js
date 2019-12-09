class APIManager {
    constructor() {
        this.data = this.loadData()
    }

    getUser(){
        return $.ajax({ 
            method: "GET",
            url:'https://randomuser.me/api/',
            error: (xhr, text, error) => {
                console.log(text)
            }
        })
    }

    getBacon(){
        return $.ajax({ 
            method: "GET",
            url:'https://baconipsum.com/api/?type=meat-and-filler',
            error: (xhr, text, error) => {
                console.log(text)
            }
        })
    }

    getQuote(){
        return $.ajax({ 
            method: "GET",
            url:'https://quotes.rest/qod',
            error: (xhr, text, error) => {
                console.log(text)
            }
        })
    }
    
    getPokemon(){
        let randPokemon = Math.floor(Math.random() * 807) + 1
        return $.ajax({ 
            method: "GET",
            url:`https://pokeapi.co/api/v2/pokemon/${randPokemon}`,
            error: (xhr, text, error) => {
                console.log(text)
            }
        })
    }

    loadData(){        
        let dataPromises = [this.getUser(), this.getQuote(), this.getPokemon(), this.getBacon()]
        for (let i = 0; i<6; i ++){ //adding friends promises
            dataPromises.push(this.getUser())
        } 

        return dataPromises       
    }
 
}
