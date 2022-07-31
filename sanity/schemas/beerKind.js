import { FaRegGrinTongue as icon } from 'react-icons/fa';

export default {
  name: 'beerKind',
  title: 'Type of Beer',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Type Name',
      type: 'string',
      description: 'what is the type of beer',
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
