function setCookie(name, value) 
{
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + value + ";expires=" + exdate;
}

function getCookie(name)
 {
    if (document.cookie.length > 0) 
    {
        let start = document.cookie.indexOf(name + "=");
        if (start != -1)
         {
            start = start + name.length + 1;
            let end = document.cookie.indexOf(";", start);
            if (end == -1)
            {
                end = document.cookie.length;
                return document.cookie.substring(start, end);
            }   
        }
    }
    return "";

}

function deleteCookie(name)
 {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
 }
