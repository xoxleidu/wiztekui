<script>
import Groups from "../components/mixins/groups";

export default {
  name: "wzCheckboxGroup",

  componentName: "wzCheckboxGroup",

  mixins: [Groups],

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
  },

  computed: {
    checkboxGroupSize() {
      return this.size ;
    },
  },

  watch: {
    value(value) {
      this.dispatch("wzFormItem", "wz.form.change", [value]);
    },
  },
};
</script>

<template>
  <div class="wz-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
