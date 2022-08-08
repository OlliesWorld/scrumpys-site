import { FaCocktail as icon } from 'react-icons/fa';

export default {
  name: 'drink',
  title: 'Drinks',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Drink Name',
      type: 'string',
      description: 'name of non-alcholic drink',
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
      title: 'Description of drink',
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
