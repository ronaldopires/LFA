let total = 0;
let valor = 0;
let coin;

$('#Penny').on('click', () => {
    coin = 0.01;
    Calculate();
});
$('#Nickel').on('click', () => {
    coin = 0.05;
    Calculate();
});
$('#Dime').on('click', () => {
    coin = 0.10;
    Calculate();
});
$('#Quarter').on('click', () => {
    coin = 0.25;
    Calculate();
});
$('#HalfDollarCoin').on('click', () => {
    coin = 0.50;
    Calculate();
});
$('#DollarCoin').on('click', () => {
    coin = 1.00;
    Calculate();
});

function Calculate() {
    if ((coin != 0.10) && (coin != 0.25)) {
        Modal();
    } else {
        valor += coin;
        total = valor.toFixed(2);
        if (total >= 0.45) {
            alert("Refrigerante Liberado");
            console.log("Você gastou", total);
            valor = 0;
            Esconde();
            Mostra();
        } else {
            console.log("Dinheiro necessário 0,45. Você tem ", total)
        }
    }
    $("#coin").val(total);
}

function Modal() {
    $('#myModal').fadeIn();
    $('.close').on('click', () => {
        $('#myModal').fadeOut();
    })
}

function Esconde() {
    $('#door1').slideUp('slow');
    $('#lata').on('click', () => {
        $('#lata').hide();
        $('#message').css('opacity', 1);
    })
}

function Mostra() {
    setTimeout(() => {
        $('#door1').slideDown('fast');
        $('#lata').slideDown('slow');
        $('#message').css('opacity', 0);
    }, 3000);
}

setInterval(() => {
    $('#identificacao').animate({
        left: '10px'
    });
}, 2000);