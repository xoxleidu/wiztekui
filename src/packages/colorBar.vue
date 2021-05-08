<template>
  <div
    class="colorDiv"
    :style="{ height: fontSize + Math.abs(textTop) + 6 + 'px' }"
  >
    <div class="colorBar">
      <ul
        @click="unShow && (unClick = !unClick)"
        :style="{
          height: fontSize + 6 + 'px',
          lineHeight: fontSize + 6 + 'px',
          fontSize: fontSize + 'px',
          color: fontColor,
          textShadow: '1px 1px 0px ' + textShadow,
        }"
      >
        <li
          v-for="(item, index) in options"
          :key="index"
          :style="colorFun(options, index)"
        >
          <span
            :style="{
              marginLeft: colorType
                ? getTextWidth(textFun(item), fontSize) + 'px'
                : '0px',
              position: textTop == 0 ? 'relative' : 'absolute',
              marginTop: textTop == 0 ? '0px' : textTop + 'px',
            }"
            >{{ colorType && index == 0 ? "" : textFun(item) }}</span
          >
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
    colorType: {
      type: Number,
      default: 0,
    },
    textTop: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isMounted: false,
      unShow: false,
      unClick: false,
      options: [],
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
    getTextWidth(str, fontSize) {
      // console.log(str, typeof str);
      if (str < 0) str = Math.abs(str);
      let result = 0;
      let ele = document.createElement("div");
      ele.style.position = "absolute";
      ele.style.whiteSpace = "nowrap";
      ele.style.fontSize = fontSize;
      ele.style.opacity = 0;
      ele.innerText = "" + str;
      document.body.append(ele);
      result = ele.getBoundingClientRect().width;
      document.body.removeChild(ele);
      return -(result / 2).toFixed(1);
    },
    colorFun(item, index) {
      let c = item[index][2];
      let n = item[index + 1] ? item[index + 1][2] : null;
      if (!n) n = c;
      if (this.colorType) {
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
      let e = item[0];
      let n = item[1];
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
      this.options = [];
      this.colorData.levels.forEach((e, i) => {
        let n = null;
        if (
          this.colorData.names &&
          this.colorData.names.length == this.colorData.levels.length
        ) {
          this.unShow = true;
          n = this.colorData.names[i];
        }
        this.options.push([
          e,
          n,
          "rgb(" +
            this.colorData.colors[i][0] +
            "," +
            this.colorData.colors[i][1] +
            "," +
            this.colorData.colors[i][2] +
            ")",
        ]);
      });
      // this.options = Object.assign({}, obj);
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
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.colorBar ul li:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
