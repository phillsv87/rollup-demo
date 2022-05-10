import { format } from 'date-fns';
import { bName } from './consts';


export function handler(evt)
{
    const now=Date.now();
    console.log(bName,format(now,'YYYY'));
    return now;
}