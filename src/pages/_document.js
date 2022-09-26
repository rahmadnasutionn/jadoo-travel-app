import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {
    return ( <
        Html >
        <
        Head >
        <
        link rel = "preconnect"
        href = "https://fonts.googleapis.com" / >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossOrigin / >
        <
        link href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Volkhov:wght@400;700&display=swap"
        rel = "stylesheet" / >

        <
        link href = "https://fonts.googleapis.com/icon?family=Material+Icons"
        rel = "stylesheet" / >
        <
        /Head>{' '} <
        body >
        <
        Main / >
        <
        NextScript / >
        <
        /body>{' '} <
        /Html>
    );
}