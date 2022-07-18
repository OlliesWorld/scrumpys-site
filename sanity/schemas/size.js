import {ImEnlarge as icon} from 'react-icons/im'

export default {
  name: 'size',
  title: 'Sizes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Size Name',
      type: 'string',
      description: 'What size can be purchased',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: ` ${name}`,
    }),
  },
};
