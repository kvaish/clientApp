import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RequestsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'requests'
})
export class RequestsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  
  transform(requests:any[],type:string):any[] {
    if(!type){
      return requests;
    }else{
    return requests.filter(function(request){
      return request.reqtype.toLowerCase().includes(type.toLowerCase());
        });
  }
    
  }
}
