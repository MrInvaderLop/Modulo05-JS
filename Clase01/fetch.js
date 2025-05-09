async function loadUser(){
    const container = document.getElementById('user')

    try{
        const response = await fetch ('https://users.com/users')
        const users = await response.json()

        container.innerHTML= users.map(users)
    }
}