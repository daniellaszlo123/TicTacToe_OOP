import Mezo from "../Mezo.js";
class Palya{
    #mezok=[];
    #PALYA_MERET=3;
    constructor(){
        const SZULOELEM=$(".jatek-cont");
        for (let i = 0; i < this.#PALYA_MERET*this.#PALYA_MERET; i++) {            
            const UJMEZO=new Mezo(i, SZULOELEM);
            //eltároljuk a létrehozott lámpa pédányokat
            this.#mezok.push(UJMEZO);
        }
    }
}

export default Palya;