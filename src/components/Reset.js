import React from 'react';

function getFilterCSSStyles(settings) {
	let filterString = '';

	for (let prop in settings) {
		if(settings.hasOwnProperty(prop)) {
			switch (prop) {
				case 'hue':
				filterString += 'hue-rotate(' + settings[prop] + 'deg)';
				break;
			default:
				filterString += prop + '(' + settings[prop] + '%) ';
			}
		}
	}
	return filterString;
}

function Reset({ name, type, settings, selected, onClick = () => {} }) {
	    const filter = getFilterCSSStyles(settings);
	    const style = { filter };
	    const className = `filter${selected ? ' selected' : ''}`;
	return (
		<div className={className} onClick={() => onClick(name, settings)}>
			<input className="reset_settings" style={style}
			 type={type}
			 onClick={onClick} />
		</div>

	);
        
}

export default Reset; 