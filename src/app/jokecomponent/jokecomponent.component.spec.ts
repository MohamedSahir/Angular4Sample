
import { JokecomponentComponent } from './jokecomponent.component';
fdescribe(`Component:Joke Component`,()=>{

it(`should add 1+1`,()=>{
expect(1+1).toEqual(2);
});


it(`should have title of 'joker'`,()=>{

const component = new JokecomponentComponent();
expect(component.title).toEqual("joker");


});
});