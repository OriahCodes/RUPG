class Renderer {
    _renderUsers(userInfo) {
        $(".user-container").empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        
        let user = template(userInfo)
        $(".user-container").append(user)
    }

    _renderQuote(quoteInfo) {
        $(".quote-container").empty()
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        
        let quote = template(quoteInfo)
        $(".quote-container").append(quote)    
    }

    _renderPokemon(pokemonInfo) {
        $(".pokemon-container").empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        
        let pokemon = template(pokemonInfo)
        $(".pokemon-container").append(pokemon)  
    }

    _renderMeat(meatInfo) {
        $(".meat-container").empty()
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        
        let meat = template(meatInfo)
        $(".meat-container").append(meat)  
    }

    _renderFriends(friendsInfo) {
        $(".friends-container").empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        
        let friends = template({friendsInfo})
        $(".friends-container").append(friends)  
    }

    _arrangeData(rawData){
        const userData = rawData[0].results[0]
        let userInfo = {
            profilePic : userData.picture.medium,
            name: `${userData.name.first} ${userData.name.last}`, 
            location: `${userData.location.city}, ${userData.location.state}`,
        }

        const quoteData = rawData[1].contents.quotes[0]
        let quoteInfo = {
            quote : quoteData.quote ,
            author : quoteData.author ,
        }

        const pokemonData = rawData[2]
        let pokemonInfo = {
            pokemonPic : pokemonData.sprites.front_default,
            name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
        }

        const meatData = rawData[3]
        let meatInfo = {
            meatText : meatData[0]
        }

        let friendsInfo = []
        rawData.slice(4).forEach(element => {
            friendsInfo.push(element.results[0].name)
        })

        const data = {
            userInfo : userInfo,
            quoteInfo : quoteInfo,
            pokemonInfo : pokemonInfo,
            meatInfo : meatInfo,
            friendsInfo : friendsInfo,
        }

        return data
    }

    render(rawData){
        const data = this._arrangeData(rawData)  

        this._renderUsers(data.userInfo)
        this._renderQuote(data.quoteInfo) 
        this._renderPokemon(data.pokemonInfo)
        this._renderMeat(data.meatInfo)
        this._renderFriends(data.friendsInfo)
    
    }
}

