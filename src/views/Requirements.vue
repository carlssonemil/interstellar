<template>
  <div class="requirements container">
    <h3>{{ $t('pages.requirements.title') }}</h3>
    <p>{{ $t('pages.requirements.description') }}</p>
  </div>
</template>

<style lang="scss" scoped>
p,
a,
ul {
  @media (min-width: $tablet) {
    font-size: 18px;
  }
}

p {
  font-size: 100px;
}
</style>
