import urlBase64ToUint8Array from './urlBase64ToUint8Array.js';

const notifRegister = () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(result => {
      if (result === 'denied') {
        console.log('Fitur notifikasi tidak diizinkan!');
        return;
      } else if (result === 'default') {
        console.log('Pengguna menutup kotak dialog permintaan izin!');
        return;
      }

      if (('PushManager') in window) {
        navigator.serviceWorker.getRegistration().then(req => {
          req.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('BH-ORleSM7wAyNTYP_SkE8N-9ro8tHoQSC7IVvSq-QO_IRA24lK0zhZZ3xbEV4v_zDpFLXIVsYB4KggSdI_-eM8')
          }).then(subscribe => {
            console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
            console.log('Berhasil melakukan subscribe dengan p256dh key: ', 
              btoa(String.fromCharCode.apply(
                null, new Uint8Array(subscribe.getKey('p256dh'))))
              );
            console.log('Berhasil melakukan subscribe dengan auth key: ', 
              btoa(String.fromCharCode.apply(
                null, new Uint8Array(subscribe.getKey('auth'))))
              );
          }).catch(error => {
            console.error('Tidak dapat melakukan subscribe ', error.message);
          });
        });
      }
    });
  }
}

export default notifRegister;