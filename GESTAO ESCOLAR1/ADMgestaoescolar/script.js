// Dados mockados para teste
let alunos = [
    { id: 1, matricula: "2024001", nome: "João Silva", turma: "9º Ano A", idade: 15 },
    { id: 2, matricula: "2024002", nome: "Maria Santos", turma: "9º Ano A", idade: 14 },
    { id: 3, matricula: "2024003", nome: "Pedro Oliveira", turma: "8º Ano B", idade: 13 }
];

let professores = [
    { id: 1, nome: "Ana Souza", disciplina: "Matemática", contato: "ana@email.com" },
    { id: 2, nome: "Carlos Lima", disciplina: "Português", contato: "carlos@email.com" }
];

let turmas = [
    { id: 1, codigo: "9A", nome: "9º Ano A", professor: "Ana Souza", alunos: 25 },
    { id: 2, codigo: "8B", nome: "8º Ano B", professor: "Carlos Lima", alunos: 28 }
];

// Função para mostrar/esconder seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Função para mostrar modal
function showModal(tipo) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('formCadastro');
    const modalTitle = document.getElementById('modalTitle');
    
    // Limpa o formulário
    form.innerHTML = '';
    
    // Configura o formulário baseado no tipo
    switch(tipo) {
        case 'aluno':
            modalTitle.textContent = 'Adicionar Aluno';
            form.innerHTML = `
                <input type="text" placeholder="Matrícula" required>
                <input type="text" placeholder="Nome" required>
                <select required>
                    <option value="">Selecione a Turma</option>
                    <option value="9A">9º Ano A</option>
                    <option value="8B">8º Ano B</option>
                </select>
                <input type="number" placeholder="Idade" required>
                <button type="submit">Salvar</button>
            `;
            break;
        case 'professor':
            modalTitle.textContent = 'Adicionar Professor';
            form.innerHTML = `
                <input type="text" placeholder="Nome" required>
                <input type="text" placeholder="Disciplina" required>
                <input type="email" placeholder="Contato" required>
                <button type="submit">Salvar</button>
            `;
            break;
        case 'turma':
            modalTitle.textContent = 'Adicionar Turma';
            form.innerHTML = `
                <input type="text" placeholder="Código" required>
                <input type="text" placeholder="Nome" required>
                <select required>
                    <option value="">Selecione o Professor</option>
                    ${professores.map(prof => `<option value="${prof.id}">${prof.nome}</option>`).join('')}
                </select>
                <button type="submit">Salvar</button>
            `;
            break;
    }
    
    modal.style.display = 'block';
}

// Função para fechar modal
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Função para renderizar tabelas
function renderizarTabelas() {
    // Tabela de Alunos
    const tabelaAlunos = document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    tabelaAlunos.innerHTML = alunos.map(aluno => `
        <tr>
            <td>${aluno.matricula}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.turma}</td>
            <td>${aluno.idade}</td>
            <td>
                <button onclick="editarRegistro('aluno', ${aluno.id})">Editar</button>
                <button onclick="excluirRegistro('aluno', ${aluno.id})">Excluir</button>
            </td>
        </tr>
    `).join('');

    // Tabela de Professores
    const tabelaProfessores = document.getElementById('tabelaProfessores').getElementsByTagName('tbody')[0];
    tabelaProfessores.innerHTML = professores.map(professor => `
        <tr>
            <td>${professor.id}</td>
            <td>${professor.nome}</td>
            <td>${professor.disciplina}</td>
            <td>${professor.contato}</td>
            <td>
                <button onclick="editarRegistro('professor', ${professor.id})">Editar</button>
                <button onclick="excluirRegistro('professor', ${professor.id})">Excluir</button>
            </td>
        </tr>
    `).join('');

    // Tabela de Turmas
    const tabelaTurmas = document.getElementById('tabelaTurmas').getElementsByTagName('tbody')[0];
    tabelaTurmas.innerHTML = turmas.map(turma => `
        <tr>
            <td>${turma.codigo}</td>
            <td>${turma.nome}</td>
            <td>${turma.professor}</td>
            <td>${turma.alunos}</td>
            <td>
                <button onclick="editarRegistro('turma', ${turma.id})">Editar</button>
                <button onclick="excluirRegistro('turma', ${turma.id})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

// Funções para editar e excluir registros
function editarRegistro(tipo, id) {
    let registro;
    switch(tipo) {
        case 'aluno':
            registro = alunos.find(a => a.id === id);
            break;
        case 'professor':
            registro = professores.find(p => p.id === id);
            break;
        case 'turma':
            registro = turmas.find(t => t.id === id);
            break;
    }
    
    if (registro) {
        showModal(tipo);
        // Preencher o formulário com os dados do registro
        const form = document.getElementById('formCadastro');
        const inputs = form.getElementsByTagName('input');
        const selects = form.getElementsByTagName('select');
        
        switch(tipo) {
            case 'aluno':
                inputs[0].value = registro.matricula;
                inputs[1].value = registro.nome;
                selects[0].value = registro.turma;
                inputs[2].value = registro.idade;
                break;
            case 'professor':
                inputs[0].value = registro.nome;
                inputs[1].value = registro.disciplina;
                inputs[2].value = registro.contato;
                break;
            case 'turma':
                inputs[0].value = registro.codigo;
                inputs[1].value = registro.nome;
                selects[0].value = registro.professor;
                break;
        }
    }
}

function excluirRegistro(tipo, id) {
    if (confirm('Tem certeza que deseja excluir este registro?')) {
        switch(tipo) {
            case 'aluno':
                alunos = alunos.filter(a => a.id !== id);
                break;
            case 'professor':
                professores = professores.filter(p => p.id !== id);
                break;
            case 'turma':
                turmas = turmas.filter(t => t.id !== id);
                break;
        }
        renderizarTabelas();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar dashboard inicialmente
    showSection('dashboard');
    
    // Renderizar tabelas
    renderizarTabelas();
    
    // Adicionar evento de submit ao formulário
    document.getElementById('formCadastro').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você implementaria a lógica para salvar os dados
        alert('Dados salvos com sucesso!');
        
        // Fecha o modal
        document.getElementById('modal').style.display = 'none';
        
        // Atualiza as tabelas
        renderizarTabelas();
    });
}); 