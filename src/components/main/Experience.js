import React from "react";

function Experience(props) {
    const { workPlaces, isChanging, setIsChanging, submitChanges } = props;

    return (
        isChanging === false ?
            <section className="experience section" onClick={setIsChanging}>
                <h2 className="experience__title title">Experience</h2>
                <ul className="experience__list list jsWorkPlaces">
                    {
                        workPlaces.map(place => {
                            return (
                                <li className="list__item jsWorkPlaces" id={place.id} key={place.id}>
                                    <p className="list__desc jsWorkPlaces">{place.desc}</p>
                                    <h2 className="list__company jsWorkPlaces">{place.company}</h2>
                                    <p className='list__position jsWorkPlaces'>{place.title}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="years">
                    {
                        workPlaces.map(place => {
                            return (
                                <li className="years__year jsWorkPlaces" id={place.id} key={place.id}>{place.year}</li>
                            )
                        })
                    }
                </ul>
            </section>
            :
            <section className="experience section section_changing" onKeyDown={submitChanges}>
                <h2 className="title">Experience</h2>
                <ul className="experience__list list jsWorkPlaces">
                    {
                        workPlaces.map(place => {
                            return (
                                <li className="list__item" id={place.id} key={place.id}>
                                    <textarea className="list__desc list__desc_input jsExperience jsDesc" defaultValue={place.desc} ></textarea>
                                    <input className="list__company list__company_input jsExperience jsComp" defaultValue={place.company}></input>
                                    <input className='list__position list__position_input jsExperience jsTitle' defaultValue={place.title}></input>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="years">
                    {
                        workPlaces.map(place => {
                            return (
                                <li className="years__year" id={place.id} key={place.id}>
                                    <input className="years__year jsExperience jsYear" defaultValue={place.year}></input>
                                </li>
                            )
                        })
                    }
                </ul>
            </section >
    )
}

export default Experience 