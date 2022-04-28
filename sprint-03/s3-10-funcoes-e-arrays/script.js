function positions(firstPlace, secondPlace, lastPlace){
    let pos = [];
    pos.push(firstPlace);
    pos.push(secondPlace);
    pos.push(lastPlace);

    for(let i=1;i<pos.length;i++){
        if(pos[i].toLowerCase() == 'daniel'){
            temp = pos[i-1];
            pos[i-1] = pos[i];
            pos[i] = temp;
        }
    }

    for(let i=0;i<pos.length;i++){
        console.log(`${i+1}° - Colocado ${pos[i]}`);
    }

}

console.log('Testando as entradas: FABIANO, LUCAS, DANIEL')
positions('FABIANO','LUCAS','DANIEL');
console.log('Testando as entradas: FABIANO, DANIEL, LUCAS')
positions('FABIANO', 'DANIEL', 'LUCAS');
console.log('Testando as entradas: DANIEL, LUCAS, FABIANO')
positions('DANIEL', 'LUCAS', 'FABIANO');
console.log('Testando as entradas: JULIO, LUCAS, FABIANO')
positions('JULIO', 'LUCAS', 'FABIANO');