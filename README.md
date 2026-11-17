# TPP Pracownia — statyczna strona zapowiadająca platformę

Nowa strona prezentacyjna Towarzystwa Psychopedagogicznego, przygotowana dla repozytorium `Prod_psychopedagog_WEB`.

## Co obejmuje

- Responsywny landing page po polsku z animacjami CSS i wejściem sekcji w polu widzenia.
- Informacje o planowanych generatorach arkuszy, materiałach PDF i kursach online.
- Kliencki demonstrator trzech przykładowych arkuszy z możliwością edycji tytułu i użycia funkcji drukowania przeglądarki (również „Zapisz jako PDF”).
- Nawigację mobilną, semantyczny HTML, obsługę ograniczenia animacji i ustawienia druku.
- Podstawowe metadane SEO, Open Graph i JSON-LD organizacji.

## Uruchomienie

Projekt nie wymaga Node.js, bundlera ani zewnętrznych zależności.

Otwórz `index.html` w przeglądarce albo uruchom lokalny serwer statyczny:

```bash
python3 -m http.server 8080
```

Następnie wejdź na http://localhost:8080.

### Cloudflare Pages

Utwórz projekt Pages podłączony do tego repozytorium na gałęzi `main`:
- Framework preset: `None`
- Build command: pozostaw puste
- Build output directory: `/` (katalog główny repozytorium)

Domenę produkcyjną podepnij dopiero podczas przełączania starej witryny. Ten commit **nie** zmienia DNS ani obecnej strony.

## Ważne rozróżnienia

To etap zapowiadający projekt. Nie zawiera kont użytkowników, koszyka, subskrypcji, płatności, prawdziwego katalogu produktów, systemu e-learningowego ani generowania dokumentów na serwerze. Przycisk druku wyświetla okno drukowania wyłącznie przykładowej karty. Nie należy przedstawiać tej wersji jako działającego sklepu.

Logo w `assets/logo.png` zostało skopiowane z istniejącego repozytorium organizacji `PTPP/Prod_PSYCHOPEDAGOGEUORG` (plik `logo.png` na gałęzi `master`); to oryginalny pomarańczowy symbol, a nie rekonstrukcja.

Dane stowarzyszenia: Towarzystwo Psychopedagogiczne, KRS 0000586474, Bolesławiec, ul. Warszawska 1/3, biuro@psychopedagog.org. Zweryfikowano ze stroną organizacji i publicznymi rejestrami (listopad 2026).

## Kontrola jakości przed wdrożeniem

1. Sprawdź responsywność (320px, 768px, 1440px).
2. Przetestuj menu klawiaturą, opcję „ogranicz animacje”, zmianę szablonów i druk.
3. Zweryfikuj nowe dokumenty prawne dla docelowej usługi cyfrowej przed włączeniem sprzedaży (obecnie linkowana jest polityka prywatności dotychczasowej działalności TPP).
4. Po uruchomieniu pod finalnym adresem uzupełnij metadane canonical, mapę witryny i grafikę Open Graph oraz podepnij realny katalog / aplikację.
