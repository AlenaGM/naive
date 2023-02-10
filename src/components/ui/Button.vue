<template>
  <button
    v-if="type === 'button'"
    :class="[
      'button',
      {
        button_disabled: color === 'light-gray',
        button_fullwidth: mobileFullWidth,
      },
    ]"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    :class="[
      'button',
      {
        button_fullwidth: mobileFullWidth,
      },
    ]"
  >
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
  mobileFullWidth: {
    type: Boolean,
    default: false,
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
  text-align: center;
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
  &_fullwidth {
    @media screen and (max-width: 560px) {
      width: 100%;
    }
  }
}
</style>
