<template>
  <label
    class="wz-radio"
    :class="[
      border && radioSize ? 'wz-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="wz-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label,
      }"
    >
      <span class="wz-radio__inner"></span>
      <input
        ref="radio"
        class="wz-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      />
    </span>
    <span class="wz-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Groups from "../components/mixins/groups";

export default {
  name: "wzRadio",
  componentName: "wzRadio",
  mixins: [Groups],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String,
  },

  data() {
    return {
      focus: false,
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "wzRadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("wzRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      },
    },
    radioSize() {
      return this.isGroup
        ? this._radioGroup.radioGroupSize || this.size
        : this.size;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled
        : this.disabled;
    },
    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0;
    },
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup &&
          this.dispatch("wzRadioGroup", "handleChange", this.model);
      });
    },
  },
};
</script>
