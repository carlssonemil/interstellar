import { defineStore } from 'pinia'
import { notify } from '@kyvg/vue3-notification'
import { filterObject } from '@/utils/utils'
import defaultWeapons from '@/data/weapons'
import defaultSchematics from '@/data/schematics'
import defaultCallingCards from '@/data/defaults/calling_cards'
import defaultFilters from '@/data/defaults/filters'
import defaultPreferences from '@/data/defaults/preferences'
import weaponRequirements from '@/data/requirements/weapons'
import masteryRequirements from '@/data/masteryRequirements'
import schematicRequirements from '@/data/requirements/schematics'
import camouflageRequirements from '@/data/requirements/camouflages'
import camouflageNameChanges from '@/data/camouflageNameChanges'

const token = import.meta.env.MODE === 'production' ? 'interstellar' : 'interstellar-dev'

export const useStore = defineStore({
  id: 'store',

  state: () => ({
    beganGrind: null,
    camouflageRequirements: { ...camouflageRequirements },
    favorites: {
      camouflages: [],
      weapons: [],
      mastery: [],
      callingCards: [],
      zombies: [],
    },
    filters: {},
    weaponRequirements: { ...weaponRequirements },
    masteryRequirements: { ...masteryRequirements },
    schematicRequirements: { ...schematicRequirements },
    weapons: [],
    callingCards: {},
    preferences: { ...defaultPreferences },
    schematics: []
  }),

  getters: {
    isFavorite: (state) => (type, name) => state.favorites[type].includes(name),
    getFavorites: (state) => (type) => state.favorites[type],
    weaponCategories: (state) =>
      Array.from(new Set(state.weapons.map((weapon) => weapon.category))),
    callingCardCompleted: (state) => (card) => state.callingCards[card],
    schematicCategories: (state) =>
        Array.from(new Set(state.schematics.map((schematic) => schematic.category)))
  },

  actions: {
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

            // Set mastery progress
            Object.keys(weapon.masteryProgress).forEach((camouflage) => {
              this.weapons[index].masteryProgress[camouflage] = weapon.masteryProgress[camouflage]
            })

            // Set zombies progress
            Object.keys(weapon.zombiesProgress).forEach((camouflage) => {
              // Handle changes to camouflage names
              if (camouflage in camouflageNameChanges && weapon.zombiesProgress[camouflage]) {
                this.weapons[index].zombiesProgress[camouflageNameChanges[camouflage]] = true
              } else if (camouflage in this.weapons[index].zombiesProgress) {
                this.weapons[index].zombiesProgress[camouflage] = weapon.zombiesProgress[camouflage]
              }
            })
          }
        })
      }
    },

    setCallingCards(callingCards) {
      this.callingCards = JSON.parse(JSON.stringify(defaultCallingCards))

      if (callingCards) {
        Object.keys(callingCards).forEach((card) => {
          if (card in this.callingCards) {
            this.callingCards[card] = callingCards[card]
          }
        })
      }
    },

    setFavorites(favorites) {
      Object.keys(favorites).forEach((key) => {
        if (key in this.favorites) {
          this.favorites[key] = favorites[key]
        }
      })
    },

    setFilters(filters) {
      this.filters = JSON.parse(JSON.stringify(defaultFilters))

      if (filters) {
        Object.keys(filters).forEach((key) => {
          if (key in defaultFilters) {
            this.filters[key] = filters[key]
          }
        })
      }
    },

    setPreferences(preferences) {
      this.preferences = JSON.parse(JSON.stringify(defaultPreferences))

      if (preferences) {
        Object.keys(preferences).forEach((key) => {
          if (key in defaultPreferences) {
            this.preferences[key] = preferences[key]
          }
        })
      }
    },

    setSchematics(schematics) {
      this.schematics = JSON.parse(JSON.stringify(defaultSchematics))


      if (schematics) {
        Object.keys(schematics).forEach((key) => {
          if (key in defaultSchematics) {
            this.schematics[key] = schematics[key]
          }
        })
      }
    },

    getStoredProgress() {
      const storage = localStorage.getItem(token)

      if (!storage) {
        this.setWeapons()
        this.setSchematics()
        this.setCallingCards()
        this.setFilters()
        return
      }

      const { weapons, callingCards, filters, beganGrind, favorites, preferences, schematics } =
        JSON.parse(storage)

      if (weapons) this.setWeapons(weapons)
      if (callingCards) this.setCallingCards(callingCards)
      if (filters) this.setFilters(filters)
      if (beganGrind) this.beganGrind = beganGrind
      if (favorites) this.setFavorites(favorites)
      if (preferences) this.setPreferences(preferences)
      if (schematics) this.setSchematics(schematics)
    },

    storeProgress() {
      localStorage.setItem(
        token,
        JSON.stringify({
          weapons: this.weapons,
          callingCards: this.callingCards,
          filters: this.filters,
          beganGrind: this.beganGrind || new Date(),
          favorites: this.favorites,
          preferences: this.preferences,
          schematics: this.schematics
        })
      )
    },

    resetProgress() {
      localStorage.removeItem(token)
      this.setWeapons()
      this.setCallingCards()
      this.setSchematics()
      this.beganGrind = null

      notify({
        type: 'success',
        title: 'Progress successfully reset!',
      })
    },

    toggleFavorite({ type, name }) {
      const index = this.favorites[type].findIndex((favorite) => favorite === name)

      if (index === -1) {
        this.favorites[type].push(name)
      } else {
        this.favorites[type].splice(index, 1)
      }

      this.storeProgress()
    },

    unfavoriteAll(type) {
      this.favorites[type] = []
      this.storeProgress()
    },

    toggleCamouflageCompleted(weaponName, camouflage, current, progressKey) {
      const progress = progressKey === 'progress' ? 'progress' : `${progressKey}Progress`
      this.weapons.find((w) => w.name === weaponName)[progress][camouflage] = !current

      if (camouflage === 'Gilded' && progress === 'progress') {
        this.completeBaseCamouflages(weaponName)
      }

      this.storeProgress()
    },

    completeBaseCamouflages(weaponName) {
      const weapon = this.weapons.find((w) => w.name === weaponName)
      const baseCamouflages = Object.keys(
        filterObject(weapon.progress, ['Gilded', 'Forged', 'Priceless'])
      )

      baseCamouflages.forEach((camouflage) => (weapon.progress[camouflage] = true))
    },

    toggleWeaponCompleted(weapon, current, progressKey) {
      const progress = progressKey === 'progress' ? 'progress' : `${progressKey}Progress`
      const selectedWeapon = this.weapons.find((w) => w.name === weapon.name)
      Object.keys(selectedWeapon[progress]).forEach(
        (camouflage) => (selectedWeapon[progress][camouflage] = !current)
      )

      this.storeProgress()
    },

    toggleCategoryCompleted(category, progressKey) {
      const progress = progressKey === 'progress' ? 'progress' : `${progressKey}Progress`
      const categoryWeapons = this.weapons.filter((weapon) => weapon.category === category)
      const categoryCompleted = categoryWeapons.every((weapon) =>
        Object.values(weapon[progress]).every(Boolean)
      )

      categoryWeapons.forEach((weapon) => {
        Object.keys(weapon[progress]).forEach((camouflage) => {
          weapon[progress][camouflage] = !categoryCompleted
        })
      })

      this.storeProgress()
    },

    toggleCallingCardCompleted(card, current) {
      this.callingCards[card.name] = !current
      this.storeProgress()
    },

    toggleSchematicAcquired(schematic, current) {
      for (let category in this.schematics) {
        for (let s in this.schematics[category]) {
          if (this.schematics[category][s].name === schematic) {
            this.schematics[category][s].acquired = !current
          }
        }
      }
      this.storeProgress()
    },
  },
})
