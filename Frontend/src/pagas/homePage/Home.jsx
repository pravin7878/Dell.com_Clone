import { CarouselPlugin } from '@/components/shadcn-component/Crousel'
import React from 'react'
import { CrouselOneCont } from './CrouselOneCont'
import Catagory from './catagory'
import { OffersPage } from './OffersPage'
import { CrouselTwo } from './CrouselTwo'

export const Home = () => {
  return (<>
    <section className='w-full m-auto'>
      <CrouselOneCont/>
      <Catagory/>
      <OffersPage/>
      <CrouselTwo/>
    </section>
  </>

  )
}
