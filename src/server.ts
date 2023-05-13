import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();

app.use(express.json());
app.use(cors());

const apiGoogleTranslate = async function (detect_linguage: string, translate_to: string, text: string) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    const url: string = `https://translate.google.com.br/?sl=${detect_linguage}&tl=${translate_to}&text=${encodeURIComponent(text)}&op=translate`;
    await page.goto(url)
    await page.waitForTimeout(1500);

    const result: string | null = await page.evaluate((): string | null => {
        if (document.getElementsByClassName("ryNqvb")[0] !== undefined) {
            return document.getElementsByClassName("ryNqvb")[0].textContent;
        }
        return text;
    })

    browser.close()
    return result
}

app.get("/translate", async (req, res) => {
    const params = req.query;
    console.log("translating " + params.text as string + "...")
    const result = await apiGoogleTranslate(params.sl as string, params.tl as string, params.text as string);
    res.send(
        {
            status: 200,
            body: result,
            message: "success!"
        }
    )
})


app.listen(3000);
console.log("HTTP Server Running!");
