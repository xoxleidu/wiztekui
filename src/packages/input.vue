<template>
  <div
    :class="[
      'wz-input',
      inputSize ? 'wz-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'wz-input-group': $slots.prepend || $slots.append,
        'wz-input-group--append': $slots.append,
        'wz-input-group--prepend': $slots.prepend,
        'wz-input--prefix': $slots.prefix || prefixIcon,
        'wz-input--suffix':
          $slots.suffix || suffixIcon || clearable || showPassword,
      },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template>
      <!-- 前置元素 -->
      <div class="wz-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        class="wz-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <!-- 前置内容 -->
      <span class="wz-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="wz-input__icon" v-if="prefixIcon" :class="prefixIcon"> </i>
      </span>
      <!-- 后置内容 -->
      <span class="wz-input__suffix" v-if="getSuffixVisible()">
        <span class="wz-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible">
            <slot name="suffix"></slot>
            <i class="wz-input__icon" v-if="suffixIcon" :class="suffixIcon">
            </i>
          </template>
          <i
            v-if="showClear"
            class="wz-input__icon wz-icon-circle-close wz-input__clear"
            @click="clear"
          ></i>
          <i
            v-if="showPwdVisible"
            class="wz-input__icon wz-icon-view wz-input__clear"
            @click="handlePasswordVisible"
          ></i>
        </span>
        <i
          class="wz-input__icon"
          v-if="validateState"
          :class="['wz-input__validateIcon', validateIcon]"
        >
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="wz-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "wzInput",
  data() {
    return {
      hovering: false,
      passwordVisible: false,
      focused: false,
    };
  },
  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: "text",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator(val) {
        process.env.NODE_ENV !== "production" &&
          console.warn(
            "[Element Warn][Input]'auto-complete' property will be deprecated in next major version. please use 'autocomplete' instead."
          );
        return true;
      },
    },
    suffixIcon: String,
    prefixIcon: String,
    tabindex: String,
    validateState: "",
    needStatusIcon: false,
  },
  computed: {
    inputSize() {
      return this.size;
    },
    inputDisabled() {
      return this.disabled;
    },
    showClear() {
      return (
        this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
      );
    },
    showPwdVisible() {
      return (
        this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused)
      );
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
  },
  methods: {
    focus() {
      this.getInput().focus();
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
    getSuffixVisible() {
      return (
        this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        (this.validateState && this.needStatusIcon)
      );
    },
    getInput() {
      return this.$refs.input;
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
      // if (this.validateEvent) {
      //   this.dispatch("ElFormItem", "wz.form.blur", [this.value]);
      // }
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit("input", event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
  },
};
</script>
