import { Card } from "./card.component";
export const CardList = props => {
    return (
      <div>
          {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}/>
          ))}

        </div>
    ) 
  }
 // export default CardList
