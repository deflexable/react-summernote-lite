import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import './glob';
import './dist-0.8.20/summernote-lite.min.css';
import './dist-0.8.20/summernote-lite.min';

const SummernoteLite = forwardRef((props, ref) => {

    const noteRef = useRef();

    useImperativeHandle(ref, () => ({
        executeCommand: function () {
           return window.$(noteRef.current).summernote(arguments);
        }
    }));

    useEffect(() => {
        const refactoredProps = { ...DEFAULT_PROPS, ...props };

        window.$(noteRef.current).summernote(refactoredProps);
    }, [props]);

    return (
        <form id="summer-form-note">
            <textarea ref={noteRef} name="editordata"></textarea>
        </form>
    )
});

const DEFAULT_PROPS = {
    placeholder: 'Write something here...',
    tabsize: 2,
    height: 380,
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