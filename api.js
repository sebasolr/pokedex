
const columna1 = document.querySelector('#columna1')
const columna2 = document.querySelector('.columna2');


const anidarPokemon = function agregarPokemon(){
    let pokemon =(0);
    for(i=1; i<=300;i++){
        pokemon =i
       if(pokemon <= 300){
        img = document.createElement('img');
        img.id= pokemon
        img.src= 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokemon+'.png'
        columna1.classList.add('filas')
        columna1.appendChild(img);

        
       } 
    } return  
}
anidarPokemon()


const fotoPokemon= document.querySelector('#fotoPokemon')
const nombre= document.querySelector('#nombre')
const clasi= document.querySelector('#clasi')

const pokedex = document.querySelectorAll('img')

for(let poke of pokedex){
    poke.addEventListener('click',function(){
        $.getJSON('http://pokeapi.co/api/v2/pokemon/' + poke.id, function(datos){
            console.log(datos)    
            nombre.innerHTML= datos.name
            clasi.innerHTML = datos.types[0].type.name
           console.log(datos)
           img = document.createElement('img');
           img.src= 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+datos.id+'.png'
           fotoPokemon.replaceChildren(img);
         
            
            // fotoPokemon.textContent ='<img src="datos.sprites.front_default" alt=""></img>'

        })
    })
}



