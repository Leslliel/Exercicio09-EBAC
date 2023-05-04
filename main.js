$(document).ready(function() {
    let listas = ' '
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const inputNomeAtividade = $('#nova-tarefa').val();
        
        let lista = $(`<li>${inputNomeAtividade}</li>`);
        $(lista).appendTo('ul');

        $('#nova-tarefa').val(' ')
    })

    $('ul').on('click', 'li', function() {
        $(this).addClass('feito');
    })
})

