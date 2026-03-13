function detalharPokemon(detailPokemon) {

  // Pokemon (div)
  document.getElementById("pokemon-div").className += `pokemon ${detailPokemon.type}`

  // Cabeçalho
  document.getElementById("pokemon-name").textContent = detailPokemon.name;
  document.getElementById("pokemon-id").textContent = `#${detailPokemon.number}`;
  
  // Tipos
  const typesDiv = document.getElementById("pokemon-types");
  typesDiv.innerHTML = `<div class="detail"> <ol class="types"> 
                        ${detailPokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</ol></div>`
  
  // Foto
  document.getElementById("pokemon-photo").src = detailPokemon.photo;
  document.getElementById("pokemon-photo").alt = detailPokemon.name
  // About
  document.getElementById("pokemon-about").innerHTML = `
    <header><h3 class="about">About</h3></header>
    <p class="about">Species:<strong> ${detailPokemon.species}</strong></p>
    <p class="about">Height:<strong> ${detailPokemon.height}</strong></p>
    <p class="about">Weight:<strong> ${detailPokemon.weight}</strong></p>
    <p class="about">Abilities:<strong> ${detailPokemon.abilities.map((ability) => ` ${ability}`)}</strong></p>
  `;

}

function loadPokemon() {
    // Captura o ID da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    //obter o Pokemon na API.
    pokeApi.getPokemon(id).then((pokemon) => {
      detalharPokemon(pokemon)
    });
}

loadPokemon();




