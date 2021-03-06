/**
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import textNullable from '../../../.storybook/knob-text-nullable';
import ifNonNull from '../../globals/directives/if-non-null';
import { INPUT_SIZE } from '../input/input';
import './date-picker';
import { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_SIZE_HORIZONTAL } from './date-picker-input';
import storyDocs from './date-picker-story.mdx';
import './date-picker-input-skeleton';

const colorSchemes = {
  [`Regular`]: null,
  [`Light (${DATE_PICKER_INPUT_COLOR_SCHEME.LIGHT})`]: DATE_PICKER_INPUT_COLOR_SCHEME.LIGHT,
};

const sizes = {
  Regular: null,
  [`Small size (${INPUT_SIZE.SMALL})`]: INPUT_SIZE.SMALL,
  [`Extra large size (${INPUT_SIZE.EXTRA_LARGE})`]: INPUT_SIZE.EXTRA_LARGE,
};

const knobs = {
  'bx-date-picker': () => ({
    dateFormat: textNullable('The date format (date-format)', 'm/d/Y'),
    enabledRange: textNullable('Minimum/maximum dates in ISO8601 date format, separated by `/` (enabled-range)', ''),
    open: boolean('Open (open)', false),
    value: textNullable('Value in ISO8601 date format, separated by `/` (value)', ''),
    onAfterChanged: action('bx-date-picker-changed'),
    onFlatpickrError: action('bx-date-picker-flatpickr-error'),
  }),
  'bx-date-picker-input': () => ({
    colorScheme: select('Color scheme (color-scheme in <bx-date-picker-input>)', colorSchemes, null),
    disabled: boolean('Disabled (disabled in <bx-date-picker-input>)', false),
    hideLabel: boolean('Hide label (hide-label in <bx-date-picker-input>)', false),
    invalid: boolean('Show invalid state  (invalid)', false),
    labelText: textNullable('Label text (label-text in <bx-date-picker-input>)', 'Date Picker label'),
    placeholder: textNullable('Placeholder text (placeholder in <bx-date-picker-input>)', 'mm/dd/yyyy'),
    size: select('Input size (size)', sizes, INPUT_SIZE.REGULAR),
    validityMessage: textNullable('The validity message (validity-message)', ''),
    onInput: action('input'),
  }),
};

const sizesHorizontal = {
  'Regular size': null,
  [`Short size (${DATE_PICKER_INPUT_SIZE_HORIZONTAL.SHORT})`]: DATE_PICKER_INPUT_SIZE_HORIZONTAL.SHORT,
};

export const defaultStory = ({ parameters }) => {
  const { colorScheme, disabled, hideLabel, invalid, labelText, placeholder, size, sizeHorizontal, validityMessage } =
    parameters?.props?.['bx-date-picker-input'] ?? {};
  return html`
    <bx-date-picker>
      <bx-date-picker-input
        color-scheme="${ifNonNull(colorScheme)}"
        ?disabled="${disabled}"
        ?hide-label="${hideLabel}"
        ?invalid="${invalid}"
        label-text="${ifNonNull(labelText)}"
        placeholder="${ifNonNull(placeholder)}"
        size="${ifNonNull(size)}"
        size-horizontal="${ifNonNull(sizeHorizontal)}"
        validity-message="${ifNonNull(validityMessage)}"
      >
      </bx-date-picker-input>
    </bx-date-picker>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    knobs: {
      'bx-date-picker-input': () => ({
        ...knobs['bx-date-picker-input'](),
        sizeHorizontal: select('Horizontal size (size-horizontal)', sizesHorizontal, null),
      }),
    },
  },
};

export const singleWithCalendar = ({ parameters }) => {
  const { dateFormat, enabledRange, open, value, onChanged, onFlatpickrError } = parameters?.props?.['bx-date-picker'] ?? {};
  const { colorScheme, disabled, hideLabel, invalid, labelText, placeholder, size, validityMessage, onInput } =
    parameters?.props?.['bx-date-picker-input'] ?? {};
  return html`
    <bx-date-picker
      date-format="${ifNonNull(dateFormat)}"
      enabled-range="${ifNonNull(enabledRange)}"
      ?open="${open}"
      value="${ifNonNull(value)}"
      @bx-date-picker-changed="${onChanged}"
      @bx-date-picker-flatpickr-error="${onFlatpickrError}"
    >
      <bx-date-picker-input
        color-scheme="${ifNonNull(colorScheme)}"
        ?disabled="${disabled}"
        ?hide-label="${hideLabel}"
        ?invalid="${invalid}"
        kind="single"
        label-text="${ifNonNull(labelText)}"
        placeholder="${ifNonNull(placeholder)}"
        size="${ifNonNull(size)}"
        validity-message="${ifNonNull(validityMessage)}"
        @input="${onInput}"
      >
      </bx-date-picker-input>
    </bx-date-picker>
  `;
};

singleWithCalendar.story = {
  name: 'Single with calendar',
  parameters: {
    knobs,
  },
};

export const rangeWithCalendar = ({ parameters }) => {
  const { dateFormat, enabledRange, open, value, onChanged, onFlatpickrError } = parameters?.props?.['bx-date-picker'] ?? {};
  const { colorScheme, disabled, hideLabel, invalid, labelText, placeholder, size, validityMessage, onInput } =
    parameters?.props?.['bx-date-picker-input'] ?? {};
  return html`
    <bx-date-picker
      date-format="${ifNonNull(dateFormat)}"
      enabled-range="${ifNonNull(enabledRange)}"
      ?open="${open}"
      value="${ifNonNull(value)}"
      @bx-date-picker-changed="${onChanged}"
      @bx-date-picker-flatpickr-error="${onFlatpickrError}"
    >
      <bx-date-picker-input
        color-scheme="${ifNonNull(colorScheme)}"
        ?disabled="${disabled}"
        ?hide-label="${hideLabel}"
        ?invalid="${invalid}"
        kind="from"
        label-text="${ifNonNull(labelText)}"
        placeholder="${ifNonNull(placeholder)}"
        size="${ifNonNull(size)}"
        validity-message="${ifNonNull(validityMessage)}"
        @input="${onInput}"
      >
      </bx-date-picker-input>
      <bx-date-picker-input
        color-scheme="${ifNonNull(colorScheme)}"
        ?disabled="${disabled}"
        ?hide-label="${hideLabel}"
        ?invalid="${invalid}"
        kind="to"
        label-text="${ifNonNull(labelText)}"
        placeholder="${ifNonNull(placeholder)}"
        size="${ifNonNull(size)}"
        validity-message="${ifNonNull(validityMessage)}"
        @input="${onInput}"
      >
      </bx-date-picker-input>
    </bx-date-picker>
  `;
};

rangeWithCalendar.story = {
  name: 'Range with calendar',
  parameters: {
    knobs,
  },
};

export const skeletonSimple = () =>
  html`
    <bx-date-picker-input-skeleton></bx-date-picker-input-skeleton>
  `;

skeletonSimple.story = {
  name: 'Skeleton simple',
};

export const skeletonSingle = () =>
  html`
    <bx-date-picker-input-skeleton kind="single"></bx-date-picker-input-skeleton>
  `;

skeletonSingle.story = {
  name: 'Skeleton single',
};

export const skeletonRange = () =>
  html`
    <bx-date-picker-input-skeleton kind="from"></bx-date-picker-input-skeleton>
    <bx-date-picker-input-skeleton kind="to"></bx-date-picker-input-skeleton>
  `;

skeletonRange.story = {
  name: 'Skeleton range',
  decorators: [
    story =>
      html`
        <div>${story()}</div>
      `,
  ],
};

export default {
  title: 'Components/Date picker',
  parameters: {
    docs: {
      page: storyDocs,
    },
  },
};
