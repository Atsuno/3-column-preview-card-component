export type DataCar = {
  name: string
  detail: string
  image: string
  imageAlt: string
  colorbg: string
  colorTextButton: string
}

const dataCars: Array<DataCar> = [
  {
    name: 'Sedans',
    detail:
      'Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.',
    image: './images/icon-sedans.svg',
    imageAlt: 'icon sedans',
    colorbg: 'bg-primaly',
    colorTextButton: 'text-primaly',
  },
  {
    name: 'SUVs',
    detail:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    image: './images/icon-suvs.svg',
    imageAlt: 'icon suvs',
    colorbg: 'bg-secondly',
    colorTextButton: 'text-secondly',
  },
  {
    name: 'Luxury',
    detail:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    image: './images/icon-luxury.svg',
    imageAlt: 'icon luxury',
    colorbg: 'bg-thirdly',
    colorTextButton: 'text-thirdly',
  },
]
export default dataCars
