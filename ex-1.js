class EmailNotification {
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

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
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
