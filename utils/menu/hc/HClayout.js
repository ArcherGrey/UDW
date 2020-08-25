import { item } from "../common.js";
const parent = {
  id: "2.2",
  path: "./docs/HC/layout/"
};
export const HClayout = {
  id: "2.2",
  label: "布局",
  children: [
    item(parent, "盒模型介绍", "index"),
    item(parent, "flex 布局", "flex"),
    item(parent, "圣杯 双飞翼 布局", "layout1"),
    item(parent, "固定宽度布局", "width1")
  ]
};
