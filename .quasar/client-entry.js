/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import 'quasar/dist/quasar.ie.polyfills.js'



import '@quasar/extras/roboto-font/roboto-font.css'

import '@quasar/extras/material-icons/material-icons.css'

import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import '@quasar/extras/material-icons-round/material-icons-round.css'

import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

import '@quasar/extras/mdi-v3/mdi-v3.css'

import '@quasar/extras/ionicons-v4/ionicons-v4.css'

import '@quasar/extras/eva-icons/eva-icons.css'

import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import '@quasar/extras/themify/themify.css'




// We load Quasar stylus files
import 'quasar/dist/quasar.styl'




import 'src/css/app.styl'


import Vue from 'vue'
import createApp from './app.js'




import qboot_Booti18n from 'boot/i18n'

import qboot_Bootaxios from 'boot/axios'









Vue.config.devtools = true
Vue.config.productionTip = false



console.info('[Quasar] Running SPA.')



const { app, store, router } = createApp()



async function start () {
  
  const bootFiles = [qboot_Booti18n,qboot_Bootaxios]
  for (let i = 0; i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue,
        ssrContext: null
      })
    }
    catch (err) {
      if (err && err.url) {
        window.location.href = err.url
        return
      }

      console.error('[Quasar] boot error:', err)
      return
    }
  }
  

  

    

    

      new Vue(app)

    

  

}

start()
