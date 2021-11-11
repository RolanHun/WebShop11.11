class Termek{
    constructor(elem, adat, index){
        this.elem=elem;
        this.nev=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.ar=this.elem.children("h5");
        this.adat=adat;
        this.adat.index=index
        this.nev.html(this.adat.cim);
        this.kep.attr("src",this.adat.eleresiUt);
        this.leiras.html(this.adat.leiras);
        this.ar.html(this.adat.ar);
    }
}