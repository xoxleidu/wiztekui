<template>
  <li class="wz-menu-item-group">
    <div
      class="wz-menu-item-group__title"
      :style="{ paddingLeft: levelPadding + 'px' }"
    >
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "wzMenuItemGroup",

  componentName: "wzMenuItemGroup",

  inject: ["rootMenu"],
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      paddingLeft: 20,
    };
  },
  computed: {
    levelPadding() {
      let padding = 20;
      let parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== "wzMenu") {
        if (parent.$options.componentName === "wzSubmenu") {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    },
  },
};
</script>

