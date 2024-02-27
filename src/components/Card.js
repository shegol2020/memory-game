export default function Card({item, isShown, isFinished, cardClick}){
    const {url, id, description} = item;
    const className = `card ${isShown ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
    const handleClick = () => {
        if(isShown || isFinished){ return }
        cardClick(id)
    }
    return <>
        <li className={className} onClick={handleClick}>
            <img src={url} width="204" height="144" alt={description}/>
        </li>
    </>
}