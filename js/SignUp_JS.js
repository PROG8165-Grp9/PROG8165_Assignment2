var reg = /^[A-Za-z0-9- _]{5,}$/;
if(reg.test($("#form_username")))
{
result = true;
}
else
{
result = false;
}