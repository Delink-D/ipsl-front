import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafeURLPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  public transform(url: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
