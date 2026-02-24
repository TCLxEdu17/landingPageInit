/**
 * L&A Solutions - Landing Page Script
 * 
 * ==========================================
 * CONFIGURAÇÃO IMPORTANTE
 * ==========================================
 * 
 * Este sistema envia os dados do formulário diretamente para o seu WhatsApp.
 * Quando um cliente preencher o formulário, você receberá uma mensagem
 * formatada com todos os dados no seu WhatsApp Business.
 */

const CONFIG = {
    // Número do WhatsApp da L&A Solutions (VOCÊ receberá as mensagens aqui)
    whatsappNumber: '5513996575675',
    
    // Links das redes sociais (atualize conforme necessário)
    socialLinks: {
        instagram: 'https://instagram.com/lasolutions',
        facebook: 'https://facebook.com/lasolutions',
        linkedin: 'https://linkedin.com/company/lasolutions'
    }
};

// ==========================================
// Elementos do DOM
// ==========================================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// ==========================================
// Funções Principais
// ==========================================

/**
 * Formata o número de telefone enquanto o usuário digita
 */
function formatPhoneNumber(value) {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (00) 00000-0000
    if (numbers.length <= 2) {
        return `(${numbers}`;
    } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
}

/**
 * Valida o formulário antes do envio
 */
function validateForm(formData) {
    const errors = [];
    
    if (!formData.nome.trim()) {
        errors.push('Nome completo é obrigatório');
    } else if (formData.nome.trim().length < 3) {
        errors.push('Nome deve ter pelo menos 3 caracteres');
    }
    
    // Validação de e-mail aprimorada
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
        errors.push(emailValidation.message);
    }
    
    if (!formData.telefone.trim() || formData.telefone.replace(/\D/g, '').length < 10) {
        errors.push('Telefone válido é obrigatório (mínimo 10 dígitos)');
    }
    
    if (!formData.servico) {
        errors.push('Selecione um serviço de interesse');
    }
    
    return errors;
}

/**
 * Verifica se o e-mail é válido
 */
function isValidEmail(email) {
    // Regex mais robusta para validação de e-mail
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(email);
}

/**
 * Verifica se o domínio do e-mail existe (validação básica de domínios comuns)
 */
function isValidEmailDomain(email) {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;
    
    // Lista de domínios inválidos ou de teste
    const invalidDomains = [
        'test.com', 'teste.com', 'example.com', 'email.com', 
        'asdf.com', 'aaa.com', 'xxx.com', 'fake.com'
    ];
    
    // Lista de TLDs válidos mais comuns
    const validTLDs = [
        'com', 'com.br', 'net', 'org', 'edu', 'gov', 'io', 'co',
        'br', 'us', 'uk', 'pt', 'es', 'fr', 'de', 'it', 'jp',
        'info', 'biz', 'me', 'app', 'dev', 'tech'
    ];
    
    // Verifica se está na lista de domínios inválidos
    if (invalidDomains.includes(domain)) {
        return false;
    }
    
    // Verifica se tem um TLD válido
    const domainParts = domain.split('.');
    const tld = domainParts.slice(-2).join('.'); // para .com.br
    const simpleTld = domainParts[domainParts.length - 1]; // para .com
    
    return validTLDs.includes(tld) || validTLDs.includes(simpleTld);
}

/**
 * Valida o e-mail e retorna mensagem de erro específica
 */
function validateEmail(email) {
    email = email.trim().toLowerCase();
    
    if (!email) {
        return { valid: false, message: 'E-mail é obrigatório' };
    }
    
    if (!email.includes('@')) {
        return { valid: false, message: 'E-mail deve conter @' };
    }
    
    if (!isValidEmail(email)) {
        return { valid: false, message: 'Formato de e-mail inválido' };
    }
    
    if (!isValidEmailDomain(email)) {
        return { valid: false, message: 'Domínio de e-mail inválido ou não reconhecido' };
    }
    
    return { valid: true, message: '' };
}

/**
 * Compõe a mensagem para o WhatsApp
 */
function composeWhatsAppMessage(formData) {
    const lines = [
        '⭐ *CLIENTE VIP - L&A Solutions*',
        '',
        `👤 *Nome:* ${formData.nome}`,
        `📧 *E-mail:* ${formData.email}`,
        `📞 *Telefone:* ${formData.telefone}`,
        `🔧 *Serviço:* ${formData.servico}`,
    ];
    
    if (formData.mensagem.trim()) {
        lines.push('', `💬 *Obs:*`, formData.mensagem);
    }
    
    lines.push(
        '',
        `📅 ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}`
    );
    
    return lines.join('\n');
}

/**
 * Abre o WhatsApp para VOCÊ MESMO com a mensagem formatada
 * Assim você recebe os dados do cliente no seu próprio WhatsApp
 */
function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    
    // Abre o WhatsApp para o SEU PRÓPRIO número
    // Você preenche os dados e envia para si mesmo como registro
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

/**
 * Mostra a mensagem de sucesso
 */
function showSuccessMessage() {
    contactForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Scroll suave até a mensagem de sucesso
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Reseta o formulário para enviar nova mensagem
 */
function resetForm() {
    contactForm.reset();
    contactForm.classList.remove('hidden');
    successMessage.classList.add('hidden');
    
    // Scroll suave até o formulário
    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Expor função resetForm globalmente para o botão
window.resetForm = resetForm;

// ==========================================
// Event Listeners
// ==========================================

// Formatação do telefone em tempo real
document.getElementById('telefone').addEventListener('input', function(e) {
    e.target.value = formatPhoneNumber(e.target.value);
});

// Validação de e-mail em tempo real
document.getElementById('email').addEventListener('blur', function(e) {
    const email = e.target.value;
    const validation = validateEmail(email);
    const errorElement = document.getElementById('email-error');
    
    if (!validation.valid && email.length > 0) {
        e.target.classList.add('input-error');
        e.target.classList.remove('input-success');
        if (errorElement) {
            errorElement.textContent = validation.message;
            errorElement.classList.remove('hidden');
        }
    } else if (validation.valid) {
        e.target.classList.remove('input-error');
        e.target.classList.add('input-success');
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
    }
});

document.getElementById('email').addEventListener('input', function(e) {
    const email = e.target.value;
    const errorElement = document.getElementById('email-error');
    
    // Remove erro enquanto digita
    if (e.target.classList.contains('input-error')) {
        e.target.classList.remove('input-error');
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
    }
    
    // Mostra sucesso se válido
    if (email.length > 5) {
        const validation = validateEmail(email);
        if (validation.valid) {
            e.target.classList.add('input-success');
        } else {
            e.target.classList.remove('input-success');
        }
    }
});

// Envio do formulário
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        servico: document.getElementById('servico').value,
        mensagem: document.getElementById('mensagem').value
    };
    
    // Valida o formulário
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        alert('Por favor, corrija os seguintes erros:\n\n' + errors.join('\n'));
        return;
    }
    
    // Compõe e envia a mensagem para o WhatsApp
    const message = composeWhatsAppMessage(formData);
    openWhatsApp(message);
    
    // Mostra a mensagem de sucesso
    showSuccessMessage();
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Atualiza os links das redes sociais
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    const platforms = ['instagram', 'facebook', 'linkedin'];
    
    socialLinks.forEach((link, index) => {
        if (platforms[index] && CONFIG.socialLinks[platforms[index]]) {
            link.href = CONFIG.socialLinks[platforms[index]];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});

// ==========================================
// Animações e Efeitos
// ==========================================

// Adiciona classe de scroll ao header quando rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
});

// Log de inicialização
console.log('⭐ L&A Solutions VIP - Landing Page carregada com sucesso!');
console.log('📱 WhatsApp configurado para:', CONFIG.whatsappNumber);
