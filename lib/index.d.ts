import React from "react";

export interface DEFAULT_PROPS {
    placeholder: 'Write something here...';
    tabsize: 2;
    height: 370;
    blockquoteBreakingLevel: 0;
    fontNames: FontName[];
    toolbar: SummernoteLiteProps['toolbar'];
};

type FontName = 'Arial Black' | 'Arial' | 'Brush Script MT' | 'Calibri' | 'Candara' | 'Century Gothic' | 'Consolas' | 'Comic Sans MS' | 'Courier New' | 'Dejavu Sans' | 'Franklin Gothic' | 'Gill Sans' | 'Geneva' | 'Georgia' | 'Garamond' | 'Helvetica' | 'Helvetica Neue' | 'Impact' | 'Lucida Grande' | 'Lucida Sans' | 'MS Sans Serif' | 'Neue Helvetica' | 'Open Sans' | 'Optima' | 'Segoe UI' | 'Tahoma' | 'Times New Roman' | 'Trebuchet MS' | 'Verdana';

type Lang = 'ar-AR' | 'az-AZ' | 'bg-BG' | 'bn-BD' | 'ca-ES' | 'cs-CZ' | 'da-DK' | 'de-CH' | 'de-DE' | 'el-GR' | 'en-US' | 'es-ES' | 'es-EU' | 'fa-IR' | 'fi-FI' | 'fr-FR' | 'gl-ES' | 'he-IL' | 'hr-HR' | 'hu-HU' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'lt-LT' | 'lv-LV' | 'mn-MN' | 'nb-NO' | 'nl-NL' | 'pl-PL' | 'pt-BR' | 'pt-PT' | 'ro-RO' | 'ru-RU' | 'sk-SK' | 'sl-SI' | 'sr-RS' | 'sv-SE' | 'ta-IN' | 'th-TH' | 'tr-TR' | 'uk-UA' | 'uz-UZ' | 'vi-VN' | 'zh-CN' | 'zh-TW';

type ToolbarItem = 
  ['style', ('style')[]] |
  ['font', ('bold' | 'underline' | 'clear' | 'strikethrough' | 'superscript' | 'subscript')[]] |
  ['fontsize', ('fontsize')[]] |
  ['fontname', ('fontname')[]] |
  ['color', ('color')[]] |
  ['para', ('ul' | 'ol' | 'paragraph')[]] |
  ['height', ('height')[]] |
  ['table', ('table')[]] |
  ['insert', ('link' | 'picture' | 'video' | 'hr')[]] |
  ['view', ('fullscreen' | 'codeview' | 'help')[]];

interface SummernoteLiteProps {
    placeholder?: string;
    tabsize: number;
    defaultCodeValue: string;
    useDiv: boolean;
    height: string | number;
    dialogsInBody: boolean;
    blockquoteBreakingLevel: number;
    fontNames: FontName[];
    toolbar: ToolbarItem[];
    lang: Lang;
    callbacks: {
        onChange: (contents: string, $editable: any) => void;
        onImageUpload?: (files: File[]) => void;
    };
}

interface Commands {
    insertImage: (command: 'insertImage', url: string, callback?: (image: Object) => void) => void;
    toggleCodeview: (command: 'codeview.toggle') => void;
    toggleFullscreen: (command: 'fullscreen.toggle') => void;
    insertNode: (command: 'insertNode', node?: React.Component | any) => void;
}

type SummernoteCommandFunction = {
    [K in keyof Commands]: Commands[K];
};

export default class SummernoteLite extends React.Component<SummernoteLiteProps> {
    summernote: (command: keyof Commands, ...args: any[]) => void;
    getNoteRef: () => React.LegacyRef<HTMLTextAreaElement> | React.LegacyRef<HTMLDivElement>;
    getFormRef: () => React.LegacyRef<HTMLFormElement>;
}