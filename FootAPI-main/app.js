

const btnn =document.querySelector("#btnn");

btnn.addEventListener("click",() => {

     
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6e1aad90b0mshecd4198a099aa6bp1700f7jsn188f5edd4f42',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=2022', options)
    
        .then(response => response.json())
        .then((data) => {
    
    

    
            

            let affichage =`<ul>`
            let age =`<ul>`
            let im =`<ul>`
    for( let x of data.response)
    {
        let input = document.querySelector("#container3");
         if(input.value === x.player.name)
         {
            console.log(x.player.name)
            affichage = `<strong>${x.player.name}</strong>`
            age = `<strong>${x.player.age}</strong>`
            im = x.player.photo
         }
      
    }
    affichage +=`</ul>`
    document.querySelector("#namme").innerHTML = affichage;
    document.querySelector("#age").innerHTML = age;
    document.querySelector("#img").src = im;
    
    
    
    
        })

//--------------



function getData(data) {
    
}

        //----------------
        // function getData(data) {

        //     console.log(data);
        //     const container3 = document.querySelector("#container3");
        //     const x = "";
        //     data.forEach(element => {
        //         var name = element.player.name;
               
            
                  
        //             document.getElementById("name").innerHTML += "<div>" + name + "</div>"
                
                
               
        //     });
        // }
//-----------------------------




    
})





   