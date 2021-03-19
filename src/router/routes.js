import App from "../pages/App.js";
import Game from "../pages/Game.js";
import ClickCount from "../pages/ClickCount.js";
import ControlPanel from "../pages/ControlPanel.js";
import NotFound from "../pages/NotFound.js";

export default [
  {
    path: "/",
    name: "App",
    label: "首页",
    exact: true,
    component: App,
    isMenu: true
  },
  {
    path: "/game",
    name: "Game",
    label: "井字棋",
    exact: true,
    component: Game,
    isMenu: true
  },
  {
    path: "/clickCount",
    name: "ClickCount",
    label: "单点计数器",
    exact: true,
    component: ClickCount,
    isMenu: true
  },
  {
    path: "/controlPanel",
    name: "ControlPanel",
    label: "多点计数器",
    exact: true,
    component: ControlPanel,
    isMenu: true
  },
  {
    path: "*",
    name: "NotFound",
    label: "未找到页面",
    exact: false,
    component: NotFound,
    isMenu: false
  }
];
