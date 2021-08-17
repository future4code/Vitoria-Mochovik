export function analizeTodayDate(date:Date) :boolean{
    const dateNow = new Date()
    const date1 = new Date(date+'T00:00:00')
   
    if(date1.getFullYear() <dateNow.getFullYear()) return false
    else if(date1.getFullYear() > dateNow.getFullYear()) return true

    if(date1.getMonth() < dateNow.getMonth()) return false
    else if(date1.getMonth() > dateNow.getMonth()) return true

    if(date1.getDate() >= dateNow.getDate()) return true
    else return false
}