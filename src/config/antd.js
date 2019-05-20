import Vue from 'vue'
import { Layout, 
         Row, Col,
         Card } from 'ant-design-vue'

const { Header, Footer, Content } = Layout

Vue.component(Layout.name, Layout)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Content.name, Content)

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)