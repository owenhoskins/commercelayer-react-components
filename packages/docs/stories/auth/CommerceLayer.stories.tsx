import { ComponentMeta, type ComponentStory } from '@storybook/react'

import CommerceLayer from '@commercelayer/react-components/auth/CommerceLayer'

// const CommerceLayer = (): JSX.Element => <>Ciao</>

const Story: ComponentMeta<typeof CommerceLayer> = {
  title: 'CommerceLayer',
  component: CommerceLayer
}

export default Story

const Template: ComponentStory<typeof CommerceLayer> = (args) => (
  <CommerceLayer {...args} />
)

export const Primary = Template.bind({ accessToken: '', endpoint: '' })
