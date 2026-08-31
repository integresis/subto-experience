# RaquetesTO — MVP

## Propósito
Vitrine comunitária para aproximar pessoas interessadas em anunciar, encontrar, vender ou trocar raquetes.

## Regra central
O RaquetesTO não é marketplace e não participa da transação.

> O RaquetesTO é apenas uma vitrine para aproximar pessoas. Não vendemos, não compramos, não recebemos pagamentos, não intermediamos negociações, entregas ou garantias e não nos responsabilizamos pelas transações realizadas entre os usuários. Antes de fechar qualquer negócio, confira o produto, a identidade da outra pessoa e as condições combinadas diretamente entre vocês.

## Cadastro mínimo
- Nome
- Celular / WhatsApp
- Confirmação do número por código/token
- Acesso posterior protegido para impedir que uma pessoa altere os anúncios de outra
- Sem perfil social, avaliação, seguidores ou burocracia adicional no MVP

## Anúncio
- Modalidade
- Marca
- Modelo
- Nova ou usada
- Venda, troca ou venda/troca
- Preço
- Peso (g)
- Balance
- Espessura (mm)
- Material da face
- Cidade
- Descrição curta
- 3 a 4 fotos, redimensionadas/comprimidas antes do upload
- Vídeo: opcional; avaliar implementação somente se não aumentar desnecessariamente armazenamento, tráfego e complexidade
- WhatsApp do anunciante

## Materiais iniciais
- Fibra de vidro
- Carbono
- 3K
- 6K
- 12K
- 15K
- 18K
- 24K
- Carbono forjado
- Carbono + Kevlar
- Kevlar
- Outro

## Espessuras sugeridas
- 20 mm
- 21 mm
- 22 mm
- Outro

## Limites
- Até 4 anúncios ativos por usuário
- Até 4 fotos por anúncio

## Vitrine e busca
Filtros simples por modalidade, marca, peso, balance, espessura, material, preço, cidade e condição.

### Ordenação da vitrine
- Padrão: anúncios mais novos primeiro
- Alternativas: menor preço e maior preço
- Anúncios vendidos ou indisponíveis deixam de aparecer na vitrine principal

### Cards
- Todos os cards com mesma altura e proporção visual
- Foto principal com enquadramento padronizado
- Marca e modelo em posição fixa
- Preço em destaque
- Peso e cidade como informação rápida
- Selo discreto para Nova/Usada e Venda/Troca
- Ações não devem deslocar ou alterar o tamanho do card
- Layout mobile-first, com leitura rápida e sem excesso de texto

## Favoritos
Usuário identificado pode favoritar anúncios.
- Favoritos ficam disponíveis em uma tela própria
- Favoritar não cria compromisso, reserva ou contato automático
- Um anúncio indisponível pode permanecer no histórico de favoritos, identificado como indisponível

## Comparação
Permitir selecionar até 3 raquetes para comparação lado a lado.

Campos prioritários da comparação:
- foto
- marca/modelo
- preço
- estado
- peso
- balance
- espessura
- material da face
- cidade

No celular, a comparação deve priorizar leitura simples e rolagem horizontal ou apresentação em tabela adaptada, sem tentar exibir informações demais de uma vez.

## Página do anúncio
Ao tocar em um card, abrir uma página de detalhe com:
- galeria de fotos
- marca/modelo
- preço
- características técnicas
- estado e tipo de negociação
- cidade
- descrição
- botão principal “Chamar no WhatsApp”
- favoritar
- adicionar à comparação
- denunciar anúncio
- seção de raquetes similares

## Similaridade
Ao abrir um anúncio, apresentar raquetes similares considerando, progressivamente:
1. mesma modalidade
2. marca/modelo
3. material
4. peso próximo
5. balance próximo
6. espessura
7. preço próximo
8. cidade

Entre resultados suficientemente similares, favorecer ordenação por preço e explicar de forma simples por que são parecidos.

### Comportamento dos similares
- A seção aparece abaixo do anúncio atual
- Cards seguem exatamente o mesmo padrão visual da vitrine
- Ao tocar em uma raquete similar, ela se torna a página principal e seus próprios similares são recalculados
- Evitar repetição excessiva do anúncio atual na sequência
- Preferir anúncios ativos

## Fluxo da negociação
Encontrou → abriu o anúncio → comparou/favoritou → chamou no WhatsApp.

Não haverá no MVP:
- pagamento interno
- comissão
- carteira
- chat interno
- logística/entrega
- garantia da transação
- certificação de originalidade
- avaliação por estrelas do vendedor

## Controle do anúncio
O proprietário pode editar, marcar como vendido/indisponível ou excluir o próprio anúncio. Deve existir opção para denunciar anúncio.

## Boas práticas de produto travadas
- experiência conhecida de classificados/marketplaces, sem reinventar navegação
- novidades primeiro por padrão
- cards uniformes
- favoritos
- comparação de até 3 itens
- similares na página do produto
- filtros objetivos
- poucas ações principais por tela
- WhatsApp como destino da negociação
- nenhuma função que transforme a plataforma em intermediadora financeira ou logística

## Princípio do produto
Resolver o problema de anúncios de raquetes que se perdem nos grupos de WhatsApp sem assumir responsabilidades de marketplace.
