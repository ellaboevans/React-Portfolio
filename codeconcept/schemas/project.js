export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          {value: 'frontend', title: 'Frontend'},
          {value: 'ux design', title: 'UX Design'},
          {value: 'ui design', title: 'UI Design'},
          {value: 'Web Design', title: 'Wordpress'},
          {value: 'mobile app', title: 'Mobile App'},
        ],
      },
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
    },
  ],
}
