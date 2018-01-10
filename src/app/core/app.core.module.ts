import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';


@NgModule({
    declarations: [],
    imports: [BrowserAnimationsModule, MaterialModule, CommonModule],
    exports: [MaterialModule]
})

export class CoreModule {}
