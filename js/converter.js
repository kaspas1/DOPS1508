const inputField = document.getElementById("input-temp") //la constante devuelve propiedades del elemento con id input-temp, con class se pueden repetir el elemento
//console.log(inputField); //se puede colocar cualquier mensaje entre (), la constante creada hereda las propiedades del elemento
const fromUnitField = document.getElementById("input-unit");
const toUnitField = document.getElementById("output-unit");
const outputField = document.getElementById("output-temp");
const form = document.getElementById("converter");

function convertTemp(value, fromUnit, toUnit){
    if (fromUnit === 'c'){
        //LA UNIDAD DE ORIGEN ES CELSIUS
        if(toUnit ==='f'){
            //LA UNIDAD DE DESTINO ES FARENHEIT
            return (value * 9/5) + 32;
        }else if(toUnit ==='k'){
             //LA UNIDAD DE DESTINO ES kelvin
             return value + 273.15;
        }else{
            //NO HA SELECCIONADO UN TIPO DE DESTINO
            return value;
        }
    }

    if (fromUnit === 'f'){
        //LA UNIDAD DE ORIGEN ES FARENHEIT
        if(toUnit ==='c'){
            //LA UNIDAD DE DESTINO ES CELSIUS
            return (value -32) * (5/9);
        }else if(toUnit ==='k'){
             //LA UNIDAD DE DESTINO ES kelvin
             return (value + 459.67) * (5/9);
        }else{
            //NO HA SELECCIONADO UN TIPO DE DESTINO
            return value;
        }
    }

    if (fromUnit === 'k'){
        //LA UNIDAD DE ORIGEN ES KELVIN
        if(toUnit ==='c'){
            //LA UNIDAD DE DESTINO ES CELSIUS
            return value -273.15;
        }else if(toUnit ==='f'){
             //LA UNIDAD DE DESTINO ES FARENHEIT
             return (value * (9/5)) - 459.67;
        }else{
            //NO HA SELECCIONADO UN TIPO DE DESTINO
            return value;
        }
    }

    //NO ENTRO A NINGUNA VALIDACIÓN (if), POR LO TANTO SE DEVUELVE UNA EXCEPCIÓN
    throw new error('unidad de medida inválida')
}

form.addEventListener('input', ()=>{
    const inputTemp = parseFloat(inputField.value); //valor digitado por el usuario en el campo input
    const fromUnit = fromUnitField.value; //valor seleccionado por el usuario (unidad de medida de origen)
    const toUnit = toUnitField.value; //valor seleccionado por el usuario (unidad de medida de destino)

    const outputTemp = convertTemp(inputTemp, fromUnit, toUnit); //Cálculo  de valores, conversión de valores
    outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase(); //impresion de la sálida del cálculo realizado.
})





