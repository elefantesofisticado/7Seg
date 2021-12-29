document.getElementById('player').addEventListener("mouseover",sumarPuntos);

tiempo = 700;
puntos = 0;
necesarios = 10;

function sumarPuntos(){
    puntos++;
    document.getElementById('puntos').innerHTML = "Puntaje: " + puntos + "/" + necesarios;
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    if (puntos == 10) {
       
        alert("GANASTE")
    }
}

function restarTiempo(){
    tiempo--;
   document.getElementById("tiempo").innerHTML = "Tiempo: " + tiempo;
   if (tiempo == 0 && puntos < 10) {
       alert("Perdiste :(")
       tiempo = 0;
   }
}

setInterval(restarTiempo,10);

