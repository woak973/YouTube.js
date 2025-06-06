import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class MiniAppScoreButtonView extends YTNode {
  static type = 'MiniAppScoreButtonView';

  button_view_model: ButtonView | null;
  endpoint: NavigationEndpoint;
  high_score_share_client_param_identifier: string;
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.button_view_model = Parser.parseItem(data.buttonViewModel, ButtonView);
    this.endpoint = new NavigationEndpoint(data.onShareHighScoreCommand);
    this.high_score_share_client_param_identifier = data.highScoreShareClientParamIdentifier;
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      }
    };
  }
}