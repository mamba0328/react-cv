import React from 'react';

function Header(props) {

    const { fname, title, email, residence, isChanging, setIsChanging } = props;
    return isChanging ?
        (
            <header className='header header_changing jsHeader'>
                <div className='header__personal-info' >
                    <input type='text' defaultValue={fname} className='input header__fname jsHeader' id='jsFName' />
                    <input type='text' defaultValue={title} className='input header__title jsHeader' id='jsTitle' />
                </div>
                <div className='header__contacts'>
                    <input type='text' defaultValue={residence} className='input header__adress jsHeader' id='jsResidence' />
                    <input type='email' defaultValue={email} className='input header__email jsHeader' id='jsEmail' />
                </div>
            </header>
        )
        :
        (
            <header className='header jsHeader' onClick={setIsChanging}>
                <div className='header__personal-info'>
                    <h1 className='header__fname  jsHeader'>{fname}</h1>
                    <p className='header__title  jsHeader'>{title}</p>
                </div>
                <div className='header__contacts'>
                    <p className='header__adress  jsHeader'>{residence}</p>
                    <p className='header__email  jsHeader'>{email}</p>
                </div>
            </header>
        )

}

export default Header 