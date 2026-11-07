# ARQ LINEAR — Demonstração comercial

Website 100% estático, em português de Portugal. Não é o website oficial da empresa e ainda não tem aprovação do proprietário. Esta revisão foi preparada para análise local, a partir da versão existente no GitHub. Não foram efetuadas alterações no repositório nem publicação desta revisão; o proprietário não foi contactado.

## Abrir

Extraia o ZIP. Abra `arqlinear-demo/index.html` no navegador. Para uma verificação equivalente a alojamento estático, sirva a pasta `arqlinear-demo` por HTTP local. Não existe instalação, build, backend, base de dados, API ou serviço pago.

## GitHub e Netlify — preservar as pastas

1. Extraia o ZIP inteiro.
2. Abra a pasta `arqlinear-demo`.
3. Coloque **o conteúdo dessa pasta** na raiz do repositório GitHub: `index.html`, `styles.css`, `script.js`, `netlify.toml`, `robots.txt`, os documentos e a pasta **assets completa**.
4. Preserve exatamente `assets/images`, `assets/logo`, `assets/fonts`, `assets/videos` e `assets/references`.
5. **Nunca envie os ficheiros de `assets/images`, `assets/logo` ou `assets/videos` para a raiz do GitHub.** Não selecione isoladamente as fotografias e os vídeos para os carregar. Use uma ferramenta que mantenha as subpastas, como GitHub Desktop.
6. No Netlify, associe o repositório. Base: raiz do repositório. Comando de build: deixar vazio. Pasta de publicação: `.`. O `netlify.toml` já configura esta raiz.
7. Alternativamente, arraste a pasta completa `arqlinear-demo`, com `index.html` diretamente no seu interior, para uma publicação manual no Netlify.

Não achatar a estrutura, renomear `assets` ou utilizar Git LFS para estes ficheiros. Todos os caminhos são relativos e sensíveis à grafia. A estrutura foi preparada para alojamento estático; não há teste de produção, porque não foi feita publicação.

## Vídeos e fotografias

- Hero: `assets/videos/hero.mp4`, **Timeline 1.mp4 integral**, sem cortes, sem repetição artificial, sem aceleração. Duração do original conservada: 19,35 s, 580 fotogramas e todos os tempos de apresentação. H.264 Main, yuv420p, 720×1280, 30 fps, AAC e faststart. 6 935 204 bytes. A reprodução automática mantém-se silenciosa através de `muted`.
- Filme: `assets/videos/projetos.mp4`, **Timeline 2.mp4 integral**, 27,61 s e 828 fotogramas. H.264 Main, yuv420p, 720×1280, 30 fps, AAC e faststart. 5 752 101 bytes. Esta troca evita repetir o Timeline 1 noutra secção.
- Os dois originais em Downloads foram apenas lidos e permanecem intactos. Os caminhos dos ficheiros finais não mudaram.
- Cada vídeo tem um fotograma de poster do próprio vídeo, utilizado exclusivamente nesse elemento. Não foram extraídos fotogramas para preencher o portefólio ou outras secções.
- Todas as 12 fotografias reais fornecidas aparecem agora diretamente na página, cada uma uma única vez, entre Sobre, Portefólio e Transformação. A lightbox permite voltar a ampliá-las sem criar novos projetos. Os JPG e WebP existentes foram conservados byte a byte. A galeria distingue Projetos concluídos, Interiores e Em construção. As diferentes intervenções interiores continuam agrupadas apenas por tipologia.
- A apresentação de fases utiliza a moradia de betão/alvenaria e a fotografia com volumes brancos e ripado. A correspondência visual baseia-se nos vãos de canto, volumetria e lajes; não há nomes, localizações, datas ou confirmação documental do projeto. Como os ângulos diferem, as imagens são apresentadas lado a lado e por seleção de fase, sem sobreposição por arrastamento.
- Os quatro screenshots do Instagram servem de referência, estão guardados em `assets/references` e não aparecem como fotografias de projetos.
- O logótipo mantém a imagem original, convertida para PNG. O recorte circular é apenas uma máscara de apresentação em CSS.
- Tipografia Cormorant e Manrope, incluída localmente com as respetivas licenças SIL OFL. Não há dependência de fontes remotas.

## Funcionalidades

Galeria com filtros, ampliação em lightbox, navegação por setas e teclado, gesto de deslizar em ecrãs táteis e fecho com Escape. Seleção das fases da moradia. Menu móvel com navegação por teclado. Hero com autoplay silencioso, pausa manual e poster de recurso. O segundo filme tem controlos nativos e botão de reprodução. Respeito por `prefers-reduced-motion`: o hero inicia parado e as animações ficam desativadas. O preloader é breve, não espera pelos vídeos e tem saída independente em CSS.

O autoplay depende das políticas do navegador, de poupança de energia e das preferências do dispositivo. Se for bloqueado, o poster permanece e o botão permite iniciar manualmente. Sem JavaScript, o conteúdo principal mantém-se legível, mas os filtros e a lightbox precisam de JavaScript.

## Indexação e contactos

`noindex, nofollow` na página e nos cabeçalhos Netlify; `robots.txt` bloqueia rastreio. Esta configuração não equivale a proteção por palavra-passe. O único canal de contacto é o perfil Instagram fornecido: https://www.instagram.com/arquitecturalinear/.

## Verificação

Consulte `VERIFICACAO.md` para os testes realizados e os respetivos limites. Os formatos de iPhone e Android são verificados por dimensões de ecrã no navegador disponível; isso não substitui testes em aparelhos físicos ou no Safari iOS.
