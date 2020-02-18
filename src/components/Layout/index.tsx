import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Inner } from './style';
import { Props } from './type';
// import { Footer } from '../Footer';
import Footer from '../MyComponents/footer'
// import LeafletMap from '../MyComponents/leafletMap'

export const Layout: FunctionComponent<Props> = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Inner>{children}</Inner>
            <Footer />
        </ThemeContext.Provider>
    );
};
