import Cars from '@/components/Cars'
import dataCars from '@/components/DataCars'
import Foolter from '@/components/Foolter'

const Home = () => {
  return (
    <main className="md:max-w-4xl">
      <Cars dataCars={dataCars} />
      <Foolter />
    </main>
  )
}

export default Home
