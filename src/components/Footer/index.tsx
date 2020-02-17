import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2020</NoWrap>{' '}
                <NoWrap>
                    Hair 2 Love &mdash; Burwood One Store
                </NoWrap>
            </Info>
            <Info>172-210 Burwood Hwy, Burwood east, VIC 3151, shop G42</Info>
        </Container>
    );
};
