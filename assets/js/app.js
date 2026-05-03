(function () {
    const i18n = {
        de: {
            appTitle: "Al-Quran",
            appSubtitle: "Al-Karim",
            searchPlaceholder: "Sure oder Vers suchen...",
            tabSurahs: "Suren",
            tabJuz: "Juz'",
            tabSajda: "Sajda",
            tabBookmarks: "Gemerkt",
            headingSurahs: "Die 114 Suren",
            headingJuz: "Die 30 Juz'",
            headingSajda: "Niederwerfungsverse (Sajda)",
            headingBookmarks: "Deine Lesezeichen",
            headingSettings: "Einstellungen",
            btnBack: "Zurueck",
            btnClose: "Schliessen",
            btnBookmark: "Lesezeichen",
            navSurahs: "Suren",
            navJuz: "Juz'",
            navSajda: "Sajda",
            labelUILanguage: "UI-Sprache",
            labelTranslation: "Uebersetzung",
            labelReciter: "Rezitator (Audio)",
            labelArabicFont: "Arabische Schrift",
            bookmarkAdded: "Lesezeichen gesetzt",
            bookmarkRemoved: "Lesezeichen entfernt",
            translationUpdated: "Uebersetzung aktualisiert",
            reciterUpdated: "Rezitator aktualisiert",
            fontUpdated: "Arabische Schrift aktualisiert",
            languageUpdated: "Sprache aktualisiert",
            loadError: "Fehler beim Laden.",
            ayahLoadError: "Fehler beim Laden der Verse.",
            audioLoadError: "Audio nicht abspielbar.",
            noBookmarks: "Noch keine Lesezeichen. Oeffne eine Sure und tippe auf das Lesezeichen-Symbol.",
            emptySajda: "Keine Sajda-Daten geladen.",
            emptySearch: "Keine Ergebnisse.",
            loadingSearch: "Suchindex wird geladen...",
            verses: "Verse",
            mecca: "Mekka",
            medina: "Medina",
            listen: "Anhoeren",
            pause: "Pause",
            sajdaLabel: "Sajda",
            juzDetail: "Juz'",
            surah: "Sure",
            ayah: "Vers",
            introEyebrowHome: "Quran online auf Deutsch",
            introTitleHome: "Al-Quran Al-Karim mit Suren, Juz' und Audio",
            introLeadHome: "Lies den Quran online mit deutscher Uebersetzung, Audio-Rezitationen, Sajda-Versen und schneller Navigation zwischen allen 114 Suren.",
            introEyebrowSurah: "Sure im Quran",
            introLeadSurah: "Direkter Zugriff auf die Sure mit deutscher Uebersetzung, Audio-Rezitation und schneller Versnavigation.",
            introEyebrowJuz: "Quran nach Abschnitten lesen",
            introLeadJuz: "Direkter Zugriff auf den Juz' mit deutscher Uebersetzung, arabischem Text und Audio-Rezitation.",
            introLinkHome: "Startseite",
            introLinkSitemap: "Sitemap",
            introLinkPrevSurah: "Vorherige Sure",
            introLinkNextSurah: "Naechste Sure",
            introLinkPrevJuz: "Vorheriger Juz'",
            introLinkNextJuz: "Naechster Juz'",
            introLinkSurahOne: "Sure 1",
            introLinkJuzOne: "Juz' 1",
            introLinkJuzThirty: "Juz' 30",
            searchCategorySurah: "Suren",
            searchCategoryAyah: "Verse"
        },
        en: {
            appTitle: "Al-Quran",
            appSubtitle: "Al-Karim",
            searchPlaceholder: "Search surah or verse...",
            tabSurahs: "Surahs",
            tabJuz: "Juz'",
            tabSajda: "Sajda",
            tabBookmarks: "Bookmarks",
            headingSurahs: "The 114 Surahs",
            headingJuz: "The 30 Juz'",
            headingSajda: "Prostration Verses (Sajda)",
            headingBookmarks: "Your Bookmarks",
            headingSettings: "Settings",
            btnBack: "Back",
            btnClose: "Close",
            btnBookmark: "Bookmark",
            navSurahs: "Surahs",
            navJuz: "Juz'",
            navSajda: "Sajda",
            labelUILanguage: "UI Language",
            labelTranslation: "Translation",
            labelReciter: "Reciter (Audio)",
            labelArabicFont: "Arabic Font",
            bookmarkAdded: "Bookmark added",
            bookmarkRemoved: "Bookmark removed",
            translationUpdated: "Translation updated",
            reciterUpdated: "Reciter updated",
            fontUpdated: "Arabic font updated",
            languageUpdated: "Language updated",
            loadError: "Loading error.",
            ayahLoadError: "Error loading verses.",
            audioLoadError: "Audio could not be played.",
            noBookmarks: "No bookmarks yet. Open a surah and tap the bookmark icon.",
            emptySajda: "No Sajda data loaded.",
            emptySearch: "No results.",
            loadingSearch: "Loading search index...",
            verses: "Verses",
            mecca: "Mecca",
            medina: "Medina",
            listen: "Listen",
            pause: "Pause",
            sajdaLabel: "Sajda",
            juzDetail: "Juz'",
            surah: "Surah",
            ayah: "Ayah",
            introEyebrowHome: "Quran online",
            introTitleHome: "Al-Quran Al-Karim with surahs, juz and audio",
            introLeadHome: "Read the Quran online with translation, audio recitation, sajda verses and fast navigation across all 114 surahs.",
            introEyebrowSurah: "Quran surah",
            introLeadSurah: "Direct access to this surah with translation, audio recitation and verse-by-verse navigation.",
            introEyebrowJuz: "Read by section",
            introLeadJuz: "Direct access to this juz with translation, Arabic text and audio recitation.",
            introLinkHome: "Home",
            introLinkSitemap: "Sitemap",
            introLinkPrevSurah: "Previous surah",
            introLinkNextSurah: "Next surah",
            introLinkPrevJuz: "Previous juz'",
            introLinkNextJuz: "Next juz'",
            introLinkSurahOne: "Surah 1",
            introLinkJuzOne: "Juz' 1",
            introLinkJuzThirty: "Juz' 30",
            searchCategorySurah: "Surahs",
            searchCategoryAyah: "Verses"
        },
        ar: {
            appTitle: "القرآن",
            appSubtitle: "الكريم",
            searchPlaceholder: "ابحث عن سورة أو آية...",
            tabSurahs: "السور",
            tabJuz: "الأجزاء",
            tabSajda: "السجدة",
            tabBookmarks: "المفضلة",
            headingSurahs: "١١٤ سورة",
            headingJuz: "٣٠ جزءاً",
            headingSajda: "آيات السجدة",
            headingBookmarks: "المفضلة",
            headingSettings: "الإعدادات",
            btnBack: "رجوع",
            btnClose: "إغلاق",
            btnBookmark: "المفضلة",
            navSurahs: "السور",
            navJuz: "الأجزاء",
            navSajda: "السجدة",
            labelUILanguage: "لغة الواجهة",
            labelTranslation: "الترجمة",
            labelReciter: "القارئ",
            labelArabicFont: "الخط العربي",
            bookmarkAdded: "تمت إضافة المرجع",
            bookmarkRemoved: "تم حذف المرجع",
            translationUpdated: "تم تحديث الترجمة",
            reciterUpdated: "تم تحديث القارئ",
            fontUpdated: "تم تحديث الخط العربي",
            languageUpdated: "تم تحديث اللغة",
            loadError: "حدث خطأ أثناء التحميل.",
            ayahLoadError: "تعذر تحميل الآيات.",
            audioLoadError: "تعذر تشغيل الصوت.",
            noBookmarks: "لا توجد مفضلة بعد.",
            emptySajda: "لا توجد بيانات سجدة.",
            emptySearch: "لا توجد نتائج.",
            loadingSearch: "يتم تحميل الفهرس...",
            verses: "آيات",
            mecca: "مكية",
            medina: "مدنية",
            listen: "استماع",
            pause: "إيقاف",
            sajdaLabel: "سجدة",
            juzDetail: "جزء",
            surah: "سورة",
            ayah: "آية",
            introEyebrowHome: "القرآن الكريم",
            introTitleHome: "القرآن الكريم مع السور والأجزاء والصوت",
            introLeadHome: "اقرأ القرآن عبر الويب مع الترجمة والصوت والتنقل السريع بين السور.",
            introEyebrowSurah: "سورة من القرآن",
            introLeadSurah: "وصول مباشر إلى السورة مع الترجمة والصوت والتنقل بين الآيات.",
            introEyebrowJuz: "القراءة حسب الجزء",
            introLeadJuz: "وصول مباشر إلى الجزء مع الترجمة والنص العربي والصوت.",
            introLinkHome: "الرئيسية",
            introLinkSitemap: "خريطة الموقع",
            introLinkPrevSurah: "السورة السابقة",
            introLinkNextSurah: "السورة التالية",
            introLinkPrevJuz: "الجزء السابق",
            introLinkNextJuz: "الجزء التالي",
            introLinkSurahOne: "سورة ١",
            introLinkJuzOne: "جزء ١",
            introLinkJuzThirty: "جزء ٣٠",
            searchCategorySurah: "السور",
            searchCategoryAyah: "الآيات"
        }
    };

    const state = {
        surahs: [],
        editions: [],
        sajdaData: [],
        allAyahsForSearch: [],
        currentView: "surahs",
        uiLang: localStorage.getItem("quran_ui_lang") || "de",
        selectedTranslation: localStorage.getItem("quran_translation") || "de.aburida",
        selectedAudio: localStorage.getItem("quran_audio") || "ar.abdurrahmaansudais",
        selectedArabicFont: localStorage.getItem("quran_arabic_font") || "scheherazade",
        bookmarks: JSON.parse(localStorage.getItem("quran_bookmarks") || "[]"),
        theme: localStorage.getItem("quran_theme") || "light",
        currentAudioSurah: null,
        currentAudioAyah: null,
        isPlaying: false,
        searchTimeout: null,
        searchLoadPromise: null,
        currentRoute: { type: "home", view: "surahs" },
        currentContentType: "home",
        currentContentNumber: null,
        hasInternalHistory: false
    };

    const FALLBACK_TRANSLATIONS = ["de.aburida", "de.khoury", "de.bubenheim", "en.sahih", "en.pickthall"];
    const FALLBACK_AUDIO = ["ar.abdurrahmaansudais", "ar.abdulsamad", "ar.ahmedajamy", "ar.alafasy"];
    const API_BASE = "https://api.alquran.cloud/v1";
    const SEO_DATA = window.QURAN_SEO_DATA || { siteUrl: "", basePath: "", defaults: {}, surahs: [], juz: [] };
    const SURAH_META = new Map((SEO_DATA.surahs || []).map((item) => [item.number, item]));
    const JUZ_META = new Map((SEO_DATA.juz || []).map((item) => [item.number, item]));
    const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

    function t(key) {
        return (i18n[state.uiLang] || i18n.de)[key] || key;
    }

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => Array.from(document.querySelectorAll(selector));

    function getBasePath() {
        const configured = document.querySelector('meta[name="app-base-path"]')?.content || SEO_DATA.basePath || "";
        return LOCAL_HOSTS.has(window.location.hostname) ? "" : configured;
    }

    function stripBasePath(pathname) {
        const basePath = getBasePath();
        if (basePath && pathname.startsWith(basePath)) {
            const stripped = pathname.slice(basePath.length);
            return stripped || "/";
        }
        return pathname || "/";
    }

    function ensureLeadingSlash(value) {
        return value.startsWith("/") ? value : `/${value}`;
    }

    function getContentPath(route) {
        if (!route || route.type === "home") return "/";
        if (route.type === "surah") {
            const meta = SURAH_META.get(route.number);
            if (meta?.path) return meta.path;
            return `/surah/${route.number}/`;
        }
        if (route.type === "juz") {
            return `/juz/${route.number}/`;
        }
        return "/";
    }

    function getBrowserPath(route) {
        const contentPath = getContentPath(route);
        const basePath = getBasePath();
        return `${basePath}${contentPath === "/" ? "/" : contentPath}`.replace(/\/{2,}/g, "/");
    }

    function getAbsoluteUrl(route) {
        const siteUrl = (SEO_DATA.siteUrl || "").replace(/\/$/, "");
        const contentPath = getContentPath(route);
        if (!siteUrl) return window.location.href;
        return contentPath === "/" ? `${siteUrl}/` : `${siteUrl}${contentPath}`;
    }

    function getRouteFromLocation(locationLike) {
        const path = stripBasePath(locationLike.pathname || "/").replace(/\/{2,}/g, "/");
        if (path === "/" || path === "") return { type: "home", view: "surahs" };

        const surahMatch = path.match(/^\/surah\/(\d+)(?:-[^/]+)?\/?$/i);
        if (surahMatch) {
            return { type: "surah", number: Number.parseInt(surahMatch[1], 10) };
        }

        const juzMatch = path.match(/^\/juz\/(\d+)\/?$/i);
        if (juzMatch) {
            return { type: "juz", number: Number.parseInt(juzMatch[1], 10) };
        }

        return { type: "home", view: "surahs" };
    }

    function getMetaContent(attribute, value) {
        return document.querySelector(`meta[${attribute}="${value}"]`);
    }

    function ensureMeta(attribute, value) {
        let element = getMetaContent(attribute, value);
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute(attribute, value);
            document.head.appendChild(element);
        }
        return element;
    }

    function ensureCanonical() {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement("link");
            link.rel = "canonical";
            document.head.appendChild(link);
        }
        return link;
    }

    function ensureStructuredData() {
        let script = document.getElementById("structured-data");
        if (!script) {
            script = document.createElement("script");
            script.id = "structured-data";
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        return script;
    }

    function getRuntimeMeta(route) {
        if (route.type === "surah") {
            const meta = SURAH_META.get(route.number);
            if (meta) {
                return {
                    title: meta.title,
                    description: meta.description,
                    url: getAbsoluteUrl(route),
                    structuredData: {
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                name: meta.title,
                                description: meta.description,
                                url: getAbsoluteUrl(route),
                                inLanguage: "de",
                                about: {
                                    "@type": "Chapter",
                                    position: route.number,
                                    name: meta.englishName,
                                    alternateName: meta.name
                                }
                            },
                            {
                                "@type": "Book",
                                name: "Al-Quran Al-Karim",
                                alternateName: "Der edle Quran",
                                genre: "ReligiousText",
                                inLanguage: ["ar", "de"]
                            }
                        ]
                    }
                };
            }
        }

        if (route.type === "juz") {
            const meta = JUZ_META.get(route.number);
            if (meta) {
                return {
                    title: meta.title,
                    description: meta.description,
                    url: getAbsoluteUrl(route),
                    structuredData: {
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                name: meta.title,
                                description: meta.description,
                                url: getAbsoluteUrl(route),
                                inLanguage: "de"
                            },
                            {
                                "@type": "Book",
                                name: "Al-Quran Al-Karim",
                                alternateName: "Der edle Quran",
                                genre: "ReligiousText",
                                inLanguage: ["ar", "de"]
                            }
                        ]
                    }
                };
            }
        }

        return {
            title: SEO_DATA.defaults?.title || "Al-Quran Al-Karim | Quran online lesen und hoeren",
            description: SEO_DATA.defaults?.description || "Lies den Quran online mit deutscher Uebersetzung, Audio-Rezitationen und schneller Navigation.",
            url: getAbsoluteUrl({ type: "home" }),
            structuredData: {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebSite",
                        name: "Al-Quran Al-Karim",
                        url: getAbsoluteUrl({ type: "home" }),
                        inLanguage: "de"
                    },
                    {
                        "@type": "Book",
                        name: "Al-Quran Al-Karim",
                        alternateName: "Der edle Quran",
                        description: SEO_DATA.defaults?.description || "Online Quran mit deutscher Uebersetzung und Audio-Rezitation.",
                        genre: "ReligiousText",
                        inLanguage: ["ar", "de"]
                    }
                ]
            }
        };
    }

    function applySeo(route) {
        const meta = getRuntimeMeta(route);
        document.title = meta.title;
        ensureMeta("name", "description").content = meta.description;
        ensureMeta("property", "og:title").content = meta.title;
        ensureMeta("property", "og:description").content = meta.description;
        ensureMeta("property", "og:type").content = route.type === "home" ? "website" : "article";
        ensureMeta("property", "og:url").content = meta.url;
        ensureMeta("property", "og:site_name").content = "Al-Quran Al-Karim";
        ensureMeta("name", "twitter:card").content = "summary";
        ensureMeta("name", "twitter:title").content = meta.title;
        ensureMeta("name", "twitter:description").content = meta.description;
        ensureCanonical().href = meta.url;
        ensureStructuredData().textContent = JSON.stringify(meta.structuredData, null, 2);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function buildIntroCard(href, title, description, route) {
        return `<a class="seo-link-card" href="${href}" data-route-link="true" data-route='${escapeHtml(JSON.stringify(route))}'><strong>${escapeHtml(title)}</strong><span>${escapeHtml(description)}</span></a>`;
    }

    function renderSeoIntro(route) {
        const intro = $("#seoIntro");
        if (!intro) return;

        let eyebrow = t("introEyebrowHome");
        let title = t("introTitleHome");
        let lead = t("introLeadHome");
        let compact = false;
        let cards = [
            buildIntroCard(getBrowserPath({ type: "surah", number: 1 }), "Sure 1: Al-Fatihah", "Direkt zur ersten Sure mit deutscher Uebersetzung.", { type: "surah", number: 1 }),
            buildIntroCard(getBrowserPath({ type: "surah", number: 2 }), "Sure 2: Al-Baqarah", "Die laengste Sure schnell aufrufen und lesen.", { type: "surah", number: 2 }),
            buildIntroCard(getBrowserPath({ type: "juz", number: 1 }), `${t("introLinkJuzOne")}`, "Zum ersten Abschnitt des Quran wechseln.", { type: "juz", number: 1 }),
            `<a class="seo-link-card" href="${getBasePath()}/sitemap.xml"><strong>${escapeHtml(t("introLinkSitemap"))}</strong><span>Alle indexierbaren Quran-Seiten im Ueberblick.</span></a>`
        ];

        if (route.type === "home") {
            intro.hidden = true;
            intro.classList.remove("is-compact");
            intro.innerHTML = "";
            return;
        }

        if (route.type === "surah") {
            intro.hidden = false;
            const meta = SURAH_META.get(route.number);
            eyebrow = t("introEyebrowSurah");
            title = meta ? `Sure ${meta.number}: ${meta.englishName}` : `${t("surah")} ${route.number}`;
            lead = t("introLeadSurah");
            const prev = SURAH_META.get(route.number - 1);
            const next = SURAH_META.get(route.number + 1);
            cards = [
                buildIntroCard(getBrowserPath({ type: "home", view: "surahs" }), t("introLinkHome"), "Zur Uebersicht aller Suren und Juz'.", { type: "home", view: "surahs" }),
                prev
                    ? buildIntroCard(getBrowserPath({ type: "surah", number: prev.number }), `${t("introLinkPrevSurah")}: ${prev.englishName}`, `Direkt zu Sure ${prev.number}.`, { type: "surah", number: prev.number })
                    : buildIntroCard(getBrowserPath({ type: "juz", number: 1 }), t("introLinkJuzOne"), "Zum ersten Juz' springen.", { type: "juz", number: 1 }),
                next
                    ? buildIntroCard(getBrowserPath({ type: "surah", number: next.number }), `${t("introLinkNextSurah")}: ${next.englishName}`, `Direkt zu Sure ${next.number}.`, { type: "surah", number: next.number })
                    : buildIntroCard(getBrowserPath({ type: "juz", number: 30 }), t("introLinkJuzThirty"), "Zum letzten Juz' springen.", { type: "juz", number: 30 }),
                `<a class="seo-link-card" href="${getBasePath()}/sitemap.xml"><strong>${escapeHtml(t("introLinkSitemap"))}</strong><span>Alle indexierbaren Quran-Seiten im Ueberblick.</span></a>`
            ];
        } else if (route.type === "juz") {
            intro.hidden = false;
            eyebrow = t("introEyebrowJuz");
            title = `${t("juzDetail")} ${route.number}`;
            lead = t("introLeadJuz");
            const prev = JUZ_META.get(route.number - 1);
            const next = JUZ_META.get(route.number + 1);
            cards = [
                buildIntroCard(getBrowserPath({ type: "home", view: "surahs" }), t("introLinkHome"), "Zur Uebersicht aller Suren und Juz'.", { type: "home", view: "surahs" }),
                prev
                    ? buildIntroCard(getBrowserPath({ type: "juz", number: prev.number }), `${t("introLinkPrevJuz")}: ${prev.number}`, `Direkt zu Juz' ${prev.number}.`, { type: "juz", number: prev.number })
                    : buildIntroCard(getBrowserPath({ type: "surah", number: 1 }), t("introLinkSurahOne"), "Direkt zur ersten Sure springen.", { type: "surah", number: 1 }),
                next
                    ? buildIntroCard(getBrowserPath({ type: "juz", number: next.number }), `${t("introLinkNextJuz")}: ${next.number}`, `Direkt zu Juz' ${next.number}.`, { type: "juz", number: next.number })
                    : buildIntroCard(getBrowserPath({ type: "surah", number: 114 }), "Sure 114", "Direkt zur letzten Sure springen.", { type: "surah", number: 114 }),
                `<a class="seo-link-card" href="${getBasePath()}/sitemap.xml"><strong>${escapeHtml(t("introLinkSitemap"))}</strong><span>Alle indexierbaren Quran-Seiten im Ueberblick.</span></a>`
            ];
        }

        intro.classList.toggle("is-compact", compact);
        intro.innerHTML = `
            <div class="seo-eyebrow">${escapeHtml(eyebrow)}</div>
            <h2 class="seo-title">${escapeHtml(title)}</h2>
            <p class="seo-lead">${escapeHtml(lead)}</p>
            <div class="seo-link-grid">${cards.join("")}</div>`;
    }

    function getValidTranslation() {
        if (state.editions.some((item) => item.identifier === state.selectedTranslation && item.type === "translation")) return state.selectedTranslation;
        for (const fallback of FALLBACK_TRANSLATIONS) {
            if (state.editions.some((item) => item.identifier === fallback && item.type === "translation")) return fallback;
        }
        return "en.sahih";
    }

    function getValidAudio() {
        if (state.editions.some((item) => item.identifier === state.selectedAudio && item.format === "audio")) return state.selectedAudio;
        for (const fallback of FALLBACK_AUDIO) {
            if (state.editions.some((item) => item.identifier === fallback && item.format === "audio")) return fallback;
        }
        return "ar.abdurrahmaansudais";
    }

    function applyTheme() {
        document.documentElement.setAttribute("data-theme", state.theme);
        $("#btnTheme").innerHTML = state.theme === "dark"
            ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
            : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }

    function setupArabicFont() {
        const styleElement = document.getElementById("arabic-font-style") || document.createElement("style");
        styleElement.id = "arabic-font-style";
        styleElement.textContent = `.ayah-arabic, .surah-arabic-name { font-family: ${state.selectedArabicFont === "amiri" ? "'Amiri','Scheherazade New',serif" : "'Scheherazade New','Amiri',serif"}; }`;
        if (!document.getElementById("arabic-font-style")) document.head.appendChild(styleElement);
    }

    function updateUILanguageSelection() {
        $$("#uiLanguageOptions .setting-option").forEach((option) => option.classList.remove("selected"));
        document.querySelector(`#uiLanguageOptions [data-lang="${state.uiLang}"]`)?.classList.add("selected");
    }

    function updateAllI18n() {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (element.children.length === 1 && element.children[0].tagName === "SPAN" && element.children[0].dataset.i18n) {
                element.children[0].textContent = t(element.children[0].dataset.i18n);
                return;
            }
            if (element.tagName === "INPUT" && element.dataset.i18nPlaceholder) {
                element.placeholder = t(element.dataset.i18nPlaceholder);
                return;
            }
            if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
                element.textContent = t(key);
            }
        });
        document.querySelectorAll(".nav-item, .stat-chip").forEach((button) => {
            const span = button.querySelector("span[data-i18n]");
            if (span) span.textContent = t(span.dataset.i18n);
        });
        $("#searchInput").placeholder = t("searchPlaceholder");
        updateUILanguageSelection();
        renderSeoIntro(state.currentRoute);
    }

    async function fetchJSON(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API ${response.status}`);
        return response.json();
    }

    async function loadAllData() {
        try {
            showSkeleton();
            const [surahsData, editionsData] = await Promise.all([
                fetchJSON(`${API_BASE}/surah`),
                fetchJSON(`${API_BASE}/edition`)
            ]);

            state.surahs = surahsData.data;
            state.editions = editionsData.data;

            const validTranslation = getValidTranslation();
            if (validTranslation !== state.selectedTranslation) {
                state.selectedTranslation = validTranslation;
                localStorage.setItem("quran_translation", validTranslation);
            }

            const validAudio = getValidAudio();
            if (validAudio !== state.selectedAudio) {
                state.selectedAudio = validAudio;
                localStorage.setItem("quran_audio", validAudio);
            }

            renderSurahList();
            renderJuzGrid();
            populateSettings();
            hideSkeleton();
            await loadSajdaVerses();
        } catch (error) {
            console.error(error);
            hideSkeleton();
            showToast(t("loadError"));
        }
    }

    async function loadSajdaVerses() {
        try {
            const translation = getValidTranslation();
            const data = await fetchJSON(`${API_BASE}/sajda/${translation}`);
            state.sajdaData = normalizeSajdaData(data.data);
        } catch (error) {
            console.warn("Sajda data unavailable", error);
            state.sajdaData = [];
        }
        if (state.currentView === "sajda") renderSajdaList();
    }

    function normalizeSajdaData(data) {
        const ayahs = Array.isArray(data) ? data : data?.ayahs;
        if (!Array.isArray(ayahs)) return [];
        return ayahs
            .map((ayah) => ({
                surah: ayah.surah,
                ayah: {
                    number: ayah.ayah?.number || ayah.numberInSurah,
                    text: ayah.ayah?.text || ayah.text || ""
                }
            }))
            .filter((item) => item.surah && item.ayah.number);
    }

    async function ensureSearchDataLoaded() {
        if (state.allAyahsForSearch.length) return state.allAyahsForSearch;
        if (!state.searchLoadPromise) {
            state.searchLoadPromise = (async () => {
                try {
                    const translation = getValidTranslation();
                    const data = await fetchJSON(`${API_BASE}/quran/${translation}`);
                    state.allAyahsForSearch = data.data.surahs.flatMap((surah) =>
                        surah.ayahs.map((ayah) => ({
                            surahNumber: surah.number,
                            surahName: surah.englishName,
                            ayahNumber: ayah.numberInSurah,
                            text: ayah.text
                        }))
                    );
                } catch (error) {
                    console.warn("Search data unavailable", error);
                    state.allAyahsForSearch = [];
                }
                return state.allAyahsForSearch;
            })();
        }
        return state.searchLoadPromise;
    }

    function showSkeleton() {
        $("#surahList").innerHTML = Array.from({ length: 10 }, () =>
            '<div class="surah-card"><div class="skeleton" style="width:44px;height:44px;border-radius:14px;"></div><div style="flex:1;"><div class="skeleton" style="height:16px;width:60%;margin-bottom:6px;border-radius:8px;"></div><div class="skeleton" style="height:12px;width:40%;border-radius:6px;"></div></div><div class="skeleton" style="width:50px;height:20px;border-radius:10px;"></div></div>'
        ).join("");
    }

    function hideSkeleton() {}

    function getSurahRoute(number) {
        return { type: "surah", number };
    }

    function getJuzRoute(number) {
        return { type: "juz", number };
    }

    function getSajdaAyahsForSurah(surahNumber) {
        return state.sajdaData.filter((item) => item.surah.number === surahNumber).map((item) => item.ayah.number);
    }

    function routeDataAttribute(route) {
        return escapeHtml(JSON.stringify(route));
    }

    function renderSurahList() {
        $("#surahList").innerHTML = state.surahs.map((surah) => {
            const route = getSurahRoute(surah.number);
            return `
                <a class="surah-card" href="${getBrowserPath(route)}" data-route-link="true" data-route='${routeDataAttribute(route)}'>
                    <div class="surah-number">${surah.number}</div>
                    <div class="surah-info">
                        <div class="surah-english">${surah.englishName}</div>
                        <div class="surah-meta"><span>${surah.englishNameTranslation}</span><span>·</span><span>${surah.numberOfAyahs} ${t("verses")}</span></div>
                    </div>
                    <span class="surah-arabic-name">${surah.name}</span>
                    <span class="surah-badge ${surah.revelationType === "Meccan" ? "badge-meccan" : "badge-medinan"}">${surah.revelationType === "Meccan" ? t("mecca") : t("medina")}</span>
                </a>`;
        }).join("");
    }

    function renderJuzGrid() {
        $("#juzGrid").innerHTML = Array.from({ length: 30 }, (_, index) => {
            const number = index + 1;
            const route = getJuzRoute(number);
            return `<a class="juz-chip" href="${getBrowserPath(route)}" data-route-link="true" data-route='${routeDataAttribute(route)}'>${number}</a>`;
        }).join("");
    }

    function renderSajdaList() {
        if (!state.sajdaData.length) {
            $("#sajdaList").innerHTML = `<div class="empty-state"><div class="empty-state-icon">⌁</div><div class="empty-state-text">${t("emptySajda")}</div></div>`;
            return;
        }

        $("#sajdaList").innerHTML = state.sajdaData.map((item) => {
            const route = getSurahRoute(item.surah.number);
            const surah = state.surahs.find((entry) => entry.number === item.surah.number);
            const routePayload = { ...route, ayah: item.ayah.number };
            return `
                <a class="surah-card" href="${getBrowserPath(route)}" data-route-link="true" data-route='${routeDataAttribute(routePayload)}'>
                    <div class="surah-number" style="background:var(--gold-pale);color:var(--gold);">⌁</div>
                    <div class="surah-info">
                        <div class="surah-english">${t("surah")} ${item.surah.number}: ${item.surah.englishName || surah?.englishName || ""}</div>
                        <div class="surah-meta">${t("ayah")} ${item.ayah.number} · ${t("sajdaLabel")}</div>
                    </div>
                    <span class="surah-arabic-name">${item.surah.name || surah?.name || ""}</span>
                </a>`;
        }).join("");
    }

    function renderBookmarksList() {
        if (!state.bookmarks.length) {
            $("#bookmarksList").innerHTML = `<div class="empty-state"><div class="empty-state-icon">📑</div><div class="empty-state-text">${t("noBookmarks")}</div></div>`;
            return;
        }

        $("#bookmarksList").innerHTML = state.bookmarks.map((bookmark, index) => {
            const surah = state.surahs.find((entry) => entry.number === bookmark.surahNumber);
            return `
                <div class="surah-card" role="button" tabindex="0" data-bookmark-route='${routeDataAttribute(getSurahRoute(bookmark.surahNumber))}'>
                    <div class="surah-number">${bookmark.surahNumber}</div>
                    <div class="surah-info">
                        <div class="surah-english">${surah ? surah.englishName : `${t("surah")} ${bookmark.surahNumber}`}</div>
                        <div class="bookmark-indicator">★ ${t("btnBookmark")}</div>
                    </div>
                    <span class="surah-arabic-name">${surah ? surah.name : ""}</span>
                    <button class="icon-btn" data-remove-bookmark="${index}" aria-label="Lesezeichen entfernen" style="position:relative;z-index:2;flex-shrink:0;" type="button">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                </div>`;
        }).join("");
    }

    async function tryAlternativeTranslation(surahNumber, scrollToAyah) {
        const sajdaAyahs = getSajdaAyahsForSurah(surahNumber);
        for (const fallback of FALLBACK_TRANSLATIONS) {
            if (fallback === state.selectedTranslation) continue;
            try {
                const [arabicData, translationData] = await Promise.all([
                    fetchJSON(`${API_BASE}/surah/${surahNumber}`),
                    fetchJSON(`${API_BASE}/surah/${surahNumber}/${fallback}`)
                ]);
                state.selectedTranslation = fallback;
                localStorage.setItem("quran_translation", fallback);
                populateSettings();
                const ayahs = arabicData.data.ayahs.map((ayah, index) => ({
                    number: ayah.numberInSurah,
                    arabic: ayah.text,
                    translation: translationData.data.ayahs[index]?.text || "",
                    isSajda: sajdaAyahs.includes(ayah.numberInSurah)
                }));
                renderAyahs(ayahs, surahNumber, scrollToAyah);
                showToast(`Uebersetzung auf ${fallback} geaendert`);
                return true;
            } catch {
                continue;
            }
        }
        $("#ayahList").innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚠</div><div class="empty-state-text">Keine Uebersetzung verfuegbar.</div></div>';
        return false;
    }

    function renderAyahs(ayahs, surahNumber, scrollToAyah) {
        $("#ayahList").innerHTML = ayahs.map((ayah, index) => `
            <div class="ayah-card ${ayah.isSajda ? "sajda" : ""} ${scrollToAyah && ayah.number === scrollToAyah ? "current" : ""}" id="ayah-${ayah.number}">
                <div class="ayah-arabic">${ayah.arabic}<span class="ayah-number-inline">${ayah.number}</span></div>
                <div class="ayah-translation">${ayah.translation}</div>
                <div class="ayah-audio-row">
                    <button class="audio-play-btn" data-play-ayah="${index}" data-surah="${surahNumber}" data-ayah="${ayah.number}" type="button">▶ ${t("listen")}</button>
                    ${ayah.isSajda ? `<span style="font-size:0.7rem;color:var(--gold);font-weight:600;">⌁ ${t("sajdaLabel")}</span>` : ""}
                </div>
            </div>
        `).join("");

        if (scrollToAyah) {
            setTimeout(() => {
                document.getElementById(`ayah-${scrollToAyah}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 300);
        }
    }

    function updateBookmarkButton(isBookmarked) {
        const button = $("#bookmarkSurahBtn");
        button.innerHTML = isBookmarked
            ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>'
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
        button.style.color = isBookmarked ? "var(--gold)" : "";
    }

    async function openSurahViewer(surahNumber, scrollToAyah) {
        state.currentContentType = "surah";
        state.currentContentNumber = surahNumber;
        try {
            $("#ayahList").innerHTML = Array.from({ length: 5 }, () => '<div class="ayah-card"><div class="skeleton" style="height:60px;border-radius:12px;margin-bottom:10px;"></div><div class="skeleton" style="height:40px;border-radius:8px;"></div></div>').join("");
            const surah = state.surahs.find((item) => item.number === surahNumber);
            $("#viewerSurahTitle").textContent = surah ? `${t("surah")} ${surah.number}: ${surah.englishName}` : `${t("surah")} ${surahNumber}`;
            updateBookmarkButton(state.bookmarks.some((bookmark) => bookmark.surahNumber === surahNumber));
            $("#bookmarkSurahBtn").style.display = "";
            openOverlay($("#ayahViewer"));

            const translation = getValidTranslation();
            const [arabicData, translationData] = await Promise.all([
                fetchJSON(`${API_BASE}/surah/${surahNumber}`),
                fetchJSON(`${API_BASE}/surah/${surahNumber}/${translation}`)
            ]);
            const sajdaAyahs = getSajdaAyahsForSurah(surahNumber);
            const ayahs = arabicData.data.ayahs.map((ayah, index) => ({
                number: ayah.numberInSurah,
                arabic: ayah.text,
                translation: translationData.data.ayahs[index]?.text || "(Uebersetzung nicht verfuegbar)",
                isSajda: sajdaAyahs.includes(ayah.numberInSurah)
            }));
            renderAyahs(ayahs, surahNumber, scrollToAyah);
        } catch (error) {
            console.error(error);
            const fallbackWorked = await tryAlternativeTranslation(surahNumber, scrollToAyah);
            if (!fallbackWorked) showToast(t("ayahLoadError"));
        }
    }

    async function loadJuzAyahs(juzNumber) {
        state.currentContentType = "juz";
        state.currentContentNumber = juzNumber;
        try {
            $("#ayahList").innerHTML = Array.from({ length: 3 }, () => '<div class="ayah-card"><div class="skeleton" style="height:60px;"></div><div class="skeleton" style="height:40px;"></div></div>').join("");
            $("#viewerSurahTitle").textContent = `${t("juzDetail")} ${juzNumber}`;
            $("#bookmarkSurahBtn").style.display = "none";
            openOverlay($("#ayahViewer"));

            const translation = getValidTranslation();
            const [arabicData, translationData] = await Promise.all([
                fetchJSON(`${API_BASE}/juz/${juzNumber}/ar.asad`),
                fetchJSON(`${API_BASE}/juz/${juzNumber}/${translation}`)
            ]);

            const ayahs = arabicData.data.ayahs.map((ayah, index) => ({
                number: ayah.numberInSurah,
                surahNumber: ayah.surah.number,
                arabic: ayah.text,
                translation: translationData.data.ayahs[index]?.text || "",
                isSajda: false
            }));

            $("#ayahList").innerHTML = ayahs.map((ayah, index) => `
                <div class="ayah-card">
                    <div style="font-size:0.7rem;color:var(--gold);font-weight:600;margin-bottom:4px;">${t("surah")} ${ayah.surahNumber} · ${t("ayah")} ${ayah.number}</div>
                    <div class="ayah-arabic">${ayah.arabic}<span class="ayah-number-inline">${ayah.number}</span></div>
                    <div class="ayah-translation">${ayah.translation}</div>
                    <button class="audio-play-btn" data-play-ayah="${index}" data-surah="${ayah.surahNumber}" data-ayah="${ayah.number}" type="button">▶ ${t("listen")}</button>
                </div>
            `).join("");
        } catch (error) {
            console.error(error);
            showToast(t("ayahLoadError"));
        }
    }

    async function playAyahAudio(surahNumber, ayahNumber) {
        const audioEdition = getValidAudio();
        const surah = state.surahs.find((entry) => entry.number === surahNumber);
        $("#audioInfo").textContent = `${t("surah")} ${surahNumber}${surah ? ` · ${surah.englishName}` : ""} · ${t("ayah")} ${ayahNumber}`;
        $("#audioPlayerBar").classList.remove("hidden");

        try {
            const data = await fetchJSON(`${API_BASE}/ayah/${surahNumber}:${ayahNumber}/${audioEdition}`);
            const audioUrl = data.data?.audio || data.data?.audioSecondary?.[0];
            if (!audioUrl) throw new Error("No audio URL in response");

            $("#audioElement").src = audioUrl;
            await $("#audioElement").play();
            state.currentAudioSurah = surahNumber;
            state.currentAudioAyah = ayahNumber;
            state.isPlaying = true;
            updateAudioUI();
        } catch (error) {
            console.error(error);
            state.isPlaying = false;
            updateAudioUI();
            showToast(t("audioLoadError"));
        }
    }

    function updateAudioUI() {
        $("#audioPlayPause").textContent = state.isPlaying ? "⏸" : "▶";
        $$(".audio-play-btn").forEach((button) => {
            const surahNumber = Number.parseInt(button.dataset.surah, 10);
            const ayahNumber = Number.parseInt(button.dataset.ayah, 10);
            const isCurrent = surahNumber === state.currentAudioSurah && ayahNumber === state.currentAudioAyah && state.isPlaying;
            button.classList.toggle("playing", isCurrent);
            button.innerHTML = isCurrent
                ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="6" height="16"/><rect x="14" y="4" width="6" height="16"/></svg> ${t("pause")}`
                : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> ${t("listen")}`;
        });
    }

    function stopAudio() {
        $("#audioElement").pause();
        $("#audioElement").src = "";
        state.isPlaying = false;
        state.currentAudioSurah = null;
        state.currentAudioAyah = null;
        updateAudioUI();
        $("#audioPlayerBar").classList.add("hidden");
    }

    function openOverlay(overlay) {
        overlay.style.display = "flex";
        overlay.setAttribute("aria-hidden", "false");
        overlay.classList.remove("closing");
        document.body.style.overflow = "hidden";
        overlay.querySelector("button, [tabindex]")?.focus();
    }

    function closeOverlay(overlay) {
        overlay.classList.add("closing");
        overlay.setAttribute("aria-hidden", "true");
        setTimeout(() => {
            overlay.style.display = "none";
            overlay.classList.remove("closing");
            document.body.style.overflow = "";
        }, 250);
    }

    function switchView(view) {
        state.currentView = view;
        ["surahListView", "juzView", "sajdaView", "bookmarksView"].forEach((id) => {
            $(`#${id}`).style.display = "none";
        });
        $$(".nav-item").forEach((element) => element.classList.remove("active"));
        $$(".stat-chip").forEach((element) => element.classList.remove("active"));

        const config = {
            surahs: { content: "#surahListView", nav: '[data-nav="surahs"]', chip: '[data-view="surahs"]' },
            juz: { content: "#juzView", nav: '[data-nav="juz"]', chip: '[data-view="juz"]' },
            sajda: { content: "#sajdaView", nav: '[data-nav="sajda"]', chip: '[data-view="sajda"]' },
            bookmarks: { content: "#bookmarksView", nav: null, chip: '[data-view="bookmarks"]' }
        }[view];

        if (config) {
            $(config.content).style.display = "block";
            if (config.nav) $(config.nav)?.classList.add("active");
            $(config.chip)?.classList.add("active");
        }

        if (view === "sajda") renderSajdaList();
        if (view === "bookmarks") renderBookmarksList();
    }

    async function performSearch(query) {
        if (!query || query.length < 2) {
            $("#searchResults").classList.remove("open");
            return;
        }

        if (!state.allAyahsForSearch.length) {
            $("#searchResults").innerHTML = `<div class="search-result-item" style="color:var(--text-muted);">${t("loadingSearch")}</div>`;
            $("#searchResults").classList.add("open");
            await ensureSearchDataLoaded();
        }

        const normalized = query.toLowerCase();
        const surahMatches = state.surahs.filter((surah) =>
            surah.englishName.toLowerCase().includes(normalized) ||
            surah.englishNameTranslation.toLowerCase().includes(normalized) ||
            surah.name.includes(query) ||
            String(surah.number).includes(normalized)
        );

        const ayahMatches = state.allAyahsForSearch.filter((ayah) => ayah.text.toLowerCase().includes(normalized)).slice(0, 20);

        let html = "";
        if (surahMatches.length) {
            html += `<div style="padding:8px 16px;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;">${t("searchCategorySurah")}</div>`;
            html += surahMatches.slice(0, 8).map((surah) => {
                const route = getSurahRoute(surah.number);
                return `<a class="search-result-item" href="${getBrowserPath(route)}" data-route-link="true" data-route='${routeDataAttribute(route)}' role="option"><span class="search-result-surah">${t("surah")} ${surah.number}</span><span class="search-result-text">${surah.englishName} · ${surah.englishNameTranslation}</span></a>`;
            }).join("");
        }

        if (ayahMatches.length) {
            html += `<div style="padding:8px 16px;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;">${t("searchCategoryAyah")}</div>`;
            html += ayahMatches.slice(0, 10).map((ayah) => {
                const route = { type: "surah", number: ayah.surahNumber, ayah: ayah.ayahNumber };
                return `<a class="search-result-item" href="${getBrowserPath(route)}" data-route-link="true" data-route='${routeDataAttribute(route)}' role="option"><span class="search-result-surah">${ayah.surahNumber}:${ayah.ayahNumber}</span><span class="search-result-text">${ayah.text}</span></a>`;
            }).join("");
        }

        if (!html) {
            html = `<div class="search-result-item" style="color:var(--text-muted);">${t("emptySearch")}</div>`;
        }

        $("#searchResults").innerHTML = html;
        $("#searchResults").classList.add("open");
    }

    function populateSettings() {
        if (!state.editions.length) return;
        const translations = state.editions.filter((item) => item.type === "translation");
        const audioEditions = state.editions.filter((item) => item.format === "audio");
        $("#translationOptions").innerHTML = translations.slice(0, 30).map((item) => `<button class="setting-option ${state.selectedTranslation === item.identifier ? "selected" : ""}" data-translation="${item.identifier}" type="button">${item.englishName} (${item.language})</button>`).join("");
        $("#audioOptions").innerHTML = audioEditions.slice(0, 20).map((item) => `<button class="setting-option ${state.selectedAudio === item.identifier ? "selected" : ""}" data-audio="${item.identifier}" type="button">${item.englishName}</button>`).join("");
    }

    function changeTranslation(identifier) {
        state.selectedTranslation = identifier;
        localStorage.setItem("quran_translation", identifier);
        populateSettings();
        state.allAyahsForSearch = [];
        state.searchLoadPromise = null;
        showToast(t("translationUpdated"));
        loadSajdaVerses();
        if (state.currentRoute.type === "surah") {
            openSurahViewer(state.currentRoute.number, state.currentRoute.ayah || null);
        } else if (state.currentRoute.type === "juz") {
            loadJuzAyahs(state.currentRoute.number);
        }
    }

    function changeAudio(identifier) {
        state.selectedAudio = identifier;
        localStorage.setItem("quran_audio", identifier);
        populateSettings();
        stopAudio();
        showToast(t("reciterUpdated"));
    }

    function changeArabicFont(font) {
        state.selectedArabicFont = font;
        localStorage.setItem("quran_arabic_font", font);
        setupArabicFont();
        $$("#arabicFontOptions .setting-option").forEach((option) => option.classList.remove("selected"));
        $(`#arabicFontOptions [data-font="${font}"]`)?.classList.add("selected");
        showToast(t("fontUpdated"));
    }

    function changeUILanguage(language) {
        state.uiLang = language;
        localStorage.setItem("quran_ui_lang", language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        updateAllI18n();
        renderSurahList();
        renderJuzGrid();
        if (state.currentView === "sajda") renderSajdaList();
        if (state.currentView === "bookmarks") renderBookmarksList();
        if (state.currentRoute.type === "surah") {
            const surah = state.surahs.find((item) => item.number === state.currentRoute.number);
            $("#viewerSurahTitle").textContent = surah ? `${t("surah")} ${surah.number}: ${surah.englishName}` : `${t("surah")} ${state.currentRoute.number}`;
        } else if (state.currentRoute.type === "juz") {
            $("#viewerSurahTitle").textContent = `${t("juzDetail")} ${state.currentRoute.number}`;
        }
        showToast(t("languageUpdated"));
    }

    function toggleBookmark(surahNumber) {
        const index = state.bookmarks.findIndex((bookmark) => bookmark.surahNumber === surahNumber);
        if (index >= 0) {
            state.bookmarks.splice(index, 1);
            showToast(t("bookmarkRemoved"));
        } else {
            state.bookmarks.push({ surahNumber, addedAt: Date.now() });
            showToast(t("bookmarkAdded"));
        }
        localStorage.setItem("quran_bookmarks", JSON.stringify(state.bookmarks));
        updateBookmarkButton(state.bookmarks.some((bookmark) => bookmark.surahNumber === surahNumber));
        if (state.currentView === "bookmarks") renderBookmarksList();
    }

    function showToast(message) {
        const toast = $("#toast");
        toast.textContent = message;
        toast.classList.add("visible");
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => toast.classList.remove("visible"), 2200);
    }

    function parseRoutePayload(raw) {
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    async function renderRoute(route) {
        state.currentRoute = route;
        renderSeoIntro(route);
        applySeo(route);

        if (route.type === "home") {
            state.currentContentType = "home";
            state.currentContentNumber = null;
            if ($("#ayahViewer").style.display === "flex") closeOverlay($("#ayahViewer"));
            stopAudio();
            switchView(route.view || "surahs");
            return;
        }

        if (route.type === "surah") {
            await openSurahViewer(route.number, route.ayah || null);
            return;
        }

        if (route.type === "juz") {
            await loadJuzAyahs(route.number);
        }
    }

    async function navigateToRoute(route, options = {}) {
        const normalizedRoute = route.type === "home" ? { type: "home", view: route.view || "surahs" } : route;
        const historyMode = options.historyMode || "push";
        if (historyMode === "push") {
            window.history.pushState({ appRoute: normalizedRoute }, "", getBrowserPath(normalizedRoute));
            state.hasInternalHistory = true;
        } else if (historyMode === "replace") {
            window.history.replaceState({ appRoute: normalizedRoute }, "", getBrowserPath(normalizedRoute));
        }
        await renderRoute(normalizedRoute);
    }

    function handleRouteLinkClick(event) {
        const link = event.target.closest("[data-route-link]");
        if (!link) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        const route = parseRoutePayload(link.getAttribute("data-route")) || getRouteFromLocation(new URL(link.href));
        $("#searchResults").classList.remove("open");
        $("#searchInput").value = "";
        navigateToRoute(route, { historyMode: "push" });
    }

    function setupEvents() {
        document.addEventListener("click", handleRouteLinkClick);

        $("#bookmarksList").addEventListener("click", (event) => {
            const removeButton = event.target.closest("[data-remove-bookmark]");
            if (removeButton) {
                const index = Number.parseInt(removeButton.dataset.removeBookmark, 10);
                state.bookmarks.splice(index, 1);
                localStorage.setItem("quran_bookmarks", JSON.stringify(state.bookmarks));
                renderBookmarksList();
                showToast(t("bookmarkRemoved"));
                return;
            }
            const bookmarkCard = event.target.closest("[data-bookmark-route]");
            if (!bookmarkCard) return;
            const route = parseRoutePayload(bookmarkCard.dataset.bookmarkRoute);
            if (route) navigateToRoute(route, { historyMode: "push" });
        });

        $("#bookmarksList").addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            const bookmarkCard = event.target.closest("[data-bookmark-route]");
            if (!bookmarkCard) return;
            event.preventDefault();
            const route = parseRoutePayload(bookmarkCard.dataset.bookmarkRoute);
            if (route) navigateToRoute(route, { historyMode: "push" });
        });

        $("#ayahList").addEventListener("click", (event) => {
            const button = event.target.closest("[data-play-ayah]");
            if (!button) return;
            const surahNumber = Number.parseInt(button.dataset.surah, 10);
            const ayahNumber = Number.parseInt(button.dataset.ayah, 10);
            if (state.currentAudioSurah === surahNumber && state.currentAudioAyah === ayahNumber && state.isPlaying) {
                $("#audioElement").pause();
                state.isPlaying = false;
                updateAudioUI();
                return;
            }
            if (state.currentAudioSurah === surahNumber && state.currentAudioAyah === ayahNumber && !state.isPlaying) {
                $("#audioElement").play().catch(() => {});
                state.isPlaying = true;
                updateAudioUI();
                return;
            }
            playAyahAudio(surahNumber, ayahNumber);
        });

        $("#backFromViewer").addEventListener("click", () => {
            if (state.hasInternalHistory) {
                window.history.back();
                return;
            }
            navigateToRoute({ type: "home", view: "surahs" }, { historyMode: "push" });
        });

        $("#bookmarkSurahBtn").addEventListener("click", () => {
            if (state.currentContentType === "surah" && state.currentContentNumber) {
                toggleBookmark(state.currentContentNumber);
            }
        });

        $("#searchInput").addEventListener("focus", () => {
            ensureSearchDataLoaded();
            if ($("#searchInput").value.trim().length >= 2) {
                performSearch($("#searchInput").value.trim());
            }
        });

        $("#searchInput").addEventListener("input", () => {
            clearTimeout(state.searchTimeout);
            state.searchTimeout = setTimeout(() => {
                performSearch($("#searchInput").value.trim());
            }, 250);
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest("#searchResults") && event.target !== $("#searchInput")) {
                $("#searchResults").classList.remove("open");
            }
        });

        $("#btnSettings").addEventListener("click", () => openOverlay($("#settingsPanel")));
        $("#closeSettings").addEventListener("click", () => closeOverlay($("#settingsPanel")));
        $("#uiLanguageOptions").addEventListener("click", (event) => {
            const option = event.target.closest("[data-lang]");
            if (option) changeUILanguage(option.dataset.lang);
        });
        $("#translationOptions").addEventListener("click", (event) => {
            const option = event.target.closest("[data-translation]");
            if (option) changeTranslation(option.dataset.translation);
        });
        $("#audioOptions").addEventListener("click", (event) => {
            const option = event.target.closest("[data-audio]");
            if (option) changeAudio(option.dataset.audio);
        });
        $("#arabicFontOptions").addEventListener("click", (event) => {
            const option = event.target.closest("[data-font]");
            if (option) changeArabicFont(option.dataset.font);
        });
        $("#btnTheme").addEventListener("click", () => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("quran_theme", state.theme);
            applyTheme();
        });
        $("#audioPlayPause").addEventListener("click", () => {
            if (state.isPlaying) {
                $("#audioElement").pause();
                state.isPlaying = false;
            } else if (state.currentAudioSurah) {
                $("#audioElement").play().catch(() => {});
                state.isPlaying = true;
            }
            updateAudioUI();
        });
        $("#audioClose").addEventListener("click", stopAudio);
        $("#audioElement").addEventListener("ended", () => {
            state.isPlaying = false;
            updateAudioUI();
        });
        $("#audioElement").addEventListener("pause", () => {
            if (!$("#audioElement").ended) {
                state.isPlaying = false;
                updateAudioUI();
            }
        });
        $("#audioElement").addEventListener("play", () => {
            state.isPlaying = true;
            updateAudioUI();
        });
        $$(".nav-item").forEach((button) => {
            button.addEventListener("click", () => switchView(button.dataset.nav));
        });
        $("#statsBar").addEventListener("click", (event) => {
            const chip = event.target.closest("[data-view]");
            if (chip) switchView(chip.dataset.view);
        });
        $("#btnBookmarks").addEventListener("click", () => switchView("bookmarks"));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                if ($("#ayahViewer").style.display === "flex") {
                    closeOverlay($("#ayahViewer"));
                    stopAudio();
                }
                if ($("#settingsPanel").style.display === "flex") closeOverlay($("#settingsPanel"));
                $("#searchResults").classList.remove("open");
            }
        });
        $("#settingsPanel").addEventListener("click", function (event) {
            if (event.target === this) closeOverlay(this);
        });
        window.addEventListener("popstate", async () => {
            state.hasInternalHistory = true;
            await renderRoute(getRouteFromLocation(window.location));
        });
    }

    document.documentElement.lang = state.uiLang;
    document.documentElement.dir = state.uiLang === "ar" ? "rtl" : "ltr";
    applyTheme();
    setupArabicFont();
    updateAllI18n();
    updateUILanguageSelection();
    setupEvents();

    (async () => {
        await loadAllData();
        const initialRoute = getRouteFromLocation(window.location);
        await navigateToRoute(initialRoute, { historyMode: "replace" });
    })();
})();
