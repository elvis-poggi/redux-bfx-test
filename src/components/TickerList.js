// import React from 'react'
// import Ticker from './Ticker'
// import Panel from './Panel'
// import Cell from './Cell'

// const style = {
//   display: 'inline-block'
// }

// const TickerList = ({data, selected, setPair}) => {
//   const keys = Object.keys(data)
//   return (
//     <Panel>
//       <p>TICKER</p>
//       <div style={style}>
//         <Cell isHeader>SYMBOL</Cell>
//         <Cell isHeader>LAST</Cell>
//         <Cell isHeader>24HR</Cell>
//         <Cell isHeader>VOLUME</Cell>
//       </div>
//       <div style={style}>
//         {keys.map(key => (
//           <Ticker data={data[key]} key={key} selected={selected} setPair={setPair} />
//         ))}
//         {/* <`Ticker` data={data[keys]} selected={selected} setPair={setPair} /> */}
//       </div>
//     </Panel>
//   )
// }
// export default TickerList
