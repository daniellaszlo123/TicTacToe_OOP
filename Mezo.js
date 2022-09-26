class Mezo{
    #index
    constructor(index, SZULOELEM){
        this.#index=index;
        SZULOELEM.append(`<div class="mezo"><p class="ertekHely"></p></div>`);

        this.mezoElem=SZULOELEM.children("div:last-child");
        this.setAllapot(0);
    }

    setAllapot(allapot){
        switch (allapot) {
            case 1:
                this.mezoElem.off("click");
                break;
            case 0:
                this.mezoElem.on("click", ()=>{
                    this.kattintasTrigger();
                });
                break;
            default:
                break;
        }
    }

    setErtek(index, jel){
        $(".ertekHely").eq(index).append(jel);
    }

    getErtek(index){
        return $(".ertekHely").eq(index).text();
    }

    kattintasTrigger(){
        let esemeny=new CustomEvent("mezoClick", {detail:this.#index});
        window.dispatchEvent(esemeny);
    }

    //kivalaszt(){
      //  let esemeny=new CustomEvent("kovetkezo", {});
        //window.dispatchEvent(esemeny);
    //}
}

export default Mezo;