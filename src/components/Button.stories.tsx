import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import arrowRight from '../assets/icon-arrow-right.svg?url';
import arrowLeft from '../assets/icon-arrow-left.svg?url';
import homeIcon from '../assets/icon-home.svg?url';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
      description: 'Render as button or anchor',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Start: Story = {
  args: {
    as: 'a',
    href: '/select',
    className: 'flex items-center gap-2',
    children: (
      <>
        START <img src={arrowRight} alt="Arrow Right" className="w-11 h-4" />
      </>
    ),
  },
};

export const Back: Story = {
  args: {
    as: 'a',
    href: '/select',
    className: 'flex items-center gap-2',
    children: (
      <>
        <img src={arrowLeft} alt="Back arrow" className="w-[42px] h-[18px]" />
        <span className="text-details">BACK</span>
      </>
    ),
  },
};

export const Home: Story = {
  args: {
    as: 'a',
    href: '/',
    className: 'flex items-center gap-2',
    children: (
      <>
        <img src={homeIcon} alt="Home" className="w-[29px] h-[29px]" />
        HOME
      </>
    ),
  },
};

export const Espanol: Story = {
  args: {
    children: 'Español',
    onClick: () => console.log('Español clicked'),
  },
};


