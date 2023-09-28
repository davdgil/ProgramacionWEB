const calcular = () =>{
    const base = parseFloat(document.getElementById("base").value)
    const altura = parseFloat(document.getElementById("altura").value)
    let radio = document.getElementById("forma")
    let resultado;

    document.getElementById("triangulo").checked ?
        result = base * altura / 2 : result = base * altura,
    document.getElementById("resultado").value = result
}