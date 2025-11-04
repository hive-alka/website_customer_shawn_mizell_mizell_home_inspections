import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={'/images/header/dark-logo.svg'}
        alt='Mizell Home Inspections Logo'
        width={150}
        height={68}
      />
    </>
  )
}

export default Logo
