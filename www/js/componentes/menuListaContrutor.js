function menuListaContrutor(items, tipo){
    component = '<ul class="listMenu">';
    for (var i in items) {
        component += `<li onclick="controlador(`+items[i].link+`, '`+items[i].titulo+`')" class='input-group-prepend'>`; 

        //No onclick deve ser colocado a funcao que chamará o conteudo e mudara a tela em um novo componente
        component += `<span>`+items[i].img!==undefined?items[i].img:''+`</span>`;
        component += items[i].titulo;

        component += `</li>`;
    }
    component+=`</ul>`;

    return component;
}