const inverteString = () => {
    
    const string = document.getElementById('text');
    const tamString = string.value.length;
    let stringInvertida = '';
    
    for(let i = tamString - 1; i >= 0; i--){
        stringInvertida += string.value[i];
    }

    const resultado = document.getElementById('resultado');
    string.value = '';
    resultado.innerHTML = stringInvertida;
}