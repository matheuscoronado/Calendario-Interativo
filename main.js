function colorirDia(){
    //Pegar valor de campo de dia
    let days = document.querySelector('days').value;

    //Pega o valor do campo da cor
    let color = document.getElementById('calendar');

    //Verifica se o campo de dia foi preenchido
    if(!days){
        alert('Favor informar o dia');
    }
    else if((days > 0) && (days < 31)){
        // Se o número de dias está no intervalo | Aplicará a cor na célula do calendário
        let td = calendar.getElementByTagName('td');
        td.style.backgroundColor = color;
    }
    else{
        alert('Favor informar um dia do calendário')
    }

        //Guardar a célula da tabela
        let elementos = document.querySelectorAll('td');

        //Declara e inicializa contadores
        let contadorAzul = 0, 
        contadorVerde = 0, 
        contadorRosa = 0, 
        contadorRoxo = 0;

        
        //Loop para verificar o estilo de cada célula e contar quantas tem cor e qual cor
        for(let i =0; i<elementos.length; i++){
            //Obtém o estilo computado do elemento atual
            var estilo = window.getComputedStyle(elementos[i]);
    
            //Obtém a cor do fundo atual da célula
            var corEstilo = estilo.backgroundColor;
    
            //Verifica a cor e incrementa contador correspondente
            if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "rgb(LightBlue)"){
                contadorAzul++;
            }
            else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "rgb(PaleGreen)"){
                contadorVerde++;
            }
            else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "rgb(LightPink)"){
                contadorRosa++;
            }
            else if(corEstilo === "rgb(106, 90, 205)" || corEstilo === "rgb(SlateBlue)"){
                contadorRoxo++;
            }
        }

}