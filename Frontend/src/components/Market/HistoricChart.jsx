import React from 'react'

const HistoricChart = (data) => {
    const Chartdata = data;
    const timestamps = [
        ...Chartdata.prices.map(([timestamp,val]) => timestamp),
        ...Chartdata.market_caps.map(([timestamp,val]) => timestamp),
        ...Chartdata.total_volumes.map(([timestamp,val]) => timestamp)
      ];
      
      // Remove duplicates
      const uniqueTimestamps = [...new Set(timestamps)];
      
      console.log(uniqueTimestamps);
  return (
    <div>HistoricChart</div>
  )
}

export default HistoricChart