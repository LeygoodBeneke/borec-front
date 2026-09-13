import { Link } from 'react-router-dom'
import { Article } from '../components/PageBlocks'

export default function ArticlePage({ crumbLabel, h1, html }) {
  return (
    <div className="layout column layout_214">
      <div className="widget-170 path widget-type-path">
        <Link to="/">Завод Борец</Link> \ {crumbLabel}
      </div>
      <h1 className="h1 widget-171 widget-type-h1">{h1}</h1>
      <Article html={html} />
    </div>
  )
}
