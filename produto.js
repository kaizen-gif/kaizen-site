/* ==========================================================================
   PRODUTO.JS — página de detalhes (produto.html?id=hoodie)

   Depende de: produtos.js (dados) e carrinho.js (carrinho).
   Ordem no produto.html: produtos.js, carrinho.js, menus.js, produto.js
   ========================================================================== */

(function () {
  'use strict';

  var id = new URLSearchParams(window.location.search).get('id');
  var produto = id && window.PRODUTOS ? PRODUTOS[id] : null;

  function el(elId) {
    var node = document.getElementById(elId);
    if (!node) console.warn('[produto.js] Elemento #' + elId + ' não existe no produto.html');
    return node;
  }

  var imagemPrincipal = el('pd-imagem');
  var miniaturas = el('pd-miniaturas');
  var titulo = el('pd-titulo');
  var precoEl = el('pd-preco');
  var parcelaBox = el('pd-installment');
  var parcelaEl = el('pd-parcela');
  var descricao = el('pd-descricao');
  var tamanhoEscolhido = el('pd-tamanho-escolhido');
  var aviso = el('pd-aviso');
  var botaoComprar = el('pd-comprar');

  /* ---------------- produto inexistente ---------------- */

  if (!produto) {
    console.error('[produto.js] Produto "' + id + '" não encontrado. IDs válidos: ' +
      (window.PRODUTOS ? Object.keys(PRODUTOS).join(', ') : '(produtos.js não carregou)'));

    if (titulo) titulo.textContent = 'Produto não encontrado';
    if (descricao) descricao.textContent = 'Esta peça não existe ou o link está incorreto. Volte à coleção e escolha outra.';

    ['.pd-price-box', '.pd-sizes', '.pd-info-cards', '.pd-thumbs', '#pd-comprar', '.product-page-image']
      .forEach(function (seletor) {
        var alvo = document.querySelector(seletor);
        if (alvo) alvo.hidden = true;
      });
    return;
  }

  /* ---------------- textos e preço ---------------- */

  document.title = produto.titulo + ' — KAIZEN';
  if (titulo) titulo.textContent = produto.titulo;
  if (descricao) descricao.textContent = produto.descricao;

  var esgotado = !!produto.esgotado;
  var temPreco = !esgotado && produto.preco !== null && produto.preco !== undefined;

  if (precoEl) precoEl.textContent = esgotado ? 'Esgotado' : formatarPreco(produto.preco);
  if (parcelaBox) parcelaBox.hidden = !temPreco;
  if (parcelaEl && temPreco) parcelaEl.textContent = formatarPreco(produto.preco / 12);

  if (!temPreco && botaoComprar) {
    botaoComprar.disabled = true;
    botaoComprar.textContent = esgotado ? 'ESGOTADO' : 'EM BREVE';
  }

  if (esgotado) {
    var paginaProduto = document.querySelector('.product-page');
    if (paginaProduto) paginaProduto.classList.add('is-soldout');
  }

  /* ---------------- galeria ---------------- */

  var caminhos = produto.imagens.map(function (arquivo) { return PASTA_IMAGENS + arquivo; });

  function mostrar(caminho, posicao) {
    if (!imagemPrincipal) return;
    imagemPrincipal.onerror = function () {
      console.error('[produto.js] Imagem não encontrada (404): ' + imagemPrincipal.src);
    };
    imagemPrincipal.src = caminho;
    imagemPrincipal.alt = produto.titulo + ' — imagem ' + (posicao + 1);
  }

  mostrar(caminhos[0], 0);

  if (miniaturas) {
    miniaturas.textContent = '';
    if (caminhos.length > 1) {
      caminhos.forEach(function (caminho, i) {
        var botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'pd-thumb' + (i === 0 ? ' active' : '');
        botao.setAttribute('aria-label', 'Ver imagem ' + (i + 1));

        var img = document.createElement('img');
        img.src = caminho;
        img.alt = '';
        img.draggable = false;
        botao.appendChild(img);

        botao.addEventListener('click', function () {
          mostrar(caminho, i);
          var todas = miniaturas.querySelectorAll('.pd-thumb');
          for (var j = 0; j < todas.length; j++) todas[j].classList.remove('active');
          botao.classList.add('active');
        });

        miniaturas.appendChild(botao);
      });
    }
  }

 /* ---------------- tamanhos ---------------- */

  var tamanho = null;
  var ehAcessorio = (produto.categoria || '').toLowerCase() === 'acessório';
  var containerOpcoes = document.querySelector('.size-options');

  if (ehAcessorio && containerOpcoes) {
    containerOpcoes.innerHTML = '<button type="button" class="size-btn selected" aria-pressed="true" style="width: auto; padding: 0 20px;">Tamanho Único</button>';
    tamanho = 'Tamanho Único';
    if (tamanhoEscolhido) tamanhoEscolhido.textContent = 'Tamanho Único';
    if (aviso) aviso.hidden = true;
    if (esgotado) containerOpcoes.querySelector('.size-btn').disabled = true;
  } else {
    var botoesTamanho = document.querySelectorAll('.size-btn');

    botoesTamanho.forEach(function (botao) {
      botao.type = 'button';
      if (esgotado) botao.disabled = true;
      botao.addEventListener('click', function () {
        botoesTamanho.forEach(function (b) {
          b.classList.remove('selected');
          b.setAttribute('aria-pressed', 'false');
        });
        botao.classList.add('selected');
        botao.setAttribute('aria-pressed', 'true');

        tamanho = botao.textContent.trim();
        if (tamanhoEscolhido) tamanhoEscolhido.textContent = tamanho;
        if (aviso) aviso.hidden = true;
      });
    });
  }

  /* ---------------- adicionar ao carrinho ---------------- */

  if (botaoComprar && temPreco) {
    botaoComprar.addEventListener('click', function () {
      if (!tamanho) {
        if (aviso) aviso.hidden = false;
        return;
      }

      if (!window.KaizenCart) {
        console.error('[produto.js] carrinho.js não carregou.');
        return;
      }

      KaizenCart.adicionar({
        id: id,
        nome: produto.titulo,
        preco: produto.preco,
        tamanho: tamanho,
        imagem: caminhos[0]
      });

      var original = botaoComprar.textContent;
      botaoComprar.textContent = 'ADICIONADO ✓';
      setTimeout(function () { botaoComprar.textContent = original; }, 1400);

      KaizenCart.abrir();
    });
  }
})();
