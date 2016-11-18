
window.G_id = 0;

class Objet {

	constructor(p_sClass) {
		this.id = window.G_id++;
		this.position = new Position(p_sClass);
		this.position.randomise();
		Position.placeObjet(this);
		$("#"+IDPERE).append(
			'<div class="'+p_sClass+' objet" id="o'+this.id+'"></div>'
		);
		this.placerHTML();
	}

	deplacementRadar(sTypeCible) {
		// alert();
		this.deplacement(this.position.radar(sTypeCible));
	}

	deplacement(direction) {
		Position.supprObjet(this);
		this.position.deplacement(direction);
		Position.placeObjet(this)
		this.placerHTML();
	}

	placerHTML() {
		this.getObjetHtml().css("left", this.position.x+"px");
		this.getObjetHtml().css("bottom", this.position.y+"px");
	}

	supprimer() {
		this.getObjetHtml().remove();
		// console.log(this);
		Objet.supprimerObj(this);
		Position.supprObjet(this);
	}

	trouverProche(sTypeCible) {
		var oCible = this.position.trouverProche(sTypeCible);
		// console.log(oCible);
		return oCible;

	}

	getObjetHtml() {
		return $("#"+"o"+this.id);
	}

	static supprimerObj(objet) {
		// if(Position.dejaPrise(objet.position)) {
		window.objets[objet.id] = undefined;
		//   return true;
		// } else {
		//   console.log("Il n'y avait rien ici, il y a toujours rien 2.");
		//   console.log(objet);
		// }
	}



}
