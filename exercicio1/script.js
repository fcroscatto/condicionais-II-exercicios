const numero = prompt("digite um numero")
if (numero % 2 === 0){
     console.log("é divisivel por 2 ")
    if (numero % 3 === 0){
            console.log("é divisivel por 3")
    } else {
        console.log("Não é divisivel por 2 ou por 3 ")
    }
 if (numero % 2 === 0 || numero % 3 ===0){
     console.log("é divisivel por 2 ou por 3 ")  
 } else 
  console.log("Não é divisivel por 2 ou por 3 ")
}       
    