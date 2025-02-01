import { NativeModule, requireNativeModule } from 'expo';

import { SignificantLocationChangeModuleEvents } from './SignificantLocationChange.types';

declare class SignificantLocationChangeModule extends NativeModule<SignificantLocationChangeModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SignificantLocationChangeModule>('SignificantLocationChange');
