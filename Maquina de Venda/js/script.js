let total = 0;
let coinPenny = Number($('#Penny').val());
let coinNickel = Number($('#Nickel').val());
let coinDime = Number($('#Dime').val());
let coinQuarter = Number($('#Quarter').val());
let coinHalfDollarCoin = Number($('#HalfDollarCoin').val());
let coin = Number($('#coin').val(0));

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

    //Caso não seja 1 ou 25 é negado
    if ((coin != 1) && (coin != 25)) {
        alert("Só aceitamos moedas de $0,1 e $0,25");
    } else {
        coin = total + coin;
        total = coin;

        if (total >= 45) {
            alert("Refrigerante Liberado");
            console.log("Você gastou ", total);
            total = 0;
            $('#janela1').css('opacity', 0);
        } else {
            console.log("Dinheiro necessário 0,45. Você tem ", total)
        }
    }

    $("#coin").val(total);
}