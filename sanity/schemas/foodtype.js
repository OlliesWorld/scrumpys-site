import { FaRegGrinTongue as icon } from 'react-icons/fa';

export default {
  name: 'foodtype',
  title: 'Type of food',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Type Name',
      type: 'string',
      description: 'what is the type of food',
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
