<template>
  <button
    v-if="type === 'button'"
    :class="['button', { button_disabled: color === 'light-gray' }]"
  >
    <slot />
  </button>
  <router-link v-else :to="to" class="button">
    <slot />
  </router-link>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "black",
  },
});
</script>

<style lang="scss" scoped>
.button {
  color: var(--black);
  background-color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  padding: 8px 24px;
  border: 1px solid var(--black);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--black);
  }
  &_disabled {
    background: var(--white);
    color: var(--light-gray);
    border: 1px solid var(--light-gray);
    &:hover {
      cursor: default;
      background: var(--white);
      color: var(--light-gray);
      border: 1px solid var(--light-gray);
    }
  }
}
</style>
