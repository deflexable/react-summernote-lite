import jquery from "jquery";

try {
    if (!document || !window) return;
    window.jQuery = jquery;
    window.$ = jquery;
} catch (e) { }