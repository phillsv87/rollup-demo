import { format } from 'date-fns';
import { bName } from './consts';
import { Evt } from './types';


export function handler(evt:Evt)
{
    const now=Date.now();
    console.log(bName,evt.id,format(now,'YYYY'));
    return now;
}