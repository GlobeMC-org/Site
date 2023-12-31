import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ReactMarkdown from 'react-markdown';
import './main.css';

const MDR = ({ url }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (Cookies.get("anim") !== "false") {
            window.location.href = "/anim";
        }

        fetch(url)
            .then(response => response.text())
            .then(data => setMarkdownContent(data))
            .catch(error => console.error('Error fetching markdown content:', error));
    }, [url]);

    return (
        <>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </>
    );
};

export default MDR;
