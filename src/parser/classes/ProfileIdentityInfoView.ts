import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AvatarView from './AvatarView.js';
import ButtonView from './ButtonView.js';

export default class ProfileIdentityInfoView extends YTNode {
  static type = 'ProfileIdentityInfoView';

  avatar: AvatarView | null;
  channel_display_name: string;
  channel_handle: string;
  left_of_bullet_info: string;
  right_of_bullet_info: string;
  channel_access: ButtonView | null;
  three_dot_menu: ButtonView | null;
  on_handle_long_press: {
    innertube_command: NavigationEndpoint
  };
  handle_a11y_hint: string;

  constructor(data: RawNode) {
    super();
    this.avatar = Parser.parseItem(data.avatar, AvatarView);
    this.channel_display_name = data.channelDisplayName;
    this.channel_handle = data.channelHandle;
    this.left_of_bullet_info = data.leftOfBulletInfo;
    this.right_of_bullet_info = data.rightOfBulletInfo;
    this.channel_access = Parser.parseItem(data.channelAccess, ButtonView);
    this.three_dot_menu = Parser.parseItem(data.threeDotMenu, ButtonView);
    this.on_handle_long_press = {
      innertube_command: new NavigationEndpoint(data.onHandleLongPress.innertubeCommand)
    };
    this.handle_a11y_hint = data.handleA11yHint;
  }
}