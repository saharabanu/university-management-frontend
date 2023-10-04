
export type IActionBarsType = {
title?: string;
children?: React.ReactElement | React.ReactNode
}

const ActionBars = ({title, children}: IActionBarsType) => {
  return (
    <>
    
    <h1>{title}</h1>
    <div style={{display:"flex"}}>{children}</div>
    </>
  )
}

export default ActionBars