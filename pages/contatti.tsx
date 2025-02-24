import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import { MdMail, MdPhone, MdLocationPin } from "react-icons/md"

const ContattiPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contatti - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Contatti"}
        description={
          "Tutte le informazioni utili per contattare o incontrare l'Associazione"
        }
        backgroundImage='/img/esterno.jpg'
        position='object-bottom'
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center'>
          {/* Map */}
          <div className='w-full lg:w-3/5'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.0449664402263!2d9.6811099!3d45.6900696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478150fd86bd386d%3A0xa0120dfa72164cd2!2sVia%20Mauro%20Gavazzeni%2C%2029%2C%2024125%20Bergamo%20BG!5e0!3m2!1sit!2sit!4v1677688882779!5m2!1sit!2sit'
              width='600'
              height='450'
              style={{ border: "0" }}
              allowFullScreen={undefined}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full'
            />
          </div>

          {/* Info */}
          <div className='flex flex-col sm:flex-row lg:flex-col sm:gap-x-20 lg:gap-x-0 mb-10 gap-y-10 lg:my-auto h-full justify-around'>
            <Link
              href='mailto:exallievi@itispaleocapa.it'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdMail className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Email</p>
              <p className='text-gray-600 dark:text-gray-200'>
                exallievi@itispaleocapa.it
              </p>
            </Link>
            <Link
              href='tel:035319388'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdPhone className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Telefono</p>
              <p className='text-gray-600 dark:text-gray-200'> 035 319388</p>
            </Link>
            <Link
              href='https://goo.gl/maps/JjHGPvEaM1fiAFwk7'
              rel='noopener noreferrer'
              target='_blank'
              className='group flex flex-col sm:items-center lg:items-start'
            >
              <MdLocationPin className='w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition duration-300 text-[#f25116]' />
              <p className='font-bold text-xl dark:text-white'>Indirizzo</p>
              <p className='text-gray-600 dark:text-gray-200'>
                Via Mauro Gavazzeni, 29, 24125 Bergamo
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContattiPage
