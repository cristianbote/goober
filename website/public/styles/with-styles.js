import { GlobalStyles } from './global';
import { extractCss } from 'goober';

function Styles() {
    let val = extractCss();
    return <style id="_goober" dangerouslySetInnerHTML={{ __html: ' ' + val }} />;
}

export const WithStyles = ({ children }) => (
    <>
        <GlobalStyles />
        {children}
        {typeof window == 'undefined' ? <Styles /> : null}
    </>
);
