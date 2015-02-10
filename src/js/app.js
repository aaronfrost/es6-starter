//Import external files using module syntax
import Foo from './Foo'; //If it's a file of your own, use the ./ at the beginning of the filename
import _ from 'lodash'; //Otherwise, use the npm name

//Once imported, use your imports
let foo = new Foo();  //logs 'instantiate Foo'
foo.bar();            //logs 'bar'

console.log(_.uniq([1, 2, 3, 4, 1, 4])); //Logs [1, 2, 3, 4]