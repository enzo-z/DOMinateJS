
const functionUtils = () =>{
    const event = require('events');
    class Person extends event.EventEmitter{
        constructor(name){
            super();
            this.name=name;
        }
    }
    let klaus = new Person('Klaus');
    let amaral = new Person('Amaral');
    let luiz = new Person('Luiz Miguel');

    let group = [klaus, amaral, luiz];
    group.forEach( (element) => {
        element.on('dance', (music) =>{console.log(`${element.name} is dancing ${music}`);
        })
    });

    luiz.emit('dance', 'Billie Jean');
};

const arquivShit = () => {
    const fs = require('fs');

};