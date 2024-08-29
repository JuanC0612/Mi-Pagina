const marcasDeMotos = ["Yamaha","Ducati","Bmw","Husqvarna","Kawasaki","Ktm",];

console.log(marcasDeMotos);

marcasDeMotos[4] = "Suzuki";
marcasDeMotos[5] = "Ktm";
console.log(marcasDeMotos)

marcasDeMotos.push("Bajaj");
marcasDeMotos.push("Honda");

marcasDeMotos.unshift("Royal Enfield")

marcasDeMotos.pop("Bajaj");
marcasDeMotos.shift("Royal Enfield")



let i=0;
while(i<10){
    console.log(i);

    i++

}
    
    let dinero = 500;
    let totalPagar = 300;
    let tarjeta =  false;
    let cheque = true;
    
    
    if(dinero > totalPagar && tarjeta || cheque  ){
        console.log('Puedes pagar');
        
    }else {
        console.log('No tienes plata');
        
    }

