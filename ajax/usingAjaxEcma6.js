//Vanilla Promises

function vanillaPromisesJS(){

    function get(url){
        return new Promise(function(resolve, reject){
            
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            
            //onload é se o browser suporta a Promise
            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                }
                else{
                    reject(xhttp.statusText);
                }
            };
            
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            };
            xhttp.send();
            
        });
    }

    // Pegando a sua promise
    var promise = get("nJsonFiles/amigos.json");
    promise.then( function(responseAmigos) {

        console.log(responseAmigos);
        return get("nJsonFiles/fruits.json");
         
    }).then( function(responseFruits){

        console.log(responseFruits);
        return get("nJsonFiles/medos.json");
    
    }).then( function(responseFears){

        console.log(responseFears);

    }).catch( function(error){
        console.log(error);
    } )

}

//Promises usando JQuery
function jqueryPromisesJS(){
    $.get("nJsonFiles/amigos.json").then( (responseFriends) => 
        {

          console.log(responseFriends);
          return $.get("nJsonFiles/fruits.json");   

        }).then( (responseFruits) => {
                console.log(responseFruits);
                return $.get("nJsonFiles/medos.json");

            }).then( function(responseFears)  {
                    console.log(responseFears);
                    
                    
            }).catch(console.log('something went wrong'));
}



function generatorAjax(){

    //Chamada da função genWrap
    genWrap( function*(){
        var fruits = yield $.get("nJsonFiles/fruits.json");
        console.log(fruits);
        var friends = yield $.get("nJsonFiles/a1migos.json");
        console.log(friends);
        var fears = yield $.get("nJsonFiles/medos.json");
        console.log(fears);
                
    });
    

    function genWrap(generator){ //Recebi a referência do Generator
     
        var genIterator = generator();  //Coloquei a chamada do Generator no genIterator, p iterar
        
        function verifyRequisition(requisitionAjax){
            if(!requisitionAjax.done){ //Se a requisição não acabou, faça:
                
                //Object value: x, done: (bool)
                requisitionAjax.value.then( (responseData) => { 
                    return verifyRequisition(genIterator.next(responseData));
                });
                
                requisitionAjax.value.catch(() => console.log());
                
            }
        }
        
        return verifyRequisition(genIterator.next()); //chamei a verifyRequisition sob o generator iterado
    }
    
}
var teste = $.get("nJsonFiles/amigos.json");
teste.then(  function() {
    console.log(teste);
    
}  )