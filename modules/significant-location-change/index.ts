// Reexport the native module. On web, it will be resolved to SignificantLocationChangeModule.web.ts
// and on native platforms to SignificantLocationChangeModule.ts
export { default } from './src/SignificantLocationChangeModule';
export { default as SignificantLocationChangeView } from './src/SignificantLocationChangeView';
export * from  './src/SignificantLocationChange.types';
