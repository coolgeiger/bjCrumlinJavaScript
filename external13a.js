/*function mousedownResponse()
{this.innerHTML += "Mouse button upwards movement<br>";}
*/


function init() {
	var panel = document.getElementById("panel");
	// panel.innerHTML = "Click here on this area &gt;<br>";
	// panel12.innerHTML "Hello World!!!";
	// Eventhandler functions to the panel object:

	// A simple message for the 'main'-html-window:
	panel.innerHTML = "Here is the regular information in the main window!";

	var check_properties;

	// A module for inspecting and describing the properties of the child 
	// object of 'window', namely 'screen':

	var width, height, avWidth, avHeight, colors;

	var i; // a variable for a scroll functionality later in this program

	window.alert("This is an alert for diagnostic purposes!");

	panel.innerHTML += "<br>";
	panel.innerHTML += "<br>";
	panel.innerHTML += "<br>";
	panel.innerHTML += "Here is information on the propeties: <br>";
	panel.innerHTML += "<br>";

	// A loop for listing each property within the DOM window object:

	for(check_properties in window) // checking all the properties in the 
									// 'window' object.
	{
		if(check_properties)
		{
			panel.innerHTML += check_properties + " , ";
		}
	}

	// Findiding out what the screen properties are and assisgning them 
	// to the aforementioned vaariables:

	width = window.screen.width;
	height = window.screen.height;
	avWidth = window.screen.availWidth;
	avHeight = window.screen.availHeight;

	// Examining the color bit vlue and assigning an
	// appropriate string value to a variable:


	switch(window.screen.colorDepth)
	{
		case 8: colors = "Low Color" ; break;
		case 16: colors = "High Color" ; break;
		case 24: colors = "True Color" ; break;
		case 32: colors = "Deep Color" ; break;
		default: colors = "Unknown";
	}

panel.innerHTML += "<br>";
panel.innerHTML += "<br>";
panel.innerHTML += "Screen Resolution (width): " + width + "<br>";
panel.innerHTML += "Screen Resolution (height): " + height + "<br>";
panel.innerHTML += "<br>";
panel.innerHTML += "Available Screen Size (width): " + avWidth + "<br>";
panel.innerHTML += "Available Screen Size (height): " + avHeight + "<br>";
panel.innerHTML += "<br>";
panel.innerHTML += "Color Capability: " + colors + "<br>";

	// assigning a default status bar message: (This is a modification to the DOM.)
	window.defaultStatus += "Screen Data by JavaScript"; 
	// Please note that this is no longer supported in recent versions of commonly
	// used browsers, unless one manipulates the settings.

	// At the beginning of this file there is an alert.
	// Now here below is some code to to request a deision from the user and then 
	// writes the reult in the panel:
	panel.innerHTML += "Confirm: " + window.confirm("Go or Stop?");

	// Here below is a statement to request text input from the user and write 
	// the returned text into the panel:
	panel.innerHTML += "<br>Prompt: " + window.prompt("Yes or No?" , "Yes");

	panel.innerHTML += "<br>";
	panel.innerHTML += "<br>";

	// Code displaying scroll-functionality:
	for (i=1; i<501; i++)
	{
		panel.innerHTML += i + " "
	}
/*
	// Statements to scroll down by 500 pixels and position the window at the top left of the screen.
	window.scrollBy(0,500);
	window.moveTo(0,300);
*/
	// Here is some code to activate a popwindow, that is 
	// that is represented by pop.html.
	var winObect = window.open("pop.html", "windowName", "top=200,left=100,width=450,heiht100,status=yes");

	panel.innerHTML += "<br>";
	panel.innerHTML += "<br>";
	panel.innerHTML += "Check if this comes after the scroll-table.<br>";
	panel.innerHTML += "<br>";

	// Code to query the browser:
	panel.innerHTML += "Browser: " + window.navigator.appName;
	panel.innerHTML += "<br>Code Name: " + window.navigator.appCodeName;
	panel.innerHTML += "Version: " + window.navigator.appVersion;
	panel.innerHTML += "Platorm: " + window.navigator.platform;

	// A statement to write a message in the panel if support of 
	//a modern DOM method is detected:
	if(document.addEventListener)
	{
		panel.innerHTML += "This is a Modern DOM browser";	
	}

	panel.innerHTML += "<br>";
	panel.innerHTML += "<br>";

	// Code to check what is enables.  (Please note that 'window' at 
	// the begining is omitted since it is not necessary):


	// Check if Java support is enabled:
	if(navigator.javaEnabled())
	{
		panel.innerHTML += "Java Support is Enabled";
	}
	else
	{
		panel.innerHTML += "Java Support is NOT Enabled";
	}
	
	panel.innerHTML += "<br>";

	// plugins:
	if(navigator.plugins.length !== 0)
	{
		panel.innerHTML += "<hr>Total Plugins: " + navigator.plugins.length;
		panel.innerHTML += "<br>Example: " + navigator.plugins[1].name;
		panel.innerHTML += "-" + navigator.plugins[1].description;
	}


	// mime types:
	if(navigator.mimeTypes.length !== 0)
	{
		panel.innerHTML += "<hr>Total MIME Types: " + navigator.mimeTypes.length;
		panel.innerHTML += "<br>Example: " + navigator.mimeTypes[3].type;
		panel.innerHTML += "-" + navigator.mimeTypes[3].description;
	}

}
document.addEventListener("DOMContentLoaded", init, false);