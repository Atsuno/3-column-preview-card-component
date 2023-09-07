import { DataCar } from '@/components/DataCars'
import { bigShouldersDisplay, lexendDeca } from '@/libs/fonts'

type Props = {
  dataCars: Array<DataCar>
}

const Cars = (props: Props) => {
  const { dataCars } = props

  const carList = dataCars.map(
    ({ name, detail, image, imageAlt, colorbg, colorTextButton }) => {
      return (
        <div
          key={name}
          className={`${colorbg} flex flex-col gap-7 px-14 py-12`}
        >
          <picture>
            <img src={image} alt={imageAlt} />
          </picture>
          <h1
            className={`${bigShouldersDisplay.className} text-3xl uppercase text-paragraphs`}
          >
            {name}
          </h1>
          <p className={`${lexendDeca.className} text-paragraphs`}>{detail}</p>
          <button
            className={`${colorTextButton} w-fit rounded-3xl bg-rear px-7 py-3 font-bold`}
          >
            Learn More
          </button>
        </div>
      )
    },
  )
  return (
    <section
      className={`boxRounded flex flex-col md:flex-row first:[&_button]:text-primaly`}
    >
      {carList}
    </section>
  )
}

export default Cars
