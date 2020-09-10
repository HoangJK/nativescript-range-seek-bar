import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.demong',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  name: 'tns-template-hello-world-ng',
  version: '3.4.3',
  appPath: 'app',
} as NativeScriptConfig
