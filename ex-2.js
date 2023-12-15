class notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}
const object1 = new EmailNotification(
  "notification",
  "time",
  "content",
  "peerawet1996@gmail.com"
);
object1.send();
const object2 = new SMSNotification(
  "notification",
  "time",
  "content",
  "064-3213-2541"
);
object2.send();
