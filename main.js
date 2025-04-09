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
    


}