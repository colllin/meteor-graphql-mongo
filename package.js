Package.describe({
  name: 'colllin:graphql-mongo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'GraphQL subscriptions for Mongo Collections.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/colllin/meteor-graphql-mongo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('graphql-mongo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('colllin:graphql-mongo');
  api.addFiles('graphql-mongo-tests.js');
});
