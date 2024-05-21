import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.jpg'
import github_icon from '../Assets/github_icon.png'
import my_image from '../Assets/my_image.jpg'
const Footer =()=>{
  return(
    <div className="footer">
       <div className="footer-logo">
          <img src ={footer_logo} alt=''/>
          <p>SHOPPER</p>
       </div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
         <div className="footer-icons-container">
         <div className="footer-icons-container" style={{ backgroundColor: 'orange', display: 'flex' }}>
  <div className="footer-icon" style={{ marginRight: '10px', border: '1px solid black', padding: '5px' }}>
    <a href="https://www.linkedin.com/in/priya-choudhary-88a79a28b">
      <img src={linkedin_icon} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
    </a>
  </div>
  <div className="footer-icon" style={{ marginRight: '10px', border: '1px solid black', padding: '5px' }}>
    <a href="https://github.com/priya281220/priya281220">
      <img src={github_icon} alt="GitHub" style={{ width: '30px', height: '30px' }} />
    </a>
  </div>
  <div className="footer-icon" style={{ marginRight: '10px', border: '1px solid black', padding: '5px' }}>
    <a href="your_whatsapp_profile_url">
      <img src={whatsapp_icon} alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
    </a>
  </div>
  <div className="footer-icon" style={{ border: '1px solid black', padding: '5px' }}>
    <a href="your_instagram_profile_url">
      <img src={instagram_icon} alt="Instagram" style={{ width: '30px', height: '30px' }} />
    </a>
  </div>
</div>
</div>

<div style={{ position: 'fixed', bottom: '50%', left: '10px', transform: 'translateY(50%)', display: 'flex', alignItems: 'center' }}>
  <div style={{ position: 'absolute', top: '10px', left: '10px', width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '3px solid black' }}>
    <img src={my_image} alt="Signature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
  <div style={{ position: 'absolute', top: '91px', left: '10px', textAlign: 'center', color: 'white', backgroundColor: 'black', padding: '5px', border: '3px solid darkorange', textShadow: '1px 1px 3px yellow' }}>
    Created by <span style={{ fontWeight: 'bold' }}>Priya Choudhary</span>
  </div>
</div>

















        
       </div>
       <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 All Right Reserved</p>
       </div>
    </div>
  )
}

export default Footer