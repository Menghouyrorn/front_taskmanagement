import format from "date-fns/format";


export function formatDate(datestring:string){
    const date = new Date(datestring);
    return format(date,'dd\\MMMM\\yyyy');
}