const webPush = require('web-push');

const vapidKeys = {
  'publicKey': 'BA5WNC_Xv-XBcL32ALs_giG2-oKRxcfvm-XsTSTiroPwQ9a2KCD2ZqPs-fxkFS6_4V5dA0-jl5m8nLk0UBa6Wnw',
  'privateKey': 'EKVLxJnrYNh7U3wNDnzR9tMzwLOysM1FLQP2HrsPjDE'
};

webPush.setVapidDetails(
  'mailto:memiljamel@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  'endpoint': 'https://fcm.googleapis.com/fcm/send/da1U4fl7Ies:APA91bEHo4W8r40H1YxO8H03uIjc9DxUH19tgRWQpJkhUql78heb7wH9-cSoM5XKoTcZtQFvBWzuYwETOiNoNQO7TD4pqkwe85tj_WKMu8erh4JXpxh2P1aZBMjObNkjw-_GVIQmFeJE',
  'keys': {
    'p256dh': 'BKrU5JX8Hs7kvb+5sQx9V0stZYNffqGbpHeV7if2SUN7NzhJPEq9F0qcv1HYpmdBXKOC9YxQJkChvwinUIqclac=',
    'auth': 'bZdhmxyYrMVqeZ4PSZE8ww=='
  }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
const options = {
  gcmAPIKey: '483426998297',
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);