import './CardRating.scss';
import icon from '../../assets/icon-star.svg'
import Card from '../Card';

const CardRating = ({handleChange, handleClick}) => {
    const items =[1,2,3,4,5];
    return (
        <>
            <Card>
                <span className='span_star'>
                    
                    <img src={icon} className='img'/>

                </span>
                <h2>How did we do?</h2>
                <p>Please let us know we did with your support request.
                        All feedback is apperciated to help us improve our offering!</p> 
                <div className='left'>
                    <div key={1} className='rating'>
                        <input key={`circle1`} type="radio" id="1"  name="rating" value="1" onChange={handleChange}/>
                        <label htmlFor={1}>{1}</label>
                        <input key={`circle2`} type="radio" id="2"  name="rating" value="2" onChange={handleChange}/>
                        <label htmlFor={2}>{2}</label>
                        <input key={`circle3`} type="radio" id="3"  name="rating" value="3" onChange={handleChange}/>
                        <label htmlFor={3}>{3}</label>
                        <input key={`circle4`} type="radio" id="4"  name="rating" value="4" onChange={handleChange}/>
                        <label htmlFor={4}>{4}</label>
                        <input key={`circle5`} type="radio" id="5"  name="rating" value="5" onChange={handleChange}/>
                        <label htmlFor={5}>{5}</label>
                    </div>
                </div>

                <button onClick={handleClick}>
                    Submit
                </button>

                </Card>
        
                
            
        </>
    )
}

export default CardRating;