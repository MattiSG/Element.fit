/**A MooTools script to dynamically adjust an element's text size so it fills parent container.
*
*Author:	Matti Schneider-Ghibaudo
*License:	MIT-Style
*/

(function() {

var MIN_FONT_SIZE = 6;

Element.implement({
	isBiggerThan: function isBiggerThan(targetSize) {
		var thisSize = this.getSize();
		return	thisSize.x > targetSize.x
				|| thisSize.y > targetSize.y;
	},
	
	/**Decreases font size until text fits, and return the highest necessary font size to fit, in pixels, or "false" if it was impossible to fit the text in the given bounds.
	*/
	fit: function fit(target) {
		var targetSize = (target || this.getParent()).getSize();
		var fontSize = this.getStyle('font-size').toInt();
		var couldFit;
		
		do {
			this.setStyle('font-size', fontSize + 'px');
			fontSize--;
			couldFit = fontSize > MIN_FONT_SIZE;
		} while (this.isBiggerThan(targetSize) && couldFit);
		
		return fontSize;
	}
});

})();