var termekLista=[];
const szuloElem=$(".Termékek");
let sablonElem=$(".stuff");
$(function () {
    $.ajax({url: "termekek.json", 
    success: function(result){
        termekLista=result.termekekLista;
        megjelenit();
      }
    }
    );
    sablonElem.remove();
});
function megjelenit() {
    for (let index = 0; index < termekLista.length; index++) {
        let ujElem= sablonElem.clone().appendTo(szuloElem);
        const ujTermek=new Termek(ujElem,termekLista[index],index);
    }
    console.log(termekLista);
}