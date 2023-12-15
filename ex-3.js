//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class PostList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(newPost) {
    this.posts.push(newPost);
  }
  sharePost(post) {
    console.log(`You've shared post "${post.title}" to your friend.`);
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
    this.like = this.like + 1;
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
  send(title, author) {
    console.log(
      `Notification: ${author} has just commented on this post—"${title}"`
    );
  }
}

let person = new User("01", "Stifler", "mk@techupmail.com");
let personPostList = new PostList([]);
let personPost = new Post("01", "Hello", "Hello DT", []);
let personComment = new Comment("01", "Yo", "Stifler", 0);
let personFacebook = new Facebook([], []);
let personPage = new FacebookPage("personpage");
let personGroup = new FacebookGroup("persongroup");
let personNoti = new Notification("01");

personPostList.addPost(personPost);
console.log(personPostList.posts);

personPostList.sharePost(personPost);

personPost.addComment(personComment);
console.log(personPost.comment);

personComment.addLike();
personComment.addLike();
console.log(personComment.like);

personFacebook.addGroup(personGroup);
console.log(personFacebook.groupList);

personFacebook.addPage(personPage);
console.log(personFacebook.pageList);

personNoti.send(personPost.title, personComment.createdBy);

console.log(personPostList);
