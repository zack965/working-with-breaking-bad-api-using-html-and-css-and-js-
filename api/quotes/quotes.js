///api/characters
//https://breakingbadapi.com/
var data;
var arrres = [];
async function getCharachters(){
    const response = await fetch("https://breakingbadapi.com/api/quotes");
    var data = await response.json();
    console.log(data)
    console.log(data[0])
    console.log(data[0].name)
    console.log(data.length)
    //return data;
    
    for (let i = 0; i < data.length; i++) {
        //document.getElementById("demo").innerHTML +=data[i];
        arrres.push(data[i])
        
    }

    //document.getElementById("demo").innerHTML=data[2];
    
}
getCharachters();

setTimeout(() => {
    var list = ""
    console.log(arrres)
    
    for (let i = 0; i < arrres.length; i++) {
        //list += arrres[i].name +"<br/>"
        //document.getElementById("demo").innerHTML=list;
        var col_md_6 = document.createElement("div");
        col_md_6.setAttribute("class","col-md-3");

        
        var quotetext = document.createElement("h5");
        quotetext.innerHTML = "quote : "+arrres[i].quote;

        var author = document.createElement("p");
        author.setAttribute("class","card-text");
        author.innerHTML = "author : "+ arrres[i].author;


        var series = document.createElement("p");
        series.setAttribute("class","card-text");
        series.innerHTML = "series :"+arrres[i].series;

       
        col_md_6.appendChild(quotetext);
        col_md_6.appendChild(author);
        col_md_6.appendChild(series);
        //col_md_6.appendChild(characters);
        //col_md_6.appendChild(episode);
        //document.body.appendChild(charachter);
        document.getElementsByClassName("row")[0].appendChild(col_md_6);
       
    }
    //console.log(document.getElementsByClassName("card").length)
}, 2500);
/*
 col_md_6.appendChild(charachter);
        charachter.appendChild(image);
        charachter.appendChild(card_bod);
        card_bod.appendChild(char_name);
        card_bod.appendChild(eptitle);
        card_bod.appendChild(role);
        card_bod.appendChild(status);
        card_bod.appendChild(NickName);
        card_bod.appendChild(RealName);

*/
/*

var charachter = document.createElement("div");
        charachter.setAttribute("class","card");

        var image = document.createElement("img");
        image.setAttribute("class","card-img-top");
        image.setAttribute("src",arrres[i].img);
        //image.setAttribute("width","50px");
        image.setAttribute("height","300px");

        var card_bod = document.createElement("div");
        card_bod.setAttribute("class","card-body");

        var char_name = document.createElement("h6");
        char_name.setAttribute("class","card-title");
        char_name.innerHTML = arrres[i].name;

        var birth_day = document.createElement("h5");
        birth_day.innerHTML = arrres[i].birthday;
        
        var role = document.createElement("p");
        role.setAttribute("class","card-text");
        role.innerHTML = arrres[i].occupation;

        var status = document.createElement("p");
        status.setAttribute("class","card-text");
        status.innerHTML = arrres[i].status;

        var NickName = document.createElement("p");
        NickName.setAttribute("class","card-text");
        NickName.innerHTML = arrres[i].nickname;
        
        var RealName = document.createElement("p");
        RealName.setAttribute("class","card-text");
        RealName.innerHTML = arrres[i].portrayed;

*/