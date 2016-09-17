import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'demo-app',
	template:`
<div class="container-fluid">
	<p></p>
	<div class="col-md-5">
		<form class="form-inline row gutter">
			<div class="form-group">
				<label>Min</label>
				<input name="min" type="number" class="form-control" [(ngModel)]="minv" (ngModelChange)="fixMin()">
			</div>
			<div class="form-group">
				<label>Max</label>
				<input name="max" type="number" class="form-control" [(ngModel)]="maxv" (ngModelChange)="fixMax()">
			</div>
		</form>

		<form class="row gutter" [ngClass]="{ 'has-error' :  val.errors}" #valForm="ngForm" >
			<label>Number between {{minv}} and {{maxv}}</label>
			<input class="form-control" name="val" #val="ngModel" type="number" [min]="minv" [max]="maxv" [(ngModel)]="numval" >
		</form>
		<div *ngIf="val.errors" class="row gutter">
			<label>Error</label>
			<p>{{val.errors | json}}</p>
		</div>
	</div>
</div>
`
})

export class DemoAppComponent {
	@ViewChild('valForm') vform:NgForm;

	private minv:number = 0;
	private maxv:number = 10;
	private numval:number = -5;

	fixMin() {
		if (this.minv >= this.maxv) {
			this.maxv = this.minv + 1;
		}
		this.updateVal();
	}

	fixMax() {
		if (this.maxv <= this.minv) {
			this.minv = this.maxv - 1;
		}
		this.updateVal();
	}

	private updateVal() {
		this.vform.form.controls['val'].updateValueAndValidity();
	}

}
