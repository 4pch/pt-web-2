var count = 0;

function my_button_click()
{
    count++;
	if (count % 2 == 0) 
    {
        document.getElementById("demo").innerHTML = "";
	} 
    else 
    {
        var img = document.createElement("img");
        img.src = "images/cat.jpg";
        document.getElementById("demo").appendChild(img);
	}
}

document.getElementById("my_button").onclick = my_button_click