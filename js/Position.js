

class Position {

	constructor(type) {
    this.type = type;
		this.x = 0;
		this.y = 0;
	}

	randomise() {
    var newPos = new Position();
    do {
		  newPos.x = randomX();
		  newPos.y = randomY();
    } while(Position.dejaPrise(newPos));

    this.setPosition(newPos.x, newPos.y);
  }

  deplacement(direction) {
    var pCible = new Position();
    pCible.x = this.x;
    pCible.y = this.y;
    switch(direction) {
     case TOP:
      pCible.y += 1;
     break;
     case BOTTOM:
      pCible.y -= 1;
     break;
     case LEFT:
      pCible.x -= 1;
     break;
     case RIGHT:
      pCible.x += 1;
     break;
    }
    if(!Position.dejaPrise(pCible)) {
      this.setPosition(pCible.x, pCible.y);
    }
 }

 /**
 * Cherche le sType le plus proche.
 * si sType est null, cherche n'importe quel objet
 * La direction vers l'objet
 **/
  radar(sType) {
    var x, y;
    var posProche = null;
    var iPas = window.pas;
    var distanceProche = iPas+1;
    for(x=this.x-iPas; x<this.x+iPas; x++)
      for(y=this.y-iPas; y<this.y+iPas; y++) {
        if(x==this.x && y==this.y) continue;

        var pos;
        if((pos=window.positions["x"+x+"y"+y]) && typeof pos !== "undefined") {
          if(pos.type.split(" ")[0] == sType) {
            if(posProche == null) {
              posProche = window.positions["x"+x+"y"+y].position;
              distanceProche = posProche.distance(pos);
            } else {
              var distTmp;
              if(distTmp = posProche.distance(pos) < distanceProche ? distanceProche : posProche.distance(pos)) {
                posProche = pos;
                distanceProche=posProche.distance(pos);
              }
            }
          }
        }
      }

    if(posProche == null) {
      // console.log('aucun Lapin');
      return randomDirection();
    }
    return this.calcDirection(posProche);
  }

  calcDirection(pDestination) {
    var distanceX = pDestination.x - this.x;
    var distanceY = pDestination.y - this.y;
    var r;
    Math.abs(distanceX)>Math.abs(distanceY) ?
        ( distanceX>0 ? r = RIGHT : r = LEFT)
      : ( distanceY>0 ? r = TOP : r = BOTTOM);
      return r;
  }

  getVoisins() {
    var v = [];
    var i;
    for(i=0; i<4; i++) {
      v.push(new Position());
    }
    v[0].setPosition(this.x-1, this.y);
    v[1].setPosition(this.x, this.y-1);
    v[2].setPosition(this.x+1, this.y);
    v[3].setPosition(this.x, this.y+1);
    return v;
  }

  trouverProche(sType) {
    var v = this.getVoisins();
    var i;

    for(i=0; i<v.length; i++) {
      var oCible = Position.getObjet(v[i]);
      if(typeof oCible != 'undefined' && oCible.type == sType) {
        return oCible;
      }
    }
    return false;
  }

  setPosition(x, y) {
    if(x >= 0 && x < Da_Forest.getWidth())
      this.x = x;
    if(y >= 0 && y < Da_Forest.getHeight())
      this.y = y;
  }

	/**
	* Compare deux positions
   * @param  {a_oPosition} 	Position à comparer
   * @return {boolean}        Vrai si même pos
   **/
   memes(a_oPosition) {
    return a_oPosition.x == this.x && a_oPosition.y == this.y;
  }


  static dejaPrise(position) {
    return typeof window.positions["x"+position.x+"y"+position.y] !== "undefined";
  }


  static idToPosition(id) {
    var position = id.split('y');
    position[0] = position[0].substr(1, position[0].length);
    position[1] = position[1].substr(1, position[0].length);
    var rPos = new Position();
    rPos.x = position[0];
    rPos.y = position[1];
    return rPos;
  }

  distance(position) {
    return (this.x-position.x)*(this.x-position.x)+(this.y-position.y)*(this.y-position.y);
  }

  static getObjet(position) {
    return window.positions['x'+position.x+'y'+position.y];
  }

  static supprObjet(objet) {
    window.positions['x'+objet.position.x+'y'+objet.position.y] = undefined;
  }

  static placeObjet(objet) {
    // console.log(objet);
    // console.log(objet.position);
    // console.log(objet);
    window.positions['x'+objet.position.x+'y'+objet.position.y] = objet;
  }

}
