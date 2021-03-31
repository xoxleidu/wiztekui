<template>
  <div
    class="wz-collapse-item"
    :class="{ 'is-active': isActive, 'is-disabled': disabled }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`wz-collapse-content-${id}`"
      :aria-describedby="`wz-collapse-content-${id}`"
    >
      <div
        class="wz-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`wz-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          focusing: focusing,
          'is-active': isActive,
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <i
          class="wz-collapse-item__arrow wz-icon-arrow-right"
          :class="{ 'is-active': isActive }"
        >
        </i>
      </div>
    </div>
    <wz-collapse-transition>
      <div
        class="wz-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`wz-collapse-head-${id}`"
        :id="`wz-collapse-content-${id}`"
      >
        <div class="wz-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </wz-collapse-transition>
  </div>
</template>
<script>
import wzCollapseTransition from "../components/utils/collapse-transition";
import Emitter from "../components/mixins/groups";
import { generateId } from "../components/utils/util";

export default {
  name: "wzCollapseItem",

  componentName: "wzCollapseItem",

  mixins: [Emitter],

  components: { wzCollapseTransition },

  data() {
    return {
      contentWrapStyle: {
        height: "auto",
        display: "block",
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId(),
    };
  },

  inject: ["collapse"],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      },
    },
    disabled: Boolean,
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    },
  },

  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch("wzCollapse", "item-click", this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch("wzCollapse", "item-click", this);
    },
  },
};
</script>
