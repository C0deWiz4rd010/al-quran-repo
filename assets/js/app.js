(function() {
            // ── i18n ──
            const i18n = {
                de: {
                    appTitle: 'Al-Quran', appSubtitle: 'Al-Karim', searchPlaceholder: 'Sure oder Vers suchen…',
                    tabSurahs: 'Suren', tabJuz: "Juz'", tabSajda: 'Sajda', tabBookmarks: 'Gemerkt',
                    headingSurahs: 'Die 114 Suren', headingJuz: "Die 30 Juz'", headingSajda: 'Niederwerfungsverse (Sajda)', headingBookmarks: 'Deine Lesezeichen',
                    headingSettings: 'Einstellungen', btnBack: 'Zurück', btnClose: 'Schließen', btnBookmark: 'Lesezeichen',
                    navSurahs: 'Suren', navJuz: "Juz'", navSajda: 'Sajda',
                    labelUILanguage: 'UI-Sprache', labelTranslation: 'Übersetzung', labelReciter: 'Rezitator (Audio)', labelArabicFont: 'Arabische Schrift',
                    bookmarkAdded: 'Lesezeichen gesetzt', bookmarkRemoved: 'Lesezeichen entfernt',
                    translationUpdated: 'Übersetzung aktualisiert', reciterUpdated: 'Rezitator aktualisiert', fontUpdated: 'Arabische Schrift aktualisiert', languageUpdated: 'Sprache aktualisiert',
                    loadError: 'Fehler beim Laden.', ayahLoadError: 'Fehler beim Laden der Verse.',
                    noBookmarks: 'Noch keine Lesezeichen. Öffne eine Sure und tippe auf das Lesezeichen-Symbol ☆.',
                    emptySajda: 'Keine Sajda-Daten geladen.', verses: 'Verse', mecca: 'Mekka', medina: 'Medina',
                    listen: 'Anhören', pause: 'Pause', sajdaLabel: 'Sajda', juzDetail: "Juz'", surah: 'Sure', ayah: 'Vers',
                },
                en: {
                    appTitle: 'Al-Quran', appSubtitle: 'Al-Karim', searchPlaceholder: 'Search surah or verse…',
                    tabSurahs: 'Surahs', tabJuz: "Juz'", tabSajda: 'Sajda', tabBookmarks: 'Bookmarks',
                    headingSurahs: 'The 114 Surahs', headingJuz: "The 30 Juz'", headingSajda: 'Prostration Verses (Sajda)', headingBookmarks: 'Your Bookmarks',
                    headingSettings: 'Settings', btnBack: 'Back', btnClose: 'Close', btnBookmark: 'Bookmark',
                    navSurahs: 'Surahs', navJuz: "Juz'", navSajda: 'Sajda',
                    labelUILanguage: 'UI Language', labelTranslation: 'Translation', labelReciter: 'Reciter (Audio)', labelArabicFont: 'Arabic Font',
                    bookmarkAdded: 'Bookmark added', bookmarkRemoved: 'Bookmark removed',
                    translationUpdated: 'Translation updated', reciterUpdated: 'Reciter updated', fontUpdated: 'Arabic font updated', languageUpdated: 'Language updated',
                    loadError: 'Loading error.', ayahLoadError: 'Error loading verses.',
                    noBookmarks: 'No bookmarks yet. Open a surah and tap the bookmark icon ☆.',
                    emptySajda: 'No Sajda data loaded.', verses: 'Verses', mecca: 'Mecca', medina: 'Medina',
                    listen: 'Listen', pause: 'Pause', sajdaLabel: 'Sajda', juzDetail: "Juz'", surah: 'Surah', ayah: 'Ayah',
                },
                ar: {
                    appTitle: 'القرآن', appSubtitle: 'الكريم', searchPlaceholder: 'ابحث عن سورة أو آية…',
                    tabSurahs: 'السور', tabJuz: 'الأجزاء', tabSajda: 'السجدة', tabBookmarks: 'المفضلة',
                    headingSurahs: '١١٤ سورة', headingJuz: '٣٠ جزءاً', headingSajda: 'آيات السجدة', headingBookmarks: 'المفضلة',
                    headingSettings: 'الإعدادات', btnBack: 'رجوع', btnClose: 'إغلاق', btnBookmark: 'المفضلة',
                    navSurahs: 'السور', navJuz: 'الأجزاء', navSajda: 'السجدة',
                    labelUILanguage: 'لغة الواجهة', labelTranslation: 'الترجمة', labelReciter: 'القارئ (الصوت)', labelArabicFont: 'الخط العربي',
                    bookmarkAdded: 'تمت الإضافة للمفضلة', bookmarkRemoved: 'تمت الإزالة من المفضلة',
                    translationUpdated: 'تم تحديث الترجمة', reciterUpdated: 'تم تحديث القارئ', fontUpdated: 'تم تحديث الخط العربي', languageUpdated: 'تم تحديث اللغة',
                    loadError: 'خطأ في التحميل.', ayahLoadError: 'خطأ في تحميل الآيات.',
                    noBookmarks: 'لا توجد مفضلة بعد. افتح سورة وانقر على أيقونة المفضلة ☆.',
                    emptySajda: 'لا توجد بيانات سجدة محملة.', verses: 'آيات', mecca: 'مكية', medina: 'مدنية',
                    listen: 'استماع', pause: 'إيقاف', sajdaLabel: 'سجدة', juzDetail: 'جزء', surah: 'سورة', ayah: 'آية',
                }
            };

            const state = {
                surahs: [],
                editions: [],
                sajdaData: [], // ← IMMER ein Array
                allAyahsForSearch: [],
                currentView: 'surahs',
                uiLang: localStorage.getItem('quran_ui_lang') || 'de',
                selectedTranslation: localStorage.getItem('quran_translation') || 'de.aburida',
                selectedAudio: localStorage.getItem('quran_audio') || 'ar.abdurrahmaansudais',
                selectedArabicFont: localStorage.getItem('quran_arabic_font') || 'scheherazade',
                bookmarks: JSON.parse(localStorage.getItem('quran_bookmarks') || '[]'),
                theme: localStorage.getItem('quran_theme') || 'light',
                currentAudioSurah: null,
                currentAudioAyah: null,
                isPlaying: false,
                searchTimeout: null,
            };

            const FALLBACK_TRANSLATIONS = ['de.aburida', 'de.khoury', 'de.bubenheim', 'en.sahih', 'en.pickthall'];
            const FALLBACK_AUDIO = ['ar.abdurrahmaansudais', 'ar.abdulsamad', 'ar.ahmedajamy', 'ar.alafasy'];

            function t(key) { return (i18n[state.uiLang] || i18n['de'])[key] || key; }

            const $ = (sel) => document.querySelector(sel);
            const $$ = (sel) => document.querySelectorAll(sel);

            // ── Hilfsfunktionen ──
            function getValidTranslation() {
                if (state.editions.some(e => e.identifier === state.selectedTranslation && e.type === 'translation')) return state.selectedTranslation;
                for (const fb of FALLBACK_TRANSLATIONS) { if (state.editions.some(e => e.identifier === fb && e.type === 'translation')) return fb; }
                return 'en.sahih'; // ultimative Fallback
            }
            function getValidAudio() {
                if (state.editions.some(e => e.identifier === state.selectedAudio && e.format === 'audio')) return state.selectedAudio;
                for (const fb of FALLBACK_AUDIO) { if (state.editions.some(e => e.identifier === fb && e.format === 'audio')) return fb; }
                return 'ar.abdurrahmaansudais';
            }

            // ── Theme & Font ──
            function applyTheme() {
                document.documentElement.setAttribute('data-theme', state.theme);
                $('#btnTheme').innerHTML = state.theme === 'dark'
                    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
                    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
            }
            function setupArabicFont() {
                const styleEl = document.getElementById('arabic-font-style') || document.createElement('style');
                styleEl.id = 'arabic-font-style';
                styleEl.textContent = `.ayah-arabic, .surah-arabic-name { font-family: ${state.selectedArabicFont === 'amiri' ? "'Amiri','Scheherazade New',serif" : "'Scheherazade New','Amiri',serif"}; }`;
                if (!document.getElementById('arabic-font-style')) document.head.appendChild(styleEl);
            }

            // ── i18n Update (korrigiert: überschreibt keine Buttons doppelt) ──
            function updateAllI18n() {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.dataset.i18n;
                    // Wenn das Element nur ein span-Kind hat, nur das span updaten
                    if (el.children.length === 1 && el.children[0].tagName === 'SPAN' && el.children[0].dataset.i18n) {
                        el.children[0].textContent = t(el.children[0].dataset.i18n);
                        return;
                    }
                    // Für Input-Platzhalter
                    if (el.tagName === 'INPUT' && el.dataset.i18nPlaceholder) {
                        el.placeholder = t(el.dataset.i18nPlaceholder);
                        return;
                    }
                    // Ansonsten nur Textknoten aktualisieren
                    for (const node of el.childNodes) {
                        if (node.nodeType === 3 && node.textContent.trim()) {
                            node.textContent = ' ' + t(key) + ' ';
                            break;
                        }
                    }
                });
                // Spezielle Buttons in Nav und Stats
                document.querySelectorAll('.nav-item, .stat-chip').forEach(btn => {
                    const span = btn.querySelector('span');
                    if (span && span.dataset.i18n) span.textContent = t(span.dataset.i18n);
                });
                $('#searchInput').placeholder = t('searchPlaceholder');
                updateUILanguageSelection();
            }
            function updateUILanguageSelection() {
                $$('#uiLanguageOptions .setting-option').forEach(o => o.classList.remove('selected'));
                const sel = document.querySelector(`#uiLanguageOptions [data-lang="${state.uiLang}"]`);
                if (sel) sel.classList.add('selected');
            }

            // ── API ──
            const API_BASE = 'https://api.alquran.cloud/v1';
            async function fetchJSON(url) {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`API ${res.status}`);
                return res.json();
            }

            async function loadAllData() {
                try {
                    showSkeleton();
                    const [surahsData, editionsData] = await Promise.all([
                        fetchJSON(`${API_BASE}/surah`),
                        fetchJSON(`${API_BASE}/edition`),
                    ]);
                    state.surahs = surahsData.data;
                    state.editions = editionsData.data;

                    // Validierung
                    const validTrans = getValidTranslation();
                    if (validTrans !== state.selectedTranslation) {
                        state.selectedTranslation = validTrans;
                        localStorage.setItem('quran_translation', validTrans);
                    }
                    const validAudio = getValidAudio();
                    if (validAudio !== state.selectedAudio) {
                        state.selectedAudio = validAudio;
                        localStorage.setItem('quran_audio', validAudio);
                    }

                    renderSurahList();
                    renderJuzGrid();
                    loadSajdaVerses();
                    populateSettings();
                    hideSkeleton();
                    loadSearchData();
                } catch (err) {
                    console.error(err);
                    hideSkeleton();
                    showToast(t('loadError'));
                }
            }

            async function loadSajdaVerses() {
                try {
                    const vt = getValidTranslation();
                    const data = await fetchJSON(`${API_BASE}/sajda/${vt}`);
                    state.sajdaData = normalizeSajdaData(data.data);
                } catch (e) {
                    console.warn('Sajda nicht geladen', e);
                    state.sajdaData = []; // ← Immer Array
                }
                if (state.currentView === 'sajda') renderSajdaList();
            }

            function normalizeSajdaData(data) {
                const ayahs = Array.isArray(data) ? data : data?.ayahs;
                if (!Array.isArray(ayahs)) return [];
                return ayahs.map(a => ({
                    surah: a.surah,
                    ayah: {
                        number: a.ayah?.number || a.numberInSurah,
                        text: a.ayah?.text || a.text || '',
                    },
                    sajda: a.sajda,
                })).filter(item => item.surah && item.ayah.number);
            }

            async function loadSearchData() {
                try {
                    const vt = getValidTranslation();
                    const data = await fetchJSON(`${API_BASE}/quran/${vt}`);
                    state.allAyahsForSearch = data.data.surahs.flatMap(s => s.ayahs.map(a => ({
                        surahNumber: s.number, surahName: s.englishName, ayahNumber: a.numberInSurah, text: a.text,
                    })));
                } catch (e) { /* silent */ }
            }

            function showSkeleton() {
                $('#surahList').innerHTML = Array.from({ length: 10 }, () => '<div class="surah-card"><div class="skeleton" style="width:44px;height:44px;border-radius:14px;"></div><div style="flex:1;"><div class="skeleton" style="height:16px;width:60%;margin-bottom:6px;border-radius:8px;"></div><div class="skeleton" style="height:12px;width:40%;border-radius:6px;"></div></div><div class="skeleton" style="width:50px;height:20px;border-radius:10px;"></div></div>').join('');
            }
            function hideSkeleton() {}

            function getSajdaAyahsForSurah(surahNumber) {
                const sajdaData = Array.isArray(state.sajdaData) ? state.sajdaData : normalizeSajdaData(state.sajdaData);
                return sajdaData.filter(s => s.surah.number === surahNumber).map(s => s.ayah.number);
            }

            // ── Rendering ──
            function renderSurahList() {
                $('#surahList').innerHTML = state.surahs.map(s => `
                    <div class="surah-card" role="button" tabindex="0" data-surah="${s.number}" data-view="surah">
                        <div class="surah-number">${s.number}</div>
                        <div class="surah-info">
                            <div class="surah-english">${s.englishName}</div>
                            <div class="surah-meta"><span>${s.englishNameTranslation}</span><span>·</span><span>${s.numberOfAyahs} ${t('verses')}</span></div>
                        </div>
                        <span class="surah-arabic-name">${s.name}</span>
                        <span class="surah-badge ${s.revelationType==='Meccan'?'badge-meccan':'badge-medinan'}">${s.revelationType==='Meccan'?t('mecca'):t('medina')}</span>
                    </div>`).join('');
            }
            function renderJuzGrid() {
                $('#juzGrid').innerHTML = Array.from({ length: 30 }, (_, i) => `<div class="juz-chip" role="button" tabindex="0" data-juz="${i+1}" data-view="juz-detail">${i+1}</div>`).join('');
            }
            function renderSajdaList() {
                if (!state.sajdaData.length) {
                    $('#sajdaList').innerHTML = `<div class="empty-state"><div class="empty-state-icon">🕌</div><div class="empty-state-text">${t('emptySajda')}</div></div>`;
                    return;
                }
                $('#sajdaList').innerHTML = state.sajdaData.map(item => {
                    const surah = state.surahs.find(s => s.number === item.surah.number);
                    return `<div class="surah-card" role="button" tabindex="0" data-surah="${item.surah.number}" data-ayah-scroll="${item.ayah.number}" data-view="surah">
                        <div class="surah-number" style="background:var(--gold-pale);color:var(--gold);">🕌</div>
                        <div class="surah-info">
                            <div class="surah-english">${t('surah')} ${item.surah.number}: ${item.surah.englishName||surah?.englishName||''}</div>
                            <div class="surah-meta">${t('ayah')} ${item.ayah.number} · ${t('sajdaLabel')}</div>
                        </div>
                        <span class="surah-arabic-name">${item.surah.name||surah?.name||''}</span>
                    </div>`;
                }).join('');
            }
            function renderBookmarksList() {
                if (!state.bookmarks.length) {
                    $('#bookmarksList').innerHTML = `<div class="empty-state"><div class="empty-state-icon">📑</div><div class="empty-state-text">${t('noBookmarks')}</div></div>`;
                    return;
                }
                $('#bookmarksList').innerHTML = state.bookmarks.map((bm, idx) => {
                    const surah = state.surahs.find(s => s.number === bm.surahNumber);
                    return `<div class="surah-card" role="button" tabindex="0" data-surah="${bm.surahNumber}" data-view="surah">
                        <div class="surah-number">${bm.surahNumber}</div>
                        <div class="surah-info">
                            <div class="surah-english">${surah ? surah.englishName : t('surah')+' '+bm.surahNumber}</div>
                            <div class="bookmark-indicator">★ ${t('btnBookmark')}</div>
                        </div>
                        <span class="surah-arabic-name">${surah ? surah.name : ''}</span>
                        <button class="icon-btn" data-remove-bookmark="${idx}" aria-label="Lesezeichen entfernen" style="position:relative;z-index:2;flex-shrink:0;" onclick="event.stopPropagation();"><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
                    </div>`;
                }).join('');
            }

            // ── Ayah Viewer ──
            async function openSurahViewer(surahNumber, scrollToAyah = null) {
                try {
                    $('#ayahList').innerHTML = Array.from({ length: 5 }, () => '<div class="ayah-card"><div class="skeleton" style="height:60px;border-radius:12px;margin-bottom:10px;"></div><div class="skeleton" style="height:40px;border-radius:8px;"></div></div>').join('');
                    const surah = state.surahs.find(s => s.number === surahNumber);
                    $('#viewerSurahTitle').textContent = surah ? `${t('surah')} ${surah.number}: ${surah.englishName}` : `${t('surah')} ${surahNumber}`;
                    updateBookmarkButton(state.bookmarks.some(b => b.surahNumber === surahNumber));
                    $('#bookmarkSurahBtn').style.display = '';
                    openOverlay($('#ayahViewer'));

                    const vt = getValidTranslation();
                    const [arabicData, transData] = await Promise.all([
                        fetchJSON(`${API_BASE}/surah/${surahNumber}`),
                        fetchJSON(`${API_BASE}/surah/${surahNumber}/${vt}`),
                    ]);
                    const sajdaAyahs = getSajdaAyahsForSurah(surahNumber);
                    const ayahs = arabicData.data.ayahs.map((a, i) => ({
                        number: a.numberInSurah,
                        arabic: a.text,
                        translation: transData.data.ayahs[i]?.text || '(Übersetzung nicht verfügbar)',
                        isSajda: sajdaAyahs.includes(a.numberInSurah),
                    }));
                    renderAyahs(ayahs, surahNumber, scrollToAyah);
                } catch (err) {
                    console.error(err);
                    const fallbackWorked = await tryAlternativeTranslation(surahNumber, scrollToAyah);
                    if (!fallbackWorked) showToast(t('ayahLoadError'));
                }
            }

            async function tryAlternativeTranslation(surahNumber, scrollToAyah) {
                const sajdaAyahs = getSajdaAyahsForSurah(surahNumber);
                for (const fb of FALLBACK_TRANSLATIONS) {
                    if (fb === state.selectedTranslation) continue;
                    try {
                        const [arabicData, transData] = await Promise.all([
                            fetchJSON(`${API_BASE}/surah/${surahNumber}`),
                            fetchJSON(`${API_BASE}/surah/${surahNumber}/${fb}`),
                        ]);
                        state.selectedTranslation = fb;
                        localStorage.setItem('quran_translation', fb);
                        populateSettings();
                        const ayahs = arabicData.data.ayahs.map((a, i) => ({
                            number: a.numberInSurah,
                            arabic: a.text,
                            translation: transData.data.ayahs[i]?.text || '',
                            isSajda: sajdaAyahs.includes(a.numberInSurah),
                        }));
                        renderAyahs(ayahs, surahNumber, scrollToAyah);
                        showToast('Übersetzung auf ' + fb + ' geändert');
                        return true;
                    } catch (e) { continue; }
                }
                $('#ayahList').innerHTML = `<div class="empty-state"><div class="empty-state-icon">⚠️</div><div class="empty-state-text">Keine Übersetzung verfügbar.</div></div>`;
                return false;
            }

            function renderAyahs(ayahs, surahNumber, scrollToAyah) {
                $('#ayahList').innerHTML = ayahs.map((a, idx) => `
                    <div class="ayah-card ${a.isSajda ? 'sajda' : ''} ${scrollToAyah && a.number === scrollToAyah ? 'current' : ''}" id="ayah-${a.number}">
                        <div class="ayah-arabic">${a.arabic}<span class="ayah-number-inline">${a.number}</span></div>
                        <div class="ayah-translation">${a.translation}</div>
                        <div class="ayah-audio-row">
                            <button class="audio-play-btn" data-play-ayah="${idx}" data-surah="${surahNumber}" data-ayah="${a.number}">▶ ${t('listen')}</button>
                            ${a.isSajda ? `<span style="font-size:0.7rem;color:var(--gold);font-weight:600;">🕌 ${t('sajdaLabel')}</span>` : ''}
                        </div>
                    </div>`).join('');
                if (scrollToAyah) setTimeout(() => {
                    const el = document.getElementById(`ayah-${scrollToAyah}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 400);
            }

            function updateBookmarkButton(isBookmarked) {
                const btn = $('#bookmarkSurahBtn');
                btn.innerHTML = isBookmarked
                    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>'
                    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
                btn.style.color = isBookmarked ? 'var(--gold)' : '';
            }

            // ── Juz ──
            async function loadJuzAyahs(juzNumber) {
                try {
                    $('#ayahList').innerHTML = Array.from({ length: 3 }, () => '<div class="ayah-card"><div class="skeleton" style="height:60px;"></div><div class="skeleton" style="height:40px;"></div></div>').join('');
                    $('#viewerSurahTitle').textContent = `${t('juzDetail')} ${juzNumber}`;
                    $('#bookmarkSurahBtn').style.display = 'none';
                    const vt = getValidTranslation();
                    const [arabicData, transData] = await Promise.all([
                        fetchJSON(`${API_BASE}/juz/${juzNumber}/ar.asad`),
                        fetchJSON(`${API_BASE}/juz/${juzNumber}/${vt}`),
                    ]);
                    const ayahs = arabicData.data.ayahs.map((a, i) => ({
                        number: a.numberInSurah, surahNumber: a.surah.number, arabic: a.text,
                        translation: transData.data.ayahs[i]?.text || '', isSajda: false,
                    }));
                    $('#ayahList').innerHTML = ayahs.map((a, idx) => `
                        <div class="ayah-card">
                            <div style="font-size:0.7rem;color:var(--gold);font-weight:600;margin-bottom:4px;">${t('surah')} ${a.surahNumber} · ${t('ayah')} ${a.number}</div>
                            <div class="ayah-arabic">${a.arabic}<span class="ayah-number-inline">${a.number}</span></div>
                            <div class="ayah-translation">${a.translation}</div>
                            <button class="audio-play-btn" data-play-ayah="${idx}" data-surah="${a.surahNumber}" data-ayah="${a.number}">▶ ${t('listen')}</button>
                        </div>`).join('');
                    openOverlay($('#ayahViewer'));
                } catch (err) {
                    console.error(err);
                    showToast(t('ayahLoadError'));
                }
            }

            // ── Audio ──
            async function playAyahAudio(surahNumber, ayahNumber) {
                const va = getValidAudio();
                const surah = state.surahs.find(s => s.number === surahNumber);
                $('#audioInfo').textContent = `${t('surah')} ${surahNumber}${surah ? ' · '+surah.englishName : ''} · ${t('ayah')} ${ayahNumber}`;
                $('#audioPlayerBar').classList.remove('hidden');

                try {
                    const data = await fetchJSON(`${API_BASE}/ayah/${surahNumber}:${ayahNumber}/${va}`);
                    const audioUrl = data.data?.audio || data.data?.audioSecondary?.[0];
                    if (!audioUrl) throw new Error('No audio URL in API response');

                    $('#audioElement').src = audioUrl;
                    await $('#audioElement').play();
                    state.currentAudioSurah = surahNumber;
                    state.currentAudioAyah = ayahNumber;
                    state.isPlaying = true;
                    updateAudioUI();
                } catch (e) {
                    console.error(e);
                    state.isPlaying = false;
                    updateAudioUI();
                    showToast('Audio nicht abspielbar.');
                }
            }
            function updateAudioUI() {
                $('#audioPlayPause').textContent = state.isPlaying ? '⏸' : '▶';
                $$('.audio-play-btn').forEach(btn => {
                    const sa = parseInt(btn.dataset.surah), aa = parseInt(btn.dataset.ayah);
                    const isCurrent = sa === state.currentAudioSurah && aa === state.currentAudioAyah && state.isPlaying;
                    btn.classList.toggle('playing', isCurrent);
                    btn.innerHTML = isCurrent
                        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="6" height="16"/><rect x="14" y="4" width="6" height="16"/></svg> ' + t('pause')
                        : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> ' + t('listen');
                });
            }
            function stopAudio() {
                $('#audioElement').pause();
                $('#audioElement').src = '';
                state.isPlaying = false;
                state.currentAudioSurah = null;
                state.currentAudioAyah = null;
                updateAudioUI();
                $('#audioPlayerBar').classList.add('hidden');
            }

            // ── Overlays ──
            function openOverlay(overlay) {
                overlay.style.display = 'flex';
                overlay.setAttribute('aria-hidden', 'false');
                overlay.classList.remove('closing');
                document.body.style.overflow = 'hidden';
                const fb = overlay.querySelector('button, [tabindex]');
                if (fb) setTimeout(() => fb.focus(), 100);
            }
            function closeOverlay(overlay) {
                overlay.classList.add('closing');
                overlay.setAttribute('aria-hidden', 'true');
                setTimeout(() => { overlay.style.display = 'none'; overlay.classList.remove('closing'); document.body.style.overflow = ''; }, 250);
            }

            // ── Views ──
            function switchView(view) {
                state.currentView = view;
                ['surahListView','juzView','sajdaView','bookmarksView'].forEach(id => $(`#${id}`).style.display = 'none');
                $$('.nav-item').forEach(n => n.classList.remove('active'));
                $$('.stat-chip').forEach(c => c.classList.remove('active'));
                const map = {
                    surahs: { content: '#surahListView', nav: '[data-nav="surahs"]', chip: '[data-view="surahs"]' },
                    juz: { content: '#juzView', nav: '[data-nav="juz"]', chip: '[data-view="juz"]' },
                    sajda: { content: '#sajdaView', nav: '[data-nav="sajda"]', chip: '[data-view="sajda"]' },
                    bookmarks: { content: '#bookmarksView', nav: null, chip: '[data-view="bookmarks"]' },
                };
                const cfg = map[view];
                if (cfg) {
                    $(cfg.content).style.display = 'block';
                    if (cfg.nav) $(cfg.nav)?.classList.add('active');
                    $(cfg.chip)?.classList.add('active');
                }
                if (view === 'sajda') renderSajdaList();
                if (view === 'bookmarks') renderBookmarksList();
                $('#mainContent').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // ── Search ──
            function performSearch(query) {
                if (!query || query.length < 2) { $('#searchResults').classList.remove('open'); return; }
                const q = query.toLowerCase();
                const surahMatches = state.surahs.filter(s => s.englishName.toLowerCase().includes(q) || s.englishNameTranslation.toLowerCase().includes(q) || s.name.includes(q) || String(s.number).includes(q));
                const ayahMatches = state.allAyahsForSearch.filter(a => a.text.toLowerCase().includes(q)).slice(0, 20);
                let html = '';
                if (surahMatches.length) {
                    html += `<div style="padding:8px 16px;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;">${t('navSurahs')}</div>`;
                    html += surahMatches.slice(0,8).map(s => `<div class="search-result-item" data-surah="${s.number}" data-view="surah" role="option" tabindex="0"><span class="search-result-surah">${t('surah')} ${s.number}</span><span class="search-result-text">${s.englishName} · ${s.englishNameTranslation}</span></div>`).join('');
                }
                if (ayahMatches.length) {
                    html += `<div style="padding:8px 16px;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;">${t('tabBookmarks').replace('Gemerkt','Verse')}</div>`;
                    html += ayahMatches.slice(0,10).map(a => `<div class="search-result-item" data-surah="${a.surahNumber}" data-ayah-scroll="${a.ayahNumber}" data-view="surah" role="option" tabindex="0"><span class="search-result-surah">${a.surahNumber}:${a.ayahNumber}</span><span class="search-result-text">${a.text}</span></div>`).join('');
                }
                if (!html) html = '<div class="search-result-item" style="color:var(--text-muted);">Keine Ergebnisse.</div>';
                $('#searchResults').innerHTML = html;
                $('#searchResults').classList.add('open');
            }

            // ── Settings ──
            function populateSettings() {
                if (!state.editions) return;
                const translations = state.editions.filter(e => e.type === 'translation');
                const audioEditions = state.editions.filter(e => e.format === 'audio');
                $('#translationOptions').innerHTML = translations.slice(0,30).map(t => `<button class="setting-option ${state.selectedTranslation===t.identifier?'selected':''}" data-translation="${t.identifier}">${t.englishName} (${t.language})</button>`).join('');
                $('#audioOptions').innerHTML = audioEditions.slice(0,20).map(a => `<button class="setting-option ${state.selectedAudio===a.identifier?'selected':''}" data-audio="${a.identifier}">${a.englishName}</button>`).join('');
            }

            function changeTranslation(id) { state.selectedTranslation = id; localStorage.setItem('quran_translation', id); populateSettings(); showToast(t('translationUpdated')); loadSearchData(); loadSajdaVerses(); }
            function changeAudio(id) { state.selectedAudio = id; localStorage.setItem('quran_audio', id); populateSettings(); showToast(t('reciterUpdated')); stopAudio(); }
            function changeArabicFont(font) { state.selectedArabicFont = font; localStorage.setItem('quran_arabic_font', font); setupArabicFont(); $$('#arabicFontOptions .setting-option').forEach(o=>o.classList.remove('selected')); $(`[data-font="${font}"]`)?.classList.add('selected'); showToast(t('fontUpdated')); }
            function changeUILanguage(lang) { state.uiLang = lang; localStorage.setItem('quran_ui_lang', lang); updateAllI18n(); renderSurahList(); if (state.currentView==='sajda') renderSajdaList(); if (state.currentView==='bookmarks') renderBookmarksList(); showToast(t('languageUpdated')); document.documentElement.lang = lang; document.documentElement.dir = lang==='ar'?'rtl':'ltr'; }

            function toggleBookmark(surahNumber) {
                const idx = state.bookmarks.findIndex(b => b.surahNumber === surahNumber);
                if (idx >= 0) { state.bookmarks.splice(idx,1); showToast(t('bookmarkRemoved')); }
                else { state.bookmarks.push({ surahNumber, addedAt: Date.now() }); showToast(t('bookmarkAdded')); }
                localStorage.setItem('quran_bookmarks', JSON.stringify(state.bookmarks));
                updateBookmarkButton(state.bookmarks.some(b => b.surahNumber === surahNumber));
                if (state.currentView === 'bookmarks') renderBookmarksList();
            }

            function showToast(msg) {
                const toast = $('#toast');
                toast.textContent = msg;
                toast.classList.add('visible');
                clearTimeout(toast._timeout);
                toast._timeout = setTimeout(() => toast.classList.remove('visible'), 2200);
            }

            // ── Events ──
            function setupEvents() {
                $('#surahList').addEventListener('click', e => { const c = e.target.closest('[data-surah]'); if (c) openSurahViewer(parseInt(c.dataset.surah), c.dataset.ayahScroll ? parseInt(c.dataset.ayahScroll) : null); });
                $('#juzGrid').addEventListener('click', e => { const c = e.target.closest('[data-juz]'); if (c) loadJuzAyahs(parseInt(c.dataset.juz)); });
                $('#sajdaList').addEventListener('click', e => { const c = e.target.closest('[data-surah]'); if (c) openSurahViewer(parseInt(c.dataset.surah), c.dataset.ayahScroll ? parseInt(c.dataset.ayahScroll) : null); });
                $('#bookmarksList').addEventListener('click', e => {
                    const rm = e.target.closest('[data-remove-bookmark]');
                    if (rm) { state.bookmarks.splice(parseInt(rm.dataset.removeBookmark),1); localStorage.setItem('quran_bookmarks', JSON.stringify(state.bookmarks)); renderBookmarksList(); showToast(t('bookmarkRemoved')); return; }
                    const c = e.target.closest('[data-surah]'); if (c) openSurahViewer(parseInt(c.dataset.surah));
                });
                $('#ayahList').addEventListener('click', e => {
                    const btn = e.target.closest('[data-play-ayah]'); if (!btn) return;
                    const sn = parseInt(btn.dataset.surah), an = parseInt(btn.dataset.ayah);
                    if (state.currentAudioSurah === sn && state.currentAudioAyah === an && state.isPlaying) { $('#audioElement').pause(); state.isPlaying = false; updateAudioUI(); }
                    else if (state.currentAudioSurah === sn && state.currentAudioAyah === an && !state.isPlaying) { $('#audioElement').play().catch(()=>{}); state.isPlaying = true; updateAudioUI(); }
                    else playAyahAudio(sn, an);
                });
                $('#backFromViewer').addEventListener('click', () => { closeOverlay($('#ayahViewer')); stopAudio(); });
                $('#bookmarkSurahBtn').addEventListener('click', () => {
                    const m = $('#viewerSurahTitle').textContent.match(/\d+/);
                    if (m) toggleBookmark(parseInt(m[0]));
                });
                $('#searchInput').addEventListener('input', () => { clearTimeout(state.searchTimeout); state.searchTimeout = setTimeout(() => performSearch($('#searchInput').value.trim()), 250); });
                $('#searchInput').addEventListener('focus', () => { if ($('#searchInput').value.trim().length>=2) performSearch($('#searchInput').value.trim()); });
                document.addEventListener('click', e => { if (!e.target.closest('#searchResults') && e.target !== $('#searchInput')) $('#searchResults').classList.remove('open'); });
                $('#searchResults').addEventListener('click', e => {
                    const item = e.target.closest('[data-surah]'); if (!item) return;
                    $('#searchResults').classList.remove('open'); $('#searchInput').value = '';
                    openSurahViewer(parseInt(item.dataset.surah), item.dataset.ayahScroll ? parseInt(item.dataset.ayahScroll) : null);
                });
                $('#btnSettings').addEventListener('click', () => openOverlay($('#settingsPanel')));
                $('#closeSettings').addEventListener('click', () => closeOverlay($('#settingsPanel')));
                $('#uiLanguageOptions').addEventListener('click', e => { const o = e.target.closest('[data-lang]'); if (o) changeUILanguage(o.dataset.lang); });
                $('#translationOptions').addEventListener('click', e => { const o = e.target.closest('[data-translation]'); if (o) changeTranslation(o.dataset.translation); });
                $('#audioOptions').addEventListener('click', e => { const o = e.target.closest('[data-audio]'); if (o) changeAudio(o.dataset.audio); });
                $('#arabicFontOptions').addEventListener('click', e => { const o = e.target.closest('[data-font]'); if (o) changeArabicFont(o.dataset.font); });
                $('#btnTheme').addEventListener('click', () => { state.theme = state.theme === 'light' ? 'dark' : 'light'; localStorage.setItem('quran_theme', state.theme); applyTheme(); });
                $('#audioPlayPause').addEventListener('click', () => {
                    if (state.isPlaying) { $('#audioElement').pause(); state.isPlaying = false; }
                    else if (state.currentAudioSurah) { $('#audioElement').play().catch(()=>{}); state.isPlaying = true; }
                    updateAudioUI();
                });
                $('#audioClose').addEventListener('click', stopAudio);
                $('#audioElement').addEventListener('ended', () => { state.isPlaying = false; updateAudioUI(); });
                $('#audioElement').addEventListener('pause', () => { if (!$('#audioElement').ended) { state.isPlaying = false; updateAudioUI(); } });
                $('#audioElement').addEventListener('play', () => { state.isPlaying = true; updateAudioUI(); });
                $$('.nav-item').forEach(b => b.addEventListener('click', () => switchView(b.dataset.nav)));
                $('#statsBar').addEventListener('click', e => { const c = e.target.closest('[data-view]'); if (c) switchView(c.dataset.view); });
                $('#btnBookmarks').addEventListener('click', () => switchView('bookmarks'));
                document.addEventListener('keydown', e => {
                    if (e.key === 'Escape') {
                        if ($('#ayahViewer').style.display === 'flex') { closeOverlay($('#ayahViewer')); stopAudio(); }
                        if ($('#settingsPanel').style.display === 'flex') closeOverlay($('#settingsPanel'));
                        $('#searchResults').classList.remove('open');
                    }
                });
                $('#ayahViewer').addEventListener('click', e => {
                    if (e.target === e.currentTarget) e.stopPropagation();
                });
                $('#settingsPanel').addEventListener('click', function(e) { if (e.target === this) closeOverlay(this); });
            }

            // ── Start ──
            document.documentElement.lang = state.uiLang;
            if (state.uiLang === 'ar') { document.documentElement.dir = 'rtl'; document.body.style.fontFamily = "'Scheherazade New','Amiri','Inter',sans-serif"; }
            applyTheme();
            setupArabicFont();
            updateAllI18n();
            updateUILanguageSelection();
            loadAllData();
            setupEvents();
        })();
