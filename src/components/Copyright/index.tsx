import React, { FunctionComponent } from 'react';

import { CopyrightContainer } from './style';
import { Props } from './type';

export const Copyright: FunctionComponent<Props> = ({
    author,
    source,
    sourceText,
}) => {
    if (!author && !source) {
        return null;
    }

    return (
        <div/>
        // <CopyrightContainer>
        //     {!!author && <span>Photo by {author}</span>}
        //     {!!source && (
        //         <span>
        //             {author ? ' on ' : ''}
        //             <a href={source} target="_blank" rel="noopener noreferrer">
        //                 {sourceText || source}
        //             </a>
        //         </span>
        //     )}
        // </CopyrightContainer>
    );
};
