import type { Meta, StoryObj } from '@storybook/react';
import Pullscreen from './Pullscreen';

const meta: Meta<typeof Pullscreen> = {
  title: 'Screens/Pullscreen',
  component: Pullscreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Pullscreen>;

export const Default: Story = {};






