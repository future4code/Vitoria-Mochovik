export default function validadeEmail(email: String) {
    if( email.length <= 0 ||
        email === "" ||
        email.indexOf(".")===-1 ||
        email.indexOf("@")===-1 ||
        email[0]==="." ||
        email[0]==="@" ||
        email[email.length-1]==="." ||
        email[email.length-1]==="@" 
    ) {
        return false
    } else {
        return true
    }
}