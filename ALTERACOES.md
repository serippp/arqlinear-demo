# Polimento ARQ LINEAR — ficheiros e fotografias

Base: cópia de leitura de `serippp/arqlinear-demo`, ramo `main`, commit `cbe1134fdf1695cc2a8403b8d11d117ef72897dd`. Os 45 ficheiros descarregados eram idênticos à versão local anterior. Não foi feito push, commit remoto ou deploy.

## Ficheiros alterados no website

1. `index.html` — distinção entre Projetos concluídos e Em construção, fotografia adicional de cozinha, apresentação direta dos registos exteriores e interiores de obra; indicação do segundo filme atualizada para 00:27; descrição acessível do hero ajustada ao filme integral. Os restantes textos e secções foram preservados.
2. `styles.css` — regras acrescentadas exclusivamente para a composição da galeria; o CSS original mantém-se integralmente como prefixo do ficheiro, sem alterações às cores, fontes, animações ou restantes secções.
3. `script.js` — ampliação da seleção de ângulos concluídos, organização da seleção de obra, filtros para a fotografia de apoio e abertura da lightbox na imagem selecionada. Lógica do hero, menu, preloader, controlos de vídeo e fases da moradia preservada.
4. `assets/videos/hero.mp4` — Timeline 1 integral, 19,35 s, 580 fotogramas; H.264 otimizado com os mesmos tempos do original.
5. `assets/videos/hero-poster.jpg` — poster do próprio Timeline 1, mantendo o caminho existente.
6. `assets/videos/projetos.mp4` — Timeline 2 integral, 27,61 s, 828 fotogramas, para não repetir o vídeo do hero.
7. `assets/videos/projetos-poster.jpg` — poster do próprio Timeline 2, mantendo o caminho existente.

Documentação atualizada: `LEIA-ME.md` e `VERIFICACAO.md`. Documento novo: `ALTERACOES.md`.

## Fotografias com maior presença

Não foram adicionadas fotografias artificiais ou de stock. Os 12 anexos reenviados são iguais às 12 fotografias existentes; os ficheiros de imagem não foram substituídos. Todas são agora visíveis diretamente na página, sem duplicações da mesma fotografia fora da lightbox:

| Fotografia existente | Apresentação nesta revisão |
| --- | --- |
| moradia-piscina.jpg | Portefólio, Projetos concluídos, com ampliação da seleção de três ângulos |
| moradia-fachada.jpg | Mantida em Sobre; também acessível na mesma seleção de ângulos da lightbox |
| moradia-volumes.jpg | Mantida em Transformação; também acessível na seleção concluída da lightbox |
| moradia-estrutura.jpg | Mantida em Transformação, lado a lado com os acabamentos |
| estrutura-frontal.jpg | Agora em grande formato na página, Em construção |
| piscina-em-obra.jpg | Apresentada como outra fase exterior da mesma moradia, junto à estrutura |
| cozinha-madeira.jpg | Mantida na seleção de cozinhas |
| cozinha-contraste.jpg | Agora diretamente visível como outro espaço da mesma seleção por tipologia |
| banheira-luz.jpg | Mantida em Espaços de bem-estar |
| intervencao-interior.jpg | Agora diretamente visível em Remodelações / registos de interiores |
| interior-em-obra.jpg | Agora diretamente visível em Remodelações / registos de interiores |
| remodelacao-em-obra.jpg | Agora diretamente visível em Remodelações / registos de interiores |

A moradia é apresentada como um único projeto em diferentes fases e perspetivas. A ligação Ver a transformação liga os registos de obra à comparação existente. Os interiores de origem incerta não foram associados à moradia nem apresentados como antes/depois.

## Elementos conservados

Header, menu, preloader, Sobre, Serviços, Contactos, footer, logótipo, fontes, paleta, animações e funcionamento dos contactos. Os blocos HTML de header, Sobre, Serviços, Contactos e footer foram comparados e são idênticos à base. As fotografias, fontes, logótipo e referências mantêm os mesmos bytes.

`netlify.toml`, `robots.txt`, nomes das pastas e caminhos dos assets não foram alterados. Há apenas uma pasta `assets`, com `fonts`, `images`, `logo`, `references` e `videos`. O conteúdo da pasta `arqlinear-demo` deve continuar diretamente na raiz do repositório. A publicação Netlify permanece configurada para `.` e sem comando de build.

Consulte `VERIFICACAO.md` para os testes e limites desta revisão.
