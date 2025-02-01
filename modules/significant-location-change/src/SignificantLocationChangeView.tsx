import { requireNativeView } from 'expo';
import * as React from 'react';

import { SignificantLocationChangeViewProps } from './SignificantLocationChange.types';

const NativeView: React.ComponentType<SignificantLocationChangeViewProps> =
  requireNativeView('SignificantLocationChange');

export default function SignificantLocationChangeView(props: SignificantLocationChangeViewProps) {
  return <NativeView {...props} />;
}
