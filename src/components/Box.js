const Box = ({ width, height, color, borderRadius, padding, margin }) => {
  const style = {
    width: (width !== undefined ? width : "10vmin"),
    height: (height !== undefined ? height : "10vmin"),
    backgroundColor: (color !== undefined ? color : "black"),
    borderRadius: (borderRadius !== undefined ? borderRadius : "0"),
    padding: (padding !== undefined ? padding : "0"),
    margin: (margin !== undefined ? margin : "0"),
  }

  return <div style={style}/>
}

export default Box;