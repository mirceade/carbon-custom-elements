/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXSearch from 'carbon-custom-elements/es/components-react/search/search';
// @ts-ignore
import BXSearchSkeleton from 'carbon-custom-elements/es/components-react/search/search-skeleton';
import { defaultStory as baseDefaultStory } from './search-story';

export { default } from './search-story';

export const defaultStory = ({ parameters }) => {
  const {
    closeButtonAssistiveText,
    colorScheme,
    disabled,
    labelText,
    name,
    placeholder,
    size,
    type,
    value,
    onInput,
  } = parameters?.props?.['bx-search'];
  return (
    <BXSearch
      closeButtonAssistiveText={closeButtonAssistiveText}
      colorScheme={colorScheme}
      disabled={disabled}
      labelText={labelText}
      name={name}
      placeholder={placeholder}
      size={size}
      type={type}
      value={value}
      onInput={onInput}
    />
  );
};

defaultStory.story = baseDefaultStory.story;

export const skeleton = () => <BXSearchSkeleton />;
