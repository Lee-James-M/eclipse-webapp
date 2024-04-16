'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/animations/atom_animation.json": "a0a8f5781a73715e0e634e6af776e989",
"assets/animations/comingSoon.json": "eca9d321e59ab0712b9e0b38f4b111f3",
"assets/animations/compute.json": "b8cea4c1ede8d05b0cd30f0bc9997ec9",
"assets/animations/ripplePulse.json": "2b302330f291094aa061d76fcf1ae187",
"assets/animations/rocket.json": "af9cd3fc5b55bc381860e4679440d1f3",
"assets/animations/selection.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/AssetManifest.bin": "77e6c1ceb27cc0426722d2335081e18a",
"assets/AssetManifest.bin.json": "eba2b397bbc591b59d41fd3a1a76f94a",
"assets/AssetManifest.json": "ce87d25544b42549d3194ecdfc74c98b",
"assets/assets/chc/chc_form.pdf": "1ca1a2cbe9a5ef58e2c24f97b47ee07f",
"assets/assets/nexus/nexus_logo_green.jpg": "3f2845d529c428528c44408aa93d4e04",
"assets/assets/nexus/nexus_logo_reversed_clear.png": "d52720ca8c5f3834255fceb67b994646",
"assets/assets/nexus/nexus_logo_white.jpg": "0a7677f829585ecf200c747460a30180",
"assets/assets/tpm/eclipse_tpm_matrix_actions.docx": "061e0bdde28d019d4613bc64f99f8d75",
"assets/assets/tpm/eclipse_tpm_matrix_actions.pdf": "d1c61fc0e7bfe6165b75f5cdfb974671",
"assets/assets/tpm/tpm_schedule_template_4_week.docx": "e87007745cd671a47b73ca03529e4f2d",
"assets/assets/tpm/tpm_schedule_template_4_week.pdf": "10d4fa46317ec5f4081b8278121d4e68",
"assets/CHANGELOG.md": "61f21f8d5ff19a8801ac6f8147f16ebc",
"assets/FontManifest.json": "736f072244d8adf8b6d0a2381d8066de",
"assets/fonts/DancingScript-Regular.ttf": "4878c050aa42659a505ce45884f008f8",
"assets/fonts/MaterialIcons-Regular.otf": "6759f90bc593e49a59adf1729557705b",
"assets/fonts/Pacifico-Regular.ttf": "c1a28478f7a0cc5e25bb395d0543274d",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/images/chc/chcGlobalS.jpg": "11fcf21424a1d378793928a9fceb0bf0",
"assets/images/eclipse/controller/b3clc.jpeg": "6297d1055192df584b1f3629f355f978",
"assets/images/eclipse/controller/dc240.PNG": "4b23c746a49a01585d27f37069aae34d",
"assets/images/eclipse/controller/dc241.PNG": "074b619cb4b322d85ed1d2f8c38a7926",
"assets/images/eclipse/criticality/business_critical.jpg": "49c61700a9bb767ff534ff016ee509dc",
"assets/images/eclipse/criticality/business_operational.jpg": "09d3161320f48ee88b7a608db25a3bd7",
"assets/images/eclipse/criticality/minor_impact.jpg": "e675d027646fd7a8a62e766ddcaad718",
"assets/images/eclipse/criticality/mission_critical.jpg": "291d40321837c899bd9396c3b07fa834",
"assets/images/eclipse/criticality/moderate_impact.jpg": "a04dbf1a9548748f500b95af11260bf5",
"assets/images/eclipse/dcController.jpg": "70694307753f51f2896c2ec0c9b52417",
"assets/images/eclipse/futureproof_score.jpg": "1769c393d2685c01095d2058787b99df",
"assets/images/eclipse/globalS.jpg": "11fcf21424a1d378793928a9fceb0bf0",
"assets/images/eclipse/headController/fixedhead.jpg": "fbe1db1284a899adad14800bd0d74282",
"assets/images/eclipse/headController/hh-c.jpg": "9add77830f511a83f8a2ef439b3645db",
"assets/images/eclipse/headController/renishawphc10_2.jpg": "ead9815a9f6cee2339cb722f04b1ceb3",
"assets/images/eclipse/headController/renishawphc10_3.jpg": "afd7eaa17b26db349ae66fa700145556",
"assets/images/eclipse/headController/tesastarheadcontroller.jpg": "739ff078c9176246d1fe81505bdcb7a3",
"assets/images/eclipse/hexagonSmallLogo.bmp": "8c78dcc6b1876626bedc60c2f8c1a26c",
"assets/images/eclipse/hex_logo.jpg": "bd7b4206038dac31282a816e9e755f0c",
"assets/images/eclipse/industry/defence.jpg": "20d8d0af74cf8ba2d8e561a1d061a379",
"assets/images/eclipse/logo_mi.bmp": "32c9e5ea8247a0238b71197087968eda",
"assets/images/eclipse/machine/bravo.jpg": "b1269b626fb5d4e5fdce0594d07147ad",
"assets/images/eclipse/machine/delta.jpg": "c07ff44468e9c58a275c8e301a54d003",
"assets/images/eclipse/machine/discovery.jpg": "ac01bbccd48fcc23ae88831f8196178d",
"assets/images/eclipse/machine/endeavor.jpg": "f621ffc3abbffe290f24ca1390739fc3",
"assets/images/eclipse/machine/gamma.jpg": "45183365b4fa323d6ece780cedc9d79d",
"assets/images/eclipse/machine/global.jpg": "9d71a56dcf5e4253f0d7ea0883552478",
"assets/images/eclipse/machine/globalClassic.jpg": "a8346efc8d5aad9a63dc4589a64c3ee9",
"assets/images/eclipse/machine/iota.jpg": "ebbbd8ab81dcb4046c0bf85175d33286",
"assets/images/eclipse/machine/micra.jpg": "7e9ea6f3df349997051e0136f5393c30",
"assets/images/eclipse/machine/microheight.jpeg": "1beefff4090bdbad16c04a4ec956dbde",
"assets/images/eclipse/machine/microXcel.jpg": "583883d7c3928da21b92a5cd9d1e4b49",
"assets/images/eclipse/machine/mistral.jpg": "ac445ebeb8638c3b74446eff921d85ce",
"assets/images/eclipse/machine/optiv.png": "b8153505ec4fb4a78dd58afe475e32c6",
"assets/images/eclipse/machine/pioneer.jpg": "8c861c4cf36902a30c979eb1844140cc",
"assets/images/eclipse/machine/scirocco.jfif": "b52de1806d5510062514937b9ac2bbb2",
"assets/images/eclipse/machine/swift.jpg": "e82d8526f4416e01eb682eb108de0871",
"assets/images/eclipse/machine/tigo.jfif": "b32a1664cdf7df4b7d923dae2d3c1991",
"assets/images/eclipse/machine/xcel.jpg": "cebe97f2f3c9976736033366e587db05",
"assets/images/eclipse/newCmmBranding/flexibility.jpg": "4ae68a9afa0ac8cfcd4ca5f18b26c6a8",
"assets/images/eclipse/newCmmBranding/globalLite.png": "0af925f41e7821d9b709bc6323222c0f",
"assets/images/eclipse/newCmmBranding/optics.jpg": "96239298447af6399eb670ec556338b2",
"assets/images/eclipse/newCmmBranding/precision.jpg": "a219a4366a54ab0cd8d125abd35cf811",
"assets/images/eclipse/newCmmBranding/scan.jpg": "09ffde0c6cc478245427f4424c27b57d",
"assets/images/eclipse/newCmmBranding/speed.jpg": "87193861587ff0b400bb3d67bef0420a",
"assets/images/eclipse/newCmmBranding/touch.png": "8b34e77061343683c6b902cb37dacc2d",
"assets/images/eclipse/newOfferingNames/flexibility.png": "e2edc2a63eab7ea0aa8b717ae56e404c",
"assets/images/eclipse/newOfferingNames/optical.png": "c914cc339df2767e1cc7f99fae026013",
"assets/images/eclipse/newOfferingNames/precision.png": "51e1e243d7a89bad2b7acc1e61db4953",
"assets/images/eclipse/newOfferingNames/scan.png": "f3730d3629f021c0606a712d8a11dad0",
"assets/images/eclipse/newOfferingNames/speed.png": "acaa0eacb2fc9d16ee721f1d4bcd23bb",
"assets/images/eclipse/newOfferingNames/touch.png": "dc901d65a072aad5ba16fdcd2a4f12f6",
"assets/images/eclipse/pcdmislogo.jfif": "ae80c082046b6b0cfe7c05f123bc1ed0",
"assets/images/eclipse/pcdmislogo.jpg": "57b03ccff172760788b949fd4d934457",
"assets/images/eclipse/rc1Controller.jpg": "9fb12cb77e84c53ccf7b5219d0b8fe67",
"assets/images/eclipse/rcController.jpg": "62b30d3b7e603cbe44493588093f310c",
"assets/images/eclipse/score.jpg": "dcb382d6a9715a835f1b9ac285f659e1",
"assets/images/eclipse/service/beltDebris.jpg": "57a939fd22878116b81816c30a5ef10a",
"assets/images/eclipse/service/brokenEarthCable.jpg": "da8b62c167bd8efadb6ab80e585f0d14",
"assets/images/eclipse/service/clean_fan.jpg": "d1c8287627db18d7465fd3e0e0479d9a",
"assets/images/eclipse/service/clean_x.jpg": "63f60467e8736e4c2288e419f5762a20",
"assets/images/eclipse/service/dirtyCounterBalanceTop.jpg": "8149ecc995c30c501d9cd2d0f134f70e",
"assets/images/eclipse/service/dirty_fan.jpg": "acb511cdceb34ee351a2e598382f4c9d",
"assets/images/eclipse/service/dirty_x.jpg": "a76c99ce7ecba1c9b66ecdf3f0406e46",
"assets/images/eclipse/service/half_and_half_x.jpg": "034a509a0bbcf3103ff6b0090fac26ae",
"assets/images/eclipse/sharpe32.jpeg": "762a2d9323f87cf40d3e40d1fffaa343",
"assets/images/eclipse_icon.png": "6d6ad3d8195135b42397ca36a8aa6eaa",
"assets/images/hexIcon.ico": "655939ab1eace23d182a155162804ba5",
"assets/images/splash_logo.bmp": "32c9e5ea8247a0238b71197087968eda",
"assets/images/tempoCaseStudy.jpg": "ee339b600f0678f5dd57fe9ec5c6e6ec",
"assets/NOTICES": "13d10221cafa90b5765204e39b171625",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1fe65f9ddf3e881833a7e815382881f8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8fcd08b88bfa6bed1b0bf5572ef1d67f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9f01c463311add18c6dc2994c547d4bd",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/README.md": "3452344d1dbf4a46ece3106dcd9754b1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed9ab6d546f44e04191fa866d9deadb2",
"/": "ed9ab6d546f44e04191fa866d9deadb2",
"main.dart.js": "078fe5c297a1de8e912bff6c93d3b0e8",
"manifest.json": "a8cdf35454c36e9af7431f1682445a45",
"version.json": "42c8f77b9d68fe2a0638164585917b67"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
