<template>
  <div
    ref="timeBar"
    class="time"
    @keydown.left="onLeftKeyDown"
    @keydown.right="onRightKeyDown"
    tabindex="0"
    v-if="show"
  >
    <div
      class="timeButton"
      :style="{
        width: barHeight + popveFontSize + 8 + 'px',
        height: height + 'px',
      }"
    >
      <div
        :style="{
          marginTop: popveFontSize + 10 + 'px',
          fontSize: barHeight < 20 ? 20 + 'px' : barHeight + 'px',
          color: selectBackgroundColor,
        }"
      >
        <i
          v-show="playing"
          class="wz-icon-sort-stop"
          @click="startPlayOrPause"
        ></i>
        <i
          v-show="!playing"
          class="wz-icon-sort-play"
          @click="startPlayOrPause"
        ></i>
      </div>
    </div>
    <div class="timeBar" :style="{ height: height + 'px' }">
      <div
        :style="{ position: 'relative', height: popveFontSize + 15 + 'px' }"
      ></div>
      <div
        ref="timeBar__runway"
        :style="{
          position: 'relative',
          width: runwayWidth + 'px',
          height: barHeight + 'px',
          backgroundColor: barBackgroundColor,
          borderRadius: '2px',
        }"
      >
        <div
          class="timeBar__button"
          :style="{
            width: '0px',
            height: barHeight + 'px',
            marginLeft: speed + 'px',
          }"
        >
          <!-- backgroundColor: popveBackgroundColor, -->
          <div
            :style="{
              bottom: barHeight + 'px',
              left: '-10px',
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '10px solid ' + popveBackgroundColor,
            }"
            class="timeBar__pointer"
          ></div>
          <!-- right: selectIndex < 2 ? 'auto' : 0, -->
          <div
            class="timeBar__popve"
            :style="{
              right: 0,
              backgroundColor: popveBackgroundColor,
              top: '-30px',
            }"
            @mousedown="onButtonDown"
            :class="{ hover: hovering }"
          >
            <!-- top: -(popveFontSize + Math.round(popveFontSize / 3)) + 'px', -->
            <div
              class="timeBar__popve-text"
              :style="{ color: popveFontColor, fontSize: popveFontSize + 'px' }"
            >
              {{ getValue }}
            </div>
          </div>
        </div>
        <div class="timeBar__stops">
          <div
            class="timeBar__stop"
            v-for="(item, index) in spots"
            :key="index"
          >
            <div
              class="timeBar__stop-spot"
              v-for="(s, i) in item.value"
              :key="s.value"
              @click="timeClick(s)"
              :style="{
                height: barHeight + 'px',
                backgroundColor:
                  s.current <= selectIndex ? popveBackgroundColor : '',
              }"
              v-on:mouseover="stopMouseover('tooltip' + s.current)"
              v-on:mouseout="stopMouseout('tooltip' + s.current)"
            >
              <div
                :ref="'tooltip' + s.current"
                class="timeBar__tooltip"
                :style="{
                  color: tooltipFontColor,
                  fontSize: tooltipFontSize + 'px',
                }"
              >
                {{ s.value }}
              </div>
              <div class="timeBar__stop-spot-line"></div>
            </div>
          </div>
        </div>
        <div class="timeBar__marks" :style="{ width: runwayWidth + 'px' }">
          <div
            class="timeBar__marks-text"
            :style="{ width: runwayWidth / marks.length + 'px' }"
            v-for="m in marks"
            :key="m.index"
          >
            <a
              @click="markClick(m.index)"
              :style="{ color: markFontColor, fontSize: markFontSize + 'px' }"
              >{{ m.key }}</a
            >
            <div class="timeBar__marks-text-line"></div>
          </div>
        </div>
        <!-- <div
          class="timeBar__bar"
          :style="{
            width: speed + 'px',
            height: barHeight - 2 + 'px',
            backgroundColor: selectBackgroundColor,
          }"
        ></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeBar",
  props: {
    timeData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    selectBackgroundColor: {
      type: String,
      default: "rgba(0, 98, 204, 1)",
    },
    popveBackgroundColor: {
      type: String,
      default: "rgba(0, 98, 204, 1)",
    },
    barBackgroundColor: {
      type: String,
      default: "rgba(109, 117, 125, 1)",
    },
    popveFontColor: {
      type: String,
      default: "#ffffff",
    },
    popveFontSize: {
      type: Number,
      default: 14,
    },
    tooltipFontColor: {
      type: String,
      default: "#ffffff",
    },
    tooltipFontSize: {
      type: Number,
      default: 12,
    },
    markFontColor: {
      type: String,
      default: "#333333",
    },
    markFontSize: {
      type: Number,
      default: 14,
    },
    barHeight: {
      type: Number,
      default: 14,
    },
    height: {
      type: Number,
      default: 60,
    },
    velocity: {
      type: Number,
      default: 1.5,
    },
  },
  data() {
    return {
      show: false,
      hovering: false,
      isMounted: false,
      spots: [],
      marks: [],
      indexs: {},
      speed: 0,
      currentIndex: 0,

      startX: 0,
      currentX: 0,
      startWidth: 0,
      newWidth: null,

      oldValue: "",

      playing: false,
      autoPlay: null,
    };
  },
  watch: {
    timeData: {
      immediate: true,
      handler(value) {
        this.initBar();
      },
    },
  },
  computed: {
    runwayWidth() {
      if (this.isMounted) {
        return this.$refs.timeBar__runway.clientWidth;
      }
    },
    getValue() {
      if (this.isMounted && !!this.spots.length) {
        return (
          this.indexs[this.selectIndex]._value +
          " " +
          this.indexs[this.selectIndex].value
        );
      }
    },
    currentWidth() {
      return this.indexs[this.selectIndex]._width;
    },
    selectIndex() {
      return this.currentIndex;
    },
  },
  mounted() {
    this.isMounted = true;
    this.initBar();
  },
  methods: {
    // 播放事件
    startPlayOrPause() {
      this.playing = !this.playing;
      this.playing ? this.play() : this.pause();
    },
    play() {
      this.autoPlay = setInterval(() => {
        this.onRightKeyDown();
      }, this.velocity * 1000);
    },
    pause() {
      clearInterval(this.autoPlay);
      this.playing = false;
    },
    // 键盘事件
    onLeftKeyDown() {
      //   if (this.disabled) return;
      this.pause();
      let i = this.selectIndex - 1;
      if (i < 0) {
        i = 0;
      }
      this.speed = this.indexs[i]._width;
      this.currentIndex = this.indexs[i].current;
      this.barChange(this.indexs[i]);
    },
    onRightKeyDown() {
      //   if (this.disabled) return;
      let i = this.selectIndex + 1;
      let n = Object.keys(this.indexs).length;
      if (i >= n) {
        i = n - 1;
        this.pause();
      }
      this.speed = this.indexs[i]._width;
      this.currentIndex = this.indexs[i].current;
      this.barChange(this.indexs[i]);
    },
    // 鼠标事件
    onButtonDown(event) {
      this.pause();
      event.preventDefault();
      this.$refs.timeBar.focus();
      this.onDragStart(event);
      window.addEventListener("mousemove", this.onDragging);
      window.addEventListener("touchmove", this.onDragging);
      window.addEventListener("mouseup", this.onDragEnd);
      window.addEventListener("touchend", this.onDragEnd);
      window.addEventListener("contextmenu", this.onDragEnd);
    },
    onDragStart(event) {
      //   this.dragging = true;
      //   this.isClick = true;
      if (event.type === "touchstart") {
        event.clientX = event.touches[0].clientX;
      }
      this.startX = event.clientX;
      this.startWidth = this.currentWidth;
      this.newWidth = this.startWidth;
    },
    setPosition(newWidth) {
      if (newWidth === null || isNaN(newWidth)) return;
      if (newWidth < this.min) {
        newWidth = this.min;
      } else if (newWidth > this.max) {
        newWidth = this.max;
      }
      //   this.$emit("input", value);
      this.speed = newWidth;
      for (const key in this.indexs) {
        if (this.indexs[key]._width <= newWidth) {
          this.currentIndex = this.indexs[key].current;
        }
      }

      // if (this.speed == this.oldSpeed) {
      //   this.oldSpeed = this.speed;
      // }
    },
    onDragging(event) {
      //   if (this.dragging) {
      let diff = 0;
      if (event.type === "touchmove") {
        event.clientX = event.touches[0].clientX;
      }
      this.currentX = event.clientX;
      diff = this.currentX - this.startX;
      this.newWidth = this.startWidth + parseInt(diff);
      this.setPosition(this.newWidth);
      //   }
    },

    onDragEnd() {
      //   if (this.dragging) {
      /*
       * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
       * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
       */
      setTimeout(() => {
        //   this.dragging = false;
        //   if (!this.isClick) {
        // this.$parent.emitChange();
        this.newWidth = this.indexs[this.selectIndex]._width;
        this.setPosition(this.newWidth);
        this.barChange(this.indexs[this.selectIndex]);
        //   }
      }, 0);
      window.removeEventListener("mousemove", this.onDragging);
      window.removeEventListener("touchmove", this.onDragging);
      window.removeEventListener("mouseup", this.onDragEnd);
      window.removeEventListener("touchend", this.onDragEnd);
      window.removeEventListener("contextmenu", this.onDragEnd);
      //   }
    },
    // 初始化
    initBar() {
      this.pause();
      let index = 0;
      let ii = 0;
      let data = Object.keys(this.timeData);
      if (data.length == 0) {
        this.show = false;
        return;
      }
      this.show = true;
      data = this.timeData;
      let _width = Math.floor(this.runwayWidth / this.getLength(data));
      this.spots = [];
      this.marks = [];
      this.indexs = {};
      for (const key in data) {
        let spot = [];
        let w = Math.round(_width / this.getLength(data[key]));
        data[key].forEach((e, i) => {
          let obj = {
            value: e,
            _value: key,
            current: ii,
            width: w,
            _width: Math.round(w + w * i + _width * index),
          };
          spot.push(obj);
          this.indexs["" + ii] = obj;
          ii++;
        });
        this.spots.push({ value: spot, key: key, index: index, width: _width });
        this.marks.push({ index: index, key: key });
        index++;
      }
      this.currentIndex = 0;
      this.speed = this.indexs[0]._width;
      this.min = this.indexs[0]._width;
      this.max = this.indexs[ii - 1]._width;
    },
    // 点击事件
    timeClick(xs) {
      this.pause();
      this.speed = xs._width;
      this.currentIndex = xs.current;
      this.barChange(xs);
    },
    markClick(ms) {
      this.pause();
      this.speed = this.spots[ms].value[0]._width;
      this.currentIndex = this.spots[ms].value[0].current;
      this.barChange(this.spots[ms].value[0]);
    },
    // 最终选择
    barChange(obj) {
      let str = obj._value + " " + obj.value + ":00";
      let temp = this.oldValue;
      if (temp == str) {
        return;
      }
      this.oldValue = obj._value + " " + obj.value + ":00";
      let result = {};
      result[obj._value] = obj.value;
      console.log("选择time=", result);
      this.$emit("change", result);
    },
    getFirst(obj) {
      for (const keys in obj) {
        for (const key in obj[keys]) {
          return obj[keys][key];
        }
      }
    },
    getLength(obj) {
      let n = 0;
      for (const keys in obj) {
        n++;
      }
      return n;
    },
    stopMouseover(keys) {
      this.$refs[keys][0].style.display = "block";
    },
    stopMouseout(keys) {
      this.$refs[keys][0].style.display = "none";
    },
  },
};
</script>

<style scoped>
.time {
  position: relative;
  outline: none;
  width: 100%;
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
}
.timeButton {
  position: relative;
  height: auto;
}
.timeButton i {
  cursor: pointer;
}
.timeBar {
  position: relative;
  width: 100%;
  height: auto;
  color: #333333;
}

.timeBar__marks,
.timeBar__stop,
.timeBar__stops,
.timeBar__stops .timeBar__stop {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -moz-flex-flow: row nowrap;
  -webkit-flex-flow: row nowrap;
  flex-flow: row nowrap;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
}
.timeBar__stops {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;
}
.timeBar__stop,
.timeBar__stop-spot,
.timeBar__marks-text {
  flex: auto;
}
.timeBar__marks-text a {
  cursor: pointer;
}
.timeBar__marks-text {
  position: relative;
  padding-left: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.timeBar__marks-text-line {
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 1px;
  height: 14px;
}
.timeBar__stop-spot {
  cursor: pointer;
  z-index: 3;
  position: relative;
}
.timeBar__stop-spot-line {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  width: 1px;
  height: 100%;
}
.timeBar__tooltip {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  display: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.timeBar__pointer {
  position: absolute;
  width: 0;
  height: 0;
}
.timeBar__bar {
  position: absolute;
  z-index: 1;
  top: 1px;
}
.timeBar__button {
  position: relative;
}
.timeBar__popve {
  position: absolute;
  cursor: pointer;
  padding: 2px 3px;
  border-radius: 2px;
}

.timeBar__popve-text {
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
