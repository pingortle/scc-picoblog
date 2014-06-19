if (Meteor.isClient) {
  Template.blog.helpers({
    version: function () {
      return VERSION;
    },
    title: function () {
      return "picoblog";
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Blog.config({
      adminRole: 'blogAdmin',
    });
  });
}
