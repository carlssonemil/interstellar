import { defineStore } from 'pinia'
import defaultWeapons from '@/data/weapons'
import camouflageNameChanges from '@/data/camouflageNameChanges'

const defaultState = {
  favorites: [],
  weapons: [],
}

export const useWeaponsStore = defineStore('weapons', {
  state: () => ({
    ...defaultState,
  }),

  getters: {
    categories: (state) => Array.from(new Set(state.weapons.map((weapon) => weapon.category))),
  },

  actions: {
    setFavorites(favorites) {
      this.favorites = favorites || []
    },

    setWeapons(weapons) {
      this.weapons = JSON.parse(JSON.stringify(defaultWeapons))

      if (weapons) {
        weapons.forEach((weapon) => {
          const index = this.weapons.findIndex((w) => w.name === weapon.name)

          if (index !== -1) {
            // Set progress
            Object.keys(weapon.progress).forEach((camouflage) => {
              // Handle changes to camouflage names
              if (camouflage in camouflageNameChanges && weapon.progress[camouflage]) {
                this.weapons[index].progress[camouflageNameChanges[camouflage]] = true
              } else if (camouflage in this.weapons[index].progress) {
                this.weapons[index].progress[camouflage] = weapon.progress[camouflage]
              }
            })
          }
        })
      }
    },

    toggleWeaponCompleted(weapon, current) {
      const selectedWeapon = this.weapons.find((w) => w.name === weapon.name)
      Object.keys(selectedWeapon.progress).forEach((camouflage) => {
        selectedWeapon.progress[camouflage] = !current
      })
    },

    resetFavorites() {
      this.favorites = []
    },

    resetWeapons() {
      this.weapons = JSON.parse(JSON.stringify(defaultWeapons))
    },
  },
})
