export function analizeTodayDate(date:Date) :boolean{
    const dateNow = new Date()

    if(date.getFullYear() <dateNow.getFullYear()) return false
    else if(date.getFullYear() > dateNow.getFullYear()) return true

    if(date.getMonth() < dateNow.getMonth()) return false
    else if(date.getMonth() > dateNow.getMonth()) return true

    if(date.getDate() >= dateNow.getDate()) return true
    else return false
}