import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FriendsComponent } from './friends.component';

const routes: Routes = [{ path: '', component: FriendsComponent }];

@NgModule({
  declarations: [FriendsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FriendsModule {}
