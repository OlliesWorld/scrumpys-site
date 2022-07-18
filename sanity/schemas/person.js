import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person',
  title: 'PourMasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us about the person',
    },
    {
      name: 'image',
      title: 'Cider Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
