import { Magician, Daemon } from './app';

const mag = new Magician('Mag');
const daemon = new Daemon('Daemon');

test('Ranged attack (Mag)', () => {
  mag.distance = 2; mag.attack = 100;
  expect(mag.attack).toBe(90);
});
test('Ranged attack with stoned (Mag)', () => {
  mag.distance = 2; mag.attack = 100; mag.stoned = true;
  expect(mag.attack).toBe(85);
});
test('Get stoned status (Mag)', () => {
  expect(mag.stoned).toBe(true);
});
test('Ranged attack (Daemon)', () => {
  daemon.distance = 2; daemon.attack = 100;
  expect(daemon.attack).toBe(90);
});
test('Ranged attack with stoned (Daemon)', () => {
  daemon.distance = 2; daemon.attack = 100; daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});
