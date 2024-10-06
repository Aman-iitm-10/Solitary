import img from '../assets/card-placeholder.png';
import './FeaturedEvents.css';
import Card from './eventsslidercard'
export default function Cards(){
  return (
    <div className="container">
      <div className="heading3 h3">
        Tp picks
      </div>
      <div className='row' style={{overflow : 'hidden'}}>
        <div className="container h-slider col-12" style={{display : 'flex', margin : '1.5%'}}>
          
          <Card img = {img} title = 'Pawn to pride' platform='GMeet' category='Game' date = "20 Aug" time="3:00PM" name="R K Minipini" reg="200"/>
          <Card img = {img} title = 'Pawn to pride' platform='GMeet' category='Game' date = "20 Aug" time="3:00PM" name="R K Minipini" reg="200"/>
          <Card img = {img} title = 'Pawn to pride' platform='GMeet' category='Game' date = "20 Aug" time="3:00PM" name="R K Minipini" reg="200"/>
          <Card img = {img} title = 'Pawn to pride' platform='GMeet' category='Game' date = "20 Aug" time="3:00PM" name="R K Minipini" reg="200"/>
        </div>
      </div>
    </div>
  )
}