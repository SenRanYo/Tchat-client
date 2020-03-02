/*
 * @Author: your name
 * @Date: 2020-02-11 13:48:53
 * @LastEditTime: 2020-03-02 01:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\plugins\element.js
 */
import Vue from "vue";
import {
  Button,
  Scrollbar,
  Icon,
  Avatar,
  Image,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Input,
  Form,
  Option,
  Select,
  FormItem,
  Message,
  MessageBox,
  Divider,
  InfiniteScroll,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Row,
  Col,
  Popover,
  Tooltip,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Upload
} from "element-ui";

Vue.use(Button);
Vue.use(Scrollbar);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Image);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(TabPane);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Input);
Vue.use(Form);
Vue.use(Option);
Vue.use(Select);
Vue.use(FormItem);
Vue.use(InfiniteScroll);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Upload);
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
