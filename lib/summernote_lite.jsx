import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import './glob';

if (
    typeof window !== 'undefined' &&
    typeof location !== 'undefined' &&
    typeof document !== 'undefined'
) {
    require('./dist/summernote-lite.min.js');
}

const SummernoteLite = forwardRef((props, ref) => {

    const noteRef = useRef(),
        formRef = useRef(),
        hasMounted = useRef();

    useImperativeHandle(ref, () => ({
        summernote: function () {
            return window.$(noteRef.current).summernote(...[...arguments]);
        },
        getNoteRef: () => noteRef.current,
        getFormRef: () => formRef.current
    }));

    useEffect(() => {
        const refactoredProps = { ...DEFAULT_PROPS, ...props };

        window.$(noteRef.current).summernote(refactoredProps);
    }, []);

    useEffect(() => {
        if (hasMounted.current) {
            window.$(noteRef.current).summernote({ callbacks: props.callbacks });
        }
        hasMounted.current = true;
    }, [props.callbacks]);

    useEffect(() => {
        if (typeof props.defaultCodeValue === 'string' &&
            props.defaultCodeValue !== window.$(noteRef.current).val())
            window.$(noteRef.current).summernote('code', props.defaultCodeValue || '<p><br></p>');
    }, [props.defaultCodeValue]);

    if (typeof props.useDiv === 'boolean' && props.useDiv)
        return <div ref={noteRef} />

    return (
        <form ref={formRef}>
            <textarea ref={noteRef}></textarea>
        </form>
    );
});

const DEFAULT_PROPS = {
    placeholder: 'Write something here...',
    tabsize: 2,
    height: 370,
    blockquoteBreakingLevel: 0,
    fontNames: [
        'Arial',
        'Brush Script MT',
        'Calibri',
        'Candara',
        'Century Gothic',
        'Consolas',
        'Dejavu Sans',
        'Franklin Gothic',
        'Gill Sans',
        'Geneva',
        'Georgia',
        'Garamond',
        'Helvetica',
        'Lucida Sans',
        'MS Sans Serif',
        'Neue Helvetica',
        'Optima',
        'Segoe UI',
        'Tahoma',
        'Trebuchet MS',
        'Verdana'
    ],
    toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear', 'strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video', 'hr']],
        ['view', ['fullscreen', 'codeview', 'help']]
    ]
};

export default SummernoteLite;