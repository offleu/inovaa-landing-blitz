# Configuração Google Ads - Instruções de Implementação

## ⚙️ Configurações Necessárias

### 1. Google Ads Conversion Tracking

**Localize os seguintes códigos no Google Ads:**

1. Acesse Google Ads → Ferramentas → Conversões
2. Crie uma nova conversão do tipo "Envio de formulário"
3. Copie o ID de conversão (formato: AW-XXXXXXXXXX)
4. Copie o rótulo de conversão

**Arquivos para atualizar:**

#### `src/utils/tracking.ts` (linha 55)
```typescript
// Substituir:
'send_to': `AW-CONVERSION_ID/${conversionLabel}`

// Por:
'send_to': `AW-SEU_ID_AQUI/${conversionLabel}`
```

### 2. Google Site Verification

**No arquivo `index.html` (linha 25):**
```html
<meta name="google-site-verification" content="ADICIONAR_CÓDIGO_VERIFICAÇÃO" />
```

1. Acesse Google Search Console
2. Adicione a propriedade do site
3. Copie o código de verificação
4. Substitua "ADICIONAR_CÓDIGO_VERIFICAÇÃO" pelo código real

### 3. URLs Canônicas

**No arquivo `index.html` (linha 26):**
```html
<link rel="canonical" href="https://www.inovaaecommerce.com.br/" />
```

Substitua pela URL real do domínio quando estiver no ar.

### 4. Números de WhatsApp

Os seguintes arquivos já estão configurados com o número: **+55 14 99130-2496**

Verifique se está correto em:
- `src/components/WhatsAppButton.tsx`
- `src/components/ChatPopup.tsx`
- `src/pages/FormularioContato.tsx`

---

## 📊 Eventos de Conversão Configurados

### Eventos Principais:
1. **form_submit** - Quando usuário envia formulário
2. **whatsapp_click** - Quando usuário clica em botões WhatsApp
3. **cta_click** - Quando usuário clica em CTAs principais
4. **chat_interaction** - Interações com popup de chat

### Como Criar Conversões no Google Ads:

1. **Conversão Principal - Envio de Formulário**
   - Nome: "Lead - Formulário de Contato"
   - Categoria: Envio de formulário
   - Valor: R$ 50 (estimativa de valor do lead)
   - Contagem: Uma
   - Janela de conversão: 30 dias

2. **Conversão Secundária - Clique WhatsApp**
   - Nome: "Engajamento - WhatsApp"
   - Categoria: Engajamento
   - Valor: R$ 20
   - Contagem: Uma
   - Janela de conversão: 7 dias

---

## 🎯 Configuração de Campanhas

### Palavras-chave Recomendadas (Search):

**Alta Intenção:**
- criar loja virtual
- montar e-commerce
- fazer loja online
- criar site de vendas
- abrir loja virtual
- loja virtual profissional

**Média Intenção:**
- quanto custa loja virtual
- como criar e-commerce
- preço loja online
- empresa de e-commerce

**Palavras-chave Negativas:**
- gratis
- gratuito
- curso
- tutorial
- como fazer sozinho
- diy

### Extensões de Anúncio:

1. **Sitelinks:**
   - Ver Pacotes (/#pacotes)
   - Como Funciona (/#como-funciona)
   - Falar no WhatsApp
   - Solicitar Orçamento (/formulario-contato)

2. **Chamadas:**
   - Loja Pronta em 20 Dias
   - Ou Seu Dinheiro de Volta
   - Suporte Dedicado Incluído
   - A partir de R$ 1.490

3. **Snippets Estruturados:**
   - Serviços: Design Profissional, Cadastro de Produtos, SEO, Integração Pagamento
   - Plataformas: Nuvemshop, Shopify, Yampi, Tray

---

## 📈 Otimizações Implementadas

### SEO & Performance:
✅ Meta tags otimizadas para conversão
✅ Schema.org (LocalBusiness, FAQPage, Offers)
✅ Open Graph para compartilhamento social
✅ Canonical tags
✅ Structured data para produtos/serviços

### Conversão:
✅ Banner de urgência com countdown
✅ Botão WhatsApp flutuante
✅ Popup de chat interativo (10s delay)
✅ Múltiplos CTAs estratégicos
✅ Prova social e trust badges
✅ FAQ com schema markup
✅ Garantia de 20 dias destacada

### Tracking:
✅ Google Analytics (G-8S0T350C1S)
✅ Google Tag Manager (GTM-WKCSQ7LB)
✅ Eventos personalizados configurados
✅ Conversões trackadas

---

## 🚀 Checklist Pré-Lançamento

- [ ] Configurar ID de conversão do Google Ads
- [ ] Adicionar código de verificação do Search Console
- [ ] Atualizar URL canônica com domínio real
- [ ] Verificar números de telefone/WhatsApp
- [ ] Testar todos os formulários e botões
- [ ] Criar campanhas no Google Ads
- [ ] Configurar extensões de anúncios
- [ ] Definir orçamento diário
- [ ] Configurar público-alvo e segmentação
- [ ] Testar tracking de conversões

---

## 💡 Dicas de Otimização

1. **Budget Inicial Sugerido:** R$ 50-100/dia
2. **Lance:** Maximize conversões (após 15 conversões, mudar para CPA alvo)
3. **Segmentação:** Todo Brasil, foco em estados com maior poder aquisitivo
4. **Horários:** Segunda a Sexta, 9h-18h (ajustar conforme dados)
5. **Dispositivos:** Mobile e Desktop (70% das conversões vêm de mobile)

## 📞 Suporte

Para dúvidas sobre implementação, consulte a documentação do Google Ads ou entre em contato com o desenvolvedor.
