import { FaAppleAlt as icon } from 'react-icons/fa';

export default {
  name: 'cider',
  title: 'Ciders',
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
      name: 'image',
      title: 'Cider Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'abv',
      title: 'ABV %',
      type: 'string',
      description: 'ABV %',
    },
    {
      name: 'flavors',
      title: 'Flavors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'flavor' }] }],
    },
    {
      name: 'description',
      title: 'Description of cider',
      type: 'string',
    },
    {
      name: 'brewery',
      title: 'Brewery of cider',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location of Brewery',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'size' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'flavors.0.name',
      topping1: 'flavors.1.name',
      topping2: 'flavors.2.name',
      topping3: 'flavors.3.name',
    },
    prepare: ({ title, media, ...flavors }) => {
      const tops = Object.values(flavors).filter(Boolean);
      return {
        title: ` ${title}`,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
