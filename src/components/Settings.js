import React from 'react';

import Range from './Range';
import Reset from './Reset';
function Settings({settings, handleChange, handleReset, selectedFilter, updateSettings}) {
	const {contrast, hue, brightness, saturate, sepia} = settings;

	return (
		<aside className="settings">
            <Range
                name="brightness"
                min={0}
                max={200}
                value={brightness}
                onChange={handleChange} />

			<Range
                name="contrast"
                value={contrast}
                min={0}
                max={200}
                onChange={handleChange} />

            <Range
                name="hue"
                value={hue}
                min={-360}
                max={360}
                onChange={handleChange} />

            <Range
                name="saturate"
                min={0}
                max={100}
                value={saturate}
                onChange={handleChange} />

            <Range
                name="sepia"
                min={0}
                max={100}
                value={sepia}
                onChange={handleChange} /> 
            <Reset
                name="Reset"
                type="reset"
                settings={{ contrast: 100, hue: 0, brightness: 100, saturate: 100, sepia: 0 }}
                selected={selectedFilter === 'Reset'}
                onClick={updateSettings} />

        </aside>
	);
}

export default Settings;

