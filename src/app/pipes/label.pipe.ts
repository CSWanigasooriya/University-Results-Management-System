import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'name'
})

export class Label implements PipeTransform {
    transform(value: string): string {
        return 'Name' + value;
    }
}
