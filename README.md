# L&A Solutions - Landing Page

Uma landing page moderna, responsiva e profissional para a L&A Solutions, conectando clientes aos melhores especialistas em serviços residenciais.

## 🚀 Início Rápido

1. Abra o arquivo `index.html` no seu navegador
2. Ou use um servidor local (recomendado):
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (npx)
   npx serve
   ```

## ⚙️ Configuração

### Número do WhatsApp

Edite o arquivo `script.js` e substitua o número de WhatsApp na linha 14:

```javascript
const CONFIG = {
    // ⚠️ SUBSTITUA PELO NÚMERO OFICIAL DA L&A SOLUTIONS
    whatsappNumber: '5500000000000',  // Formato: DDI + DDD + Número
    // ...
};
```

**Formato do número:**
- `55` = Código do Brasil
- `11` = DDD (São Paulo, por exemplo)
- `999999999` = Número do telefone

Exemplo: `5511999999999`

### Redes Sociais

No mesmo arquivo `script.js`, atualize os links das redes sociais:

```javascript
socialLinks: {
    instagram: 'https://instagram.com/lasolutions',
    facebook: 'https://facebook.com/lasolutions',
    linkedin: 'https://linkedin.com/company/lasolutions'
}
```

### E-mail e Telefone de Contato

No arquivo `index.html`, procure pela seção do footer e atualize:

```html
<div class="footer-contact">
    <h4>Contato</h4>
    <p>📧 contato@lasolutions.com.br</p>
    <p>📞 (00) 00000-0000</p>
</div>
```

## 📁 Estrutura de Arquivos

```
landingPageProspect/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos e design responsivo
├── script.js       # Lógica do formulário e WhatsApp
└── README.md       # Este arquivo
```

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Esquema de cores branco e azul
- ✅ Header fixo com navegação suave
- ✅ Formulário de contato com validação
- ✅ Integração com WhatsApp
- ✅ Formatação automática de telefone
- ✅ Mensagem de sucesso após envio
- ✅ Links para redes sociais
- ✅ Nota de privacidade
- ✅ Otimizado para SEO básico
- ✅ Carregamento rápido (sem dependências externas pesadas)

## 🎨 Personalização de Cores

Para alterar as cores, edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --color-primary: #1e40af;      /* Azul principal */
    --color-primary-dark: #1e3a8a; /* Azul escuro */
    --color-primary-light: #3b82f6; /* Azul claro */
    /* ... */
}
```

## 📱 Serviços Disponíveis

O dropdown de serviços inclui:
- Eletricista
- Encanador
- Pintor
- Pedreiro
- Jardinagem
- Limpeza
- Ar Condicionado
- Marcenaria
- Outro

Para adicionar ou remover serviços, edite o `<select>` no arquivo `index.html`.

## 🔒 Privacidade

A landing page inclui uma nota de privacidade informando que os dados serão usados apenas para contato.

## 📄 Licença

© 2026 L&A Solutions. Todos os direitos reservados.
