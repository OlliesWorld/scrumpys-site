import { FaCocktail as icon } from 'react-icons/fa';

export default {
  name: 'cocktail',
  title: 'Cocktails',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Cider Name',
      type: 'string',
      description: 'name of cider',
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
      name: 'description',
      title: 'Description of cocktail',
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
