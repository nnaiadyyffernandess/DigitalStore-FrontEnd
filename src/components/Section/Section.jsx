import { Link } from 'react-router-dom'
import './Section.css'

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section container">
      <div className={`section-header ${titleAlign}`}>
        <h2>{title}</h2>
        {link && (
          <Link to={link.href} className="section-link">
            {link.text} →
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}

export default Section