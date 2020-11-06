# wiztekui

> wiztek UI project
> https://github.com/xoxleidu/wiztekui

## Setup

```bash
# install wiztekui
npm install wiztekui -s
# main.js
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

#### type 颜色

```bash
primary / success / warning / danger / info / text
```

#### size 大小

```bash
big / medium / small / mini
```

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

#### type 颜色

```bash
primary / info
```

#### shadow 阴影

```bash
always / hover / never
```

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
