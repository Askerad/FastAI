module.exports = {
	// Fonction pour convertir du texte en emoji pour discord. On convertis en texte qui est ensuite lu par discord, et pas directement les characteres unicodes
	convertTextToEmoji: function(txt)
	{
		var emojitxt = "";
		if (checkCustomEmote(txt)){
			return txt;
		}
		else {
			for (var x = 0; x < txt.length; x++)
			{
				// Check majuscule
				if (txt.charCodeAt(x) >= 65 && txt.charCodeAt(x) <= 90) {
					emojitxt += ":regional_indicator_"+ txt.charAt(x).toLowerCase() +": ";
				}
				// Check minuscule
				else if (txt.charCodeAt(x) >= 97 && txt.charCodeAt(x) <= 122) {
					emojitxt += ":regional_indicator_"+ txt.charAt(x) +": ";
				}
				// Check number
				else if (txt.charCodeAt(x) >= 48 && txt.charCodeAt(x) <= 57) {
					emojitxt += convertIntToEmoji(txt.charAt(x));
				}
				// Check standard emote
				else if (txt.charCodeAt(x) > 255){
                    emojitxt += txt.charAt(x);
                }
				// Drop unknown char
				else {
					//console.log("drop");
				}
			}
		}
		return emojitxt;
	}
};

function checkCustomEmote(txt){
	return (txt.charAt(0) == "<" && txt.charAt(txt.length-1) == ">" );
}

function convertIntToEmoji(txt){
	switch (txt) {
		case "1":
			return ":one: ";
		case "2":
			return ":two: ";
		case "3":
			return ":three: ";
		case "4":
			return ":four: ";
		case "5":
			return ":five: ";
		case "6":
			return ":six: ";
		case "7":
			return ":seven: ";
		case "8":
			return ":eight: ";
		case "9":
			return ":nine: ";
		default:
			return ":zero: ";
	}
}
