import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://c0dewiz4rd010.github.io/al-quran-repo";
const BASE_PATH = "/al-quran-repo";
const VERSION = "20260503-seo1";
const ROOT = process.cwd();

function slugify(input) {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}

function routePath(route) {
    if (route.type === "home") return "/";
    if (route.type === "surah") return `/surah/${route.slug}/`;
    if (route.type === "juz") return `/juz/${route.number}/`;
    return "/";
}

function absoluteUrl(route) {
    const contentPath = routePath(route);
    return contentPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${contentPath}`;
}

function baseStructuredData(meta) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                name: meta.title,
                description: meta.description,
                url: meta.url,
                inLanguage: "de",
                isPartOf: SITE_URL + "/"
            },
            {
                "@type": "Book",
                name: "Al-Quran Al-Karim",
                alternateName: "Der edle Quran",
                genre: "ReligiousText",
                inLanguage: ["ar", "de"]
            }
        ]
    };
}

function buildIntroMarkup(meta) {
    const links = meta.links
        .map((link) => `
            <a class="seo-link-card" href="${link.href}">
                <strong>${link.title}</strong>
                <span>${link.description}</span>
            </a>`)
        .join("");

    return `
        <div class="seo-eyebrow">${meta.eyebrow}</div>
        <h2 class="seo-title">${meta.heading}</h2>
        <p class="seo-lead">${meta.lead}</p>
        <div class="seo-link-grid">${links}</div>`;
}

function updateAssetPaths(html, prefix) {
    return html
        .replaceAll('href="al-quran-favicon-package/', `href="${prefix}al-quran-favicon-package/`)
        .replaceAll('href="assets/', `href="${prefix}assets/`)
        .replaceAll('src="assets/', `src="${prefix}assets/`)
        .replaceAll('href="/surah/', `href="${prefix}surah/`)
        .replaceAll('href="/juz/', `href="${prefix}juz/`)
        .replaceAll('href="/sitemap.xml"', `href="${prefix}sitemap.xml"`)
        .replaceAll('href="/"', `href="${prefix}"`);
}

function applyMeta(html, meta) {
    return html
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
        .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${meta.description}">`)
        .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${meta.title}">`)
        .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${meta.description}">`)
        .replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${meta.ogType || "website"}">`)
        .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${meta.url}">`)
        .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${meta.title}">`)
        .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${meta.description}">`)
        .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${meta.url}">`)
        .replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="structured-data" type="application/ld+json">\n${JSON.stringify(meta.structuredData, null, 4)}\n    </script>`)
        .replace(/<section class="seo-intro" id="seoIntro" hidden>/, '<section class="seo-intro" id="seoIntro">')
        .replace(/<!-- SEO_INTRO_START -->[\s\S]*?<!-- SEO_INTRO_END -->/, `<!-- SEO_INTRO_START -->\n${buildIntroMarkup(meta)}\n        <!-- SEO_INTRO_END -->`);
}

function homeMeta() {
    const title = "Al-Quran Al-Karim | Quran online lesen und hoeren";
    const description = "Lies den edlen Quran online auf Deutsch mit Suren, Juz', Sajda-Versen, Audio-Rezitationen und schneller Navigation.";
    return {
        title,
        description,
        url: `${SITE_URL}/`,
        eyebrow: "Quran online auf Deutsch",
        heading: "Al-Quran Al-Karim mit Suren, Juz' und Audio",
        lead: "Diese statische Startseite macht die wichtigsten Inhalte fuer Suchmaschinen direkt sichtbar. Danach uebernimmt die App die interaktive Navigation zu allen 114 Suren, 30 Juz', Sajda-Versen, Lesezeichen und Audio-Rezitationen.",
        links: [
            { href: "/surah/1-al-faatiha/", title: "Sure 1: Al-Faatiha", description: "Direkt zur ersten Sure mit deutscher Uebersetzung." },
            { href: "/surah/2-al-baqarah/", title: "Sure 2: Al-Baqarah", description: "Die laengste Sure schnell aufrufen und lesen." },
            { href: "/juz/1/", title: "Juz' 1", description: "Zum ersten Abschnitt des Quran wechseln." },
            { href: "/sitemap.xml", title: "Sitemap", description: "Alle indexierbaren Quran-Seiten im Ueberblick." }
        ],
        structuredData: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    name: "Al-Quran Al-Karim",
                    url: `${SITE_URL}/`,
                    inLanguage: "de"
                },
                {
                    "@type": "Book",
                    name: "Al-Quran Al-Karim",
                    alternateName: "Der edle Quran",
                    description,
                    genre: "ReligiousText",
                    inLanguage: ["ar", "de"]
                }
            ]
        }
    };
}

async function main() {
    const response = await fetch("https://api.alquran.cloud/v1/surah");
    if (!response.ok) {
        throw new Error(`Failed to fetch surah metadata: ${response.status}`);
    }

    const payload = await response.json();
    const surahApiItems = payload.data;
    const surahs = surahApiItems.map((surah) => {
        const slug = `${surah.number}-${slugify(surah.englishName)}`;
        return {
            number: surah.number,
            slug,
            name: surah.name,
            englishName: surah.englishName,
            translationName: surah.englishNameTranslation,
            revelationType: surah.revelationType,
            ayahCount: surah.numberOfAyahs,
            path: routePath({ type: "surah", slug }),
            title: `Sure ${surah.number}: ${surah.englishName} | Quran online auf Deutsch`,
            description: `Lies Sure ${surah.number} ${surah.englishName} (${surah.name}) online mit deutscher Uebersetzung, Audio-Rezitation und direktem Zugriff auf alle ${surah.numberOfAyahs} Verse.`
        };
    });

    const juz = Array.from({ length: 30 }, (_, index) => {
        const number = index + 1;
        return {
            number,
            path: routePath({ type: "juz", number }),
            title: `Juz' ${number} | Quran online lesen und hoeren`,
            description: `Lies Juz' ${number} des Quran online mit deutscher Uebersetzung, Audio-Rezitation und schneller Navigation zwischen den enthaltenen Suren und Versen.`
        };
    });

    const seoData = {
        siteName: "Al-Quran Al-Karim",
        siteUrl: SITE_URL,
        basePath: BASE_PATH,
        version: VERSION,
        defaults: {
            title: homeMeta().title,
            description: homeMeta().description
        },
        surahs,
        juz
    };

    await mkdir(path.join(ROOT, "assets", "js"), { recursive: true });
    await writeFile(
        path.join(ROOT, "assets", "js", "seo-data.js"),
        `window.QURAN_SEO_DATA = ${JSON.stringify(seoData, null, 2)};\n`,
        "utf8"
    );

    const template = await readFile(path.join(ROOT, "index.html"), "utf8");

    await rm(path.join(ROOT, "surah"), { recursive: true, force: true });
    await rm(path.join(ROOT, "juz"), { recursive: true, force: true });
    await mkdir(path.join(ROOT, "surah"), { recursive: true });
    await mkdir(path.join(ROOT, "juz"), { recursive: true });

    for (const surah of surahs) {
        const prev = surahs[surah.number - 2];
        const next = surahs[surah.number];
        const meta = {
            title: surah.title,
            description: surah.description,
            url: absoluteUrl({ type: "surah", slug: surah.slug }),
            ogType: "article",
            eyebrow: `${surah.revelationType === "Meccan" ? "Mekkanische" : "Medinensische"} Sure`,
            heading: `Sure ${surah.number}: ${surah.englishName}`,
            lead: `${surah.translationName} mit ${surah.ayahCount} Versen. Die Seite liefert eine indexierbare Einfuehrung und oeffnet danach direkt die interaktive Quran-Ansicht mit deutscher Uebersetzung und Audio.`,
            links: [
                { href: "/", title: "Startseite", description: "Zur Uebersicht aller Suren und Juz'." },
                prev ? { href: prev.path, title: `Vorherige Sure: ${prev.englishName}`, description: `Direkt zu Sure ${prev.number}.` } : { href: "/juz/1/", title: "Juz' 1", description: "Zum ersten Juz' springen." },
                next ? { href: next.path, title: `Naechste Sure: ${next.englishName}`, description: `Direkt zu Sure ${next.number}.` } : { href: "/juz/30/", title: "Juz' 30", description: "Zum letzten Juz' springen." },
                { href: "/sitemap.xml", title: "Sitemap", description: "Alle Quran-Seiten im Ueberblick." }
            ],
            structuredData: (() => {
                const data = baseStructuredData({
                    title: surah.title,
                    description: surah.description,
                    url: absoluteUrl({ type: "surah", slug: surah.slug })
                });
                data["@graph"][0].about = {
                    "@type": "Chapter",
                    position: surah.number,
                    name: surah.englishName,
                    alternateName: surah.name
                };
                return data;
            })()
        };

        const targetDir = path.join(ROOT, "surah", surah.slug);
        await mkdir(targetDir, { recursive: true });
        let html = applyMeta(template, meta);
        html = updateAssetPaths(html, "../../");
        await writeFile(path.join(targetDir, "index.html"), html, "utf8");
    }

    for (const item of juz) {
        const prev = juz[item.number - 2];
        const next = juz[item.number];
        const meta = {
            title: item.title,
            description: item.description,
            url: absoluteUrl({ type: "juz", number: item.number }),
            eyebrow: "Quran nach Abschnitten lesen",
            heading: `Juz' ${item.number}`,
            lead: `Diese statische Seite macht Juz' ${item.number} direkt crawlbar. Nach dem Laden uebernimmt die App die detailreiche Ansicht mit arabischem Text, deutscher Uebersetzung und Audio.`,
            links: [
                { href: "/", title: "Startseite", description: "Zur Uebersicht aller Suren und Juz'." },
                prev ? { href: prev.path, title: `Vorheriger Juz': ${prev.number}`, description: `Direkt zu Juz' ${prev.number}.` } : { href: surahs[0].path, title: "Sure 1", description: "Direkt zur ersten Sure." },
                next ? { href: next.path, title: `Naechster Juz': ${next.number}`, description: `Direkt zu Juz' ${next.number}.` } : { href: surahs[surahs.length - 1].path, title: "Sure 114", description: "Direkt zur letzten Sure." },
                { href: "/sitemap.xml", title: "Sitemap", description: "Alle Quran-Seiten im Ueberblick." }
            ],
            structuredData: baseStructuredData({
                title: item.title,
                description: item.description,
                url: absoluteUrl({ type: "juz", number: item.number })
            })
        };

        const targetDir = path.join(ROOT, "juz", String(item.number));
        await mkdir(targetDir, { recursive: true });
        let html = applyMeta(template, meta);
        html = updateAssetPaths(html, "../../");
        await writeFile(path.join(targetDir, "index.html"), html, "utf8");
    }

    const sitemapUrls = [
        `${SITE_URL}/`,
        ...surahs.map((item) => `${SITE_URL}${item.path}`),
        ...juz.map((item) => `${SITE_URL}${item.path}`)
    ];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url.endsWith("/") && url === `${SITE_URL}/` ? "1.0" : "0.8"}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
    await writeFile(path.join(ROOT, "sitemap.xml"), sitemap, "utf8");

    const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
    await writeFile(path.join(ROOT, "robots.txt"), robots, "utf8");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
