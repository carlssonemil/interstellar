<template>
  <div class="container">
    <div class="filter-container">
      <FiltersComponent :options="filterOptions" :show-info="true">
        <template #info>
          <IconComponent
            name="question-circle"
            fill="white"
            v-tippy="{ placement: 'bottom' }"
            :content="$t('pages.mastery.info')" />
          <div class="mobile">
            <IconComponent name="question-circle" fill="white"></IconComponent>
            <p>{{ $t('pages.mastery.info') }}</p>
          </div>
        </template>
      </FiltersComponent>
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" progress-key="mastery" />

    <ProgressComponent
      :progress="masteryProgress"
      :label="$t('pages.mastery.progress.label')"
      :tooltip="$t('pages.mastery.progress.tooltip')">
      <template #modal-header>{{ $t('pages.mastery.completed_modal.title') }}</template>
      <template #modal-body>
        <i18n-t keypath="pages.mastery.completed_modal.body" tag="p" scope="global">
          <template #duration>
            <b>{{ daysSinceStart }} {{ $tc('general.days_ago', daysSinceStart) }}</b>
          </template>

          <template #date>
            <b>{{ new Date(getBeganGrind).toLocaleDateString('en-US') }}</b>
          </template>
        </i18n-t>

        <i18n-t
          keypath="pages.mastery.completed_modal.support"
          tag="p"
          style="margin-top: 15px; font-size: 14px; color: #aaa"
          scope="global">
          <a href="https://www.buymeacoffee.com/emilcarlsson" target="_blank">
            {{ $t('pages.mastery.completed_modal.support_link') }}
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
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const { hideGilded, hideForged, hidePriceless, hideInterstellar, weaponCategory } =
        this.filters

      if (hideGilded) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.masteryProgress['Gilded'])
      }

      if (hideForged) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.masteryProgress['Forged'])
      }

      if (hidePriceless) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.masteryProgress['Priceless'])
      }

      if (hideInterstellar) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.masteryProgress['Interstellar']
        )
      }

      if (weaponCategory && weaponCategory !== 'null') {
        filteredWeapons = filteredWeapons.filter((weapon) => weapon.category === weaponCategory)
      }

      return groupBy(filteredWeapons, (weapon) => weapon.category)
    },

    favorites() {
      if (!this.store) return []
      const favorites = this.store.getFavorites('mastery')
      return this.weapons.filter((weapon) => favorites.includes(weapon.name))
    },

    masteryProgress() {
      const weapons = this.weapons.filter((weapon) => !weapon.comingSoon)
      const total = weapons.length * 4
      const completed = weapons.reduce(
        (acc, weapon) => acc + Object.values(weapon.masteryProgress).reduce((a, b) => a + b, 0),
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
