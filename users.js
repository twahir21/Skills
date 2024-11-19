import fetch from 'node-fetch';
try{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(
            response => {
                if(response.ok) {
                    return response.json()
                }else{
                    throw new Error("Server is down!")
                }
            }
        )
        .then(
            messages => {
                for(let message in messages){
                    console.log(`${message}: ${messages[message].address.street}`)
                }
            }
        )
}catch{
    console.log(new Error("unable to process your the request"))
}finally{
    console.log("# ...............Starting.................. ")
}