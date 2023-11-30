import { StatisticsHeader } from '@components/StatisticsHeader'
import { Card, CardsColumnContainer, CardsContainer, Container } from './styles'
import { Title } from '@components/Title'
import { BodyText } from '@components/BodyText'

export function Statistics() {
  return (
    <>
      <StatisticsHeader percentage='90,84' isHealthy={true} />
      <Container>
        <Title title='Estatísticas gerais' size="XS" style={{textAlign: 'center'}} />

        <CardsContainer>
          <Card>
            <Title title='22' size="M" />
            <BodyText text='melhor sequência de pratos dentro da dieta' size='S' />
          </Card>
          <Card>
            <Title title='109' size="M" />
            <BodyText text='refeições registradas' size='S' />
          </Card>
          <CardsColumnContainer>
            <Card backgroundColor='green'>
              <Title title='109' size="M" />
              <BodyText text='refeições dentro da dieta' size='S' style={{textAlign: 'center'}} />
            </Card>
            <Card backgroundColor='red'>
              <Title title='109' size="M" />
              <BodyText text='refeições fora da dieta' size='S' style={{textAlign: 'center'}} />
            </Card>
          </CardsColumnContainer>
        </CardsContainer>
      </Container>
    </>
  )
}