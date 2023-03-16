function update()
{
    var km,l;
    if ( document.getElementById("km").value > 0 && document.getElementById("litros").value > 0)
{
    km = document.getElementById("km").value;
    l = document.getElementById("litros").value;
    document.getElementById("resultado").textContent = km/l+" km/L";
}
}