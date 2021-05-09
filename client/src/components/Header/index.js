import shopifyBag from '../../images/shopify-logo.png'

import '../../utils/styles/style.css'

const Header = () => {

  return (
    <header className="bg-green padding-t-b text-center">
      <img src={shopifyBag} alt="shopify bag" className="logo-img" />
      <h2 className='text-center'>Ecommerce Movie Awards Nominations</h2>
    </header>
  )
}

export default Header;