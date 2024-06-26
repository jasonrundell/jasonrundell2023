import { Main } from '@jasonrundell/dropship'
import Menu from '@jasonrundell/react-mega-menu'
import Footer from './Footer'
import Meta from './Meta'
// import Navigation from './Navigation'

const menuConfig = {
  topbar: {
    id: 'topbar',
    logo: {
      src: '/top-bar-icon.png',
      alt: 'Placeholder Logo',
      rel: 'home',
    },
    title: 'Jason Rundell',
  },
  menu: {
    items: [
      {
        label: 'Home',
        type: 'main',
        url: '/#home',
      },
      {
        label: 'Blog',
        type: 'main',
        url: '/#blog',
      },
      {
        label: 'Skills',
        type: 'main',
        url: '/#skills',
      },
      {
        label: 'Experience',
        type: 'main',
        url: '/#experience',
      },
      {
        label: 'References',
        type: 'main',
        url: '/#references',
      },
      {
        label: 'Contact',
        type: 'main',
        url: '/#contact',
      },
      {
        label: 'Download Resume',
        type: 'main',
        url: '/jason-rundell-web-developer-resume.pdf',
      },
    ],
  },
}

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div>
          <Menu menuConfig={menuConfig} />
        </div>
        <Main>{children}</Main>
      </div>
      <Footer />
    </>
  )
}
