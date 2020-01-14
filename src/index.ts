import { IApi } from 'umi-types';

export default function(api: IApi, options) {
  api.addRuntimePlugin(require.resolve('./app.js'));
}
