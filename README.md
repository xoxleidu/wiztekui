# wiztekui

> wiztek UI project
> https://github.com/xoxleidu/wiztekui

## Setup

```bash
# install wiztekui
npm install wiztekui -s
# main.js
import wiztekui from "wiztekui";
Vue.use(wiztekui);
import "wiztekui/lib/css/wiztekui.min.css";
```

---

---

## 使用 scss 更换主题颜色

```bash
# color theme
create myui.scss In main.js
## package.json
"sass-loader": "^7.3.1",
"node-sass": "^4.14.1",

# myui.scss:
$--color-primary: "#0062cc";
$--color-success: "#28a745";
$--color-warning: "#ffc107";
$--color-danger: "#dc3545";
$--color-info: "#6d757d";

## in end
@import "~wiztekui/lib/scss/wiztekui.scss";
```

---

---

## button

```html
<wzButton type="primary" size="medium">按钮</wzButton>
<wzButton type="success" size="small" :loading="loading">加载</wzButton>
<wzButton type="warning" size="mini" :disabled="disabled">禁用</wzButton>
<wzButton type="primary" icon="wz-icon-phone">带图标</wzButton>
<wzButton type="danger" size="big" @change="handleButtonChange">点击</wzButton>
```

```javascript
export default {
  data() {
    return {
      loading: true,
      disabled: true
    };
  },
  methods: {
    handleButtonChange() {
      console.log("change...");
    }
  }
};
```

#### Attributes

| 参数        |      说明      |  类型   |                       可选值                       | 默认值 |
| ----------- | :------------: | :-----: | :------------------------------------------------: | -----: |
| size        |      尺寸      | string  |            big / medium / small / mini             |      — |
| type        |      类型      | string  | primary / success / warning / danger / info / text |      — |
| loading     | 是否加载中状态 | boolean |                         —                          |  false |
| disabled    |  是否禁用状态  | boolean |                         —                          |  false |
| icon        |    图标类名    | string  |                         —                          |      — |
| autofocus   |  是否默认聚焦  | boolean |                         —                          |  false |
| native-type | 原生 type 属性 | string  |              button / submit / reset               | button |

#### Events

| 事件名称 |   说明   |     回调参数      |
| -------- | :------: | :---------------: |
| change   | 点击事件 | object MouseEvent |

---

---

## card

```html
<wzCard type="primary" shadow="hover">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <wzButton size="mini" style="float: right; padding: 3px">操作按钮</wzButton>
  </div>
  <div>列表内容</div>
</wzCard>
<style>
  .clearfix {
    clear: both;
  }
</style>
```

#### Attributes

| 参数       |                        说明                         |  类型  |         可选值         | 默认值 |
| ---------- | :-------------------------------------------------: | :----: | :--------------------: | -----: |
| type       |                        模板                         | string |  primary / info /dark  |      - |
| header     | 设置 header，也可以通过 slot#header 传入 DOM string |   —    |           —            |
| body-style |                  设置 body 的样式                   | object | — { padding: '20px' }  |
| shadow     |                  设置阴影显示时机                   | string | always / hover / never | always |

---

---

## collapse

折叠面板

```html
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
<script>
  export default {
    data() {
      return {
        activeNames: ["1"]
      };
    },
    methods: {
      collapseHandleChange(val) {
        console.log(val);
      }
    }
  };
</script>
```

#### collapse Attributes

| 参数            |                                  说明                                   |      类型      | 可选值 | 默认值 |
| --------------- | :---------------------------------------------------------------------: | :------------: | :----: | :----: |
| value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array) | string / array |   —    |   —    |
| accordion       |                             是否手风琴模式                              |    boolean     |   —    | false  |

#### collapse Events

| 事件名称 |                                          说明                                          |           回调参数            |
| -------- | :------------------------------------------------------------------------------------: | :---------------------------: |
| change   | 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为 string，否则为 array) | (activeNames: array / string) |

#### collapse Item Attributes

| 参数     |    说明    |     类型      | 可选值 | 默认值 |
| -------- | :--------: | :-----------: | :----: | :----: |
| name     | 唯一标志符 | string/number |   —    |   —    |
| title    |  面板标题  |    string     |   —    |   —    |
| disabled |  是否禁用  |    boolean    |   —    |   —    |

---

---

## icon

```html
<i class="wz-icon-loading"></i>
```

---

---

## loading

```html
<div v-loading="loading">
  <wzButton @change="handleDivLoadingChange">dom加载</wzButton>
  <wzButton @change="handleFusLoadingChange">全屏加载</wzButton>
</div>
<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      handleDivLoadingChange() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      },
      handleFusLoadingChange() {
        this.$loading();
        setTimeout(() => {
          this.$loading().close();
        }, 3000);
      }
    }
  };
</script>
```

如果完整引入了 loading, Vue.prototype 上会有一个全局方法 $loading，它的调用方式为：this.$loading(options)，同样会返回一个 Loading 实例。此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。

#### Options

| 参数        |                                                                   说明                                                                    |     类型      | 可选值 |        默认值 |
| ----------- | :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | :----: | ------------: |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点 | object/string |   —    | document.body |
| body        |                                                     同 v-loading 指令中的 body 修饰符                                                     |    boolean    |   —    |         false |
| fullscreen  |                                                  同 v-loading 指令中的 fullscreen 修饰符                                                  |    boolean    |   —    |          true |
| lock        |                                                     同 v-loading 指令中的 lock 修饰符                                                     |    boolean    |   —    |         false |
| text        |                                                       显示在加载图标下方的加载文案                                                        |    string     |   —    |             — |
| spinner     |                                                            自定义加载图标类名                                                             |    string     |   —    |             — |
| background  |                                                                遮罩背景色                                                                 |    string     |   —    |             — |
| customClass |                                                           Loading 的自定义类名                                                            |    string     |   —    |             — |

---

---

## message

```html
<wzButton @change="handleMessageChange">message</wzButton>
<script>
  import { Message } from "wiztekui";
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      handleMessageChange() {
        Message.primary("信息");
      }
    }
  };
</script>
```

Vue.prototype 上会有一个全局方法 $message，它的调用方式为：this.$message(options)，同样会返回一个 Message 实例。此时调用它们中任意一个的 close 方法都能关闭这个全屏 Message。

#### Options

| 参数                     |                     说明                      |      类型      |               可选值                |  默认值 |
| ------------------------ | :-------------------------------------------: | :------------: | :---------------------------------: | ------: |
| message                  |                   消息文字                    | string / VNode |                  —                  |       — |
| type                     |                     主题                      |     string     | primary、success/warning/info/error | primary |
| iconClass                |         自定义图标的类名，会覆盖 type         |     string     |                  —                  |       — |
| dangerouslyUseHTMLString |     是否将 message 属性作为 HTML 片段处理     |    boolean     |                  —                  |   false |
| customClass              |                  自定义类名                   |     string     |                  —                  |       — |
| duration                 |     显示时间, 毫秒。设为 0 则不会自动关闭     |     number     |                  —                  |    3000 |
| showClose                |               是否显示关闭按钮                |    boolean     |                  —                  |   false |
| center                   |                 文字是否居中                  |    boolean     |                  —                  |   false |
| onClose                  | 关闭时的回调函数, 参数为被关闭的 message 实例 |    function    |                  —                  |       — |

#### message Methods

| 方法名 |        说明        |
| ------ | :----------------: |
| close  | 关闭当前的 Message |

---

---

## input

```html
<wzInput v-model="input"></wzInput>
<wzInput v-model="input">
  <template slot="prepend">Http://</template>
</wzInput>
```

#### Attributes

| 参数          |                 说明                 |  类型   |           可选值            | 默认值 |
| ------------- | :----------------------------------: | :-----: | :-------------------------: | -----: |
| size          |                 大小                 | string  | big / medium / small / mini |      - |
| placeholder   |            输入框占位文本            | string  |              -              |      - |
| clearable     |              是否可清空              | boolean |              -              |  false |
| maxlength     |        原生属性，最大输入长度        | number  |              -              |      - |
| show-password |         是否显示切换密码图标         | boolean |              -              |  false |
| disabled      |                 禁用                 | boolean |              -              |  false |
| prefix-icon   |            输入框头部图标            | string  |              —              |      — |
| suffix-icon   |            输入框尾部图标            | string  |              —              |      — |
| name          |               原生属性               | string  |              —              |      — |
| readonly      |          原生属性，是否只读          | boolean |              —              |  false |
| max           |         原生属性，设置最大值         |    —    |              —              |      — |
| min           |         原生属性，设置最小值         |    —    |              —              |      — |
| step          | 原生属性，设置输入字段的合法数字间隔 |    —    |              —              |      — |
| autofocus     |        原生属性，自动获取焦点        | boolean |         true, false         |  false |
| form          |               原生属性               | string  |              —              |      — |

#### Input Slots

| name    |      说明      |
| ------- | :------------: |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

#### Input Events

| 事件名称 |                    说明                     |    回调参数    |
| -------- | :-----------------------------------------: | :------------: |
| blur     |           在 Input 失去焦点时触发           | (event: Event) |
| focus    |           在 Input 获得焦点时触发           | (event: Event) |
| change   |            在 Input 值改变时触发            | (value: string | number) |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 |       —        |

#### Input Methods

| 方法名 |        说明         | 参数 |
| ------ | :-----------------: | :--: |
| focus  |  使 input 获取焦点  |  —   |
| blur   |  使 input 失去焦点  |  —   |
| select | 选中 input 中的文字 |  —   |

---

---

## radio

```html
<wzRadio v-model="radio" label="1"></wzRadio>
<wz-radio-group v-model="radio">
  <wz-radio :label="2">radio2</wz-radio>
  <wz-radio :label="3">radio3</wz-radio>
</wz-radio-group>
<wz-radio-group v-model="radio">
  <wz-radio-button :label="4">按钮4</wz-radio-button>
  <wz-radio-button :label="5">按钮5</wz-radio-button>
</wz-radio-group>
```

#### Radio Attributes

| 参数            |                 说明                 |           类型            |        可选值         | 默认值 |
| --------------- | :----------------------------------: | :-----------------------: | :-------------------: | :----: |
| value / v-model |                绑定值                | string / number / boolean |           —           |   —    |
| label           |            Radio 的 value            | string / number / boolean |           —           |   —    |
| disabled        |               是否禁用               |          boolean          |           —           | false  |
| border          |             是否显示边框             |          boolean          |           —           | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 |          string           | medium / small / mini |   —    |
| name            |            原生 name 属性            |          string           |           —           |   —    |

#### Radio-group Attributes

| 参数            |                            说明                            |           类型            |        可选值         | 默认值  |
| --------------- | :--------------------------------------------------------: | :-----------------------: | :-------------------: | :-----: |
| value / v-model |                           绑定值                           | string / number / boolean |           —           |    —    |
| disabled        |                          是否禁用                          |          boolean          |           —           |  false  |
| text-color      |             按钮形式的 Radio 激活时的文本颜色              |          string           |           —           | #ffffff |
| fill            |          按钮形式的 Radio 激活时的填充色和边框色           |          string           |           —           | #0062cc |
| size            | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 |          string           | medium / small / mini |    —    |

#### Radio-button Attributes

| 参数     |      说明      |      类型       | 可选值 | 默认值 |
| -------- | :------------: | :-------------: | :----: | :----: |
| label    | Radio 的 value | string / number |   —    |   —    |
| disabled |    是否禁用    |     boolean     |   —    | false  |
| name     | 原生 name 属性 |     string      |   —    |   —    |

#### Events

| 事件名称 |          说明          |       回调参数        |
| -------- | :--------------------: | :-------------------: |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

---

---

## checkbox

```html
<wzCheckbox v-model="checkbox" label="1"></wzCheckbox>
<wz-checkbox-group v-model="checkbox">
  <wz-checkbox :label="2">多选项</wz-checkbox>
  <wz-checkbox :label="3">多选项</wz-checkbox>
</wz-checkbox-group>
<wz-checkbox-group v-model="checkbox">
  <wz-checkbox-button :label="4">多选项</wz-checkbox-button>
  <wz-checkbox-button :label="5">多选项</wz-checkbox-button>
</wz-checkbox-group>
```

```html
<wz-checkbox
  :indeterminate="isAllCheck"
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
<script>
  export default {
    data() {
      return {
        checkAll: false,
        checkbox2: [],
        isAllCheck: false
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkbox2 = val ? [21, 22, 23, 24] : [];
        this.isAllCheck = false;
      },
      handleChecked2Change(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === [21, 22, 23, 24].length;
        this.isAllCheck =
          checkedCount > 0 && checkedCount < [21, 22, 23, 24].length;
      }
    }
  };
</script>
```

#### checkbox Attributes

| 参数            |                                 说明                                  |           类型            |        可选值         | 默认值 |
| --------------- | :-------------------------------------------------------------------: | :-----------------------: | :-------------------: | :----: |
| value / v-model |                                绑定值                                 | string / number / boolean |           —           |   —    |
| label           | 选中状态的值（只有在 checkbox-group 或者绑定对象类型为 array 时有效） | string / number / boolean |           —           |   —    |
| true-label      |                              选中时的值                               |      string / number      |           —           |   —    |
| false-label     |                            没有选中时的值                             |      string / number      |           —           |   —    |
| disabled        |                               是否禁用                                |          boolean          |           —           | false  |
| border          |                             是否显示边框                              |          boolean          |           —           | false  |
| size            |                Checkbox 的尺寸，仅在 border 为真时有效                |          string           | medium / small / mini |   —    |
| name            |                            原生 name 属性                             |          string           |           —           |   —    |
| checked         |                             当前是否勾选                              |          boolean          |           —           | false  |
| indeterminate   |                设置 indeterminate 状态，只负责样式控制                |          boolean          |           —           | false  |

#### checkbox-group Attributes

| 参数            |                    说明                    |           类型            |        可选值         | 默认值  |
| --------------- | :----------------------------------------: | :-----------------------: | :-------------------: | :-----: |
| value / v-model |                   绑定值                   | string / number / boolean |           —           |    —    |
| disabled        |                  是否禁用                  |          boolean          |           —           |  false  |
| size            |  Checkbox 的尺寸，仅在 border 为真时有效   |          string           | medium / small / mini |    —    |
| min             |       可被勾选的 checkbox 的最小数量       |          number           |           —           |    —    |
| max             |       可被勾选的 checkbox 的最大数量       |          number           |           —           |    —    |
| text-color      |    按钮形式的 Checkbox 激活时的文本颜色    |          string           |           —           | #ffffff |
| fill            | 按钮形式的 Checkbox 激活时的填充色和边框色 |          string           |           —           | #0062cc |

#### checkbox-button Attributes

| 参数        |                                 说明                                  |           类型            | 可选值 | 默认值 |
| ----------- | :-------------------------------------------------------------------: | :-----------------------: | :----: | :----: |
| label       | 选中状态的值（只有在 checkbox-group 或者绑定对象类型为 array 时有效） | string / number / boolean |   —    |   —    |
| true-label  |                              选中时的值                               |      string / number      |   —    |   —    |
| false-label |                            没有选中时的值                             |      string / number      |   —    |   —    |
| disabled    |                               是否禁用                                |          boolean          |   —    | false  |
| name        |                            原生 name 属性                             |          string           |   —    |   —    |
| checked     |                             当前是否勾选                              |          boolean          |   —    | false  |

#### Events

| 事件名称 |           说明           |  回调参数  |
| -------- | :----------------------: | :--------: |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

---

---

## switch

```html
<wzSwitch v-model="meSwitch"></wzSwitch>
<wz-switch
  v-model="meSwitch"
  active-color="#0062cc"
  inactive-color="#0062cc"
  active-text="精确到日"
  inactive-text="精确到时"
>
</wz-switch>
```

#### switch Attributes

| 参数                |                            说明                             |           类型            | 可选值 | 默认值  |
| ------------------- | :---------------------------------------------------------: | :-----------------------: | :----: | :-----: |
| value / v-model     |                           绑定值                            | boolean / string / number |   —    |    —    |
| disabled            |                          是否禁用                           |          boolean          |   —    |  false  |
| width               |                    switch 的宽度（像素）                    |          number           |   —    |   35    |
| active-icon-class   |  switch 打开时所显示图标的类名，设置此项会忽略 active-text  |          string           |   —    |    —    |
| inactive-icon-class | switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text |          string           |   —    |    —    |
| active-text         |                   switch 打开时的文字描述                   |          string           |   —    |    —    |
| inactive-text       |                   switch 关闭时的文字描述                   |          string           |   —    |    —    |
| active-value        |                      switch 打开时的值                      | boolean / string / number |   —    |  true   |
| inactive-value      |                      switch 关闭时的值                      | boolean / string / number |   —    |  false  |
| active-color        |                    switch 打开时的背景色                    |          string           |   —    | #0062cc |
| inactive-color      |                    switch 关闭时的背景色                    |          string           |   —    | #dddfe7 |
| name                |                   switch 对应的 name 属性                   |          string           |   —    |    —    |
| validate-event      |            改变 switch 状态时是否触发表单的校验             |          boolean          |   -    |  true   |

#### switch Events

| 事件名称 |              说明               |  回调参数  |
| -------- | :-----------------------------: | :--------: |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

#### switch Methods

| 方法名 |        说明        | 参数 |
| ------ | :----------------: | :--: |
| focus  | 使 Switch 获取焦点 |  -   |

---

---

## Dialog

在保留当前页面状态的情况下，告知用户并承载相关操作。

```html
<wz-button type="text" @change="dialogVisible = true"
  >点击打开 Dialog</wz-button
>

<wz-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <wz-button @change="dialogVisible = false">取 消</wz-button>
    <wz-button type="primary" @change="dialogVisible = false">确 定</wz-button>
  </span>
</wz-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        done();
      }
    }
  };
</script>
```

Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 ref 获取相应组件，请在 open 事件回调中进行。

如果 visible 属性绑定的变量位于 Vuex 的 store 内，那么 .sync 不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 visible 属性绑定的变量的值。

#### Dialog Attributes

| 参数                  |                                     说明                                     |                 类型                 | 可选值 | 默认值 |
| --------------------- | :--------------------------------------------------------------------------: | :----------------------------------: | :----: | :----: |
| visible               |                      是否显示 Dialog，支持 .sync 修饰符                      |               boolean                |   —    | false  |
| title                 |               Dialog 的标题，也可通过具名 slot （见下表）传入                |                string                |   —    |   —    |
| width                 |                                Dialog 的宽度                                 |                string                |   —    |  50%   |
| fullscreen            |                              是否为全屏 Dialog                               |               boolean                |   —    | false  |
| top                   |                        Dialog CSS 中的 margin-top 值                         |                string                |   —    |  15vh  |
| modal                 |                                是否需要遮罩层                                |               boolean                |   —    |  true  |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 |               boolean                |   —    |  true  |
| append-to-body        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true |               boolean                |   —    | false  |
| lock-scroll           |                     是否在 Dialog 出现时将 body 滚动锁定                     |               boolean                |   —    |  true  |
| custom-class          |                             Dialog 的自定义类名                              |                string                |   —    |   —    |
| close-on-click-modal  |                      是否可以通过点击 modal 关闭 Dialog                      |               boolean                |   —    |  true  |
| close-on-press-escape |                       是否可以通过按下 ESC 关闭 Dialog                       |               boolean                |   —    |  true  |
| show-close            |                               是否显示关闭按钮                               |               boolean                |   —    |  true  |
| before-close          |                      关闭前的回调，会暂停 Dialog 的关闭                      | function(done)，done 用于关闭 Dialog |   —    |   —    |
| center                |                         是否对头部和底部采用居中布局                         |               boolean                |   —    | false  |

#### Slot

| name   |          说明           |
| ------ | :---------------------: |
| —      |      Dialog 的内容      |
| title  |   Dialog 标题区的内容   |
| footer | Dialog 按钮操作区的内容 |

#### Events

| 事件名称 |            说明             | 回调参数 |
| -------- | :-------------------------: | :------: |
| open     |      Dialog 打开的回调      |    —     |
| opened   | Dialog 打开动画结束时的回调 |    —     |
| close    |      Dialog 关闭的回调      |    —     |
| closed   | Dialog 关闭动画结束时的回调 |    —     |

---

---

## tooltip

文字提示

```html
<wz-tooltip placement="top" content="top 提示文字"
  ><span>上提示</span></wz-tooltip
>
```

tooltip 内不支持 router-link 组件，请使用 vm.\$router.push 代替。
tooltip 内不支持 disabled form 元素，参考 MDN，请在 disabled form 元素外层添加一层包裹元素。

#### tooltip Attributes

| 参数            |                                 说明                                  |  类型   |                                                  可选值                                                   |                        默认值                         |
| --------------- | :-------------------------------------------------------------------: | :-----: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------: |
| effect          |                            默认提供的主题                             | String  |                              dark/light/primary/success/warning/danger/info                               |                         dark                          |
| content         |             显示的内容，也可以通过 slot#content 传入 DOM              | String  |                                                     —                                                     |                           —                           |
| placement       |                          Tooltip 的出现位置                           | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |                        bottom                         |
| value / v-model |                             状态是否可见                              | Boolean |                                                     —                                                     |                         false                         |
| disabled        |                           Tooltip 是否可用                            | Boolean |                                                     —                                                     |                         false                         |
| offset          |                           出现位置的偏移量                            | Number  |                                                     —                                                     |                           0                           |
| transition      |                             定义渐变动画                              | String  |                                                     —                                                     |                   wz-fade-in-linear                   |
| visible-arrow   |            是否显示 Tooltip 箭头，更多参数可见 Vue-popper             | Boolean |                                                     —                                                     |                         true                          |
| popper-options  |                           popper.js 的参数                            | Object  |                                            参考 popper.js 文档                                            | { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay      |                          延迟出现，单位毫秒                           | Number  |                                                     —                                                     |                           0                           |
| manual          | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean |                                                     —                                                     |                         false                         |
| popper-class    |                     为 Tooltip 的 popper 添加类名                     | String  |                                                     —                                                     |                           —                           |
| enterable       |                      鼠标是否可进入到 tooltip 中                      | Boolean |                                                     —                                                     |                         true                          |
| hide-after      |       Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏       | number  |                                                     —                                                     |                           0                           |
| tabindex        |                        Tooltip 组件的 tabindex                        | number  |                                                     —                                                     |                           0                           |

---

---

## Popover

Popover 的属性与 Tooltip 很类似，它们都是基于 Vue-popper 开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

```html
<template>
  <wz-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <wz-button slot="reference">hover 激活</wz-button>
  </wz-popover>

  <wz-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <wz-button slot="reference">click 激活</wz-button>
  </wz-popover>

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

  <wz-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <wz-button slot="reference" @change="visible = !visible"
      >手动激活</wz-button
    >
  </wz-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
```

如需改变背景颜色，添加 popper-class='wz-popover-tooltip'，border的颜色位置为placement的选项，默认 bottom,参数为：border- + placement.split("-")[0] + -color

```html
<style>
.wz-popover-tooltip {
  background-color: #333;
}
.wz-popover-tooltip .popper__arrow::after {
  border-bottom-color: #333 !important;
}
</style>
```


#### Popover Attributes

| 参数            |                      说明                      |      类型      |                                                  可选值                                                   |                        默认值                         |
| --------------- | :--------------------------------------------: | :------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------: |
| trigger         |                    触发方式                    |     String     |                                         click/focus/hover/manual                                          |                         click                         |
| title           |                      标题                      |     String     |                                                     —                                                     |                           —                           |
| content         |      显示的内容，也可以通过 slot 传入 DOM      |     String     |                                                     —                                                     |                           —                           |
| width           |                      宽度,auto为自动                     | String, Number |                                                     auto                                                    |                    -                     |
| padding        |            padding             |     String, Number     |                                                     —                                                     |                           6                           |
| fontSize        |            文字大小             |     String, Number     |                                                     —                                                     |                           14px                           |
| fontColor        |            文字颜色             |     String     |                                                     —                                                     |                           #333333                           |
| placement       |                    出现位置                    |     String     | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |                        bottom                         |
| disabled        |                Popover 是否可用                |    Boolean     |                                                     —                                                     |                         false                         |
| value / v-model |                  状态是否可见                  |    Boolean     |                                                     —                                                     |                         false                         |
| offset          |                出现位置的偏移量                |     Number     |                                                     —                                                     |                           0                           |
| transition      |                  定义渐变动画                  |     String     |                                                     —                                                     |                    fade-in-linear                     |
| visible-arrow   | 是否显示 Tooltip 箭头，更多参数可见 Vue-popper |    Boolean     |                                                     —                                                     |                         true                          |
| popper-options  |                popper.js 的参数                |     Object     |                                            参考 popper.js 文档                                            | { boundariesElement: 'body', gpuAcceleration: false } |
| popper-class    |               为 popper 添加类名               |     String     |                                                     —                                                     |                           —                           |
| open-delay      |   触发方式为 hover 时的显示延迟，单位为毫秒    |     Number     |                                                     —                                                     |                           —                           |
| tabindex        |            Popover 组件的 tabindex             |     number     |                                                     —                                                     |                           0                           |


#### Slot

| name      |             说明              |
| --------- | :---------------------------: |
| — Popover |        内嵌 HTML 文本         |
| reference | 触发 Popover 显示的 HTML 元素 |

#### Events

| 事件名称    |          说明          | 回调参数 |
| ----------- | :--------------------: | :------: |
| show        |       显示时触发       |    —     |
| after-enter | 显示动画播放完毕后触发 |    —     |
| hide        |       隐藏时触发       |    —     |
| after-leave | 隐藏动画播放完毕后触发 |    —     |

---

---

## Menu

```html
<wz-menu>
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
```

#### Menu Attributes

| 参数                |                                        说明                                         |  类型   |        可选值         |   默认值   |
| ------------------- | :---------------------------------------------------------------------------------: | :-----: | :-------------------: | :--------: |
| mode                |                                        模式                                         | string  | horizontal / vertical | horizontal |
| collapse            |                是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                 | boolean |           —           |   false    |
| background-color    |                           菜单的背景色（仅支持 hex 格式）                           | string  |           —           |  #0062cc   |
| text-color          |                          菜单的文字颜色（仅支持 hex 格式）                          | string  |           —           |  #ffffff   |
| active-text-color   |                      当前激活菜单的文字颜色（仅支持 hex 格式）                      | string  |           —           |  #555555   |
| default-active      |                                当前激活菜单的 index                                 | string  |           —           |     —      |
| default-openeds     |                         当前打开的 sub-menu 的 index 的数组                         |  Array  |           —           |     —      |
| unique-opened       |                             是否只保持一个子菜单的展开                              | boolean |           —           |   false    |
| menu-trigger        |                子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                 | string  |     hover / click     |   hover    |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean |           —           |   false    |
| collapse-transition |                                  是否开启折叠动画                                   | boolean |           —           |    true    |

#### Menu Methods

| 方法名称 |        说明         |                参数                 |
| -------- | :-----------------: | :---------------------------------: |
| open     | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close    | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

#### Menu Events

| 事件名称 |        说明         |                                  回调参数                                  |
| -------- | :-----------------: | :------------------------------------------------------------------------: |
| select   |    菜单激活回调     |       index: 选中菜单项的 index, indexPath: 选中菜单项的 index path        |
| open     | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close    | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |

#### SubMenu Attribute

| 参数                  |                                   说明                                   |    类型     | 可选值 |                 默认值                 |
| --------------------- | :----------------------------------------------------------------------: | :---------: | :----: | :------------------------------------: |
| index                 |                                 唯一标志                                 | string/null |   —    |                  null                  |
| popper-class          |                           弹出菜单的自定义类名                           |   string    |   —    |                   —                    |
| show-timeout          |                           展开 sub-menu 的延时                           |   number    |   —    |                  300                   |
| hide-timeout          |                           收起 sub-menu 的延时                           |   number    |   —    |                  300                   |
| disabled              |                                 是否禁用                                 |   boolean   |   —    |                 false                  |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 |   boolean   |   —    | 一级子菜单：true / 非一级子菜单：false |

#### Menu-Item Attribute

| 参数     |        说明         |  类型   | 可选值 | 默认值 |
| -------- | :-----------------: | :-----: | :----: | :----: |
| index    |      唯一标志       | string  |   —    |   —    |
| route    | Vue Router 路径对象 | Object  |   —    |   —    |
| disabled |      是否禁用       | boolean |   —    | false  |

#### Menu-Group Attribute

| 参数  |   说明   |  类型  | 可选值 | 默认值 |
| ----- | :------: | :----: | :----: | :----: |
| title | 分组标题 | string |   —    |   —    |

---

---

## 布局

```html
<div class="wz-header">header</div>
<div class="wz-footer">footer</div>
<div class="wz-container">container</div>
<div class="wz-container wz-container-fixed wz-container-fixed-height">
  <div
    class="wz-container-child-norow-div wz-aside"
    style="background-color: #ccc"
  >
    aside
  </div>
  <div class="wz-container-child-norow-div wz-main">main</div>
</div>
```

#### Attribute

| 参数                      |         说明         | 类型  |        子 DOM 可选值         |                                         默认内容                                         |
| ------------------------- | :------------------: | :---: | :--------------------------: | :--------------------------------------------------------------------------------------: |
| wz-header                 |         页头         | calss |              —               |                                 高度:60px;背景色:#555555                                 |
| wz-container              |         页面         | calss |              —               |                                            —                                             |
| wz-container-fixed        |      fixed 布局      | calss | wz-container-child-norow-div |            display:flex;flex-flow: row nowrap;justify-content: space-between;            |
| wz-container-fixed-height | fixed 布局，屏幕高度 | calss |              —               |                          高度:屏幕高度-header 高度-footer 高度                           |
| wz-aside                  |        右边栏        | calss |              —               |                                            —                                             |
| wz-main                   |         页面         | calss |              —               |                                            —                                             |
| wz-footer                 |         页底         | calss |              —               | width: 100%;height: 30px;line-height: 30px;background-color: #888888;color: floralwhite; |

#### wz-container-child-norow-div Attribute

| 参数                         |              说明              | 类型  |    默认内容     |
| ---------------------------- | :----------------------------: | :---: | :-------------: |
| wz-container-child-norow-div | wz-container-fixed 子 DIV 样式 | calss | flex: 0 0 100%; |
