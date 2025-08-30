import { createApp } from 'vue';
import App from './App.vue';
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Spin,
  Modal,
  Skeleton,
} from 'ant-design-vue';
import './style.css';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Layout);
app.use(Row);
app.use(Col);
app.use(Card);
app.use(Form);
app.use(Input);
app.use(InputNumber);
app.use(Button);
app.use(Spin);
app.use(Modal);
app.use(Skeleton);

app.mount('#app');
