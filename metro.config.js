/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
// const path = require('path');

// const projectRoot = __dirname;
const config = getDefaultConfig(__dirname, {})
// const workspaceRoot = path.resolve(projectRoot);
// config.watchFolders = [workspaceRoot];
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, 'node_modules'),
//   path.resolve(workspaceRoot, 'node_modules'),
// ];

config.resolver.unstable_enablePackageExports = true
config.resolver.unstable_conditionNames = ['require', 'default', 'browser']

module.exports = withNativeWind(config, {
    input: './global.css',
    configPath: './tailwind.config.js',
})
