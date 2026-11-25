/* ==========================================================================
   PRODUTOS.JS — "banco de dados" temporário da KAIZEN

   Carregue ANTES dos outros scripts, tanto no index.html quanto no produto.html:
   <script src="produtos.js"></script>

   Para cada produto:
   - titulo, categoria, descricao
   - preco: número (ex.: 289.90) ou null enquanto não definido ("Em breve")
   - imagens: lista de arquivos dentro de image/produtos/ (a 1ª é a principal)
   - drop: 'trap' | 'halloween' (opcional, só para organização)
   - esgotado: true marca a peça como ESGOTADA no site inteiro (cards e página
     do produto). Para voltar a vender, apague a linha ou troque por false.
   ========================================================================== */

var PASTA_IMAGENS = 'image/produtos/';

var PRODUTOS = {
  'hoodie': {
    titulo: 'Hoodie Zip Kaizen',
    categoria: 'Moletom',
    preco: null,
    descricao: 'Preto absoluto com zíper metálico até o pescoço, puxador de leque dourado, bolsos embutidos e furo para o dedão.',
    imagens: ['hoodie-kaizen-1.jpg', 'hoodie-kaizen-2.jpg', 'hoodie-kaizen-3.jpg']
  },
  'cargo': {
    titulo: 'Cargo Wide Kaizen',
    categoria: 'Calça',
    preco: null,
    descricao: 'Jeans premium 100% algodão com modelagem wide leg ajustada. Possui bolsos utilitários e bordado rosa.',
    imagens: ['calca-cargo-kaizen-1.jpg', 'calca-cargo-kaizen-2.jpg', 'calca-cargo-kaizen-3.jpg']
  },
  'jeans-sakura': {
    titulo: 'Jeans Sakura Kaizen',
    categoria: 'Calça',
    preco: null, // ⚠️ defina o preço
    descricao: 'Jeans escuro estruturado com destaque para o luxuoso bordado de cerejeira (sakura) em linha dourada no bolso traseiro.',
    imagens: ['jeans-kaizen-1.jpg', 'jeans-kaizen-2.jpg', 'jeans-kaizen-3.jpg']
  },
  'temple-sakura': {
    titulo: 'Temple & Sakura',
    categoria: 'Camiseta',
    preco: null, // ⚠️ defina o preço
    descricao: 'Composição japonesa sofisticada inspirada em templo e montanhas com sombreamento em preto e cinza. Costas com flores e pétalas de pessegueira.',
    imagens: ['temple-sakura-1.jpg', 'temple-sakura-2.jpg']
  },
  'spider': {
    titulo: 'Kaizen Spider',
    categoria: 'Camiseta',
    preco: null,
    descricao: 'Composição gráfica com teia, círculo Enso dourado e ideograma central. Uma leitura mais sombria da identidade Kaizen.',
    imagens: ['kaizen-spider-1.jpg', 'kaizen-spider-2.jpg']
  },
  'i-choose': {
    titulo: 'I Choose My Own',
    categoria: 'Camiseta',
    preco: null, // ⚠️ defina o preço
    descricao: 'Camiseta branca com tipografia bold. Apresenta textura rachada, respingos e detalhes em ouro inspirados em pétalas de pessegueira.',
    imagens: ['i-choose-my-own-1.jpg', 'i-choose-my-own-2.jpg']
  },
  'i-wasnt-made': {
    titulo: "I Wasn't Made",
    categoria: 'Camiseta',
    preco: null, // ⚠️ defina o preço
    descricao: 'Camiseta preta de atitude, com tipografia texturizada desgastada e sutis pontos de luz dourados.',
    imagens: ['i-wasnt-made-to-fit-in-1.jpg', 'i-wasnt-made-to-fit-in-2.jpg']
  },
  'cropped': {
    titulo: 'Cropped Zip Kaizen',
    categoria: 'Top / Cropped',
    preco: null, // ⚠️ defina o preço
    descricao: 'Silhueta perfeitamente ajustada com gola alta e fechamento em zíper. Assinatura da marca estampada em dourado no peito.',
    imagens: ['cropped-kaizen-1.jpg', 'cropped-kaizen-2.jpg', 'cropped-kaizen-3.jpg']
  },
  'conjunto': {
    titulo: 'Conjunto Sakura & Fuji',
    categoria: 'Conjunto Performance',
    preco: null, // ⚠️ defina o preço
    descricao: 'Tecido suplex premium de alta compressão. Frente minimalista e costas com uma arte deslumbrante da cultura japonesa em tons de rosa.',
    imagens: ['conjunto-kaizen-1.jpg', 'conjunto-kaizen-2.jpg', 'conjunto-kaizen-3.jpg']
  },

  /* ======================= DROP HALLOWEEN (ESGOTADO) ======================= */

  'halloween-jeans-vinho': {
    titulo: 'Jeans Pumpkin Vinho', // ⚠️ nome provisório
    categoria: 'Calça',
    preco: null,
    drop: 'halloween',
    esgotado: true,
    descricao: 'Jeans wide leg vinho em algodão 100%, com estampa branca em alta definição de abóbora e fumaça. Etiqueta em couro ecológico, botões personalizados e tag Kaizen.',
    imagens: ['halloween-jeans-vinho-1.jpg']
  },
  'halloween-conjunto-reaper': {
    titulo: 'Conjunto Reaper Kaizen', // ⚠️ nome provisório
    categoria: 'Conjunto',
    preco: null,
    drop: 'halloween',
    esgotado: true,
    descricao: 'Moletom preto lavado com capuz e calça wide leg preta. Ceifador, teias e aranhas em bordado e estampa nas costas e mangas, estrela com detalhe vermelho no peito e cordão personalizado no cós.',
    imagens: ['halloween-conjunto-reaper-1.jpg']
  },
  'halloween-conjunto-web': {
    titulo: 'Conjunto Web Kaizen', // ⚠️ nome provisório
    categoria: 'Conjunto',
    preco: null,
    drop: 'halloween',
    esgotado: true,
    descricao: 'Top cropped preto com bordado de teia em vermelho e pedrarias, combinado com calça flare de cordões laterais em ilhós e a mesma teia bordada.',
    imagens: ['halloween-conjunto-web-1.jpg']
  },
  'halloween-camiseta-web': {
    titulo: 'Camiseta Web Kaizen', // ⚠️ nome provisório
    categoria: 'Camiseta',
    preco: null,
    drop: 'halloween',
    esgotado: true,
    descricao: 'Camiseta masculina preta, urbana e minimalista, com teia de aranha em vermelho estampada no ombro, na frente e nas costas.',
    imagens: ['halloween-camiseta-web-1.jpg']
  },
  'halloween-camiseta-bat': {
    titulo: 'Camiseta Bat Kaizen', // ⚠️ nome provisório
    categoria: 'Camiseta',
    preco: null,
    drop: 'halloween',
    esgotado: true,
    descricao: 'Camiseta assimétrica branca com barra de ilhós, morcego e estrela em vermelho na frente e na manga, e assinatura com morcego nas costas.',
    imagens: ['halloween-camiseta-bat-1.jpg']
  },

  /* ======================= DROP NOVEMBRO DO TRAP ======================= */

  'trap-cinto-black': {
    titulo: 'Cinto Cravejado Onyx Kaizen',
    categoria: 'Acessório',
    preco: 99.90,
    drop: 'trap',
    descricao: 'Cinto preto totalmente cravejado com pedrarias escuras de alto brilho, fivela metálica personalizada e acabamento reforçado.',
    imagens: ['trap-cinto-black-1.jpg', 'trap-cinto-black-2.jpg']
  },
  'trap-relogio-samurai': {
    titulo: 'Kit Relógio & Pulseira Samurai Ice',
    categoria: 'Acessório',
    preco: null,
    drop: 'trap',
    descricao: 'Relógio cravejado com mostrador inspirado em armadura samurai acompanhado de pulseira estilo cubana com fecho reforçado.',
    imagens: ['trap-relogio-samurai-1.jpg', 'trap-relogio-samurai-2.jpg']
  },
  'trap-corrente-samurai': {
    titulo: 'Corrente Cubana Samurai Kaizen',
    categoria: 'Acessório',
    preco: null,
    drop: 'trap',
    descricao: 'Corrente elo cubano cravejada em zircônias com pingente exclusivo de capacete samurai (Kabuto) rico em detalhes.',
    imagens: ['trap-corrente-samurai-1.jpg']
  },
  'trap-anel-samurai': {
    titulo: 'Anel Kabuto Samurai Ice',
    categoria: 'Acessório',
    preco: null,
    drop: 'trap',
    descricao: 'Anel robusto cravejado em pedrarias de alto brilho com escultura frontal de máscara e elmo samurai.',
    imagens: ['trap-anel-samurai-1.jpg']
  },
};


/* ------------------------------------------------------------------------
   AUXILIARES (usados pelo index, pela página de produto e pelo carrinho)
   ------------------------------------------------------------------------ */

// 289.9 -> "R$ 289,90" | null -> "Em breve"
function formatarPreco(valor) {
  if (valor === null || valor === undefined) return 'Em breve';
  return 'R$ ' + Number(valor).toFixed(2).replace('.', ',');
}

// Marca um card como esgotado: preço vira "Esgotado", a foto escurece
// e aparece a etiqueta ESGOTADO (estilos no trap.css).
function marcarEsgotado(precoEl) {
  precoEl.textContent = 'Esgotado';

  var card = precoEl.closest('.product-card');
  if (!card) return;
  card.classList.add('is-soldout');

  var galeria = card.querySelector('.product-gallery');
  if (galeria && !galeria.querySelector('.soldout-badge')) {
    var etiqueta = document.createElement('span');
    etiqueta.className = 'soldout-badge';
    etiqueta.textContent = 'Esgotado';
    galeria.appendChild(etiqueta);
  }
}

// No index: preenche os preços dos cards com os valores deste arquivo e
// marca os esgotados. Basta o card ter <div class="product-price" data-produto="hoodie">
function preencherPrecos() {
  var alvos = document.querySelectorAll('[data-produto]');
  for (var i = 0; i < alvos.length; i++) {
    var produto = PRODUTOS[alvos[i].getAttribute('data-produto')];
    if (!produto) continue;

    if (produto.esgotado) {
      marcarEsgotado(alvos[i]);
    } else {
      alvos[i].textContent = formatarPreco(produto.preco);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preencherPrecos);
} else {
  preencherPrecos();
}
