import { Character, SetSettings } from './character';

function MagicAttack(attack, dist = 1, stoned = false) {
  // dist = (dist > 10) ? 10 : (dist < 1) ? 1 : dist;
  let calcAttack;
  const distPercent = 100 - (dist - 1) * 10;
  calcAttack = Math.floor(attack * (distPercent / 100));
  if (stoned) calcAttack -= Math.floor(5 * (Math.log(dist) / Math.log(2)));
  return calcAttack;
}

class Magical extends Character {
  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value;
    this.attack = this.baseAttack;
  }

  get attack() {
    return this.calcAttack;
  }

  set attack(attack) {
    this.baseAttack = attack;
    this.calcAttack = MagicAttack(attack, this.distance, this.stoned);
  }
}

export class Magician extends Magical {
  constructor(name, type = 'Magician') {
    super(name, type);
    SetSettings(this, 100, 1, 10, 40);
  }
}
export class Daemon extends Magical {
  constructor(name, type = 'Daemon') {
    super(name, type);
    SetSettings(this, 100, 1, 20, 30);
  }
}
