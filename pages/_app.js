import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import MainLayout from '@/Components/MainLayout'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"


export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
  )
}
