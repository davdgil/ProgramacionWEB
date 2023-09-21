const op =  prompt("1.Multiplicacion\n2.Mayor\n3.Encabezado")


switch (op){
    case 1:
        multiplicar();
        
        break;
    case 2:
        mayor();
        break;
    case 3:
        encabezado();        
}



let multiplicar = (a,b) => {
    let a = prompt("Numero 1");
    let b = prompt("Numero 2");
    alert(a*b)
}
