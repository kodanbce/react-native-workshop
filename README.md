# React Native Workshop

## Prerequisites
- Node (with npx)
- Yarn
- Git
- React Native development environment: https://reactnative.dev/docs/environment-setup

## Running the application

#### A) on MacOS with xcode simulator
1. Run `yarn install` in the root folder to install dependencies
2. Go to ios folder: `cd ios`
3. Install the React Native pod in the ios folder: `pod install`
4. Go back to root folder: `cd..`
5. Run `npx react-native run-ios` to start metro, application and the iOS simulator

#### B) with android emulator
1. Run `yarn install` in the root folder to install dependencies
2. Run `npx react-native run-android` to start metro, application and the android emulator

## Troubleshooting
**XCode build fails with**`Error: Command PhaseScriptExecution failed with a nonzero exit code`
- if you're using nvm, try running `nvm unalias default`
