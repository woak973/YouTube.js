import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class CommentInteractionView extends YTNode {
  static type = 'CommentInteractionView';

  header_prefix: string;
  video_title: string;
  comment_content: string;
  chevron_url: string;
  index: number;
  on_tap_a11y_label: string;
  renderer_context: {
    command_context: {
      on_tap: {
        innertube_command: NavigationEndpoint
      }
    }
  };
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.header_prefix = data.headerPrefix;
    this.video_title = data.videoTitle;
    this.comment_content = data.commentContent;
    this.chevron_url = data.chevronUrl;
    this.index = data.index;
    this.on_tap_a11y_label = data.onTapA11yLabel;
    this.renderer_context = {
      command_context: {
        on_tap: {
          innertube_command: new NavigationEndpoint(data.rendererContext.commandContext.onTap.innertubeCommand)
        }
      }
    };
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      }
    };
  }
}