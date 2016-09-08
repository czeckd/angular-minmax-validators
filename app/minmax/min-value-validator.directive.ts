import { Attribute, Directive, forwardRef, Input, OnChanges, SimpleChanges, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';
// import { isPresent } from '@angular/forms/src/facade/lang';


export const MIN_VALUE_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinValueValidator),
	multi: true
};

@Directive({
	selector: '[min][formControlName],[min][formControl],[min][ngModel]',
	providers: [MIN_VALUE_VALIDATOR],
	host: {'[attr.min]': 'min ? min : 0'}
})

export class MinValueValidator implements Validator, OnChanges {
	private _validator:ValidatorFn;

	@Input() min:string;

	constructor(@Attribute('min') mn:string) {
//		if (isPresent(mn)) {
			const attrValue = parseInt(mn, 10);
			if (!isNaN(attrValue)) {
				this.min = mn;
				this._createValidator();
			}
//		}
	}

	ngOnChanges(changes:SimpleChanges) {
		const minChange = changes['min'];
		if (minChange) {
			this._createValidator();
		}
	}

	private _createValidator() {
		this._validator = MinValueValidator.min(parseInt(this.min, 10));
	}

	validate(c:AbstractControl) : {[key: string]: any} { return this._validator(c); }

	static min(mn:number) : ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} => {
			let v = +control.value;
//			return (v < mn ? { 'min' : { 'valid' : false } } : null);
			return (v < mn ? { 'min' : { 'minValue' : mn, 'actualValue' : v }} : null);
		};
	}
}
