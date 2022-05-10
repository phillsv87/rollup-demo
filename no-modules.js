import { bName } from './consts';


export function handler(evt)
{
    console.log(bName);
    return Date.now();
}