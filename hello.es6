import {Component, Template, bootstrap, If} from 'angular2/angular2';

@Component({
    selector: 'hello'  //TODO: default to camel-cased class name if not provided?
})
@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})
export class Hello {
  name: string = 'World';
}

bootstrap(Hello);
