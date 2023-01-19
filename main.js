function playSom(idSom){
    document.querySelector(idSom).play();
}

const teclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < teclas.length){

   const tecla =  teclas[contador];
   const instrumento = tecla.classList[1];
   const som = `#som_${instrumento}`; 

   tecla.onclick = function() {
        playSom(som);
   }
   
    contador++;
}
