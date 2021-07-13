import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import GenreList from '../../components/GenreList/GenreList';
import './GenrePage.scss';

export default function GenrePage() {
    document.title = "Browse Genres";
    
    return (
        <div className="genre-page">
             <SectionTitle 
                title="Genres"
                description="Browse all genres"
            />
            <GenreList />
        </div>
    )
}
