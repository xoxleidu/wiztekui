<template>
  <div id="app">
    <wz-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleDialogClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <wz-button type="primary" size="mini" @change="dialogVisible = false"
          >确 定</wz-button
        >
      </span>
    </wz-dialog>
    <div
      class="headerbg wz-display-flex wz-display-flex-rowNoWarp child-width-100 wz-display-space-between"
      style="height: 46px"
    >
      <div class="tLogo">
        {{ msg }}
      </div>
      <div style="margin-top: 8px">
        <wz-menu :default-active="activeIndex">
          <!-- @select="handleSelect" -->

          <wz-menu-item index="1">处理中心</wz-menu-item>
          <wz-submenu index="2">
            <template slot="title">我的工作台</template>
            <wz-menu-item index="2-1">选项1</wz-menu-item>
            <wz-menu-item index="2-2"
              ><template slot="title"
                ><i class="wz-icon-phone"></i><span>选项2</span></template
              ></wz-menu-item
            >
            <wz-menu-item index="2-3">选项3</wz-menu-item>
            <wz-submenu index="2-4">
              <template slot="title">选项4</template>
              <wz-menu-item index="2-4-1">选项1</wz-menu-item>
              <wz-menu-item index="2-4-2">选项2</wz-menu-item>
              <wz-menu-item index="2-4-3">选项3</wz-menu-item>
            </wz-submenu>
          </wz-submenu>
          <wz-menu-item index="3">
            <template slot="title">
              <i class="wz-icon-back-left"></i>
              <span>消息中心</span>
            </template>
          </wz-menu-item>
          <wz-submenu index="4">
            <template slot="title">订单管理</template>
            <wz-menu-item index="4-1">选项1</wz-menu-item>
            <wz-menu-item index="4-2">选项2</wz-menu-item>
          </wz-submenu>
        </wz-menu>
      </div>
    </div>
    <div style="width: 60%; margin: 20px auto">
      <div class="wz-container wz-container-fixed">
        <div class="wz-container-child-norow-div wz-aside" style="width: 330px">
          <ul class="ullilist">
            <li><a href="#label-switch">开关-switch</a></li>
            <li><a href="#label-radio">单选-radio</a></li>
            <li><a href="#label-checkbox">多选-checkbox</a></li>
            <li><a href="#label-timeBar">时间轴-timeBar</a></li>
            <li><a href="#label-colorBar">颜色条-colorBar</a></li>
            <li><a href="#label-icon">图标-icon</a></li>
            <li><a href="#label-loading">加载-loading</a></li>
            <li><a href="#label-message">提示-message</a></li>
            <li><a href="#label-input">输入框-input</a></li>
            <li><a href="#label-button">按钮-button</a></li>
            <li><a href="#label-card">卡片-card</a></li>
            <li><a href="#label-menu">布局-导航-menu</a></li>
            <li><a href="#label-tooltip">提示-tooltip</a></li>
            <li><a href="#label-popover-dialog">弹窗-popover-dialog</a></li>
            <li><a href="#label-collapse">折叠面板</a></li>
          </ul>
        </div>
        <div class="wz-container-child-norow-div wz-main">
          <wzCard type="info" id="label-switch" shadow="always">
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
          <wzCard type="info" id="label-radio" shadow="always">
            <div slot="header" class="clearfix">
              <span>单选</span>
            </div>
            <div>
              <wz-radio-group v-model="radiottt" size="medium">
                <wz-radio name="radiotest" :label="114">单选项</wz-radio>
                <wz-radio name="radiotest" :label="115">单选项</wz-radio>
              </wz-radio-group>
              <wz-radio-group v-model="radiotts" size="medium">
                <wz-radio name="radiotest" :label="113">单选项</wz-radio>
                <wz-radio name="radiotest" :label="112">单选项</wz-radio>
              </wz-radio-group>
              <br />
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
          <wzCard type="info" id="label-checkbox" shadow="always">
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
              <wz-checkbox-group v-model="checkbox" size="mini">
                <wz-checkbox-button :label="8">多选项</wz-checkbox-button>
                <wz-checkbox-button :label="9">多选项</wz-checkbox-button>
              </wz-checkbox-group>
              <wz-checkbox-group v-model="checkbox" :min="1" :max="2">
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
              <wz-checkbox-group
                v-model="checkbox2"
                @change="handleChecked2Change"
              >
                <wz-checkbox :label="21">多选项</wz-checkbox>
                <wz-checkbox :label="22">多选项</wz-checkbox>
                <wz-checkbox :label="23">多选项</wz-checkbox>
                <wz-checkbox :label="24">多选项</wz-checkbox>
              </wz-checkbox-group>
            </div>
          </wzCard>
          <wzCard type="info" id="label-timeBar" shadow="always">
            <div slot="header" class="clearfix">
              <span>时间轴-timeBar</span>
            </div>
            <div style="background-color: #f8f8f8; padding: 10px">
              <ul>
                <li style="font-weight: bold">可选参数</li>
                <li>:height="80"</li>
                <li>:select-background-color="'rgba(100, 98, 204, 1)'"</li>
                <li>:bar-background-color="'rgba(200, 18, 194, 1)'"</li>
                <li>:popve-background-color="'rgba(0, 0, 0, 1)'"</li>
                <li>:popve-font-color="'#00FF00'"</li>
                <li>:popve-font-size="16"</li>
                <li>:tooltip-font-color="'#00FF00'"</li>
                <li>:tooltip-font-size="16"</li>
                <li>:mark-font-color="'#00FF00'"</li>
                <li>:mark-font-size="16"</li>
                <li>:bar-height="30"</li>
                <li>:velocity="3"</li>
              </ul>
              <ul>
                <li style="font-weight: bold">数据格式(Object) timeData：</li>
                <li>
                  { "测试/23": ["01", "03", "06", "20"], "测试/24": ["10",
                  "20"], "测试/25": ["00", "03", "06", "09", "12", "15", "18",
                  "21", "23"], "测试/26": ["00", "03"], "测试/27": ["00", "06",
                  "12", "18"], "测试/28": ["00", "09", "18"], }
                </li>
              </ul>
              <ul>
                <li style="font-weight: bold">输出格式(Object) change：</li>
                <li>{ 测试/23: "01"}</li>
              </ul>
            </div>
            <timeBar></timeBar>
          </wzCard>
          <wzCard type="info" id="label-colorBar" shadow="always">
            <div slot="header" class="clearfix">
              <span>颜色条-colorBar</span>
            </div>
            <div style="background-color: #f8f8f8; padding: 10px">
              <ul>
                <li style="font-weight: bold">可选参数</li>
                <li>font-color="#000"</li>
                <li>text-shadow="#fff"</li>
                <li>:font-size="14"</li>
                <li>:color-type="1"</li>
              </ul>
              <ul>
                <li style="font-weight: bold">数据格式(Object) colorData</li>
                <li style="font-weight: bold">names:可切换显示</li>
                <li>
                  { type: 0, names: ["低", "中低", "中", "中", "中", "中高",
                  "中高", "高"], levels: [0, 1, 10, 25, 50, 100, 200, 900],
                  colors: [ [255, 255, 255], [232, 255, 202], [149, 207, 69],
                  [0, 144, 0], [0, 193, 255], [30, 0, 255], [255, 0, 255], [150,
                  0, 84], ], }
                </li>
              </ul>
              <ul>
                <li style="font-weight: bold">手动更新：</li>
                <li>this.$refs.colorBar.initBar()</li>
              </ul>
            </div>
            <colorBar
              :colorData="colorData"
              :colorType="1"
              :font-size="12"
            ></colorBar>
          </wzCard>
          <wzCard type="info" id="label-icon" shadow="always">
            <div slot="header" class="clearfix">
              <span>图标-icon</span>
            </div>
            <div>
              <i class="wz-icon-loading"></i>
              <i class="wz-icon-circle-close"></i>
              <i class="wz-icon-search"></i>
              <i class="wz-icon-home"></i>
              <i class="wz-icon-setp"></i>
              <i class="wz-icon-arrow-setp"></i>
              <i class="wz-icon-sort-setp"></i>
              <i class="wz-icon-user"></i>
              <i class="wz-icon-user-solid"></i>
              <i class="wz-icon-phone"></i>
              <i class="wz-icon-arrow-primary"></i>
              <i class="wz-icon-primary"></i>
              <i class="wz-icon-success"></i>
              <i class="wz-icon-error"></i>
              <i class="wz-icon-info"></i>
              <i class="wz-icon-warning"></i>
              <i class="wz-icon-del"></i>
              <i class="wz-icon-caret-success"></i>
              <i class="wz-icon-caret-error"></i>
              <i class="wz-icon-play"></i>
              <i class="wz-icon-pause"></i>
              <i class="wz-icon-stop"></i>
              <i class="wz-icon-sort-play"></i>
              <i class="wz-icon-sort-pause"></i>
              <i class="wz-icon-sort-stop"></i>
              <i class="wz-icon-arrow-play"></i>
              <i class="wz-icon-arrow-pause"></i>
              <i class="wz-icon-plus"></i>
              <i class="wz-icon-minus"></i>
              <i class="wz-icon-next"></i>
              <i class="wz-icon-pren"></i>
              <i class="wz-icon-more"></i>
              <i class="wz-icon-arrow-more"></i>
              <i class="wz-icon-back-left"></i>
              <i class="wz-icon-back-right"></i>
              <i class="wz-icon-arrow-down"></i>
              <i class="wz-icon-arrow-right"></i>
              <i class="wz-icon-arrow-left"></i>
              <i class="wz-icon-arrow-up"></i>
              <i class="wz-icon-caret-up"></i>
              <i class="wz-icon-caret-down"></i>
              <i class="wz-icon-caret-left"></i>
              <i class="wz-icon-caret-right"></i>
              <i class="wz-icon-sort-up"></i>
              <i class="wz-icon-sort-down"></i>
              <i class="wz-icon-sort-left"></i>
              <i class="wz-icon-sort-right"></i>
              <i class="wz-icon-location"></i>
              <i class="wz-icon-sort-location"></i>
              <i class="wz-icon-eye"></i>
              <i class="wz-icon-eye-close"></i>
              <i class="wz-icon-lock"></i>
              <i class="wz-icon-unlock"></i>
              <i class="wz-icon-love"></i>
              <i class="wz-icon-start"></i>
              <i class="wz-icon-arrows"></i>
              <i class="wz-icon-expant"></i>
              <i class="wz-icon-compress"></i>
              <i class="wz-icon-sort-expant"></i>
              <i class="wz-icon-sort-compress"></i>
            </div>
          </wzCard>
          <wzCard
            type="info"
            id="label-loading"
            shadow="always"
            v-loading="loading"
          >
            <div slot="header" class="clearfix">
              <span>加载-loading</span>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start"
            >
              <wzButton type="primary" @change="divLoading">dom加载</wzButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wzButton type="primary" @change="fullscreenLoading"
                >全屏加载</wzButton
              >
            </div>
          </wzCard>
          <wzCard type="info" id="label-message" shadow="always">
            <div slot="header" class="clearfix">
              <span>提示-message</span>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start"
            >
              <wzButton type="primary" @change="divMessage">提示</wzButton
              >&nbsp;&nbsp;&nbsp;
              <wzButton type="success" @change="divMessage(1)"
                >成功提示</wzButton
              >&nbsp;&nbsp;&nbsp;
              <wzButton type="warning" @change="divMessage(2)"
                >警告提示</wzButton
              >&nbsp;&nbsp;&nbsp;
              <wzButton type="info" @change="divMessage(3)">信息提示</wzButton
              >&nbsp;&nbsp;&nbsp;
              <wzButton type="danger" @change="divMessage(4)"
                >错误提示</wzButton
              >
            </div>
          </wzCard>
          <wzCard type="info" id="label-input" shadow="always">
            <div slot="header" class="clearfix">
              <span>输入框</span>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start child-width-auto margin10"
            >
              <div>
                基础用法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <wzInput v-model="input" placeholder="请输入内容"></wzInput>
              <wzInput
                v-model="input"
                maxlength="3"
                placeholder="限制3个字符"
              ></wzInput>
              <wzInput v-model="input" clearable @clear="testClick"></wzInput>
              <wzInput v-model="input" show-password></wzInput>
              <wzInput
                v-model="input"
                prefix-icon="wz-icon-back-left"
              ></wzInput>
              <wzInput v-model="input" suffix-icon="wz-icon-search"></wzInput>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start child-width-auto margin10"
            >
              <div>
                solt元素&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
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
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start child-width-auto margin10"
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
          <wzCard type="info" id="label-button" shadow="always">
            <div slot="header" class="clearfix">
              <span>按钮</span>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
            >
              <wzButton type="primary" :disabled="true">禁用</wzButton>
              <wzButton type="primary" :loading="true">加载</wzButton>
              <wzButton type="primary" icon="wz-icon-phone">带图标</wzButton>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
            >
              <wzButton type="primary">默认</wzButton>
              <wzButton type="success">成功</wzButton>
              <wzButton type="warning">警告</wzButton>
              <wzButton type="danger" @change="testClick">危险</wzButton>
              <wzButton type="info">信息</wzButton>
              <wzButton type="text">文字</wzButton>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
            >
              <wzButton type="primary" size="big">大号</wzButton>
              <wzButton type="primary" size="medium">中号</wzButton>
              <wzButton type="primary" size="small">小号</wzButton>
              <wzButton type="primary" size="mini">微号</wzButton>
            </div>
          </wzCard>
          <wzCard type="info" id="label-card" shadow="always">
            <div slot="header" class="clearfix">
              <span>卡片</span>
            </div>
            <div>
              <wzCard type="dark" shadow="hover">
                <div slot="header" class="clearfix">
                  <span>卡片名称</span>
                  <wzButton size="mini" style="float: right; padding: 3px"
                    >操作按钮</wzButton
                  >
                </div>
                <div class="text item">列表内容</div>
              </wzCard>
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
          <wzCard type="info" id="label-menu" shadow="always">
            <div slot="header" class="clearfix">
              <span>布局</span>
            </div>
            <div>
              <div class="wz-header">
                <div style="padding: 0 10px; color: #fff; line-height: 60px">
                  <b>header</b>
                </div>
              </div>
              <div
                class="wz-container wz-container-fixed"
                style="background-color: #ddd"
              >
                <div
                  class="wz-container-child-norow-div wz-aside"
                  style="width: 330px"
                >
                  <wz-menu mode="vertical" :default-active="activeIndex">
                    <!-- @select="handleSelect" -->
                    <wz-menu-item index="1">处理中心|</wz-menu-item>
                    <wz-submenu index="2">
                      <template slot="title">我的工作台</template>
                      <wz-menu-item index="2-1">选项1</wz-menu-item>
                      <wz-menu-item index="2-2"
                        ><template slot="title"
                          ><i class="wz-icon-phone"></i
                          ><span>选项2</span></template
                        ></wz-menu-item
                      >
                      <wz-menu-item index="2-3">选项3</wz-menu-item>
                      <wz-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <wz-menu-item index="2-4-1">选项1</wz-menu-item>
                        <wz-menu-item index="2-4-2">选项2</wz-menu-item>
                        <wz-menu-item index="2-4-3">选项3</wz-menu-item>
                      </wz-submenu>
                    </wz-submenu>
                    <wz-menu-item index="3"
                      ><template slot="title"
                        ><i class="wz-icon-back-left"></i
                        ><span>消息中心</span></template
                      ></wz-menu-item
                    >
                    <wz-submenu index="4">
                      <template slot="title">订单管理</template>
                      <wz-menu-item index="4-1">选项1</wz-menu-item>
                      <wz-menu-item index="4-2">选项2</wz-menu-item>
                    </wz-submenu>
                  </wz-menu>
                </div>
                <div class="wz-container-child-norow-div wz-main">
                  <wz-menu :default-active="activeIndex">
                    <!-- @select="handleSelect" -->
                    <wz-menu-item index="1">处理中心-</wz-menu-item>
                    <wz-submenu index="2">
                      <template slot="title">我的工作台</template>
                      <wz-menu-item index="2-1">选项1</wz-menu-item>
                      <wz-menu-item index="2-2"
                        ><template slot="title"
                          ><i class="wz-icon-phone"></i
                          ><span>选项2</span></template
                        ></wz-menu-item
                      >
                      <wz-menu-item index="2-3">选项3</wz-menu-item>
                      <wz-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <wz-menu-item index="2-4-1">选项1</wz-menu-item>
                        <wz-menu-item index="2-4-2">选项2</wz-menu-item>
                        <wz-menu-item index="2-4-3">选项3</wz-menu-item>
                      </wz-submenu>
                    </wz-submenu>
                    <wz-menu-item index="3">
                      <template slot="title">
                        <i class="wz-icon-back-left"></i>
                        <span>消息中心</span>
                      </template>
                    </wz-menu-item>
                    <wz-submenu index="4">
                      <template slot="title">订单管理</template>
                      <wz-menu-item index="4-1">选项1</wz-menu-item>
                      <wz-menu-item index="4-2">选项2</wz-menu-item>
                    </wz-submenu>
                  </wz-menu>
                </div>
              </div>
              <div class="wz-main" style="background-color: #eee">main</div>
              <div class="wz-footer">
                <div style="padding: 0 10px"><b>footer</b></div>
              </div>
            </div>
          </wzCard>
          <wzCard type="info" id="label-tooltip" shadow="always">
            <div slot="header" class="clearfix">
              <span>提示</span>
            </div>
            <div>
              <wz-tooltip placement="top" content="top 提示文字"
                ><span>上</span></wz-tooltip
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-tooltip
                effect="primary"
                placement="bottom"
                content="bottom 提示文字"
                ><span>下</span></wz-tooltip
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-tooltip
                effect="success"
                placement="left"
                content="left 提示文字"
                ><span>左</span></wz-tooltip
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-tooltip
                effect="danger"
                placement="right"
                content="right 提示文字"
                ><span>右</span></wz-tooltip
              >
            </div>
          </wzCard>
          <wzCard type="info" id="label-popover-dialog" shadow="always">
            <div slot="header" class="clearfix">
              <span>弹出框</span>
            </div>
            <div
              class="wz-display-flex wz-display-flex-rowWarp wz-display-flex-start margin10"
            >
              <wz-popover
                placement="top-start"
                trigger="hover"
                width="auto"
                :padding="8"
                :fontSize="12"
                fontColor="#fff"
                content="这是一段提示"
                popper-class="wz-popover-tooltip"
              >
                <wz-button slot="reference">hover 激活</wz-button>
              </wz-popover>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <wz-button slot="reference">hover 激活</wz-button>
              </wz-popover>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <wz-button slot="reference">click 激活</wz-button>
              </wz-popover>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-popover
                ref="popover"
                placement="right"
                title="标题"
                width="200"
                trigger="focus"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
              </wz-popover>
              <wz-button v-popover:popover>focus 激活</wz-button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="manual"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                v-model="manualPopover"
              >
                <wz-button
                  slot="reference"
                  @change="manualPopover = !manualPopover"
                  >手动激活</wz-button
                > </wz-popover
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <wz-button type="success" @change="dialogVisible = true"
                >Dialog</wz-button
              >
            </div>
          </wzCard>
          <wzCard type="info" id="label-collapse" shadow="always">
            <div slot="header" class="clearfix">
              <span>折叠面板</span>
            </div>
            <wz-collapse v-model="activeNames" @change="collapseHandleChange">
              <wz-collapse-item name="1">
                <template slot="title">
                  一致性 Consistency<i class="header-icon wz-icon-info"></i>
                </template>
                <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div>
                <div>
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                </div>
              </wz-collapse-item>
              <wz-collapse-item title="反馈 Feedback" name="2">
                <div>
                  控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                </div>
                <div>
                  页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                </div>
              </wz-collapse-item>
              <wz-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>
                  清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                </div>
                <div>
                  帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                </div>
              </wz-collapse-item>
              <wz-collapse-item title="可控 Controllability" name="4">
                <div>
                  用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                </div>
                <div>
                  结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                </div>
              </wz-collapse-item>
            </wz-collapse>
          </wzCard>
        </div>
      </div>
    </div>
    <div class="wz-footer">
      <div style="padding: 0 10px">
        <b>by {{ msg2 }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to wiztek UI Vue.js App",
      msg2: "wiztek UI Email: dulei@wiztek.com.cn",
      loading: false,
      input: "",
      radio: "",
      radiottt: "",
      radiotts: "",
      meSwitch: true,
      meSwitch1: 0,
      meSwitch2: true,
      checkbox: [11],
      checkbox2: [],
      restaurants: [],
      checkAll: false,
      isIndeterminate: false,
      manualPopover: false,
      dialogVisible: false,
      activeIndex: "3",
      activeNames: "1",
      testTimeData: {},
      colorData: {
        type: 0,
        names: ["低", "中低", "中", "中", "中", "中高", "中高", "高"],
        levels: [-25, -10, -5, 0, 5, 10, 25, 50],
        colors: [
          [255, 255, 255],
          [232, 255, 202],
          [149, 207, 69],
          [0, 144, 0],
          [0, 193, 255],
          [30, 0, 255],
          [255, 0, 255],
          [150, 0, 84],
        ],
      },
    };
  },
  computed: {
    cardBodyStyle() {
      return {
        padding: "30px",
        backgroundColor: "#f8f8f8",
      };
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    collapseHandleChange() {},
    handleDialogClose(done) {
      done();
    },
    divMessage(key) {
      console.log("this", this);
      switch (key) {
        case 1:
          this.$message.success("成功");
          break;
        case 2:
          this.$message.warning("警告");
          break;
        case 3:
          this.$message.info("信息");
          break;
        case 4:
          this.$message.error("失败");
          break;
        default:
          this.$message.primary("默认");
          break;
      }
    },
    divLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    fullscreenLoading() {
      let that = this;
      this.$loading({ text: "加载中" });
      setTimeout(() => {
        this.$loading().close();
      }, 3000);
    },
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
    /**
     * 按key相同值分组树
     */
    dataTransform(arr, key) {
      var map = {},
        dest = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == null) {
          arr[i][key] = "9999";
          arr[i].GroupName = "其他";
        }
        var ai = arr[i];
        if (!map[ai[key]]) {
          dest.push({
            GroupCode: ai[key],
            GroupCode2: ai.GroupCode2,
            GroupName: ai.GroupName,
            children: [ai],
          });
          map[ai[key]] = ai;
        } else {
          var child = {};
          var cest = [];
          for (var j = 0; j < dest.length; j++) {
            var dj = dest[j];
            if (dj[key] == ai[key]) {
              dj.children.push(ai);
              break;
            }
          }
        }
      }
      return dest;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wz-card {
  margin: 30px 0;
}
.ullilist {
  margin-top: 50px;
  li {
    margin: 10px 0;
    a {
      text-decoration: none;
      color: #555;
      font-weight: bold;
    }
  }
}
.wz-popover-tooltip {
  background-color: #333;
  .popper__arrow::after {
    border-top-color: #333 !important;
  }
}
</style>
