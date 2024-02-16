export function dateToEpoch(dateString: string): string {
    const date = new Date(dateString);
    return date.getTime().toString();
}

export function daysInEpochs(epoch1: number, epoch2: number): number {
    const diffInMilliseconds = Math.abs(epoch1 - epoch2);
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.floor(diffInMilliseconds / millisecondsInADay);
    
    return diffInDays;
}

export function epochToDate(epochTime: number): string {
    const date = new Date(epochTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}