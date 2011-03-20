/*Author:	Matti Schneider-Ghibaudo
*Include:
* <script language="javascript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/mootools/1.3.1/mootools-yui-compressed.js"></script>
* <script language="javascript" type="text/javascript" src="Element.fit.js"></script>
* <script language="javascript" type="text/javascript" src="HashTagBattleSetup.js"></script>
* (better: compress Element.fit and HashTagBattleSetup in one file, and remove all prototype includes from RoR)
* Done!  :)
*/

['.name', '.count'].each(function(sel) {
	var smallest = 2000;
	$$(sel).each(function(elm) {
		var span = new Element('span', {
			text: elm.get('text')
		});
		elm.empty().grab(span);
		var newSize = span.fit();
		if (smallest > newSize)
			smallest = newSize;
	});
	$$(sel + ' span').each(function(elm) {
		elm.setStyle('font-size', smallest);
	});
});