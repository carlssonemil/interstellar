import aetherium from './schematics/aetherium'
import perkaCola from './schematics/perkaCola'
import ammoMod from './schematics/ammoMod'
import wonderWeapon from './schematics/wonderWeapon'

export default [
  {category: 'Aetherium', ...aetherium},
  {category: 'Perk-A-Cola', ...perkaCola},
  {category: 'Ammo Mod', ...ammoMod},
  {category: 'Wonder Weapon', ...wonderWeapon},
]
