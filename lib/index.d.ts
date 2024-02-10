import React from "react";

export interface DEFAULT_PROPS {
    placeholder: 'Write something here...';
    tabsize: 2;
    height: 370;
    blockquoteBreakingLevel: 0;
    fontNames: FontName[];
    toolbar: SummernoteLiteProps['toolbar'];
};

type FontName = 'Arial' | 'Brush Script MT' | 'Calibri' | 'Candara' | 'Century Gothic' | 'Consolas' | 'Dejavu Sans' | 'Franklin Gothic' | 'Gill Sans' | 'Geneva' | 'Georgia' | 'Garamond' | 'Helvetica' | 'Lucida Sans' | 'MS Sans Serif' | 'Neue Helvetica' | 'Optima' | 'Segoe UI' | 'Tahoma' | 'Trebuchet MS' | 'Verdana';

type Lang = 'ar-AR' | 'az-AZ' | 'bg-BG' | 'bn-BD' | 'ca-ES' | 'cs-CZ' | 'da-DK' | 'de-CH' | 'de-DE' | 'el-GR' | 'en-US' | 'es-ES' | 'es-EU' | 'fa-IR' | 'fi-FI' | 'fr-FR' | 'gl-ES' | 'he-IL' | 'hr-HR' | 'hu-HU' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'lt-LT' | 'lv-LV' | 'mn-MN' | 'nb-NO' | 'nl-NL' | 'pl-PL' | 'pt-BR' | 'pt-PT' | 'ro-RO' | 'ru-RU' | 'sk-SK' | 'sl-SI' | 'sr-RS' | 'sv-SE' | 'ta-IN' | 'th-TH' | 'tr-TR' | 'uk-UA' | 'uz-UZ' | 'vi-VN' | 'zh-CN' | 'zh-TW';

interface SummernoteLiteProps {
    placeholder?: string;
    tabsize: number;
    defaultCodeValue: string;
    useDiv: boolean;
    height: string | number;
    blockquoteBreakingLevel: number;
    fontNames: FontName[];
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
    ];
    lang: Lang
}

interface Commands {
    insertImage: (command: 'insertImage', url: string, callback: (image: Object) => void) => void
    toggleCodeview: (command: 'codeview.toggle') => void
    toggleFullscreen: (command: 'fullscreen.toggle') => void
    insertNode: (command: 'insertNode', node?: React.Component | any) => void
}

export default class SummernoteLite extends React.Component<SummernoteLiteProps>{
    summernote: Commands['insertImage'] | Commands['insertNode'] | Commands['toggleCodeview'] | Commands['toggleFullscreen'];
    getNoteRef: () => React.LegacyRef<HTMLTextAreaElement> | React.LegacyRef<HTMLDivElement>;
    getFormRef: () => React.LegacyRef<HTMLFormElement>;
}