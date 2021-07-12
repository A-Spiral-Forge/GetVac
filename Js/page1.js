function drop()
{
    var navmenu=document.querySelector('.nav');
    const navbtn=document.querySelector('.menu');
    if(navmenu.style.display == "block")
    {
        navmenu.style.display = "none";
        navbtn.innerHTML = '<i class="fa fa-bars"> MENU</i>';
    }
    else
    {
        navmenu.style.display = "block";
        navbtn.innerHTML = '<i class="fa fa-close"> CLOSE</i>';
    }
}

function showalert()
{
    var signout=document.querySelector('.signoutalert');
    signout.style.display = "block";
}

function close()
{
    const signout=document.querySelector('.signoutalert');
    signout.style.display = "none";
}