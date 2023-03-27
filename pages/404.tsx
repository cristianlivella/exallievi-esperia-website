import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <Layout>
      <Head>
        <title>404 - Pagina non trovata</title>
      </Head>

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        <div className='flex flex-col items-center md:px-32'>
          <Image
            src='/img/404.gif'
            alt='404 pagina non trovata'
            width={300}
            height={300}
          />

          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center'>
            Pagina non trovata
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600 text-center'>
            La pagina che hai cercato è sbagliata o non esiste.
          </p>

          <Link
            href='/'
            className='rounded-md bg-[#f25116] mt-10 px-3.5 py-2.5 text-sm font-semibold border border-[#f25116] text-white hover:bg-white hover:text-[#f25116] transition-colors duration-300'
          >
            Torna alla home
          </Link>
        </div>
      </main>
    </Layout>
  )
};

export default PageNotFound;
