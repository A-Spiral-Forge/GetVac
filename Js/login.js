function validate()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    const se=document.querySelector('.showerror');

    if(username=="SpiralForge" && password=="Abhi123Sf")
    {
        return false;
    }
    else
    {
        se.style.display="block";
        return false;
    }
}