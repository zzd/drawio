if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"js/app.min.js",revision:"2bf947304bdecf05bcb8719087fb35f7"},{url:"js/extensions.min.js",revision:"2896ee714726a891db3477c65f22469f"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"c4ea4d30481610fb3ebc119cbb4458e2"},{url:"js/shapes-14-6-5.min.js",revision:"1b26ebf0e2a8629737c081b0f5baa16d"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"7c03d89e4ef93f3ad72024066acb7dab"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"shortcuts.svg",revision:"e7883d8c6cebb174e241fa401324d271"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"efe173e6171ed0e62d54a4db3f811c98"},{url:"styles/atlas.css",revision:"0a6cc8a503b96f634e40309aadf6b803"},{url:"styles/dark.css",revision:"99dc5495d36d5ebaddababefde083c8c"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"1f305dfb4240e872995e22aeb0bc89af"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"3def6121aa291841a38320ebffc51457"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"b30113797d4498d3fbaad45ecded7a60"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"c7aa77338fc5eea1ee12bd4384ec4a60"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"9591ccee5b2bd75c1d96e5bfb9fa1ad5"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"3bb38a5d9186a896ed04808e921ef888"},{url:"connect/onedrive_common/ac.js",revision:"5fb6ff1a73f54a9086b7a7e1f613b8ed"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"b8ff8e51e1724c324f33c742f36a0683"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"044305f511f450a237ea8bef188efb32"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"03a8dcfc69612b44b6e75e6926a956fc"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"8d2ede7b4b23fedaea0fddc9550d7c90"},{url:"resources/dia_am.txt",revision:"37c412127e8139590fbebbe1d237e3ad"},{url:"resources/dia_ar.txt",revision:"8310b7e99db2ca1b4969073a9e55f3be"},{url:"resources/dia_bg.txt",revision:"bbc1795d94ffbc92b2d5ab6506725c55"},{url:"resources/dia_bn.txt",revision:"9364cad9f84040753df8aca2b5431004"},{url:"resources/dia_bs.txt",revision:"fa05b2751e856754aa8cd7da142192d7"},{url:"resources/dia_ca.txt",revision:"2055c894457b2a5d65980d6931eb5fa0"},{url:"resources/dia_cs.txt",revision:"9b990521dad847c578efd075594e2137"},{url:"resources/dia_da.txt",revision:"b11620e22f3aef4d59d2a08a130b9244"},{url:"resources/dia_de.txt",revision:"14179cbfa536d73b94aa164901b7f777"},{url:"resources/dia_el.txt",revision:"05a0e994b4629336c7ccccf3b2c01cc4"},{url:"resources/dia_eo.txt",revision:"afc19984524a6205a1a275072e425d53"},{url:"resources/dia_es.txt",revision:"e6b412c86050e8bdfef8beaf0db7ee58"},{url:"resources/dia_et.txt",revision:"9ee98bc82ce96a0db839f2217cf66f5e"},{url:"resources/dia_eu.txt",revision:"4f1b0b709c0ad9c293382c9fd8174d7b"},{url:"resources/dia_fa.txt",revision:"c2e4754eec676090795778265b3c616b"},{url:"resources/dia_fi.txt",revision:"70cccf72843ea2142982eeabe94c9077"},{url:"resources/dia_fil.txt",revision:"d8348a97740a0a780e2a8472021c15ce"},{url:"resources/dia_fr.txt",revision:"798477da6ffd217e7359dc912595a91f"},{url:"resources/dia_gl.txt",revision:"99a13032263f33c8f64d49dcb2a861cb"},{url:"resources/dia_gu.txt",revision:"e7b8aa02fd78f86c1e20c3e1c0ab131c"},{url:"resources/dia_he.txt",revision:"6960233c75b63f15708aec0710f683d0"},{url:"resources/dia_hi.txt",revision:"b28b95f872b0ee0114a4e229e363bb71"},{url:"resources/dia_hr.txt",revision:"4453cc539e3490a3464813c0b935032d"},{url:"resources/dia_hu.txt",revision:"5c9de72020528103565cbeee4a34d7c7"},{url:"resources/dia_id.txt",revision:"106c995940157d810d97258de860f158"},{url:"resources/dia_it.txt",revision:"f2c7066dc5d17fe7b94281d30fcce74a"},{url:"resources/dia_ja.txt",revision:"cea4b482b644954298fbcf87a7c2b57b"},{url:"resources/dia_kn.txt",revision:"75fc1045c6a5ef83d004cc272da3c0a2"},{url:"resources/dia_ko.txt",revision:"73d178c761884c9aef3126987f82f954"},{url:"resources/dia_lt.txt",revision:"6bcb36c3cac6a371d4c1a28f1e749f33"},{url:"resources/dia_lv.txt",revision:"a8e4910a38d979c514744f42ff3d0747"},{url:"resources/dia_ml.txt",revision:"c8df268c8e40c3124189976c19d5181f"},{url:"resources/dia_mr.txt",revision:"598e79f23b4f3e7ac1c2611567ef0066"},{url:"resources/dia_ms.txt",revision:"a42abcbf8a30e733178b5a57081fe595"},{url:"resources/dia_my.txt",revision:"8d2ede7b4b23fedaea0fddc9550d7c90"},{url:"resources/dia_nl.txt",revision:"70491b060e77efe67ebaac665c8b8403"},{url:"resources/dia_no.txt",revision:"16355dc1ac7c9d2f3b72e1d4d61889ea"},{url:"resources/dia_pl.txt",revision:"8b870ad6ef66ea71d99922f239580e0f"},{url:"resources/dia_pt-br.txt",revision:"5fd830139d2ef5c581992dda724594ad"},{url:"resources/dia_pt.txt",revision:"468595df92bd8e676b624961646b1ef9"},{url:"resources/dia_ro.txt",revision:"f4c49c5bdd9e77cabe645aecdc32ed77"},{url:"resources/dia_ru.txt",revision:"4ca2decaa376dae3815bc01003fbe1fb"},{url:"resources/dia_si.txt",revision:"8d2ede7b4b23fedaea0fddc9550d7c90"},{url:"resources/dia_sk.txt",revision:"b54464eeacb276aeab1a06390f8ae564"},{url:"resources/dia_sl.txt",revision:"9eef67a55ada4807129524166b9a1bd8"},{url:"resources/dia_sr.txt",revision:"57e5abd536acf263452ba4d477d1f940"},{url:"resources/dia_sv.txt",revision:"c630fef66fb65bf2afc0ef97a98636e2"},{url:"resources/dia_sw.txt",revision:"01ee087f350c0589e72dc05bc33c44c4"},{url:"resources/dia_ta.txt",revision:"ec309135f8265dad557a7dd4f9f41e14"},{url:"resources/dia_te.txt",revision:"270f19e5e3a3220e8e3c593d17e5597f"},{url:"resources/dia_th.txt",revision:"669441201b2994d7e87cd0f01e63ebdb"},{url:"resources/dia_tr.txt",revision:"56720182cc2448c504098a20367bc35a"},{url:"resources/dia_uk.txt",revision:"add2caf8a8c1aae0910d21857bb124d5"},{url:"resources/dia_vi.txt",revision:"5532d83ccc0a4cbd2c6656b7e2105a13"},{url:"resources/dia_zh-tw.txt",revision:"d35bcfdbc66d2aae5a29539db010f317"},{url:"resources/dia_zh.txt",revision:"58c8149ec44976053f35399e13deccb7"},{url:"favicon.ico",revision:"83014b0f32b6c7b15b66cf3c6d6d7c16"},{url:"images/manifest.json",revision:"38d3a7e4b63e8175f0aab6f03e000f07"},{url:"images/logo.png",revision:"e4e0d092abdb1e668b5ec41a7fe0713c"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"732c29e21332a926318a7005d21ec450"},{url:"images/icon-192-maskable.png",revision:"47e006d0ce4a35eb5beaa97f0c2bfed0"},{url:"images/icon-192.png",revision:"d022403d52435d76afec82c4e24a17ef"},{url:"images/icon-512-maskable.png",revision:"cf152feeb01fb21f3148a71a3540266e"},{url:"images/icon-512.png",revision:"a3a0df7e7a385244b74073f81ecc45de"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"7985b4d1692766a7db52cbdd10893ad9"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
