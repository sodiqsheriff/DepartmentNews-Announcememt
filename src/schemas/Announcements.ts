import { Rule } from 'sanity';

const announcementSchema = {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100), // Adding a max length validation for title
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(20), // Ensure content has at least 20 characters
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.optional(), // Date is optional by default, but you could add validation
      options: {
        dateFormat: 'YYYY-MM-DD', // Customize the date format if needed
        timeFormat: 'HH:mm', // Customize the time format if needed
      },
    },
  ],
};

export default announcementSchema;
