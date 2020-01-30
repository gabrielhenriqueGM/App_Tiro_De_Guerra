function menuGradeMistaContrutor(items, tipo){
    component = '<div class="container text-center p-5">';
    component += '<div class="row">';
    for (var i in items) {
        if (i%3===0 && i!=0) {
            component += `</div>
            </div>
        
            <div class="container text-center p-5">
                <div class="row">`;
        }

        //No onclick deve ser colocado a funcao que chamará o conteudo e mudara a tela em um novo componente
        component += `<div class="col-4 bordaMenu" onclick="controlador(`+items[i].link+`, '`+items[i].titulo+`')">`;

        switch (tipo) {
            case 'img':
                component += 
                    `<figure class="figure">
                        <img src="` + items[i].src + `" class="figure-img img-fluid rounded" alt="...">
                        <figcaption class="figure-caption">` + items[i].titulo + `</figcaption>
                    </figure>`
                break;
            case 'txt':
                component += ''+items[i].titulo;
                break;
            default:
                component += ''+items[i].titulo;
        }

        component += `</div>`;
    }
    if (i % 2 !== 0) {
        component += `
                </div>
            </div>
        `;
    }
    return component;
}
