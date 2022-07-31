import { BsCalendarEvent as icon } from 'react-icons/bs';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Event Name',
      type: 'string',
      description: 'name of event',
    },
    {
      name: 'when',
      title: 'Event Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'description',
      title: 'Event description',
      type: 'string',
      description: 'what is the event',
    },
  ],
};
