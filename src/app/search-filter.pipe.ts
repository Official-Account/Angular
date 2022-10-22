import { Pipe, PipeTransform } from '@angular/core';
import { User } from './classes/user';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: User[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
    searchText = searchText.toLocaleLowerCase();

    list = list.filter(s => {
      return s.username.toLocaleLowerCase().includes(searchText);
    });
    return list;

  }

}

