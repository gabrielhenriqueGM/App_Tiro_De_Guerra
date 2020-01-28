/*Função que constroi menu no estilo grade (de 3 colunas) de forma altomatia
 *Padrão de recebimento 
 *   Obj = [
 *      {
 *          titulo: 'tituloDoItem',
 *          src: 'caminhoImg'
 *      },
 *      {
 *          titulo: 'tituloDoItem',
 *          src: 'caminhoImg'
 *      }
 *   ]
 * 
*/
function menuGradeContrutor(items){
    component = '<div class="container text-center p-5 mt-5 px-0">';
    component += '<div class="row">';

    for(var i in items.name){
        if(i%3===0 && i!==0){
            component += `</div>
            </div>
        
            <div class="container text-center p-5">
                <div class="row">`;
        }
        component += '<div class="col-4">'+items[i].titulo+'</div>';
    }

    if(i%2!==0){
        component += `
                </div>
            </div>
        `;
    }

    return component;
}
