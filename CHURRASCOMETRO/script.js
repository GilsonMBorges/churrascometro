


let inputAdultos = document.getElementById("adultos");
let inputAdultosNaoBebem = document.getElementById("adultosnaobebe");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {



    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let adultosnaobebe = inputAdultosNaoBebem.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) * adultosnaobebe + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalRefri = refriPP(duracao) * adultosnaobebe + (refriPP(duracao)/2 * criancas);

    console.log(qdtTotalCarne)
    console.log(qdtTotalCerveja)
    console.log(qdtTotalRefri)

    
    resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/350)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefri/2000)} Garrafas de 2L refri</p>`

    
    
}

function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){

    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }

}
function refriPP(duracao){

    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }

}