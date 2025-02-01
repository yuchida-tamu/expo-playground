import * as React from 'react';

import { SignificantLocationChangeViewProps } from './SignificantLocationChange.types';

export default function SignificantLocationChangeView(props: SignificantLocationChangeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
