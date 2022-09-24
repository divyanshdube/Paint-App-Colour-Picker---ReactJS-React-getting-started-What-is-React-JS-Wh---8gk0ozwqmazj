import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={fix-box} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
