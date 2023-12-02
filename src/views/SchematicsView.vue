<template>
  <div class="container">
    <div class="filter-container">
      <div class="toggles">
        <LayoutToggleComponent />
      </div>
    </div>

    <SchematicsComponent :schematics="filteredSchematics" />

  </div>
</template>

<script>
import {mapState} from 'pinia'
import {useStore} from '@/stores/store'
import {groupBy, daysBetweenDates} from '@/utils/utils'
import AlertComponent from "@/components/AlertComponent.vue";
import schematics from '@/data/schematics'
import SchematicsComponent from "@/components/SchematicsComponent.vue";
import FiltersComponent from "@/components/FiltersComponent.vue";
import FavoritesToggleComponent from "@/components/FavoritesToggleComponent.vue";
import LayoutToggleComponent from "@/components/LayoutToggleComponent.vue";

export default {
  components: {
    LayoutToggleComponent, FavoritesToggleComponent, FiltersComponent,
    SchematicsComponent,
    AlertComponent
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['schematics', 'beganGrind']),

    getBeganGrind() {
      return this.beganGrind ?? new Date()
    },

    filteredSchematics() {
      return groupBy(this.schematics, (schematic) => schematic.category)
    },

    daysSinceStart() {
      const days = daysBetweenDates(this.getBeganGrind, new Date())
      return days ? days : 1
    }
  }
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

.back-button {
  align-items: center;
  background: $elevation-2-color;
  border: 2px solid $elevation-4-color;
  border-radius: $border-radius;
  color: rgba($text-color, 0.75);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 5px 8px;
  transition: $transition;
  user-select: none;

  &:hover {
    background: $elevation-3-color;
  }

  @media (max-width: $tablet) {
    margin: 0 0 25px;
    padding: 15px 0;
    width: 100%;

    span {
      font-size: 16px !important;
    }
  }

  .icon-component {
    margin-right: 5px;
    opacity: 0.75;
    width: 18px;
  }

  span {
    font-size: 14px;
  }
}
</style>
