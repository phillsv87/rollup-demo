import { bName } from './consts';
import { Evt } from './types';


export function handler(evt:Evt)
{
    console.log(bName,evt.id);
    return Date.now();
}