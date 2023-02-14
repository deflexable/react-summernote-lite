import React from "react";

type FontName = 'Arial' | 'Brush Script MT' | 'Calibri' | 'Candara' | 'Century Gothic' | 'Consolas' | 'Dejavu Sans' | 'Franklin Gothic' | 'Gill Sans' | 'Geneva' | 'Georgia' | 'Garamond' | 'Helvetica' | 'Lucida Sans' | 'MS Sans Serif' | 'Neue Helvetica' | 'Optima' | 'Segoe UI' | 'Tahoma' | 'Trebuchet MS' | 'Verdana';

interface SummernoteLiteProps {
    placeholder?: string;
    tabsize: number,
    height: string | number,
    blockquoteBreakingLevel: number,
    fontNames: FontName[],
    toolbar: [
        ['style', ['style']] |
        ['font', ['bold' | 'underline' | 'clear' | 'strikethrough' | 'superscript' | 'subscript']] |
        ['fontsize', ['fontsize']] |
        ['fontname', ['fontname']] |
        ['color', ['color']] |
        ['para', ['ul' | 'ol' | 'paragraph']] |
        ['table', ['table']] |
        ['insert', ['link' | 'picture' | 'video' | 'hr']] |
        ['view', ['fullscreen' | 'codeview' | 'help']]
    ]
}

interface Commands {
    insertImage: (command: 'insertImage', url: string, callback: (image: Object) => void) => void
    toggleCodeview: (command: 'codeview.toggle') => void
    toggleFullscreen: (command: 'fullscreen.toggle') => void
    insertNode: (command: 'insertNode', node?: React.Component | any) => void
}

export default class SummernoteLite extends React.Component<SummernoteLiteProps>{
    executeCommand: Commands['insertImage'] | Commands['insertNode'] | Commands['toggleCodeview'] | Commands['toggleFullscreen']
};