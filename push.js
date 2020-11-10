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
  'endpoint': 'https://fcm.googleapis.com/fcm/send/f2F_12gpAik:APA91bEW-e93TBD4Cgdbfe0-wWNioArDowSYaGXAs6wGeY-vCrKMLoLGJp6exiRvKQ25ShXD0R1Zmd-5NEijLcSobxPdOEAYo6loMIQktNlxCxTJVS082sbjco1cojXYd4fMSNwUujW6',
  'keys': {
    'p256dh': 'BLgzG1icm7sM519e4yOz/kSsdihXvkgEwkWvu8HII+k0nJJkhsi2K+Jxx4JYiKZkx6HAnfgyfVBBv3HURfb690Y=',
    'auth': 'sIuogTuhyIqKjGtJfrhnVQ=='
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