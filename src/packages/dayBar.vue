<template>
  <div class="dayBarDiv">
    <div class="parameter" style="width: 100px">
      <div class="current">{{ currentTemp }}:{{ currentI }}</div>
      <div class="button">
        <ul>
          <li @click="playFun(-1)">&laquo;</li>
          <li v-show="!playing" @click="startPlayOrPause">播放</li>
          <li v-show="playing" @click="startPlayOrPause">暂停</li>
          <li @click="playFun(1)">&raquo;</li>
        </ul>
      </div>
    </div>
    <div class="dayBar">
      <div class="bar" v-for="(item, key) in options" :key="key">
        <ul>
          <li
            v-if="item.show"
            v-for="i in item.children"
            :key="i.id"
            @click="timeClick(item.name, i)"
            v-on:mouseover="stopMouseover('tooltip' + item.name + i.name)"
            v-on:mouseout="stopMouseout('tooltip' + item.name + i.name)"
            :style="currentStyle(item.name, i.name)"
          >
            <div :ref="'tooltip' + item.name + i.name" class="tooltip">
              {{ item.name }}:{{ i.name }}
            </div>
            {{ i.name }}
          </li>
        </ul>
      </div>
      <div class="mark">
        <ul>
          <!-- :style="{ width: 100 / options.length + '%' }" -->
          <li
            v-for="(item, key) in options"
            :key="key"
            @click="showClick(item.name)"
            :style="{
              backgroundColor: currentP == item.name ? '#e8e8e8' : '',
            }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dayBar",
  props: {
    dayData: {
      type: Object,
      default: () => {
        return {
          "21/05/20": ["00"],
          "21/05/21": ["00", "01", "02", "03", "04"],
          "21/05/22": ["00", "01", "02"],
          "21/05/23": ["00", "01", "02", "03", "04"],
        };
      },
    },
    velocity: {
      type: Number,
      default: 1.5,
    },
  },
  data() {
    return {
      options: [],
      currentTemp: "",
      currentP: "",
      currentI: "",
      index: 0,
      aLength: 0,
      playing: false,
      autoPlay: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 播放事件
    startPlayOrPause() {
      this.playing = !this.playing;
      this.playing ? this.play() : this.pause();
    },
    play() {
      this.autoPlay = setInterval(() => {
        //
        this.playFun(1);
      }, this.velocity * 1000);
    },
    pause() {
      clearInterval(this.autoPlay);
      this.playing = false;
    },
    playFun(num) {
      let i = this.index + num;
      if (!i || i < 0 || i >= this.aLength) {
        this.pause();
      }
      this.options.forEach((ele) => {
        ele.children.forEach((e) => {
          if (e.index == i) {
            this.showClick(ele.name);
            this.timeClick(ele.name, e);
          }
        });
      });
    },
    init() {
      let data = Object.keys(this.dayData);
      this.options = [];
      if (data.length == 0) {
        return;
      }
      data = this.dayData;
      let num = 0;
      let index = 0;
      for (const key in data) {
        let obj = {};
        obj.pid = 0;
        obj.id = num;
        obj.name = key;
        obj.children = [];
        if (num == 0) {
          obj.show = true;
        } else {
          obj.show = false;
        }
        if (data[key].length > 0) {
          for (let i = 0; i < data[key].length; i++) {
            let o = {};
            o.index = index;
            o.id = data[key][i];
            o.name = data[key][i];
            obj.children.push(o);
            index++;
          }
        }
        this.options.push(obj);
        num++;
      }

      this.currentTemp = this.options[0].name;
      this.currentP = this.options[0].name;
      this.currentI = this.options[0].children[0].name;
      this.index = 0;
      this.aLength = index;
    },
    showClick(name) {
      this.options.forEach((e) => {
        if (e.name == name) {
          e.show = true;
        } else {
          e.show = false;
        }
      });
      this.currentP = name;
    },
    timeClick(p, i) {
      this.currentTemp = p;
      this.currentI = i.name;
      this.index = i.index;
      console.log("选择time=", p + ":" + i.name);
      this.$emit("change", p + ":" + i.name);
    },
    stopMouseover(keys) {
      this.$refs[keys][0].style.display = "block";
    },
    stopMouseout(keys) {
      this.$refs[keys][0].style.display = "none";
    },
    currentStyle(p, i) {
      if (this.currentTemp == p && this.currentI == i) {
        return {
          backgroundColor: "#eee",
        };
      }
      return { backgroundColor: "" };
    },
  },
};
</script>
<style scoped>
.dayBar {
  padding-top: 20px;
}
.dayBarDiv ul li {
  list-style-type: none;
}
.dayBarDiv ul,
.dayBarDiv ul li {
  margin: 0;
  padding: 0;
}
.dayBarDiv,
.dayBarDiv ul {
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

.bar ul li,
.mark ul li {
  margin: 5px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.bar ul li {
  border: 1px solid #ddd;
  padding: 0px 2px;
  position: relative;
}
.mark ul li:hover {
  text-decoration: underline;
}
.bar ul li:hover {
  background-color: #e8e8e8;
}
.tooltip {
  position: absolute;
  left: 0;
  bottom: 24px;
  display: none;
  background-color: #e8e8e8;
  border: 1px solid #ddd;
  padding: 0px 2px;
}
.parameter {
  padding: 24px 0 0 0;
}
.button li {
  background-color: #4d91db;
  color: #fff;
  font-size: 14px;
  flex: auto;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button li:hover {
  background-color: #0062cc;
}
</style>