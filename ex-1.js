class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(
      `Notification has been sent to ${this.receiver} at ${this.createdTime}`
    );
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
    console.log(
      `Notification has been sent to ${this.phoneNumber} at ${this.createdTime}`
    );
  }
}

let myEmail = new EmailNotification(10, "14.30", "Hello", "Mickey");
let myMessage = new SMSNotification(10, "14.30", "Hello", "0123456789");

myEmail.send();
myMessage.send();
