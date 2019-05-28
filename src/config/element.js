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
  Divider,
  Select,
  Option,
  Popover,
  DatePicker,
  InputNumber,
  Tabs,
  TabPane,
  Dialog,
  Image,
  Link,
  Switch,
  ButtonGroup,
  Upload,
  Tooltip,
  MessageBox, // SERVICES
  Message,
  Loading,
  Table,
  Tree,
  TableColumn,
  Scrollbar,
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

Vue.use(Divider)

Vue.use(Select)
Vue.use(Option)

Vue.use(Popover)

Vue.use(DatePicker)

Vue.use(InputNumber)

Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Dialog)

Vue.use(Image)
Vue.use(Loading.directive)

Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Link)

Vue.use(Switch)

Vue.use(Tree)

Vue.use(ButtonGroup)

Vue.use(Scrollbar)

Vue.use(Upload)

Vue.use(Tooltip)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
