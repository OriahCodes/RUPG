const dispNewUser = function(){
    const dataManager = new APIManager()
    const dataPromises = dataManager.data

    Promise.all (dataPromises).then(results => {
        console.log(results)
        const renderer = new Renderer
        renderer.render(results)
    })    
}

dispNewUser()

$(".buttons").on("click", dispNewUser)

