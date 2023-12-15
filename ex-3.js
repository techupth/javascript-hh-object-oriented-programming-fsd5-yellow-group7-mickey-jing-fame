//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class postList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(postTitle) {
    console.log(`You've shared post “${postTitle}” to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(createdBy, postTitle) {
    console.log(
      `Notification: ${createdBy} has just commented on this post—"${postTitle}"`
    );
  }
}
//1
const newPost = new Post("01", "this is title", "this is content", [
  "this is first comment",
]);
newPost.addComment("this is add comment");
console.log(newPost);

//2
const newComment = new Comment("01", "this is content", "created by fame", 0);
newComment.addLike();
console.log(newComment);

//3
const newFacebook = new Facebook(["init groub"], ["init page"]);
const newFacebookPage = new FacebookPage("facebook page");
const newFacebookGroup = new FacebookGroup("facebook group");
newFacebook.addGroup(newFacebookGroup.name);
newFacebook.addPage(newFacebookPage.name);
console.log(newFacebook);

//4
const newNotification = new Notification("01");
newNotification.send(newComment.createdBy, newPost.title);
