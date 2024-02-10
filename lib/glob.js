import jquery from "jquery";

try {
    window.jQuery = jquery;
    window.$ = jquery;
} catch (e) {}