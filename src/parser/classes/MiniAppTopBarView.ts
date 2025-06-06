import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ToggleButtonView from './ToggleButtonView.js';
import ButtonView from './ButtonView.js';
import MiniAppScoreButtonView from './MiniAppScoreButtonView.js';

export default class MiniAppTopBarView extends YTNode {
  static type = 'MiniAppTopBarView';

  mute_button: ToggleButtonView | null;
  menu_button: ButtonView | null;
  view_all_button: ButtonView | null;
  fullscreen_button: ButtonView | null;
  save_button: ToggleButtonView | null;
  high_score_button: MiniAppScoreButtonView | null;

  constructor(data: RawNode) {
    super();
    this.mute_button = Parser.parseItem(data.muteButton, ToggleButtonView);
    this.menu_button = Parser.parseItem(data.menuButton, ButtonView);
    this.view_all_button = Parser.parseItem(data.viewAllButton, ButtonView);
    this.fullscreen_button = Parser.parseItem(data.fullscreenButton, ButtonView);
    this.save_button = Parser.parseItem(data.saveButton, ToggleButtonView);
    this.high_score_button = Parser.parseItem(data.highScoreButton, MiniAppScoreButtonView);
  }
}