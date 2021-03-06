import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EchoesState } from '../../core/store';

import { NowPlaylistActions } from '../../core/store/now-playlist';
import { IPresetParam, PlayerSearchActions, UpdateQueryAction } from '../../core/store/player-search';
// selectors
import { getUserViewPlaylist$ } from '../../core/store/user-profile';
import { getQuery$, getQueryParamPreset$, getPresets$ } from '../../core/store/player-search';

@Component({
  selector: 'app-search',
  styleUrls: [ './app-search.scss' ],
  template: `
  <article
    infiniteScroll
    [infiniteScrollDistance]="2"
    [infiniteScrollDisabled]="currentPlaylist$ | async"
    (scrolled)="searchMore()"
    [immediateCheck]="true">
    <app-navbar>
      <div class="navbar-header">
        <player-search
          [query]="query$ | async"
          (queryChange)="resetPageToken($event)"
          (search)="search($event)"
        ></player-search>
      </div>
      <button-group class="nav-toolbar"
        [buttons]="presets$ | async"
        [selectedButton]="queryParamPreset$ | async"
        (buttonClick)="updatePreset($event)"
      ></button-group>
      <!-- 国家: <select class="btn-group btn-group-sm navbar-btn"> 
           <option class="btn btn-default active">China</option>
           <option>Enginlish</option>
      </select> -->
      <search-navigator></search-navigator>
    </app-navbar>
    <router-outlet></router-outlet>
    </article>
    `
})
export class AppSearchComponent implements OnInit {
  query$ = this.store.let(getQuery$);
  currentPlaylist$ = this.store.let(getUserViewPlaylist$);
  queryParamPreset$ = this.store.let(getQueryParamPreset$);
  presets$ = this.store.let(getPresets$);

  constructor(
    private store: Store<EchoesState>,
    private playerSearchActions: PlayerSearchActions
  ) { }

  ngOnInit() {}

  search (query: string) {
    this.store.dispatch(this.playerSearchActions.searchNewQuery(query));
  }

  resetPageToken(query: string) {
    this.store.dispatch(this.playerSearchActions.resetPageToken());
    this.store.dispatch(new UpdateQueryAction(query));
  }

  searchMore () {
    this.store.dispatch(this.playerSearchActions.searchMoreForQuery());
  }

  updatePreset(preset: IPresetParam) {
    this.store.dispatch(this.playerSearchActions.updateQueryParam({ preset: preset.value }));
  }
}
