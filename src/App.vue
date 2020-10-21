<template>
  <div id="app">
    <wzCard type="primary" shadow="always">
      <div slot="header" class="clearfix">
        {{ msg }}
      </div>
    </wzCard>
    <wzCard type="info" shadow="always">
      <div slot="header" class="clearfix">
        <span>按钮</span>
      </div>
      <div>
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
    };
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
