function conteudoTexto(obj) {
    let resp = `<div id="containerImg">
        <img id="imgCentralTexto" src="`+obj.iconeSrc+`"/>
    </div>`;
    resp += obj.txt;
    
    return resp;
}