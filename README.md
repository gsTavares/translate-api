# Simple web scrapping API for text translation

This API use `puppeteer` to web scrapping Google Translator web page. Obviously, this isn't recommended since the API identify the translated word by a `class` CSS selector. 
For translation full support and features, please use the [Google Cloud Translator](https://cloud.google.com/translate?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-SKWS-all-all-trial-p-dr-1605194-LUAC0014876&utm_content=text-ad-none-any-DEV_c-CRE_547331812702-ADGP_Hybrid%20%7C%20SKWS%20-%20PHR%20%7C%20Txt%20~%20AI%20&%20ML_Translation-KWID_43700066537017380-kwd-528115004378&utm_term=KW_cloud%20translation-ST_Cloud%20Translation&gclid=CjwKCAjw6vyiBhB_EiwAQJRoponJUmorJHO7hZlafXsJ5mhN2SLz3iZbkajYtf6c3zp1qGppPhIs6BoCAZoQAvD_BwE&gclsrc=aw.ds&hl=pt-br)

## Endpoints

### `/translate`
#### Request params
`sl: string` - The source language tag (ex. "en", "pt")

`tl: string` - The target language tag

`text: string` - Text to be translated. Be sure it laguage matches with the `sl` param for more precisly result

### Example
`http://localhost:3000/translate?text=Hello%20World&sl=en&tl=pt`

Have fun! :rocket:
