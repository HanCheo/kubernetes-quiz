# Kubernetes Quiz

A bilingual KCNA/KCSA practice quiz for mobile testing.

Questions mix supplied study material and independently written practice. This is not an officially authenticated past-exam bank or a verified exam-difficulty benchmark. KCNA also covers the wider cloud-native/CNCF ecosystem, not only Kubernetes operations. The UI uses `객관식 연습` rather than claiming actual exam style.

Mock exams contain 60 questions for KCNA or KCSA (90 minutes). The combined KCNA + KCSA mock samples 60 questions from each exam, 120 total (180 minutes). Filters can reduce the available question count. Combined results and saved history show separate exam scores.

Completed attempts are stored in IndexedDB for the current browser and site origin. They do not sync across devices or transfer automatically from localhost, and clearing site data removes them.

## Personal vocabulary

Click an English word in a question, choice, explanation, or saved review to save it with its English/Korean context. Case variants are deduplicated. Word clicks never select answers; use the numbered choice button or an empty area of the choice to answer.

The `단어장` tab provides search, learning/known filters, Korean meaning/note editing, confirmed deletion, and reveal/self-rating study cards. Words, notes, and contexts persist in this browser's localStorage (`quiz:vocabulary`), independently of exam statistics and IndexedDB history. They do not sync across browsers or devices; clearing site data removes them.

Optional [Free Dictionary API](https://dictionaryapi.dev/) lookups provide general English definitions, not automatic Korean translations. Only the selected word is sent to the service. Source/license attribution is retained for returned definitions; technical terms may be missing. Network errors or a ten-second timeout do not block saving or studying.

Switching tabs keeps the active mock and its answers intact. Its timer continues running, and expiry does not interrupt vocabulary editing.

## Publication

This repository contains only the runtime quiz HTML/JavaScript and a sanitized question projection. Personal authoring files, source evidence, research, snapshots, and unrelated exercises are not included. Runtime script URLs have a `v=` token; update it when changing those assets so readers receive the new version without clearing their progress.

The site is deployed with GitHub Pages using `.github/workflows/pages.yml`.
