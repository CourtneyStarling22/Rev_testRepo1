function getPokemonNames() {
    let xhr=new XMLHttpRequest;

    xhr.open("GET","https://pokeapi.co/api/v2/pokemon/",true);

    xhr.onload=function(){
        if(this.readyState==4 && this.status==200){
            console.log(JSON.parse(this.responseText))

            let pokemon=JSON.parse(this.responseText);
           
            Object.keys(pokemon).forEach(element => {
                //console.log(element.name);
            });
        }
    }
    xhr.send();
}


function getPokemonNamesList() {
    let xhr=new XMLHttpRequest;

    xhr.open("GET","https://pokeapi.co/api/v2/pokemon/",true);

    xhr.onload=function(){
        if(this.readyState==4 && this.status==200){
            console.log(JSON.parse(this.responseText))

            let pokemon=JSON.parse(this.responseText);
            
            var data="<ol>";
            Object.keys(pokemon).forEach(element => {
                //console.log(element.url);
                data=data+"<li>"+ element.name +"</li>";
                //console.log(pokemon);
            });
            data=data+"</ol>"
            document.getElementsByName("data").innerHTML = data;
        }
    }
    xhr.send();
}


function getPokemonbyName() {
    let xhr=new XMLHttpRequest;
    let name=document.getElementById("name").value;
    let url='https://pokeapi.co/api/v2/pokemon/'+name;

    xhr.open("GET",url,true);

    xhr.onload=function(){
        if(this.readyState==4 && this.status==200){
            //console.log(JSON.parse(this.responseText))

            let pokemon=JSON.parse(this.responseText);
            console.log(pokemon);
            var data="<table><tr><th>Name</th><th>url</th></tr>";
            //git.forEach(element => {
                //console.log(element.login);
                data=data+"<tr><td>"+ pokemon.name+"</td>";
                data=data+"<td><img height=100 width=100 src='"+pokemon.url+"'/></td></tr>";
            //});
        data=data+"</table>"
        document.getElementById("data").innerHTML = data;
        }
    }
    xhr.send();
}


function getPokemonbyNameFetch() {

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => console.log(data));
}