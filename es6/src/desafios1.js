function desafio1(){
    class Usuario {
        constructor(mail, passwd) {
            this.passwd = passwd;
            this.mail = mail;
        };
        isAdmin(){
            return this.admin === true;
        }
    }

    class Admin extends Usuario{
        constructor(mail, passwd){
            super(mail, passwd);
            this.admin = true;
        }
    }

    const user1 = new Usuario('email@teste.com', 'senha123');
    const adm1 = new Admin('email@teste.com', 'senha123');

    console.log(adm1.isAdmin());
    console.log(user1.isAdmin());
}


function desafio2(){
    const usuarios = [  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }];

    var idades = usuarios.map( (objAtual) => {return objAtual.idade});
    console.log(idades);
    

    var funcAdmissiveis = usuarios.filter( (objAtual) => { 
        return (objAtual.empresa === 'Rocketseat' && objAtual.idade >=18);
    });
    console.log('Funcionários admissíveis:');
    funcAdmissiveis.forEach( (element) => {console.log(element)});


    let funcGoogle = usuarios.find(  objAtual=> objAtual.empresa == 'Google' );
    console.log(funcGoogle);

    

    let calc = usuarios.map( objAtual => ({...objAtual, idade: objAtual.idade * 2})
    ).filter( objAtual => objAtual.idade <=50);    
    console.log(calc);
    
    
}

function desafio4(){
    const user = { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' };
    const empresa = {  
        nome: 'Rocketseat',  
        endereco: {    cidade: 'Rio do Sul',    estado: 'SC',  }
    };

    let {nome, endereco:{cidade, estado}} = empresa;
    console.log(nome);
    console.log(cidade);
    console.log(estado);
    
    function mostraInfo ({nome, idade}){
        return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo(user));
    
    
}
function desafio5(){
    const arr = [1, 2, 3, 4, 5, 6];
    let [x, ...y] = arr;
    console.log(x);
    console.log(y);
    console.log('dpo');
    
    function soma(...params){
        
        return params.reduce( (acc, curr) =>{return acc + curr});
        
        
        
        
    }
    
    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil'
        }
    
    };

    let usuario2 = {...usuario, nome:'Gabriel'};
    console.log(usuario2);
    let usuario3 = {...usuario, endereco: {cidade:'Lontras'}};
    console.log(usuario3);
    
    

    
}