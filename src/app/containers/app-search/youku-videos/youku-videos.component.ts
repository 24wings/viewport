import { Component, OnInit } from '@angular/core';
import { PlayerSearchActions, CSearchTypes } from '../../../core/store/player-search';

import { Store } from '@ngrx/store';
import { EchoesState } from '../../../core/store';

// actions
import { NowPlaylistActions } from '../../../core/store/now-playlist';
import { ActionTypes } from '../../../core/store/app-player';
import { AppPlayerApi } from '../../../core/api/app-player.api';

// selectors
import { getPlayerSearchResults$, getNowPlaylist$ } from '../../../core/store/reducers';
import { getPlaylistVideos$ } from '../../../core/store/now-playlist';
import { getIsSearching$ } from '../../../core/store/player-search';
 
@Component({
  selector: 'app-youku-videos',
  templateUrl: './youku-videos.component.html',
  styleUrls: ['./youku-videos.component.scss']
})
export class YoukuVideosComponent implements OnInit {
  videos$ = this.store.let(getPlayerSearchResults$);
  playlistVideos$ = this.store.let(getPlaylistVideos$);
  loading$ = this.store.let(getIsSearching$);

  constructor(
    private store: Store<EchoesState>,
    private appPlayerApi: AppPlayerApi,
    private playerSearchActions: PlayerSearchActions
  ) {}

  ngOnInit() {
    this.store.dispatch(this.playerSearchActions.updateSearchType(CSearchTypes.VIDEO));
    this.store.dispatch(this.playerSearchActions.searchCurrentQuery());
  }

  playSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.playVideo(media);
  }

  queueSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.queueVideo(media);
  }

  removeVideoFromPlaylist(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.removeVideoFromPlaylist(media);
  }
}
