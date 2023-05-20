const MarginContainer = ({ children }) => {
  return (
    <div className='mx-auto my-0 h-full' style={{ maxWidth: 1280 }}>
      {children}
    </div>
  )
}

export default MarginContainer
