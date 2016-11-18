
class Lapin extends Animal {

	constructor() {
		super("lapin");
	}

	mourir() {
		super.mourir();
		// window.nbLap--;
	}

	action() {
		this.deplacement(randomDirection());
	}

}
