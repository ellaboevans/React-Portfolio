export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'serviceImage',
      title: 'Service Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Service Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'text',
      // options: {
      //   layout: 'tags',
      // },
    },
  ],
}
