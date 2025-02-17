/* 前端框架和库 */
import { buildItemByType, buildSubmenu } from "./common.js";

const parent = {
  id: "6",
  path: "./docs/FE_framework/"
};
const bs = buildSubmenu(parent);

// vue
const p1 = bs(1, "vue");
const buildItem1 = buildItemByType(p1);
const vueIndex = {
  id: parent.id,
  label: "vue",
  children: buildItem1([
    ["过滤器", "filter"],
    ["生命周期", "life"],
    ["vdom", "vdom"],
    ["vue-devtools 安装使用", "devtools"],
    ["vue hook", "vhook"],
    ["插槽", "slot"],
    ["组件通信", "componentCom"],
    ["性能优化", "performance"],
    ["函数式组件", "functional"]
  ])
};

// redux
const p2 = bs(2, "redux");
const buildItem2 = buildItemByType(p2);
const reduxIndex = {
  id: parent.id,
  label: "Redux",
  children: buildItem2([["官方文档", "docs"]])
};

export const fe_libsIndex = [vueIndex, reduxIndex];
