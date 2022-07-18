import { FaRegGrinTongue as icon } from 'react-icons/fa';

export default {
  name: 'flavor',
  title: 'Flavors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Flavor Name',
      type: 'string',
      description: 'what is the name of flavor',
    },
    {
      name: 'above',
      title: 'Above 6.5% ABV',
      type: 'boolean',
      description: 'is a high',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      above: 'above6.5',
    },
    prepare: ({ name, above }) => ({
      title: ` ${name} ${above ? '🌱' : ``}`,
    }),
  },
};
