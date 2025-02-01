import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './SignificantLocationChange.types';

type SignificantLocationChangeModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class SignificantLocationChangeModule extends NativeModule<SignificantLocationChangeModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(SignificantLocationChangeModule);
