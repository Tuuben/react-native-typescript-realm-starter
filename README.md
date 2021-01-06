### temp
https://medium.com/@mehrankhandev/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
https://mortenbarklund.com/blog/react-architecture-provider-pattern/

# React native starter template

A React Native typescript starter template using RealmJS.

### Renaming the project

1. Change the name attribute in `package.json`

```
    // From
    "name": "ReactNativeTemplate",

    // To
    "name": "MyAwesomeApp",
```

2. Run upgrade

```
    react-native upgrade
```

3. Update app name in `app.json`

```
    // From
    {
        "name": "ReactNativeTemplate",
        "displayName": "ReactNativeTemplate"
    }

    // To
    {
        "name": "MyAwesomeApp",
        "displayName": "MyAwesomeApp"
    }
```

### Running

```
yarn
cd ios && pod install
```

### Dependencies

- [RealmJS](https://realm.io/docs/javascript/latest/)
- [Eva icons](https://github.com/artyorsh/react-native-eva-icons)
- [RXJS](https://rxjs-dev.firebaseapp.com/guide/overview)

### Features

- Routing
- Customizable theme files
- Custom fonts

#### [Support the project ❤️](https://www.buymeacoffee.com/iFTp2zC)
