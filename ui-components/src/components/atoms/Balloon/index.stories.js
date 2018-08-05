import React from 'react';
import { withNotes } from '@storybook/addon-notes';
import Balloon, { BalloonTip } from './index.js';
import { TrashCanIcon } from '../Icon/index.js';
import { withStyle } from '../../utils/decorators.js';

const note = WithNotes('読みやすさを考慮すると 10 文字までが適当。 11 文字以上を表示したい場合は別のデザインを検討すること。');

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
  .add('10文字ラベル', note(() => <Balloon>削除したかったらする</Balloon>))
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>左上から 200px に配置</Balloon>)
  .add('アイコンラベル', () => <Balloon><TrashCanIcon /></Balloon>)
  .add('絵文字', () => <Balloon>❌</Balloon>)
  .add('バルーンチップ', () => withStyle({ marginTop: '50px' })(
    <p>ここに<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>を表示</p>
  ));
