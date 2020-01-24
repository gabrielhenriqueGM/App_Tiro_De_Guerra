function menuContrutor(items){
    component = '<div class="container text-center p-5 mt-5 px-0">';
    component += '<div class="row">';

    for(var i in items.name){
        if(i%3===0 && i!==0){
            component += `</div>
            </div>
        
            <div class="container text-center p-5">
                <div class="row">`;
        }
        component += '<div class="col-4">'+items.name[i]+'</div>';
    }

    if(i%2!==0){
        component += `
                </div>
            </div>
        `;
    }

    return component;
}

items = {
    name: [
        'Banana',
        'Café',
        'Jaca',
        'Jabuticaba',
        'Mestilo',
        'Abacaba',
        'Coco'
    ]
}

console.log(menuContrutor(items));