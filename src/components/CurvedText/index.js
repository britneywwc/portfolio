import React from 'react';
import ReactCurvedText from 'react-curved-text';


const CurvedText = () => {
    return (
        <div className="curvedtext">
            <ReactCurvedText width='147'
                height='156'
                cx='178'
                cy='196'
                rx='160'
                ry='105'
                startOffset='43'
                reversed={true}
                text='britney wang'
                
                textProps={{"style": {"fontSize": "22"}}}
                textPathProps={{"fill": "#646466"}}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null} />

        </div>

    )
}

export default CurvedText