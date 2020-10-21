# wiztekui

> wiztek UI project

## Setup

```bash
# install wiztekui
npm install wiztekui -s
# main.js
import "wiztekui/lib/css/wiztekui.min.css";
```

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

### type 颜色

```bash
primary / success / warning / danger / info / text
```

### size 大小

```bash
big / medium / small / mini
```

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

### type 颜色

```bash
primary / info
```

### shadow 阴影

```bash
always / hover / never
```
