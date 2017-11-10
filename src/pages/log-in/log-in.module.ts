import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';
import { UniFloorsPage } from '../../pages/uni-floors/uni-floors';

@NgModule({
  declarations: [
    LogInPage,
	UniFloorsPage
  ],
  imports: [
    IonicPageModule.forChild(LogInPage),
  ],
})
export class LogInPageModule {}
