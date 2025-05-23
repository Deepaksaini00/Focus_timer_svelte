//  Convert time into Seconds

export function toSeconds (hrs:number , min:number , sec:number):number
{
  return hrs*3600 + min*60 + sec; 
}

// Set Hrs , Mins , Secs using Totoal Seconds

export function setTime (totalSec:number): {h:number , m: number , s:number} {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600)/60);
  const s = Math.floor(totalSec % 60);
  return {h , m , s};
}