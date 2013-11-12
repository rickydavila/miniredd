// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  // create two users
  var rickyId = Meteor.users.insert({
    profile: { name: 'Ricky Davila' }
  });
  var ricky = Meteor.users.findOne(rickyId);
  var ricardoId = Meteor.users.insert({
    profile: { name: 'Ricardo Davila' }
  });
  var ricardo = Meteor.users.findOne(ricardoId);
  var telescopeId = Posts.insert({
    title: 'Introducing Bingewatch',
    userId: ricardo._id,
    author: ricardo.profile.name,
    url: 'http://bingewatch.com',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  Comments.insert({
    postId: telescopeId,
    userId: ricky._id,
    author: ricky.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project ricardo, can I get involved?'
  });
  Comments.insert({
    postId: telescopeId,
    userId: ricardo._id,
    author: ricardo.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can ricky!'
  });
  Posts.insert({
    title: 'Meteor',
    userId: ricky._id,
    author: ricky.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  Posts.insert({
    title: 'Soundcloud',
    userId: ricky._id,
    author: ricky.profile.name,
    url: 'http://soundcloud.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  for (var i = 13; i < 23; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: ricardo.profile.name,
      userId: ricardo._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}