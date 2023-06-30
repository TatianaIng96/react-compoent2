import './CardThank.scss';
import Card from '../Card';
import img_thank from '../../assets/illustration-thank-you.svg'

const CardThank = ({rating}) => {
    return (
        <>      
            <Card>
                <img src={img_thank}/>
                <span className='stile-span'>
                    <h4> You selected {rating} out of 5</h4>
                </span>
                <h1 className='style-h1'> Thank you!</h1>
                <p className='stile-p'> 
                     We appreciate you taking the time to give a rating
                    If you ever nedd more support, don't hesitate to get in touch!
                </p>
            </Card>        
        </>
    )
}
export default CardThank;