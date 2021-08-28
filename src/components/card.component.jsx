export const Card = (props) => {
  return (
    <div>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
            <h1>{props.monster.name}</h1>
    </div>
  ) 
}
