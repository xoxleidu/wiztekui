<template>
  <button
    class="wz-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :disabled="buttonDisabled || loading"
    :class="[
      type ? 'wz-button--' + type : '',
      buttonSize ? 'wz-button--' + buttonSize : '',
      { 'is-disabled': buttonDisabled, 'is-loading': loading }
    ]"
  >
    <i class="wz-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "wzButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    autofocus: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("change", evt);
    }
  }
};
</script>
