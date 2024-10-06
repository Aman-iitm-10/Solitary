export default function Card(props){
  return (
      <div className="card col-5">
        <div style={{display:'flex'}}>
          <div className="col-4" style={{display : 'grid'}}>
            <img className='img-responsive center-block' src={props.img} alt="Image not found" height={'90%'} width={'90%'} style={{margin : 'auto auto'}}/>
          </div>
  
          <div className="col-8">
            <div className="topic row">
              <div className='col-12 h4'>
                {props.title}
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                {props.platform}
              </div>
              <div className='col-6'>
                {props.category}
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                {props.date}
              </div>
              <div className='col-6'>
                {props.time}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                {props.name}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                {props.reg}+ Registraion
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}