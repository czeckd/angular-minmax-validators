export * from './min-value-validator.directive';
export * from './max-value-validator.directive';

import { MinValueValidator } from './min-value-validator.directive';
import { MaxValueValidator } from './max-value-validator.directive';

export const MINMAX_DIRECTIVES : [any] = [ MinValueValidator, MaxValueValidator ];
