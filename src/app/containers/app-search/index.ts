import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { AppSearchComponent } from './app-search.component';
import { AppNavbarModule } from '../app-navbar';
import { YoutubeVideosComponent } from './youtube-videos.component';
import { YoutubePlaylistsComponent } from './youtube-playlists.component';
import  {YoukuVideosComponent} from './youku-videos/youku-videos.component';
import { PlayerSearchComponent } from './player-search.component';
import { SearchNavigatorComponent } from './search-navigator';

import { routing } from './app-search.routing';

@NgModule({
  imports: [
    SharedModule,
    AppNavbarModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppSearchComponent,
    YoutubeVideosComponent,
    YoutubePlaylistsComponent,
    YoukuVideosComponent,
    PlayerSearchComponent,
    SearchNavigatorComponent
  ],
  exports: [
    AppSearchComponent
  ],
  providers: []
})
export class AppSearchModule { }
