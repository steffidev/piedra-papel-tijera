function aleatorio(a,b){
    //asegurar que son enteros
    a = parseInt(a)
    b = parseInt(b)

    return Math.floor(Math.random()*(b-a+1))+ a;
}

//Variables generales 
var tiradas = 0
var ganadas = 0
var derrotas = 0
var empates = 0

//Imágenes

var imagenes = {
    piedra: "images/piedra.jpg",
    papel: "images/papel.jpg",
    tijera: "images/tijera.jpg"
};

//Determinar tirada CPU
var tiradaCpu = determinarTiradaCPU()

function determinarTiradaCPU() {
    let opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

//determinar que tirada ha elegido el jugador


function jugar(tiradaJugador) {
    let tiradaCPU = determinarTiradaCPU();

// Mostrar resultados elegidos arriba
    imgJugador.src = imagenes[tiradaJugador];
    imgCPU.src = imagenes[tiradaCPU];

//si hay empate

    if(tiradaCPU == tiradaJugador){
        outResultado.innerText = 'HAS EMPATADO!';
        //sumar 1 empates a la variable global
        empates++;}

    
    //si gana el jugador


        else if(
            (tiradaJugador === "piedra" && tiradaCPU === "tijera") ||
            (tiradaJugador === "papel" && tiradaCPU === "piedra") ||
            (tiradaJugador === "tijera" && tiradaCPU === "papel")
        ){
            outResultado.innerText = '¡HAS GANADO!';
            //sumar 1 a victorias
            ganadas++;
        }
    

        //sino gana cpu
        else{
            outResultado.innerText = '¡HAS PERDIDO!';
            //sumar uno a derrotas
            derrotas++;
        }


//incrementar partidas
tiradas++;

//actualizar interfaz gráfica
    outJugadas.innerText = 'Partidas jugadas: '+ tiradas;
    outGanadas.innerText = 'Partidas ganadas: '+ ganadas;
    outEmpatadas.innerText = 'Partidas empatadas: '+ empates;
    outPerdidas.innerText = 'Partidas perdidas: '+ derrotas;
}