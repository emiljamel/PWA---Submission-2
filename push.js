const webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BA5WNC_Xv-XBcL32ALs_giG2-oKRxcfvm-XsTSTiroPwQ9a2KCD2ZqPs-fxkFS6_4V5dA0-jl5m8nLk0UBa6Wnw",
   "privateKey": "EKVLxJnrYNh7U3wNDnzR9tMzwLOysM1FLQP2HrsPjDE"
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
);

const pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eYAUL3pbqcw:APA91bGF7F6WMk_u6zO0FXc4wl1cYW1bm6c23dJJ4_F6g-KHtXObruLfjMvJoubeDMBbA48T5ozb_rB45z-faU-9R4H-_hbKGZBv9VfMB43UiUhnM2l8X2yC-tlpF0ERiV5LDZ-rA7Oj",
   "keys": {
       "p256dh": "BH58358TFj7v0GYejjlkyH6F7CFLkRsdvQ2wy8YD5tmBH4F0/aCIDntmePgp4DArc9fPseJPDD0u3EXrEA0+5Lc=",
       "auth": "g1fbY+24cQNbmyR4ATsiDQ=="
   }
}
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