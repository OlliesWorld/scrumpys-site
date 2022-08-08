import { IoFastFood as icon } from 'react-icons/io';

export default {
  name: 'food',
  title: 'Menu Items',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Menu Item',
      type: 'string',
      description: 'name of menu item',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 300,
      },
    },

    {
      name: 'foodType',
      title: 'Type of food',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'foodtype' }] }],
    },
    {
      name: 'description',
      title: 'Description of food item',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: ` ${name} `,
    }),
  },
};
