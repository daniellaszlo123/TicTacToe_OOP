import Mezo from "../Mezo.js";
class Palya{
    kiJonIndex;
    mezok=[];
    #PALYA_MERET=3;
    constructor(){
        this.kiJonIndex=0;
        const SZULOELEM=$(".jatek-cont");
        for (let i = 0; i < this.#PALYA_MERET*this.#PALYA_MERET; i++) {            
            const UJMEZO=new Mezo(i, SZULOELEM);
            this.mezok.push(UJMEZO);
        }
        $(window).on("mezoClick", (event)=>{
            let s="";
            //console.log(this.mezok[event.detail]);
            switch (this.kiJonIndex) {
                case 0:
                    this.#beallit(event.detail, "X");
                    this.kiJonIndex++;
                    //this.nyertE();
                    s+="O";
                break;
                case 1:
                    this.#beallit(event.detail, "O");
                    this.kiJonIndex--;
                    //this.nyertE();
                    s+="X";
                break;
                default:
                    break;
            }
            if (this.#nyertE()) {
                s = s=="X" ? "O" : "X";
                s+=" nyert!";
                this.#esemenyKikapcs();
            } else {
                s+=" következik!";
                
            }
            $(".kov")[0].firstElementChild.innerText=s;
            //this.nyertE(this.#PALYA_MERET, event.detail);
        })
    }

    #beallit(melyik, jel){
        this.mezok[melyik].setErtek(melyik, jel);
        this.mezok[melyik].setAllapot(1);
        //console.log(this.mezok[0].getErtek(0));
    }

    #esemenyKikapcs(){
        this.mezok.forEach(egyMezo => {
            //console.log(egyMezo);
            egyMezo.mezoElem.off("click");
        });
    }

    #nyertE(){
        let nyert=false;
        //meret=3;
        /* mezok = [
            '0', '1', '2'
            '3', '4', '5'
            '6', '7', '8'
        ]*/
        let tomb=[];
        for (let i = 0; i < this.#PALYA_MERET*this.#PALYA_MERET; i++) {
            tomb.push(this.mezok[i].getErtek(i));            
        }
        //console.log(tomb);

        let s1=this.#osszefuz(tomb, 0, 1);
        let s2=this.#osszefuz(tomb, 3, 1);
        let s3=this.#osszefuz(tomb, 4, 1);

        let o1=this.#osszefuz(tomb, 0, 3);
        let o2=this.#osszefuz(tomb, 1, 3);
        let o3=this.#osszefuz(tomb, 2, 3);

        let atb=this.#osszefuz(tomb, 0, 4);
        let atj=this.#osszefuz(tomb, 2, 2);

        //console.log(s1);

        let helyzetek=[s1, s2, s3, o1, o2, o3, atb, atj];

        if (helyzetek.includes("XXX") || helyzetek.includes("OOO")) {
            nyert=true;
        }
        return nyert;
    }

    #osszefuz(tomb, mettol, lepesszam){
        let txt="";
        var kiindulo=mettol;
        for (let i = 0; i < this.#PALYA_MERET; i++) {
            txt+=tomb[kiindulo];
            kiindulo+=lepesszam;
        }
        return txt;
    }
}

export default Palya;