function Raiz(){
	var valor = document.getElementById('num').value;
	var res = 0.0;

    try{
        if(valor < 0 ){
            throw "Has colocado un numero negativo"
        }
    
    res = res + Math.sqrt(valor);

    document.getElementById("resultado").innerHTML= "La Raiz de: "+ valor +" Es: "+ res;
    }catch(e){
        alert ("Error, Error. " + e);
    }

	
}



function Limpiar(){
    num.value="";
salida.textContent="";
}
