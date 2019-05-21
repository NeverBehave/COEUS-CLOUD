import Vue from 'vue'
import { Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Button,
  Card,
  Form,
  Input,
  FormItem,
  Radio,
  RadioGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Badge,
  Carousel,
  CarouselItem,
  MessageBox, // SERVICES
  Message,
  Loading,
  Notification } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Row)
Vue.use(Col)

Vue.use(Radio)
Vue.use(RadioGroup)

Vue.use(Card)
Vue.use(Button)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Submenu)

Vue.use(Badge)

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
