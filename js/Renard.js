
class Renard extends Animal {

	constructor() {
		super("renard");
		this.hp = window.dureeVie;
	}

	mourir() {
		super.mourir();
		// window.nbRen--;
	}

	action() {
		this.deplacementRadar("lapin");
		this.manger("lapin");
		if(this.hp-- == 0) this.mourir();
	}

}
