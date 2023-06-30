import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}



