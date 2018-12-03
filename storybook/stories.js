import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';

import {
  Button, Welcome, CenterView
} from '../src/stories/components';
import {
  Top,
} from '../src/stories/screens';


storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Components')} />);

storiesOf('Components', module)
  .add('Button', () => {
    const label = text('Label', 'Hello Button');
    return (
      <CenterView>
        <Button onPress={action('clicked-text')}>
          <Text>{label}</Text>
        </Button>
      </CenterView>
  )});

storiesOf('Screens', module)
  .add('Top', () => {
    const title = text('Title', 'Hello Title');
    const buttonLabel = text('ButtonLabel', 'Hello Button');
    return (
      <Top title={title} buttonLabel={buttonLabel} />
  )});
