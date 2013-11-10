Template.postSubmit.events({
  'submit form': function(e) {
    //prevent default to make sure browser doesnt submit the form
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };
    Meteor.call('post', post, function(error, id) {
      if(error)
        return alert(error.reason);
    });
    Meteor.Router.to('postsList', id);
    //setting id of post to the return db id value Posts.insert returns
  }
});