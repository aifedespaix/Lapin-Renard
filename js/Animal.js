class Animal extends Objet {

  constructor(type) {
    var sSexe = randomSexe();
    super(type+" "+sSexe);
    this.sexe = sSexe;
    this.type = type;
  }

  get sexe() {
    return this.sSexe;
  }

  set sexe(sSexe) {
    this.sSexe = sSexe;
  }

  get type() {
    return this.sType;
  }

  set type(sType) {
    this.sType = sType;
  }

  mourir() {
    super.supprimer();
  }

  manger(sTypeCible) {
    var oCible;
    if(oCible = super.trouverProche(sTypeCible)) {
      oCible.mourir();
      this.hp = window.dureeVie;
    }
  }

}
