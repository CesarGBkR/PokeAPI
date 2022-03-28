const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    console.log(pokeName)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res); //Por borrar
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data); //Por borrar
            let pokeName = data.name;
            pName(pokeName);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let pokeTipo = data.types[0].type.name;
            pokeType(pokeTipo)
            let pS = data.stats[0].base_stat;
            estadisticasPS(pS)
            let aTK = data.stats[1].base_stat;
            estadisticasATK(aTK)
            let dEF = data.stats[2].base_stat;
            estadisticasDEF(dEF)
            let sATK = data.stats[3].base_stat;
            estadisticasSATK(sATK)
            let sDEF = data.stats[4].base_stat;
            estadisticasSDEF(sDEF)
            let sPEED = data.stats[5].base_stat;
            estadisticasSPEED(sPEED)
            let movements = data.moves[0].move.name;
            movimientos(movements)
        } 
    });
}

const pName = (pokeName) => {
    const pNameInput = document.getElementById("pName");
    pNameInput.innerText = pokeName;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeType = (pokeTipo) => {
    const pokemonTipoInput = document.getElementById("pType");
    pokemonTipoInput.innerText = pokeTipo;
}
// Stats Atributes

const estadisticasPS = (pS) => {
    const statsInput = document.getElementById("statsPS");
    statsInput.innerText = pS;
}
const estadisticasATK = (aTK) => {
    const statsInput = document.getElementById("statsATK");
    statsInput.innerText = aTK;
}
const estadisticasDEF = (dEF) => {
    const statsInput = document.getElementById("statsDEF");
    statsInput.innerText = dEF;
}
const estadisticasSATK = (sATK) => {
    const statsInput = document.getElementById("statsSPATK");
    statsInput.innerText = sATK;
}
const estadisticasSDEF = (sDEF) => {
    const statsInput = document.getElementById("statsSPDEF");
    statsInput.innerText = sDEF;
}
const estadisticasSPEED = (sPEED) => {
    const statsInput = document.getElementById("statsSPEED");
    statsInput.innerText = sPEED;
}

// se cierran stats Atribures

const movimientos = (movements) => {
    const pokeMovimientos = document.getElementById("movimiento");
    pokeMovimientos.innerText = movements;
}

