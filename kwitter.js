function adduser()
{
    Name=document.getElementById("username").value;
localStorage.setItem("user name", Name);
window.location="kwitter_room.html";
}