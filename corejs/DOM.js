//DESAFIO 1 E 2
var btn = document.querySelector("button#desafio1");
btn.addEventListener("click", () => {
    var square = document.createElement("div");
    square.style.width = 100 + 'px';
    square.style.height = 100 + 'px';
    square.style.margin = 10+'px';
    square.style.backgroundColor = 'red';
    square.setAttribute('onmouseover', 'trocaCor(this)');
    document.querySelector("div#container").appendChild(square);
})



function getRandomColor() {  
    var letters = "0123456789ABCDEF";  
    var color = "#";  
    for (var i = 0; i < 6; i++) {   
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;}
    

function trocaCor(squareElement){
    squareElement.style.backgroundColor = getRandomColor();
}

//DESAFIO 3 E 4
fazLista();
function fazLista(){
    var nomes = ['Klaus', 'Enzo', 'Wesley'];
    var lista = document.createElement("ul");
    document.getElementById("desafio3").appendChild(lista);
    nomes.forEach( (value) => {
        let liElement = document.createElement("li");
        liElement.innerHTML = value;
        lista.appendChild(liElement);
    } )
}
function adicionar(){
    var inputElement =document.querySelector("input[name=nome]");
    let liElement = document.createElement("li");
    liElement.innerHTML = String(inputElement.value);
    document.querySelector("ul").appendChild(liElement);
    inputElement.value = "";
}