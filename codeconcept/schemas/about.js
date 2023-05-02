export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Author Description',
      type: 'text',
    },
  ],
}
