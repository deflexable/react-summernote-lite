import jquery from "jquery";

try {
    if (!document || !window) throw null;
    window.jQuery = jquery;
    window.$ = jquery;
} catch (e) { }