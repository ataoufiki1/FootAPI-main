

const btnn =document.querySelector("#btnn");

btnn.addEventListener("click",() => {

     
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca0d916c0dmsh2c7e31c8d06c774p11d0e2jsn7e760bf3bc32',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=2022', options)
    
        .then(response => response.json())
        .then((data) => {
    
    
                console.log(data.response)
    
            

            let affichage =`<ul>`
            let age =`<ul>`
            let nationality=`<ul>`
            let weight=`<ul>`
            let im =`<ul>`
            let team = `<ul>`
            let logo = `<ul>`
            

       for( let x of data.response)
    {
        let input = document.querySelector("#container3");
         if(input.value === x.player.name)
         {
            affichage = `<strong>${x.player.name}</strong>`
            weight = `<strong>${x.player.weight}</strong>`
            age = `<strong>${x.player.age} ans</strong>`
            nationality = `<strong>${x.player.nationality}</strong>`
            im = x.player.photo
         } 
         
         else(input.value === x.statistics.name)
         {
            team = `<strong>${x.statistics[0].team.name}</strong>`
            logo = x.statistics[0].team.logo


         }
      
    }
    affichage +=`</ul>`
    document.querySelector("#namme").innerHTML = affichage;
    document.querySelector("#age").innerHTML = age;
    document.querySelector("#weight").innerHTML = weight;
    document.querySelector("#nationality").innerHTML = nationality;
    document.querySelector("#team").innerHTML = team;
    document.querySelector("#img").src = im;
    document.querySelector("#img2").src = logo;
    
    
    
    
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





   