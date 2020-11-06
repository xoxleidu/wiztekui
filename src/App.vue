<template>
  <div id="app">
    <wzCard type="primary" shadow="always">
      <div slot="header" class="clearfix">
        {{ msg }}
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>开关</span>
      </div>
      <div>
        <wzSwitch v-model="meSwitch"></wzSwitch>
        <wzSwitch
          v-model="meSwitch1"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="0"
          :inactive-value="1"
        ></wzSwitch>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <wz-switch
          v-model="meSwitch2"
          active-color="#0062cc"
          inactive-color="#0062cc"
          active-text="按月付费"
          inactive-text="按年付费"
          @change="testClick"
        >
        </wz-switch>
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>单选</span>
      </div>
      <div>
        <wzRadio v-model="radio" label="1" disabled></wzRadio>
        <wzRadio v-model="radio" label="2"></wzRadio>
        <wzRadio v-model="radio" label="3" border></wzRadio>
        <wz-radio-group v-model="radio" size="medium">
          <wz-radio-button :label="4">单选项</wz-radio-button>
          <wz-radio-button :label="5">单选项</wz-radio-button>
        </wz-radio-group>
        <wz-radio-group
          v-model="radio"
          size="small"
          text-color="#000"
          fill="#f00"
          @change="testClick"
        >
          <wz-radio-button :label="6">单选项</wz-radio-button>
          <wz-radio-button :label="7">单选项</wz-radio-button>
        </wz-radio-group>
        <wz-radio-group v-model="radio" size="mini">
          <wz-radio-button :label="8">单选项</wz-radio-button>
          <wz-radio-button :label="9">单选项</wz-radio-button>
        </wz-radio-group>
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>多选</span>
      </div>
      <div
        class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
      >
        <wzCheckbox v-model="checkbox" label="1" disabled></wzCheckbox>
        <wzCheckbox v-model="checkbox" label="2"></wzCheckbox>
        <wzCheckbox v-model="checkbox" label="3" border></wzCheckbox>
        <wz-checkbox-group v-model="checkbox" size="medium">
          <wz-checkbox-button :label="4">多选项</wz-checkbox-button>
          <wz-checkbox-button :label="5">多选项</wz-checkbox-button>
        </wz-checkbox-group>
        <wz-checkbox-group
          v-model="checkbox"
          size="small"
          text-color="#000"
          fill="#f00"
          @change="testClick"
        >
          <wz-checkbox-button :label="6">多选项</wz-checkbox-button>
          <wz-checkbox-button :label="7">多选项</wz-checkbox-button>
        </wz-checkbox-group>
        <wz-checkbox-group v-model="checkbox">
          <wz-checkbox-button :label="8">多选项</wz-checkbox-button>
          <wz-checkbox-button :label="9">多选项</wz-checkbox-button>
        </wz-checkbox-group>
        <wz-checkbox-group v-model="checkbox" size="mini" :min="1" :max="2">
          <wz-checkbox :label="10">多选项</wz-checkbox>
          <wz-checkbox :label="11">多选项</wz-checkbox>
          <wz-checkbox :label="12">多选项</wz-checkbox>
          <wz-checkbox :label="13">多选项</wz-checkbox>
        </wz-checkbox-group>
      </div>
      <div>
        <wz-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</wz-checkbox
        >
        <wz-checkbox-group v-model="checkbox2" @change="handleChecked2Change">
          <wz-checkbox :label="21">多选项</wz-checkbox>
          <wz-checkbox :label="22">多选项</wz-checkbox>
          <wz-checkbox :label="23">多选项</wz-checkbox>
          <wz-checkbox :label="24">多选项</wz-checkbox>
        </wz-checkbox-group>
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>输入框</span>
      </div>
      <div
        class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
      >
        <div>基础用法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <wzInput v-model="input" placeholder="请输入内容"></wzInput>
        <wzInput
          v-model="input"
          maxlength="3"
          placeholder="限制3个字符"
        ></wzInput>
        <wzInput v-model="input" clearable @clear="testClick"></wzInput>
        <wzInput v-model="input" show-password></wzInput>
        <wzInput v-model="input" prefix-icon="wz-icon-back-left"></wzInput>
        <wzInput v-model="input" suffix-icon="wz-icon-search"></wzInput>
      </div>
      <div
        class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
      >
        <div>solt元素&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <wzInput v-model="input">
          <template slot="prepend">Http://</template>
        </wzInput>
        <wzInput v-model="input">
          <template slot="append">.com</template>
        </wzInput>
        <wzInput v-model="input">
          <template slot="append">
            <wzButton type="success">提交</wzButton>
          </template>
        </wzInput>
      </div>
      <div
        class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
      >
        <div>大小&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <wzInput v-model="input" size="big"> </wzInput>
        <!-- <wzInput v-model="input" :fetch-suggestions="querySearch"> </wzInput> -->
        <!-- 开发断点 -->
        <!-- input 增加自动提示功能 -->
        <wzInput v-model="input"> </wzInput>
        <wzInput v-model="input" size="medium"> </wzInput>
        <wzInput v-model="input" size="small"> </wzInput>
        <wzInput v-model="input" size="mini"> </wzInput>
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>按钮</span>
      </div>
      <div
        class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start"
      >
        <wzButton type="primary" :disabled="true">禁用</wzButton>
        <wzButton type="primary" :loading="true">加载</wzButton>
        <wzButton type="primary">默认</wzButton>
        <wzButton type="success">成功</wzButton>
        <wzButton type="warning">警告</wzButton>
        <wzButton type="danger">危险</wzButton>
        <wzButton type="info">信息</wzButton>
        <wzButton type="text">文字</wzButton>
        <wzButton type="primary" size="big">大号</wzButton>
        <wzButton type="primary" size="medium">中号</wzButton>
        <wzButton type="primary" size="small">小号</wzButton>
        <wzButton type="primary" size="mini">微号</wzButton>
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>卡片</span>
      </div>
      <div>
        <wzCard type="primary" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <wzButton size="mini" style="float: right; padding: 3px"
              >操作按钮</wzButton
            >
          </div>
          <div class="text item">列表内容</div>
        </wzCard>
        <wzCard type="info" shadow="never">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <wzButton size="mini" style="float: right; padding: 3px"
              >操作按钮</wzButton
            >
          </div>
          <div class="text item">列表内容</div>
        </wzCard>
      </div>
    </wzCard>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to wiztek UI Vue.js App",
      input: "",
      radio: "",
      meSwitch: true,
      meSwitch1: 0,
      meSwitch2: true,
      checkbox: [11],
      checkbox2: [],
      restaurants: [],
      checkAll: false,
      isIndeterminate: false,
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkbox2 = val ? [21, 22, 23, 24] : [];
      this.isIndeterminate = false;
    },
    handleChecked2Change(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === [21, 22, 23, 24].length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < [21, 22, 23, 24].length;
    },
    testClick(v) {
      alert("CLICK=" + v);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.wz-card {
  margin: 10px;
}
</style>
