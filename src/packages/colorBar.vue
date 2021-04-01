<template>
  <div class="colorDiv" :style="{ height: fontSize + 8 + 'px' }">
    <div class="colorBar">
      <ul
        @click="unShow && (unClick = !unClick)"
        :style="{
          height: fontSize + 8 + 'px',
          lineHeight: fontSize + 8 + 'px',
          fontSize: fontSize + 'px',
          color: fontColor,
          textShadow: '1px 1px 0px ' + textShadow,
        }"
      >
        <li
          v-for="(value, key, index) in options"
          :style="colorFun(options, index)"
        >
          {{ textFun(value) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "colorBar",
  props: {
    colorData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    fontColor: {
      type: String,
      default: "#333333",
    },
    textShadow: {
      type: String,
      default: "#ffffff",
    },
    fontSize: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      isMounted: false,
      unShow: false,
      unClick: false,
      type: this.colorData ? this.colorData.type : 0,
      options: {},
    };
  },

  computed: {
    runwayWidth() {
      if (this.isMounted) {
        return this.$refs.timeBar__runway.clientWidth;
      }
    },
  },
  mounted() {
    this.isMounted = true;
    this.initBar();
  },
  methods: {
    colorFun(item, index) {
      let c = item[Object.keys(item)[index]][3];
      let n = item[Object.keys(item)[index + 1]]
        ? item[Object.keys(item)[index + 1]][3]
        : null;

      if (!n) n = c;
      if (this.type) {
        return {
          backgroundColor: c,
        };
      } else {
        return {
          backgroundImage: "linear-gradient(to right, " + c + " , " + n + ")",
        };
      }
    },
    textFun(item) {
      let e = item[1];
      let n = item[2];
      if (this.unClick) {
        return n;
      } else {
        return e;
      }
    },
    // 初始化
    initBar() {
      this.unShow = false;
      // console.log(this.colorData.levels);
      if (!this.colorData) return;
      if (!this.colorData.levels) return;
      if (!this.colorData.colors) return;
      if (this.colorData.levels.length < 1) return;
      if (this.colorData.levels.length !== this.colorData.colors.length) return;
      let obj = {};
      this.colorData.levels.forEach((e, i) => {
        let n = null;
        if (
          this.colorData.names &&
          this.colorData.names.length == this.colorData.levels.length
        ) {
          this.unShow = true;
          n = this.colorData.names[i];
        }
        obj["" + e] = [
          i,
          e,
          n,
          "rgb(" +
            this.colorData.colors[i][0] +
            "," +
            this.colorData.colors[i][1] +
            "," +
            this.colorData.colors[i][2] +
            ")",
        ];
      });
      this.options = Object.assign({}, obj);
    },
  },
};
</script>

<style scoped>
.colorBar {
  position: relative;
  width: 100%;
}
.colorBar ul,
.colorBar li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.colorBar ul {
  border-radius: 4px;
  border: 1px solid;
  border-color: #fff;
  cursor: pointer;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -moz-flex-flow: row nowrap;
  -webkit-flex-flow: row nowrap;
  flex-flow: row nowrap;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  position: absolute;
  width: 100%;
}
.colorBar ul li:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.colorBar ul li:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.colorBar li {
  flex: 100%;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
