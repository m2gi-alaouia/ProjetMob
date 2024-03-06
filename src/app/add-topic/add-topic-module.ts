// topic-detail-page.module.ts

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AddTopicModule} from './add-topic.component';

@NgModule({
  declarations: [AddTopicModule],
  imports: [
    IonicModule,
    CommonModule,
    // ... autres imports
  ],
  exports: [AddTopicModule],
})
export class AddTopicModulePage {}
