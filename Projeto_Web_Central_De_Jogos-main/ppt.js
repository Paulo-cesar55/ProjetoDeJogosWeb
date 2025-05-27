function jogar() {
    const resppt = document.getElementById("resppt")
    const escolha = document.querySelector('input[name="pedrapapeltesoura"]:checked')
    const numeroaleatorio = Math.floor(Math.random()*3)
    const sorteio = ""
    
    
    if(!escolha) {
        resppt.innerHTML = "<p>ESCOLHA UMA OPÇÃO</p>";
        resppt.className = "resultado";
        return;
    }
    
    
    if(numeroaleatorio==0) {
        sorteio="pedra";
    } else if (numeroaleatorio==1) {
        sorteio="papel";
    } else {
        sorteio="tesoura"
    }

    if(escolha.value === sorteio) {
        resppt.innerHTML = "DEU EMPATE"
        resppt.className = "resultado"
    }

}