function getPromiseBand(band){
    return new Promise((resolve, reject) => {
        if(band == 'Queen'){
            resolve({
                sucess: true,
                bandName: band,
                msg: 'It is Queen, indeed!',
            });
        }
        else{
            reject( {
                sucess: false,
                msg: 'Oh, no! Wrong band!',
            });
        }
    });
}

function getPromiseSong(response){
    return new Promise ( (resolve, reject) => {
        if(response.sucess){
            resolve('Bohemian Rhapsody by ' + response.bandName);
        }
        else{
            reject('No, you don \'t get that song!');
        }
    });
}

/* If we were doing with the traditional promise shit */
function vanillaDoThings(){
    const responseBand = getPromiseBand('Queen');
    responseBand.then( (responseBand) =>{
        console.log(responseBand);
        console.log(responseBand.msg);
        return getPromiseSong('else');
    }).then( (responseSong) => {
        console.log(responseSong);
        
    }).catch( (error) => {
        if(error.msg){
            console.log(error.msg);
            return;   
        }
    });
}

getMyResponses();
async function getMyResponses(){
    try{
        const responseBandAsync = await getPromiseBand('Queen');
        console.log(responseBandAsync); 
        responseBandAsync.sucess = false;
        const responseSongAsync = await getPromiseSong(responseBandAsync);
        console.log(responseSongAsync);
    }catch(error){
        if(error.msg){
            console.log(error.msg);
            return;
        }
        else{
            console.log(error);
        }
    }
}