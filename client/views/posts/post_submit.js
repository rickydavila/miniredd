Template.postSubmit.events({
  'submit form': function(e) {
    //prevent default to make sure browser doesnt submit the form
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };

    //setting id of post to the return db id value Posts.insert returns
    post._id = Posts.insert(post);
    Meteor.Router.to('postPage', post);
  }
});