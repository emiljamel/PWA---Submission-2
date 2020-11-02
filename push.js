const webPush = require('web-push');

const vapidKeys = {
  'publicKey': 'BH-ORleSM7wAyNTYP_SkE8N-9ro8tHoQSC7IVvSq-QO_IRA24lK0zhZZ3xbEV4v_zDpFLXIVsYB4KggSdI_-eM8',
  'privateKey': 'QcU76a30mvh7CM_1I-VgZfsnua3xjfgPgabif-ueMsg'
};
const pushSubscription = {
  'endpoint': 'https://fcm.googleapis.com/fcm/send/ffLun2XUYu0:APA91bF2E-LAxFBXtNwW36RAj4HGyL0YRPplDIweNBQwj4u2MAfqvCBQHfzkroSjJ-WUh9OFwnLmE6awS2Ggl1RLJt0w1MYuzS2Kb9Z71GGcTlBvz3pFxksUx_pjWaruEnknC-CH4lxE',
  'keys': {
      'p256dh': 'BHXfxXCf61RmInLa32h8yT5NX5l/RBD87teFXcMIYFbovekzDJ1QiIeeHQhob649LrCyrYFAy0lGhguU2cuJve8=',
      'auth': 'A84uoZe+lJelDpEiic6Qww=='
  }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
const options = {
  gcmAPIKey: '858580512030',
  TTL: 60
};

webPush.setVapidDetails(
  'mailto:memiljamel@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);