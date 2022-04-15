

const fibo = () => {
    let termino1 = 0, termino2 = 1, siguienteTermino = 0;
    var valor = parseInt(document.getElementById("numero").value);
    if (valor === 0) {
        alert("El valor tiene que ser >0");
        return 0;
    }
    document.getElementById("resultado").innerText ="El resultado es:"
    for (let i = 1; i <= valor; i++) {
        console.log(termino1);
        siguienteTermino = termino1 + termino2;
        termino1 = termino2;
        termino2 = siguienteTermino;
        document.getElementById("resultado").innerHTML += " " + termino1+ ",";
    }
}

const limpiar=()=>{
    document.getElementById("numero").value="0";
    document.getElementById("resultado").innerHTML=" ";
}