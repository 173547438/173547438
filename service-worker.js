/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4f6774f9dc6f74dc05b542bfabf7935d"
  },
  {
    "url": "assets/css/0.styles.efde6998.css",
    "revision": "030f61bbecaffcacf647b76d13b696b0"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.a79ee855.js",
    "revision": "9784f35b189eff91f9a625fd54ef5545"
  },
  {
    "url": "assets/js/13.dc3680ba.js",
    "revision": "19fac4ae71a59ad8fcf576ef66d30eeb"
  },
  {
    "url": "assets/js/14.8e7a191e.js",
    "revision": "ececb7b1f746ccba84b49768dd2c5f82"
  },
  {
    "url": "assets/js/15.737ee6f1.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.f6dd119f.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.e40715a5.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.f99268e2.js",
    "revision": "076700d357353105c55cc9bfdde33dfb"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "546fc1e92c8c5de7b21053f762637d89"
  },
  {
    "url": "categories/java/index.html",
    "revision": "25279821c8746465618572475a3288c0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f30318370f5f9dfd207bf5a1b71bc883"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e2ea77c631d8b7c23292d06bacc55bc5"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "284a4215d1c172f14097547ae64b7175"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0a6cb572dd4b3f1a5e9c2b8c2b3c2cbd"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "b2ef633ae5bd33d5f422a75acbfbfe81"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "29f38a5fbc65fa260622240dee2f1831"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9af9b221536f5f921ff9f3a71a58dab9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "182405c8968adc95659805859fe17cb8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f7b7adcdfbc221297bc30b1eedd74786"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e94a5a54969b3a32eb5c0274773c6a3d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8c0af16f4ba35e85715332aa2bd6684d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8bd2efc2c8bb31bbe65693122483500f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a707a7c9db42dd72dd918132a7a08efe"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ae64d604b3b9f746ff1b7350e7ae3ca0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4e3153abc0cc57c22d63165f83c9cb46"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "47250405cb3c74dd96df0f67817edde5"
  },
  {
    "url": "timeline/index.html",
    "revision": "f8ec7dbfcf8838a064ee1fbe3ab89cdc"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dd31584c63b3934f200e5c993f654578"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b787cb872aa8264695cf34ccd9dc3083"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6c1f05d178d712da7702b0758b095837"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6bec0b49c25dd2b097e65a6d3d5cb6a5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "45afde4eb8e9b7ad24f9047b67ebdfe9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
