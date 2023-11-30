import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

import { Title } from '@components/Title'
import { Icon, Container, StatsContainer } from './styles'
import { BodyText } from '@components/BodyText'

interface StatiscticsHeaderProps {
  percentage: string
  isHealthy?: boolean
} 

export function StatisticsHeader({ percentage, isHealthy = false }: StatiscticsHeaderProps) {
  const { goBack } = useNavigation()

  return (
    <Container isHealthy={isHealthy}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="arrow-left" isHealthy={isHealthy} />
      </TouchableOpacity>

      <StatsContainer>  
        <Title title={`${percentage}%`} size='G' />
        <BodyText text='das refeições dentro da dieta' size="S" style={{marginTop: 2}} />
      </StatsContainer>
    </Container>
  )
}