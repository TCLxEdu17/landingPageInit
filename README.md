# L&A Solutions VIP - Sistema de Cadastro de Clientes

Sistema interno para cadastro de clientes com envio de dados formatados diretamente para o WhatsApp. Design sofisticado em preto e laranja com tema VIP.

## 📱 Como Funciona

1. **Você acessa o site** (pode ser no celular ou computador)
2. **Preenche os dados do cliente** (nome, e-mail, telefone, serviço)
3. **Clica em "Salvar no WhatsApp"**
4. **Abre o WhatsApp** com a mensagem formatada
5. **Você envia** e recebe o registro no seu WhatsApp

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

Edite o arquivo `script.js` e altere o número na linha 14:

```javascript
const CONFIG = {
    // Número do WhatsApp onde você receberá os dados
    whatsappNumber: '5513996575675',  // Formato: DDI + DDD + Número
    // ...
};
```

**Formato do número:**
- `55` = Código do Brasil
- `13` = DDD (Santos/Baixada Santista)
- `996575675` = Número do telefone

### Redes Sociais

No mesmo arquivo `script.js`, atualize os links das redes sociais:

```javascript
socialLinks: {
    instagram: 'https://instagram.com/lasolutions',
    facebook: 'https://facebook.com/lasolutions',
    linkedin: 'https://linkedin.com/company/lasolutions'
}
```

### E-mail e Telefone de Contato (Rodapé)

No arquivo `index.html`, procure pela seção do footer e atualize:

```html
<div class="footer-contact">
    <h4>Contato</h4>
    <p>📧 contato@lasolutions.com.br</p>
    <p>📞 (13) 99657-5675</p>
</div>
```

## 📁 Estrutura de Arquivos

```
landingPageProspect/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos VIP (preto e laranja)
├── script.js       # Lógica do formulário e WhatsApp
└── README.md       # Este arquivo
```

## ✨ Funcionalidades

- ✅ Design VIP sofisticado (preto e laranja)
- ✅ Ticker animado "VIP" no topo
- ✅ Formulário de cadastro de clientes
- ✅ Validação de e-mail em tempo real
- ✅ Formatação automática de telefone
- ✅ Envio de dados formatados para WhatsApp
- ✅ Data e hora do cadastro
- ✅ Design responsivo (mobile-first)
- ✅ Efeitos de gradiente e glow
- ✅ Links para redes sociais

## 📩 Exemplo de Mensagem Recebida

```
⭐ CLIENTE VIP - L&A Solutions

👤 Nome: João Silva
📧 E-mail: joao@gmail.com
📞 Telefone: (11) 98888-7777
🔧 Serviço: Eletricista

💬 Obs:
Trocar fiação do apartamento

📅 24/02/2026 às 14:30
```

## 🎨 Personalização de Cores

Para alterar as cores, edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --color-primary: #f97316;       /* Laranja principal */
    --color-primary-dark: #ea580c;  /* Laranja escuro */
    --color-primary-light: #fb923c; /* Laranja claro */
    --color-dark-900: #0a0a0a;      /* Preto principal */
    /* ... */
}
```

## � Serviços Disponíveis

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

## � Dica de Uso

Use o **WhatsApp Web** no computador enquanto preenche o formulário. Assim o processo fica mais rápido e você mantém um histórico organizado de todos os clientes no seu WhatsApp.

## 🔒 Privacidade

Os dados são enviados diretamente para o seu WhatsApp. Nenhuma informação é armazenada em servidores externos.

## 📄 Licença

© 2026 L&A Solutions VIP. Todos os direitos reservados.
