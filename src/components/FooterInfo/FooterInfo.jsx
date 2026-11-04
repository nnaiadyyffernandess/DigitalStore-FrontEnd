import { Link } from 'react-router-dom'

function FooterInfo({ title, informations }) {
  return (
    <div className="footer-info">
      <h4>{title}</h4>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>
            {item.link ? <Link to={item.link}>{item.text}</Link> : item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterInfo