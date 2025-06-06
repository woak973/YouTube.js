import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import AvatarView from './AvatarView.js';

export default class SharedSubscriptionView extends YTNode {
  static type = 'SharedSubscriptionView';

  avatar: AvatarView | null;
  channel_name: string;

  constructor(data: RawNode) {
    super();
    this.avatar = Parser.parseItem(data.avatar, AvatarView);
    this.channel_name = data.channelName;
  }
}