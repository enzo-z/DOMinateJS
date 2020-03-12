// Vanilla
function vanillaJSAjax(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = ()=>{
        if(http.readyState == 4 && http.statusText == 'OK'){
        console.log(http.response);    
        
        }   
    }

    http.open("GET", "file.json", true);
    http.send();
}
//JQuery
function AjaxJQuery(){
$.get("file.json", function(data){
        console.log(data);
    
    
    });
}

//CallBackHell Example
function callBackHell(){
   
    $.ajax({
        type: "GET",
        url: "nJsonFiles/fruits.json",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);

            $.ajax({
                type: "GET",
                url: "nJsonFiles/amigos.json",
                data: "data",
                dataType: "json",
                success: function (response) {
                    console.log(response);


                    $.ajax({
                        type: "GET",
                        url: "nJsonFiles/medos.json",
                        data: "data",
                        dataType: "json",
                        success: function (response) {
                            console.log(response);
                            
                        },
                        error: function(jqXHR, textStatus, error){
                            console.log(error);
                            
                        }
                    });
                    
                },
                error: function(jqXHR, textStatus, error){
                    console.log(error);
                    
                }
            });
            
        },
        error: function(jqXHR, textStatus, error){
            console.log(error);
            
        }
    });


}
