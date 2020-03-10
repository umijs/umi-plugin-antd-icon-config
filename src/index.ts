import { IApi } from 'umi';

export default function(api: IApi) {
  api.addRuntimePlugin(() => require.resolve('./app.js'));
}
