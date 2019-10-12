window.objets = [];
window.positions = new Object();

window.alertWin = true;

window.pas = 3;
window.reproductionLap = 10;
window.dureeVie = 20;

class Da_Forest {

  constructor(id) {
    this.id = id;
    this.foretTime = null;
    this.tour = 0;

    this._nbRen = 0;
    this._nbLap = 0;
  }
  
  get nbLap() {
    return this._nbLap;
  }

  set nbLap(value) {
    this._nbLap = value;
  }

  get nbRen() {
    return this._nbRen;
  }

  set nbRen(value) {
    this._nbRen = value;
  }

  ajouteLapin(nbr) {
    var i;
    for(i=0; i<nbr; i++) {
      window.objets.push(new Lapin());
      this._nbLap++;
    }
  }

  ajouteRenard(nbr) {
    var i;
    for(i=0; i<nbr; i++) {
      window.objets.push(new Renard());
      this.nbRen++;
    }
  }

  supprimerAnimal(oAnimal) {
    // delete oAnimal;
  }

  actionnerObjets() {
    var i;
    for(i=0; i<window.objets.length; i++) {
      if(typeof window.objets[i] != 'undefined')
        window.objets[i].action();
    }
    this.tour++;

    if(this.tour%window.reproductionLap == 0 && this._nbLap > 1) window.foret.ajouteLapin(1);
    if(this.tour%(window.reproductionLap*10) == 0 && this.nbRen > 1) window.foret.ajouteRenard(1);

    if(window.alertWin) {
      if(this.nbRen == 0) {
        alert("Lapins Win !");
        window.alertWin = false;
      }
      else if(this._nbLap == 0) {
        alert("Renards Win !");
        window.alertWin = false;
      }
    }
  }

  static getWidth() {
    return substrpx($("#"+"area").css("width"));
  }

  static getHeight() {
    return substrpx($("#"+"area").css("height"));
  }

  lancer() {
    var f = this.actionnerObjets;
    this.foretTime = setInterval(f, 100);
  }

  stoper() {
    clearInterval(this.foretTime);
  }


}
