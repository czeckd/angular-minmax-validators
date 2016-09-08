import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MINMAX_DIRECTIVES } from './minmax/index';
import { MaxValueValidator } from './minmax/index';
import { DemoAppComponent } from './demo-app.component';

@NgModule({
	imports:         [ BrowserModule, FormsModule ],
	declarations:    [ DemoAppComponent, MINMAX_DIRECTIVES ],
	bootstrap:       [ DemoAppComponent ]
})
export class AppModule { }

