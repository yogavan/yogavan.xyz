import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Yogavan AI',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
        href: '#features',
      },
      // {
      //   id: 'pricing',
      //   label: 'Pricing',
      // },
      {
        id: 'faq',
        label: 'FAQ',
        href: '#faq',
      },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://x.com/shikhar_s_">Shikhar Sharma</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:heemankv@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://x.com/YogavanAI',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/YogavanAI',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
