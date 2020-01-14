const allIcons = require('@ant-design/icons/lib/icons');

export interface MenuDataItem {
  children?: MenuDataItem[];
  routes?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  key?: string;
  path?: string;
  [key: string]: any;
}

function formatter(data: MenuDataItem[]): MenuDataItem[] {
  data.forEach((item = { path: '/' }) => {
    if (item.icon) {
      const { icon } = item;
      const v4IconName = icon.replace(icon[0], icon[0].toUpperCase());
      const newIcon = allIcons[icon] || allIcons[`${v4IconName}Outlined`];
      item.icon = newIcon;
    }
    if (item.routes || item.children) {
      const children = formatter(item.routes || item.children);
      // Reduce memory usage
      item.children = children;
    }
  });
  return data;
}

export function patchRoutes(routes) {
  formatter(routes);
}
