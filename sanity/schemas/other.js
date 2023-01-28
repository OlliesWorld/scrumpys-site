import { BiBeer as icon } from 'react-icons/bi';

export default {
  name: 'other',
  title: 'Other Drafts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Draft Name',
      type: 'string',
      description: 'name of beer',
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
      title: 'Beer Image',
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
      name: 'beerKind',
      title: 'Kind of Beer',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'beerKind' }] }],
    },
    {
      name: 'description',
      title: 'Description of beer',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'beer.0.name',
      topping1: 'beer.1.name',
      topping2: 'beer.2.name',
      topping3: 'beer.3.name',
    },
    prepare: ({ title, media, ...beer }) => {
      const tops = Object.values(beer).filter(Boolean);
      return {
        title: ` ${title}`,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
