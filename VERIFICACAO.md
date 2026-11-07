# Verificação da entrega

## Pacote e ficheiros

- ZIP criado e extraído novamente para uma pasta de verificação.
- Integridade do arquivo verificada; conteúdo extraído comparado byte a byte (SHA-256) com a pasta de origem.
- HTML, CSS, JavaScript, configuração Netlify, robots, logótipo, 12 fotografias originais, versões WebP, referências, fontes e vídeos presentes e não vazios.
- Caminhos de HTML/CSS/JavaScript e imagens dinâmicas da galeria verificados na cópia extraída.
- Sem caminhos Windows, `/mnt/data`, URLs blob ou dependências de anexos temporários nos ficheiros executados pelo website.
- JavaScript validado pelo verificador de sintaxe do Node.

## HTTP e navegador

A pasta extraída do ZIP foi servida em `http://127.0.0.1:8765/` por um servidor HTTP local. Os ficheiros foram pedidos por HTTP e comparados com os ficheiros físicos: respostas 200, sem recursos em falta na entrega normal.

No navegador integrado, baseado em Chromium, foram verificados:

- CSS, fontes e logótipo carregados; fotografias visíveis e sem falhas de carregamento.
- Hero com reprodução automática real, silenciosa, inline e em loop. Observado avanço do tempo e `readyState = 4`.
- Segundo filme iniciado pelo botão de reprodução, com avanço real de 0,13 s para 8,60 s; pausa funcional e controlos nativos disponíveis.
- Menu móvel: abrir, selecionar Projetos, fechar o menu e navegar para a secção.
- Filtro de Interiores: exatamente duas seleções apresentadas.
- Lightbox: abertura, imagem seguinte carregada, contador 02/02 e fecho com Escape.
- Seleção de fases: opção Acabamentos exteriores oculta a fase anterior e mostra a fase correspondente; reposição das duas fases.
- Versão de teste temporária com os vídeos deliberadamente indisponíveis: poster e mensagem do hero conservados, botão de reprodução ocultado, mensagem de erro do filme apresentada e preloader encerrado. Os erros 404 desta simulação eram intencionais; a página de teste não faz parte da entrega.

## Dimensões de ecrã

Verificação de layout no navegador disponível, sem scroll horizontal nas dimensões seguintes:

| Formato | Dimensões |
| --- | --- |
| Desktop | 1440 × 900 |
| Portátil | 1366 × 768 |
| Tablet | 768 × 1024 |
| Formato de iPhone | 390 × 844 |
| Formato de Android | 412 × 915 |
| Mobile compacto | 320 × 740 |

Foi feita revisão visual do hero desktop e mobile, portefólio desktop/tablet e filme mobile. Fotografias mantêm proporções naturais; vídeos mantêm 9:16.

## Multimédia

Ambos os MP4 foram integralmente descodificados, sem erro, por FFmpeg. Codec H.264 Main, píxeis yuv420p, 720 × 1280 e moov antes de mdat (faststart).

| Ficheiro | Origem | Duração | Tamanho |
| --- | --- | --- | --- |
| hero.mp4 | Timeline 2, 10–20 s | 10 s | 1 539 012 bytes |
| projetos.mp4 | Timeline 1 integral | cerca de 19,35 s | 6 070 169 bytes |

## Limites da verificação

- As dimensões de iPhone e Android foram simuladas no Chromium. Não foram utilizados aparelhos físicos, Safari iOS, Firefox ou Android Chrome instalado num telemóvel.
- `prefers-reduced-motion` foi implementado e revisto no CSS e JavaScript; não foi alterada a preferência do sistema para um ensaio real dessa configuração.
- O gesto tátil da lightbox está implementado, mas não foi ensaiado num aparelho físico. Navegação por botões e Escape foi testada.
- Não houve publicação no GitHub, Netlify ou outro alojamento, pelo que não há teste de produção nem confirmação de domínio. A pasta de publicação `.` foi revista no ficheiro de configuração.
- Não foi efetuado contacto com o proprietário. O canal Instagram é o indicado nos materiais fornecidos; não se testou o envio de mensagens.
- A correspondência entre as duas fases da moradia resulta da análise visual dos materiais fornecidos, e não de documentação do projeto. Não foram associados interiores de proveniência incerta a essa moradia.

Esta é uma demonstração comercial não oficial, com indexação bloqueada, pronta para revisão e futura publicação mantendo a estrutura de pastas.
