<template>
  <div v-if="schematic.name && layout !== 'list'"
       :class="['schematic', 'grid', schematic.rarity, { label, 'coming-soon': schematic.comingSoon, 'unlocked' : completed }]"
       v-tippy="{ content: this.schematicRequirements[schematic.name] + '. ' + schematic.cooldown + ' cooldown.', placement: 'bottom' }"
       @click="toggleSchematicAcquired(schematic.name, schematic.acquired)">
    <div class="icon"
         :style="{ backgroundImage: 'url(https://emilcarlsson.se/interstellar/schematics/' + convertToKebabCase(schematic.name) + '.png)' }"></div>
    <div class="label">{{ schematic.name }}</div>

    <IconComponent v-if="schematic.acquired" class="lockStatus" name="unlock" />
    <IconComponent v-else class="lockStatus" name="lock" />
  </div>

  <div v-else-if="schematic.name && layout === 'list'"
       :class="['schematic', 'list', schematic.rarity, { label, 'coming-soon': schematic.comingSoon, 'unlocked' : completed }]"
       @click="toggleSchematicAcquired(schematic.name, schematic.acquired)">
    <div class="image-container">
      <img :src="'https://emilcarlsson.se/interstellar/schematics/' + convertToKebabCase(schematic.name) + '.png'" :alt="schematic.name"/>

      <IconComponent v-if="schematic.acquired === true" class="lockStatus" name="unlock" />
      <IconComponent v-else class="lockStatus" name="lock" />
    </div>
    <div class="details">
      <h2>{{ schematic.name }}</h2>
      <p>{{ schematic.description }} {{schematic.cooldown}} cooldown.</p>
    </div>
  </div>
</template>

<script>
import {useStore} from '@/stores/store'
import {convertToKebabCase} from '@/utils/utils'
import {mapActions, mapState} from 'pinia'

export default {
  props: {
    schematic: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['schematicRequirements', 'preferences']),

    layout() {
      return this.preferences.layout
    },

    completed() {
      return this.schematic.acquired
    },

    label() {
      if (this.schematic.comingSoon) {
        return this.$t('general.coming_soon')
      } else {
        return null
      }
    },
  },

  methods: {
    convertToKebabCase,
    ...mapActions(useStore, [
      'toggleSchematicAcquired'
    ])
  },
}
</script>

<style lang="scss" scoped>

.schematic.grid {
  height: 192px;
  margin: 1ch;
  border: 1px solid rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  filter: grayscale(60%);
  background: url("https://emilcarlsson.se/interstellar/schematics/bg/uncommon.png") no-repeat center / cover;
  transition: all 0.1s;
  position: relative;
  cursor: pointer;

  &.rare {
    background-image: url("https://emilcarlsson.se/interstellar/schematics/bg/rare.png");
  }

  &.epic {
    background-image: url("https://emilcarlsson.se/interstellar/schematics/bg/epic.png");
  }

  &.legendary {
    background-image: url("https://emilcarlsson.se/interstellar/schematics/bg/legendary.png");
  }

  &.ultra {
    background-image: url("https://emilcarlsson.se/interstellar/schematics/bg/ultra.png");
  }

  .lockStatus {
    position: absolute;
    top: 0;
    right: 20px;
    width: 16px;
    height: 16px;
    padding: 1ch;
    color: rgba(255, 255, 255, .6);
    filter: saturate(0);
  }

  .icon {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: url("https://emilcarlsson.se/interstellar/schematics/ray-gun.png") no-repeat center / contain;
    transform: scale(0.9);
  }

  .label {
    position: absolute;
    display: block;
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 1rem;
    padding: .7ch;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    font-weight: 400;
  }

  &:hover, &.unlocked {
    opacity: 1;
    filter: grayscale(0);

    .icon {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.schematic.list {
  display: grid;
  grid-template-columns: 128px 1fr;
  text-align: left;
  height: 64px;
  line-height: 1.3;
  margin-bottom: 1ch;
  border-radius: $border-radius;
  background-image: linear-gradient(to right, transparent, #121212 256px, #121212 calc(100% - 16px), transparent), url("https://emilcarlsson.se/interstellar/schematics/bg/uncommon.png");
  opacity: 0.7;
  filter: grayscale(65%);
  border: 1px solid transparent;
  transition: all 0.1s;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
    height: unset;
    display: flex;
  }

  .details {
    padding-top: 1.4ch;
    font-size: 11px;
    h2 {
      font-weight: 600;
      font-size: 16px;
    }
  }

  &.rare {
    background-image: linear-gradient(to right, transparent, #121212 256px, #121212 calc(100% - 16px), transparent), url("https://emilcarlsson.se/interstellar/schematics/bg/rare.png");
  }

  &.epic {
    background-image: linear-gradient(to right, transparent, #121212 256px, #121212 calc(100% - 16px), transparent), url("https://emilcarlsson.se/interstellar/schematics/bg/epic.png");
  }

  &.legendary {
    background-image: linear-gradient(to right, transparent, #121212 256px, #121212 calc(100% - 16px), transparent), url("https://emilcarlsson.se/interstellar/schematics/bg/legendary.png");
  }

  &.ultra {
    background-image: linear-gradient(to right, transparent, #121212 256px, #121212 calc(100% - 16px), transparent), url("https://emilcarlsson.se/interstellar/schematics/bg/ultra.png");
  }

  &.unlocked {
    opacity: 1;
    filter: grayscale(0);
  }

  &:hover {
    opacity: 1;
    filter: grayscale(0) brightness(1.3);
  }

  img {
    margin-left: 48px;
    width: 64px;
    height: 64px;
  }

  .image-container {
    position: relative;
  }

  .lockStatus {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 42px;
    height: 42px;
    padding: 1ch;
    color: rgba(0, 0, 0, 1);
    filter: saturate(0);
    font-size: 24px;
  }
}
</style>
