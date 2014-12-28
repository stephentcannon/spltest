Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.setTemplateNameConverter(function (str) { return str; });

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.plugin('loading', {loadingTemplate: 'loading'});

Router.route('/', {
  name: 'dashboard',
  path: '/',
  template: 'dashboard',
});

// Router.route('/dashbaord', {
//   name: 'dashboard',
//   path: '/dashboard',
//   template: 'dashboard',
// });