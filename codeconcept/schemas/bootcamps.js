export default {
  name: 'bootcamp',
  title: 'BootCamp',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'BootCamp Title',
      type: 'string',
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
    },
    {
      name: 'bootcampImage',
      title: 'BootCamp Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Date of BootCamp',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time of BootCamp',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link For BootCamp',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
