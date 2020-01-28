function menuGradeMistaContrutor(items, tipo) {
    component = '<div class="container text-center p-5">';
    component += '<div class="row">';
    for (var i in items) {
        if (i%3===0 && i!=0) {
            component += `</div>
            </div>
        
            <div class="container text-center p-5">
                <div class="row">`;
        }
        switch (tipo) {
            case 'img':
                component += `<div class="col-4">
                    <figure class="figure">
                        <img src="` + items[i].src + `" class="figure-img img-fluid rounded" alt="...">
                        <figcaption class="figure-caption">` + items[i].titulo + `</figcaption>
                    </figure>
                </div>`;
                break;
            case 'txt':
                component += '<div class="col-4">' + items[i].titulo + '</div>';
                break;
            default:
                component += '<div class="col-4">' + items[i].titulo + '</div>';
        }
    }
    if (i % 2 !== 0) {
        component += `
                </div>
            </div>
        `;
    }
    return component;
}
