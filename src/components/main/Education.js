import React from "react";

function Education(props) {
    const { educationPlaces, isChanging, setIsChanging, submitChanges } = props;

    return (
        isChanging === false ?
            <section className="education section" onClick={setIsChanging}>
                <h2 className="education__title title">Education</h2>
                <ul className="education__list list jsEducation">
                    {
                        educationPlaces.map(place => {
                            return (
                                <li className="list__item jsEducation" id={place.id} key={place.id}>
                                    <p className="list__desc jsEducation">{place.desc}</p>
                                    <h2 className="list__company jsEducation">{place.name}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="years">
                    {
                        educationPlaces.map(place => {
                            return (
                                <li className="years__year jsEducation" id={place.id} key={place.id}>{place.year}</li>
                            )
                        })
                    }
                </ul>
            </section>
            :
            <section className="education section section_changing" onKeyDown={submitChanges}>
                <h2 className="title">Education</h2>
                <ul className="education__list list jsEducation">
                    {
                        educationPlaces.map(place => {
                            return (
                                <li className="list__item" id={place.id} key={place.id}>
                                    <textarea className="list__desc list__desc_input jsEducation jsDesc" defaultValue={place.desc} ></textarea>
                                    <input className="list__company list__company_input jsEducation jsComp" defaultValue={place.name}></input>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="years">
                    {
                        educationPlaces.map(place => {
                            return (
                                <li className="years__year" id={place.id} key={place.id}>
                                    <input className="years__year jsEducation jsYear" defaultValue={place.year}></input>
                                </li>
                            )
                        })
                    }
                </ul>
            </section >
    )
}

export default Education