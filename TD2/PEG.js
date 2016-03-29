function myFunction() {
var txt = document.getElementById("myText").value;
var sum = 0;
	if(txt.length == 16)
	{
		var i;

		for(i = 0; i < 16; i++)
			if(i%2 == 1)
			{
				sum = sum + parseInt(txt[i]); 
			}
			else {
				var aux = parseInt(txt[i]);
				aux = aux + aux;
				sum = sum + aux % 10;
				aux = parseInt(aux / 10);
				sum = sum + aux % 10;

			}

			

		if(sum%10 == 0)
			window.alert("VALID!");
		else
			window.alert("NU E VALID!");
	}
	else
	{
		window.alert("NU E VALID!");
	}

	
}
