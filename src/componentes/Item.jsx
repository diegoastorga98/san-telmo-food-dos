function Item({art}) {
  return (
    <div style={{border:'solid green 5px', margin:'10px', padding:'5px'}}>
          <div>{art.titulo}</div>
          <div>${art.precio}</div>
          <img  alt=""></img>
    </div>
  )
}
export default Item