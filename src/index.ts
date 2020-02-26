import { IApi } from 'umi';

export default function(api: IApi, options) {
  api.addRuntimePlugin(() => require.resolve('./app.js'));
}
