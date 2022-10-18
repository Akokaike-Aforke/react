function Star(props)
{
     const starIcon = props.isFilled ? `${require ('../Images/star-filled.jpg')}`  :  `${require ('../Images/star-empty.png')}`;
     //let starIcon = contact.isFavorite ? `${require ('../Images/star-filled.jpg')}`  :  `${require ('../Images/star-empty.png')}`;
    //  const starIcon = props.isFilled ? "url('http://clipart-library.com/clipart/2184482.htm')" : "url('http://clipart-library.com/clipart/2184497.htm')";
    //const starIcon = props.isFilled ? 'https://i.imgflip.com/1g8my4.jpg' : 'https://i.imgflip.com/30b1gx.jpg';
    
    
    return(
    <div>
        <img onClick={props.toggleFav} className='star' src={starIcon} />
    </div>)
}
export default Star;