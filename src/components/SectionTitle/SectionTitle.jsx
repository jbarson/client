import React from 'react'
import './SectionTitle.scss'

export default function SectionTitle({title, description}) {
    return (
        <div className="section-title">
            <h2 className="section-title__name">{title}</h2>
            <p className="section-title__description">{description}</p>
        </div>
    )
}
