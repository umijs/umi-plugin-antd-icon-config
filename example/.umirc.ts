import { join } from 'path';
import { IConfig } from 'umi-types';

export default {
  routes: [{ path: '/', icon: 'question', component: './index' }],
  plugins: [join(__dirname, '..', require('../package').main || 'index.js')],
} as IConfig;
