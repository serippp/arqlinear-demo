# Verificação — polimento ARQ LINEAR

Revisão de 7 de novembro de 2026. Base: serippp/arqlinear-demo, main, commit cbe1134fdf1695cc2a8403b8d11d117ef72897dd. Os 45 ficheiros da cópia de leitura eram idênticos à entrega local anterior. Não foi feito push ou deploy desta revisão.

## Vídeos integrais

Os dois originais foram comprimidos em H.264 Main / yuv420p, a 720×1280, sem cortes ou alteração de velocidade. A comparação após descodificação integral confirmou o mesmo número de fotogramas, base de tempo e todos os tempos de apresentação.

| Destino | Original integral | Duração do ficheiro | Fotogramas | Bytes |
| --- | --- | --- | --- | --- |
| assets/videos/hero.mp4 | Timeline 1.mp4 | 19,35 s | 580 | 6 935 204 |
| assets/videos/projetos.mp4 | Timeline 2.mp4 | 27,61 s | 828 | 5 752 101 |

Os originais em Downloads não foram alterados. Os posters pertencem ao próprio vídeo de cada secção. Nenhum vídeo é repetido noutra secção. Hero com autoplay, muted, loop e playsinline mantidos. Ambos os MP4 incluem faststart.

No Chromium, o hero apresentou duração de 19,349 s, readyState 4, reprodução ativa, muted e loop. Numa página temporária de diagnóstico, foram observados dois ciclos: máximo observado 19,233 s e reinício de 19,187 s para aproximadamente zero. Os eventos de observação são periódicos; a sequência temporal completa do ficheiro foi confirmada separadamente contra o original.

O segundo filme reproduziu realmente no formato móvel: duração lida de 27,605 s, avanço de 0,17 s para 20,31 s e pausa funcional. As diferenças inferiores a centésimos entre os metadados do navegador e o contentor resultam do arredondamento.

## Elementos conservados

Header, Sobre, Serviços, Contactos e footer: blocos HTML idênticos à base. O CSS original mantém-se integralmente; apenas foram acrescentadas regras para a galeria. Lógica anterior do menu, preloader, hero, controlos de vídeo e fases conservada. Fotografias, variantes WebP, fontes, logótipo e referências mantêm os mesmos bytes. netlify.toml e robots.txt inalterados; publicação em `.` sem build. noindex, nofollow preservado.

## Fotografias e interações

As 12 fotografias reais estão diretamente no conteúdo principal, com 12 fontes distintas, sem duplicação na página. A lightbox reutiliza as fotografias para ampliação. A correspondência dos 12 anexos em Pictures com os JPG existentes foi confirmada byte a byte.

Testes no navegador:

- Filtro Em construção: coleção de obra com cinco fotografias; restantes coleções e fotografia de apoio ocultadas.
- Clique na fotografia da piscina: abre 02/05 na lightbox; último registo interior abre 05/05, com imagem carregada e fecho funcional.
- Projetos concluídos: navegação pelos três ângulos da mesma moradia até 03/03, com fotografia carregada.
- Menu móvel: abrir, escolher Projetos e fechar corretamente.
- Ver a transformação: navega para a comparação existente.
- Acabamentos exteriores: oculta a estrutura e apresenta a fase correspondente; reposição de As duas fases funcional.
- Fotografias mantêm proporções naturais; vídeos mantêm 9:16.

## Ecrãs

Sem scroll horizontal no Chromium nas dimensões: desktop 1440×900, portátil 1366×768, tablet 768×1024, formato iPhone 390×844, formato Android 412×915 e mobile compacto 320×740. Galeria adicional, filtros, menu e vídeos incluídos na revisão.

## Pacote e caminhos

ZIP criado com a pasta arqlinear-demo e a estrutura original de assets. Cópia extraída comparada com a pasta de entrega: ficheiros correspondentes, sem ficheiros vazios. Caminhos HTML, CSS e imagens dinâmicas de JavaScript verificados; todas as fotografias, vídeos, posters, fontes e logótipo presentes. Sintaxe JavaScript validada.

A cópia extraída foi servida por HTTP local em http://127.0.0.1:8765/. Todos os ficheiros da entrega foram pedidos por HTTP e comparados com os ficheiros físicos: respostas 200, sem recursos em falta. A página de diagnóstico não faz parte da entrega.

## Limites

- Dimensões móveis simuladas no Chromium; sem ensaio em dispositivos físicos, Safari iOS ou Firefox.
- Gesto tátil e prefers-reduced-motion mantêm a implementação anterior, sem novo ensaio físico ou alteração da preferência do sistema.
- Posters verificados e lógica anterior de fallback preservada; não se alterou a gestão de erros de vídeo.
- Correspondências da moradia baseadas em volumetria, vãos, caixilharias e contexto visível. Sem nomes, localizações ou associações inventadas entre interiores de proveniência incerta.
- Sem teste de produção desta revisão: GitHub e Netlify não foram alterados. Canal Instagram inalterado; nenhum contacto enviado.

Consulte ALTERACOES.md para a lista dos ficheiros modificados e a localização de cada fotografia.
