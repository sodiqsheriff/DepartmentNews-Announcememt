import { Rule } from 'sanity';

const newsSchema = {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100), // Max length validation for title
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(), // Ensure slug is generated and required
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Hnd1', value: 'hnd1' },
          { title: 'Hnd2', value: 'hnd2' },
          { title: 'Entertainment', value: 'entertainment' },
        ],
        layout: 'dropdown', // This ensures a dropdown layout for the categories
      },
      validation: (Rule: Rule) => Rule.required(), // Ensure category is selected
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3), // Require a minimum length for the author's name
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(), // Ensure a publish date is provided
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(100), // Require at least 100 characters for content
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(), // Ensure an image is provided
    },
  ],
};

export default newsSchema;
