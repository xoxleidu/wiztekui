import wzButton from "./button.vue";
import wzCard from "./card.vue";
import wzInput from "./input.vue";
import wzRadio from "./radio.vue";
import wzRadioGroup from "./radio-group.vue";
import wzRadioButton from "./radio-button.vue";
import wzCheckbox from "./checkbox.vue";
import wzCheckboxGroup from "./checkbox-group.vue";
import wzCheckboxButton from "./checkbox-button.vue";
import wzSwitch from "./switch.vue";
import wzDialog from "./dialog.vue";
import wzCollapse from "./collapse.vue";
import wzCollapseItem from "./collapse-item.vue";
import directive from "../components/popover/directive";
import Popover from "../components/popover/index";

import CollapseTransition from "../components/utils/collapse-transition";
import wzTooltip from "../components/tooltip/main.js";

import loadingDirective from "../components/loading/loading-directive";
import loadingService from "../components/loading/loading-service";

import wzMenu from "./menu.vue";
import Submenu from "./menu-submenu.vue";
import MenuItem from "./menu-item.vue";
import wzMenuItemGroup from "./menu-item-group.vue";

import Message from "../components/message/index";

import timeBar from "./timeBar.vue";
/**
 ** 更新后build保存 min.js文件
 ***/

const components = [
  wzInput,
  wzButton,
  wzCard,
  wzRadio,
  wzRadioGroup,
  wzRadioButton,
  wzCheckbox,
  wzCheckboxGroup,
  wzCheckboxButton,
  wzSwitch,
  wzDialog,
  wzCollapse,
  wzCollapseItem,
  wzMenu,
  wzMenuItemGroup,
  Popover,
  CollapseTransition,
  MenuItem,
  Submenu,
  wzTooltip,
  Message,
  timeBar
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  Vue.use(loadingDirective);
  Vue.prototype.$loading = loadingService;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = Message;
  // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
};

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
  // loadingDirective,
  // loadingService
};
