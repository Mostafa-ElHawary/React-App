import React from 'react'
import { Section , Container } from '../../globalStyle'
import { TechWrapper , TechBox , TechName , TechEx} from './TechnoStyle'
import { Data } from '../../data/TechnoData'
export const Techno = ()=>  {
  return (
    <Section>

      <Container>
      
        <TechWrapper>

           {Data.map((el)=> (

            <TechBox key={el.id}>
                
                <TechName>
                 {el.techName}
                </TechName>

                <TechEx color='#DBDBDB'>
                 {el.ex}

                </TechEx>
            
           </TechBox>

            
           ))}

        </TechWrapper>

      </Container>
      
    </Section>
  )
}

