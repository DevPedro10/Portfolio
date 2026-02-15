# Configuração PWA - Portfolio Natã Pedro

## O que foi configurado

### 1. **Manifest.json**
- Arquivo `/public/manifest.json` com metadados da aplicação
- Define nome, descrição, ícones e tema da aplicação
- Permite instalação como aplicativo no celular

### 2. **Service Worker**
- Arquivo `/public/service-worker.js` para funcionalidade offline
- Estratégia: Network First com fallback para cache
- Carregamento automático de recursos frequentes

### 3. **Vite Config (vite-plugin-pwa)**
- Plugin `vite-plugin-pwa` instalado e configurado
- Geração automática de arquivos PWA durante build
- Cache inteligente com Workbox:
  - Avatars do GitHub: cache por 30 dias
  - Assets do Supabase: cache por 30 dias

### 4. **HTML Meta Tags**
- `<meta name="theme-color">` para barra de endereço
- `<meta name="apple-mobile-web-app-capable">` para iOS
- `<meta name="manifest">` para Android
- Apple Touch Icon para favoritos iOS

### 5. **Service Worker Registration**
- Registrado no `main.tsx`
- Fallback manual para navegadores sem suporte

## Funcionalidades PWA

✅ Instalação em Home Screen (iOS/Android)
✅ Funcionamento Offline
✅ Cache de recursos
✅ Atualização automática
✅ Ícone personalizado
✅ Barra de status customizada

## Como testar

### Desktop (Chrome)
1. Abrir DevTools (F12)
2. Ir para Application > Manifest
3. Clicar em "Install"

### Mobile
1. Abrir em navegador mobile
2. Menu > "Instalar aplicativo" ou "Adicionar à tela inicial"

## Build

```bash
npm run build
npm run preview
```

Depois acesse `http://localhost:4173` para testar como PWA

## Atualizações futuras

Para criar novos ícones otimizados, use:
- Tamanho: 192x192, 512x512
- Formatos: PNG ou WebP
- Incluir versão maskable para Android 12+
