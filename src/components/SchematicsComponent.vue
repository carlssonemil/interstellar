<template>
  <AlertComponent type="success" v-if="completionState" class="success-box">
    <p>
      {{$t('pages.schematics.finished_placeholder')}}
    </p>
  </AlertComponent>

  <br/>

  <div v-for="schematic in schematics" :key="schematic.category" class="category">
    <h2>
      <span>{{ $t('schematic_categories.' + schematic[0].category) }}</span>
      <span v-tippy :content="$t('pages.schematics.completed_in_category')">
          {{ categoryProgress(schematic[0].category) }}
        </span>
    </h2>
    <div :class="['schematics', {'grid' : layout === 'grid'}]">
      <SchematicComponent
          v-for="schematic in schematic[0]"
          :key="schematic.name"
          :schematic="schematic"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'pinia'
import {useStore} from '@/stores/store'

import AlertComponent from '@/components/AlertComponent.vue'
import SchematicComponent from "@/components/SchematicComponent.vue";

export default {
  components: {
    SchematicComponent,
    AlertComponent,
  },

  props: {
    schematics: {
      type: Object,
      required: false,
    },
  },

  computed: {
    ...mapState(useStore, ['schematicRequirements', 'preferences']),

    layout() {
      return this.preferences.layout
    },

    showFavorites() {
      return this.preferences.favorites
    },

    completionState() {
      return this.calculateCompletionState(this.schematics)
    },
  },

  methods: {
    categoryProgress(category) {


      let schematics = this.schematics[category][0]

      let total = -1
      let completed = 0
      for (let s in schematics) {
        if (schematics[s]) {
          if (schematics[s].acquired) {
            completed += 1;
          }
          total += 1;
        }
      }

      return completed > total ? `${total}/${total}` : `${Math.floor(completed)}/${total}`
    },

    calculateCompletionState(schematics) {
      for (let cat in schematics) {
        for (let s in schematics[cat][0]) {
          if (schematics[cat][0][s].acquired === false) {
            return false
          }
        }
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;

  .category {
    cursor: default;

    + .category {
      margin-top: 75px;

      @media (max-width: $tablet) {
        margin-top: 100px;
      }
    }

    h2 {
      align-items: center;
      display: inline-flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 25px;
      width: 100%;

      span:first-child {
        cursor: pointer;
        user-select: none;
      }

      span:last-child:not(:first-child) {
        color: $elevation-9-color;
        font-size: 18px;
        margin-left: 10px;

        &.action {
          color: $elevation-9-color;
          cursor: pointer;
          font-size: 14px;
          transition: $transition;

          &:hover {
            color: lighten($elevation-9-color, 10%);
          }
        }
      }

      @media (max-width: $tablet) {
        margin-bottom: 35px;
      }
    }

    .schematics {

      &.grid {
        display: grid;
        gap: 1ch;
        grid-template-columns: repeat(5, 1fr);

        @media (max-width: $tablet) {
          grid-template-columns: 1fr 1fr;
        }
      }
      width: 100%;

      @media (max-width: $tablet) {
        grid-template-columns: 1fr;
      }
    }
  }
}

.success-box {
  margin: 2ch 0;
}
</style>
