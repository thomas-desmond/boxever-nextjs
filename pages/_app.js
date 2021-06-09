import '../styles/globals.css'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const boxever_client_key = process.env.BOXEVER_KEY;

    console.log(boxever_client_key);
    // Manual DOM change to add Boxever content
    const boxeverSettingsScriptElement = document.createElement("script");
    boxeverSettingsScriptElement.innerText = `var _boxeverq = _boxeverq || []; var _boxever_settings = {}; _boxever_settings.client_key="${boxever_client_key}"; _boxever_settings.target="https://api.boxever.com/v1.2"; _boxever_settings.web_flow_target="https://d35vb5cccm4xzp.cloudfront.net";_boxever_settings.cookie_domain="localhost:3000";_boxever_settings.pointOfSale="tworichardsmusicstore";`
    document.getElementsByTagName('head')[0].append(boxeverSettingsScriptElement);
  
    const boxeverLibraryScriptElement = document.createElement("script");
    boxeverLibraryScriptElement.type = "text/javascript";
    boxeverLibraryScriptElement.src = "https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.1.js";
    document.getElementsByTagName('head')[0].append(boxeverLibraryScriptElement);
  })

  return <Component {...pageProps} />
}

export default MyApp
