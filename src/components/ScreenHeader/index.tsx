import { Title } from '@components/Title'
import { Container, Icon, EmptySpacer } from './styles'

interface ScreenHeaderProps {
  title: string
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Container>
      <Icon name="arrow-left" />
      <Title title={title} size='S' />
      <EmptySpacer />
    </Container>
  )
}