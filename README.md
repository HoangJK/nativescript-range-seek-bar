## Generate TypeScript Declaration

- Android: https://github.com/NativeScript/android-dts-generator (note: use origin path for files)

- iOS:
```shell
$ cd ../demo-ng
$ TNS_TYPESCRIPT_DECLARATIONS_PATH=\"$(pwd)/typings\" tns build ios
```