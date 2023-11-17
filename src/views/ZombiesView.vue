<template>
  <div class="container">
    <div class="filter-container">
      <FiltersComponent :options="filterOptions" />
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" progress-key="zombies" />

    <ProgressComponent
      :progress="zombiesProgress"
      :label="$t('pages.zombies.progress.label')"
      :tooltip="$t('pages.zombies.progress.tooltip')"
      style-name="borealis"
    >
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

export default {
  components: {
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
          label: this.$t('filters.hide_completed'),
          key: 'hideCompleted',
          type: 'checkbox',
        },
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const { hideCompleted, weaponCategory } = this.filters

      if (hideCompleted) {
        filteredWeapons = filteredWeapons.filter((weapon) =>
          Object.values(weapon.zombiesProgress).every(Boolean)
        )
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
      const weapons = this.weapons.filter((weapon) => !weapon.comingSoon)
      const total = weapons.length * 4
      const completed = weapons.reduce(
        (acc, weapon) => acc + Object.values(weapon.zombiesProgress).reduce((a, b) => a + b, 0),
        0
      )

      return roundToTwoDecimals((completed / total) * 100)
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
  }
}

:deep(.filters-component) {
  flex-grow: 1;
  margin-right: 15px;
}
</style>
