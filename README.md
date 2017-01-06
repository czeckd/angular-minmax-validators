# angular-minmax-validators

Implementation of min/max value validator directives for Angular 2.0.0 that works with both Angular
forms validation and the DOM. As best as I can tell, these two validator directives are absent from 
the initial Angular 2.0.0 [@angular/forms/src/validators.ts]
(https://github.com/angular/angular/blob/master/modules/%40angular/forms/src/validators.ts).

### Demo

A [working demo](https://czeckd.github.io/angular2-minmax-validators/demo/) shows the validators in action.

#### Usage

On an input field, set ``min="NUMBER"`` and/or ``max="NUMBER"`` where "NUMBER" is a number. The validators also works with property binding, so ``[min]="VARIABLE"``
and/or ``[max]="VARIABLE"`` where "VARIABLE" is "VARIABLE" is a local class variable. See ``demo-app.component.ts`` 
for an example.

Note: I've not tested this directive with date/times.

### License

MIT

### Author
- David Czeck [@czeckd](https://github.com/czeckd)
