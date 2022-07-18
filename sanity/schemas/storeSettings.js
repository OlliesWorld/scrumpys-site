import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'store of pizza',
    },
    {
      name: 'pourmaster',
      title: 'Pourmasters currently pouring',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'ontap',
      title: 'Ciders available',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cider' }] }],
    },
  ],
};
