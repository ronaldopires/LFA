let total = 0;
let valor = 0;
let coinPenny = 0.01;
let coinNickel = 0.05;
let coinDime = 0.10;
let coinQuarter = 0.25;
let coinHalfDollarCoin = 0.50;
let coin = Number($('#coin').val(0));

//Ao clicar no elemento passo o valor de coin e chamo a função calcular
$('#Penny').on('click', function() {
    coin = coinPenny;
    Calculate();
});
$('#Nickel').on('click', function() {
    coin = coinNickel;
    Calculate();
});
$('#Dime').on('click', function() {
    coin = coinDime;
    Calculate();
});
$('#Quarter').on('click', function() {
    coin = coinQuarter;
    Calculate();
});
$('#HalfDollarCoin').on('click', function() {
    coin = coinHalfDollarCoin;
    Calculate();
});


function Calculate() {

    //Caso seja diferente de 0.10 ou 0.25 é negado
    if ((coin != 0.10) && (coin != 0.25)) {
        alert("Só aceitamos moedas de $0,10 e $0,25");
    } else {
        valor += coin;
        total = valor.toFixed(2);
        if (total >= 0.45) {
            alert("Refrigerante Liberado");
            console.log("Você gastou ", total);
            valor = 0;
            //Esconde a janela
            $('#door1').slideUp('slow');
            $('#lata').on('click', function() {
                $('#lata').hide();
                $('#message').css('opacity', 1);
            });
            //Após 3 segundos mostra door1
            setTimeout(function() {
                $('#door1').slideDown('fast');
                $('#lata').slideDown('slow');
                $('#message').css('opacity', 0);
            }, 3000);
        } else {
            console.log("Dinheiro necessário 0,45. Você tem ", total)
        }
    }

    $("#coin").val(total);
}