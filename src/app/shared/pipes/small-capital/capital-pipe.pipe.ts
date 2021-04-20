import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalPipe'
})
export class CapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const words = value.split(' ');
    const upperWords = words.map(word => {
      let letter: string = word[0];
      letter = letter.toUpperCase();

      const newWord = letter + word.slice(1);
      return newWord;
    });

    return upperWords.join(' ');
  }

}
