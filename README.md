# Expo App Wrapper
This project is a simple app that can be built into an apk. It consists of an expo project that renders a React Native's WebView component.
That WebView loads a proxy website called for the app called "Ticketeador".

## Ticketeador Frontend
You can reach Ticketeador's frontend in its repo: https://github.com/mnapo/impresora-termica-frontend.
"Impresora Térmica" stands for "Thermal printer". Ticketeador's frontend can be built as an APK by itself, but Expo's politics specify that you must implement an SSL certificate, which is being skiped in dev phase.

## Ticketeador backend
You can find server+DB here: https://github.com/mnapo/impresora-termica-sv
