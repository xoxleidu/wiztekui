<template>
  <div
    class="wz-card"
    :class="[
      shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow',
      type ? 'wz-card--' + type : '',
    ]"
  >
    <div
      :class="['wz-card__header', type ? 'wz-card__header--' + type : '']"
      v-if="$slots.header || header"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="wz-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wzCard",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
    type: {
      type: String,
      default: "",
    },
  },
};
</script>
