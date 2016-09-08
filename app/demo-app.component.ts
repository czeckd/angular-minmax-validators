import { Component } from '@angular/core';

@Component({
	selector: 'demo-app',
	template:`
<div class="container-fluid">
	<div style="margin:25px;" [ngClass]="{ 'has-error' :  val.errors}" >
		<form>
			<label>Number</label>
			<input class="form-control" name="val" #val="ngModel" type="number" min="0" max="10" [(ngModel)]="numval" >
		</form>
	</div>
<p *ngIf="val.errors">{{val.errors | json}}</p>
</div>
`
})

export class DemoAppComponent {
	private minv:number = 0;
	private maxv:number = 10;

	private numval:number = 0;
}
