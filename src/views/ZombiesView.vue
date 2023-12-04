<template>
  <div class="container">
    <div class="filter-container">
      <FiltersComponent :options="filterOptions" />
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <OverallProgressComponent :options="overallProgress" :totalWeapons="this.weapons.length" />

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" progress-key="zombies" />

    <ProgressComponent
      :progress="zombiesProgress"
      :label="$t('pages.zombies.progress.label')"
      :tooltip="$t('pages.zombies.progress.tooltip')"
      style-name="borealis">
      <template #modal-header>{{ $t('pages.zombies.completed_modal.title') }}</template>
      <template #modal-body>
        <i18n-t keypath="pages.zombies.completed_modal.body" tag="p" scope="global">
          <template #duration>
            <b>{{ daysSinceStart }} {{ $tc('general.days_ago', daysSinceStart) }}</b>
          </template>

          <template #date>
            <b>{{ new Date(getBeganGrind).toLocaleDateString('en-US') }}</b>
          </template>
        </i18n-t>

        <i18n-t
          keypath="pages.zombies.completed_modal.support"
          tag="p"
          style="margin-top: 15px; font-size: 14px; color: #aaa"
          scope="global">
          <a href="https://www.buymeacoffee.com/emilcarlsson" target="_blank">
            {{ $t('pages.zombies.completed_modal.support_link') }}
          </a>
        </i18n-t>
      </template>
    </ProgressComponent>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { groupBy, daysBetweenDates, roundToTwoDecimals } from '@/utils/utils'

import FiltersComponent from '@/components/FiltersComponent.vue'
import WeaponsComponent from '@/components/WeaponsComponent.vue'
import ProgressComponent from '@/components/ProgressComponent.vue'
import LayoutToggleComponent from '@/components/LayoutToggleComponent.vue'
import FavoritesToggleComponent from '@/components/FavoritesToggleComponent.vue'
import OverallProgressComponent from "@/components/OverallProgressComponent.vue";

export default {
  components: {
    OverallProgressComponent,
    FiltersComponent,
    WeaponsComponent,
    ProgressComponent,
    LayoutToggleComponent,
    FavoritesToggleComponent,
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['weapons', 'filters', 'weaponCategories', 'beganGrind']),

    getBeganGrind() {
      return this.beganGrind ?? new Date()
    },

    daysSinceStart() {
      const days = daysBetweenDates(this.getBeganGrind, new Date())
      return days ? days : 1
    },

    filterOptions() {
      return [
        {
          label: this.$tc('general.category'),
          key: 'weaponCategory',
          type: 'select',
          options: this.weaponCategories,
        },
        {
          label: this.$t('filters.hide_enigma'),
          key: 'hideEnigma',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_scale'),
          key: 'hideScale',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_serpentinite'),
          key: 'hideSerpentinite',
          type: 'checkbox',
        },
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const { hideEnigma, hideScale, hideSerpentinite, weaponCategory } = this.filters

      if (hideEnigma) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.zombiesProgress['Golden Enigma'])
      }

      if (hideScale) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.zombiesProgress['Zircon Scale'])
      }

      if (hideSerpentinite) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.zombiesProgress['Serpentinite'])
      }

      if (weaponCategory && weaponCategory !== 'null') {
        filteredWeapons = filteredWeapons.filter((weapon) => weapon.category === weaponCategory)
      }

      return groupBy(filteredWeapons, (weapon) => weapon.category)
    },

    favorites() {
      if (!this.store) return []
      const favorites = this.store.getFavorites('zombies')
      return this.weapons.filter((weapon) => favorites.includes(weapon.name))
    },

    zombiesProgress() {
      return this.calculateProgress(this.weapons)
    },

    overallProgress() {
      return {
        'Golden Enigma': this.weapons.filter((weapon) => weapon.zombiesProgress['Golden Enigma']).length,
        'Zircon Scale': this.weapons.filter((weapon) => weapon.zombiesProgress['Zircon Scale']).length,
        'Serpentinite': this.weapons.filter((weapon) => weapon.zombiesProgress['Serpentinite']).length,
      }
    },
  },

  methods: {
    calculateProgress(weapons) {
      const requiredWeapons = 36

      // Sort and filter out the weapons with the most progress
      const mostProgressedWeapons = weapons
        .map((weapon) => {
          let totalCamouflages = Object.keys(weapon.zombiesProgress).length
          let completedCamouflages = Object.values(weapon.zombiesProgress).reduce(
            (a, b) => a + b,
            0
          )

          return {
            ...weapon,
            completed: Object.values(weapon.zombiesProgress).reduce((a, b) => a + b, 0),
            completedPercentage: completedCamouflages / totalCamouflages,
          }
        })
        .sort((a, b) => b.completedPercentage - a.completedPercentage)
        .splice(0, requiredWeapons)

      // Count the amount of camouflages completed for the most progress weapons
      const totalCamouflagesCompleted = mostProgressedWeapons.reduce((a, b) => a + b.completed, 0)

      // Count the required amount of camouflages to complete the Interstellar camouflage
      const requiredCamouflages = mostProgressedWeapons.reduce((a, b) => {
        return a + Object.keys(b.zombiesProgress).length
      }, 0)

      return roundToTwoDecimals((totalCamouflagesCompleted / requiredCamouflages) * 100)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  margin-top: 75px;
}

h2 {
  margin: 30px auto 0;
  max-width: 450px;
}

.filter-container {
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: $tablet) {
    flex-direction: column;

    :deep(.filters-component) {
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
    }

    .toggles {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > :first-child {
        margin-right: 20px;
      }
    }
  }
}

:deep(.filters-component) {
  flex-grow: 1;
  margin-right: 15px;
}
</style>
