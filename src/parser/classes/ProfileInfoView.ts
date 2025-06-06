import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import CommentInteractionView from './comments/CommentInteractionView.js';
import SharedSubscriptionView from './SharedSubscriptionView.js';

export default class ProfileInfoView extends YTNode {
  static type = 'ProfileInfoView';

  profile_badge_info_channel_wide: {
    profile_section_title: string,
    comment_badge: {
      comment_badge_icon_url: string,
      comment_desc: string,
      comment_badge_a11y_label: string,
      black_heart_icon_url?: string,
      black_heart_desc?: string,
      black_heart_a11y_label?: string
    },
    badges?: {
      badge_icon_url: string,
      badge_desc: string,
      badge_subtitle: string
    }[]
  };
  comments?: ObservedArray<CommentInteractionView> | null;
  comments_interaction_title?: string;
  shared_subscriptions_title?: string;
  shared_subscriptions?: ObservedArray<SharedSubscriptionView> | null;

  constructor(data: RawNode) {
    super();
    this.profile_badge_info_channel_wide = {
      profile_section_title: data.profileBadgeInfoChannelWide.profileSectionTitle,
      comment_badge: {
        comment_badge_icon_url: data.profileBadgeInfoChannelWide.commentBadge.commentBadgeIconUrl,
        comment_desc: data.profileBadgeInfoChannelWide.commentBadge.commentDesc,
        comment_badge_a11y_label: data.profileBadgeInfoChannelWide.commentBadge.commentBadgeA11yLabel,
        black_heart_icon_url: Reflect.has(data.profileBadgeInfoChannelWide.commentBadge, 'blackHeartIconUrl') ? data.profileBadgeInfoChannelWide.commentBadge.blackHeartIconUrl : undefined,
        black_heart_desc: Reflect.has(data.profileBadgeInfoChannelWide.commentBadge, 'blackHeartDesc') ? data.profileBadgeInfoChannelWide.commentBadge.blackHeartDesc : undefined,
        black_heart_a11y_label: Reflect.has(data.profileBadgeInfoChannelWide.commentBadge, 'blackHeartA11yLabel') ? data.profileBadgeInfoChannelWide.commentBadge.blackHeartA11yLabel : undefined
      },
      badges: Reflect.has(data.profileBadgeInfoChannelWide, 'badges') ? data.profileBadgeInfoChannelWide.badges.map((item: any) => ({
        badge_icon_url: item.badgeIconUrl,
        badge_desc: item.badgeDesc,
        badge_subtitle: item.badgeSubtitle
      })) : undefined
    };
    this.comments = Reflect.has(data, 'comments') ? Parser.parse(data.comments, true, CommentInteractionView) : undefined;
    this.comments_interaction_title = Reflect.has(data, 'commentsInteractionTitle') ? data.commentsInteractionTitle : undefined;
    this.shared_subscriptions_title = Reflect.has(data, 'sharedSubscriptionsTitle') ? data.sharedSubscriptionsTitle : undefined;
    this.shared_subscriptions = Reflect.has(data, 'sharedSubscriptions') ? Parser.parse(data.sharedSubscriptions, true, SharedSubscriptionView) : undefined;
  }
}