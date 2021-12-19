export const gameClasses = ['Magician', 'Daemon'];

export function SetSettings(prop, health, level, attack, defence) {
  prop.health = health;
  prop.level = level;
  prop.attack = attack;
  prop.defence = defence;
}

export class Character {
  constructor(name, type) {
    if (!this.validate(name, type)) throw new Error('Некорректные аргументы');
  }

  validate(name, type) {
    if (name.length > 10 || name.length < 2) return false;
    if (!gameClasses.some((a) => a === type)) return false;

    this.name = name;
    this.type = type;

    return true;
  }
}
