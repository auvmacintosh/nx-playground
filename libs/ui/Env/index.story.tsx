import { Env } from '.'
import type { Meta } from '@storybook/react'

// export const Default = (): JSX.Element => <Env />
export const Default = (): JSX.Element => <div nad={df}>abc</div>

const meta: Meta = {
  component: Env,
  title: 'abc',
  // parameters: {
  //   actions: {
  //     argTypes: 'onClick',
  //     handles: ['click'],
  //   },
  //   layout: 'fullscreen',
  // },
  // argTypes: {
  //   onClick: { table: { disable: true } },
  // },
  // decorators: [
  //   (Story: () => JSX.Element): JSX.Element => {
  //     return (
  //       <div style={wrapperStyle}>
  //         <Story />
  //       </div>
  //     )
  //   },
  // ],
}

export default meta
