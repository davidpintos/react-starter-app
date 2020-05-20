import React from 'react';

import {lang} from './constants';

import './MainComponent.scss';

export const MainComponent = ({ handleChangeLanguage, currentLanguage }) => {

    return (
        <div className="general-container">
            <div className="menu">
                <div className="logo"></div>
                <ul>
                    <li className='active'>{lang[currentLanguage].PROFILE}</li>
                    <li>{lang[currentLanguage].HELP}</li>
                </ul>
            </div>
            <div className="main-container">
                <header className="main-header">
                    <div className="profile">
                        <h1>{lang[currentLanguage].PROFILE}</h1>
                    </div>
                    <div className="logout">
                        <a href="">{lang[currentLanguage].LOGOUT}</a>
                    </div>
                </header>

                <section className="container-profile">
                    <section className="details">
                        <div className="profile-logo">
                        </div>
                        <div className="edit-profile">
                            <a href="">{lang[currentLanguage].EDIT_PROFILE}</a>
                        </div>
                        <div className="fullname">
                            <label>{lang[currentLanguage].FULL_NAME}</label>
                            <span>super admin</span>
                        </div>
                        <div className="email">
                            <label>{lang[currentLanguage].EMAIL}</label>
                            <span>super@admin.com</span>
                        </div>
                        <div className="app-lang">
                            <a href="">{lang[currentLanguage].SELECT_APP_LANGUAGE}</a>
                            <select value={currentLanguage} onChange={handleChangeLanguage}>
                                <option value="en">{lang[currentLanguage].ENGLISH}</option>
                                <option value="es">{lang[currentLanguage].SPANISH}</option>
                            </select>
                        </div>
                    </section>
                    <section className="likes">
                        {lang[currentLanguage].RECENT_LIKES}
                    </section>
                </section>
            </div>
        </div>
    )
};
