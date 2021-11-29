import { gettime } from './gettime';
import { write } from './write';


console.log (gettime())

const json = {'name': 'Fola'}

write(json, "./myfile.json")

console.log('Hello typescript !')

