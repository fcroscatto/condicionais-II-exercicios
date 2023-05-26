// let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }


let nacional; 
const nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
switch(nacionalidade){
    case "brasileira":
        nacional = "a pessoa é do Brasil!";
        break;
    case "argentina":
        nacional = "a pessoa é da Argentina!";
        break;
    case "uruguaia" :
        nacional = "a pessoa é do Uruguai!";
        break 
    case "chilena": 
        nacional = "a pessoa é do Chile!";
        break
    case "colombiana": 
        nacional = "a pessoa é dbraa Colômbia!";
        break 
        default:
            console.log("Nacionalidade não encontrada")            

} 
console.log(nacional)