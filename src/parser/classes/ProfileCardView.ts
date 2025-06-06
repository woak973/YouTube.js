import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ProfileIdentityInfoView from './ProfileIdentityInfoView.js';
import ProfileInfoView from './ProfileInfoView.js';

export default class ProfileCardView extends YTNode {
  static type = 'ProfileCardView';

  profile_identity_info: ProfileIdentityInfoView | null;
  profile_info: ProfileInfoView | null;

  constructor(data: RawNode) {
    super();
    this.profile_identity_info = Parser.parseItem(data.profileIdentityInfo, ProfileIdentityInfoView);
    this.profile_info = Parser.parseItem(data.profileInfo, ProfileInfoView);
  }
}