import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
name:'shortId'
})
export class shortIdpipe implements PipeTransform{
 transform(value: string,length:number=10):string {
     if(!value) return '';
     return value.replace(/-0-9/g,'').slice(0,length)
 }
}