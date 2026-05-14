// =====================================================================
// DADOS DAS MATÉRIAS — Edital TDAS · Cuidador Social (Cargo 201)
// =====================================================================
const BLOCOS = [
  {
    id: 'lp',
    nome: 'Língua Portuguesa',
    cor: '#7c6cfc',
    topicos: [
      'Compreensão e interpretação de textos de gêneros variados',
      'Reconhecimento de tipos e gêneros textuais',
      'Domínio da ortografia oficial',
      'Emprego de elementos de referenciação, substituição e repetição',
      'Emprego de conectores e elementos de sequenciação textual',
      'Emprego de tempos e modos verbais',
      'Emprego das classes de palavras',
      'Relações de coordenação entre orações e termos',
      'Relações de subordinação entre orações e termos',
      'Emprego dos sinais de pontuação',
      'Concordância verbal e nominal',
      'Regência verbal e nominal',
      'Emprego do sinal indicativo de crase',
      'Colocação dos pronomes átonos',
      'Significação das palavras',
      'Substituição de palavras ou trechos de texto',
      'Reorganização da estrutura de orações e períodos',
      'Reescrita de textos de diferentes gêneros e formalidade',
    ]
  },
  {
    id: 'df',
    nome: 'Conhecimentos do DF, Política para Mulheres e Primeiros Socorros',
    cor: '#3ee08a',
    topicos: [
      'Tópicos: realidade étnica, social, histórica e geográfica do DF e RIDE',
      'Aspectos culturais, políticos e econômicos do DF e RIDE',
      'LC Federal nº 94/1998 e suas alterações (RIDE)',
      'Decreto Federal nº 7.469/2011 e suas alterações',
      'Plano Distrital de Política para Mulheres (PDPM)',
      'Lei Orgânica do DF – Título VI: Da Ordem Social e do Meio Ambiente',
      'LC nº 840/2011 – Título I: Disposições Preliminares',
      'LC nº 840/2011 – Título V: Dos Deveres',
      'LC nº 840/2011 – Título VI: Do Regime Disciplinar',
      'LC nº 840/2011 – Título VII: Processos de Apuração de Infração Disciplinar',
      'Lei Federal nº 11.340/2006 – Lei Maria da Penha',
      'Lei Distrital nº 7.484/2024',
      'Primeiros socorros: cuidados iniciais com a vítima',
      'Reconhecimento de situações de urgência e emergência',
      'Acionamento do socorro especializado',
      'Condutas em casos de engasgo e sangramento',
      'Condutas em casos de fratura e queimadura',
      'Condutas em casos de desmaio, convulsão e intoxicação',
    ]
  },
  {
    id: 'suas',
    nome: 'Fundamentos, Organização e Gestão do SUAS',
    cor: '#f5a623',
    topicos: [
      'PNAS/2004: princípios, diretrizes e objetivos',
      'PNAS/2004: proteções afiançadas, PSB e PSE',
      'PNAS/2004: matricialidade sociofamiliar e territorialização',
      'SUAS: princípios, diretrizes e organização',
      'SUAS: seguranças socioassistenciais (acolhida, convívio, renda, autonomia)',
      'NOB/SUAS (2012): responsabilidades dos entes federativos',
      'NOB/SUAS (2012): cofinanciamento',
      'NOB/SUAS (2012): gestão do trabalho e vigilância socioassistencial',
    ]
  },
  {
    id: 'prog',
    nome: 'Programas, Benefícios e Instrumentos Socioassistenciais do DF',
    cor: '#f05d7a',
    topicos: [
      'Cartão Prato Cheio – Lei Distrital nº 7.009/2021 e Decreto nº 42.873/2021',
      'Programa Cartão Gás – Lei Distrital nº 6.938/2021 e Decreto nº 42.376/2021',
      'Plano DF Social – Lei Distrital nº 7.008/2021 e Portaria nº 42/2023',
      'Benefícios Eventuais – Lei Distrital nº 5.165/2013 e Decreto nº 35.191/2014',
      'SISAN/Restaurante Comunitário – Decreto nº 33.329/2011 e alterações',
    ]
  },
  {
    id: 'rede',
    nome: 'Rede Socioassistencial e Intersetorialidade',
    cor: '#5b8def',
    topicos: [
      'Articulação entre CRAS, CREAS e Unidades de Acolhimento',
      'Trabalho em rede com saúde, educação, justiça e segurança pública',
      'Fluxos de encaminhamento, referência e contrarreferência no SUAS',
      'Territorialização e matricialidade sociofamiliar (aplicada ao cargo)',
    ]
  },
  {
    id: 'rotinas',
    nome: 'Rotinas de Acolhimento, Cuidado e Trabalho em Equipe',
    cor: '#a8e063',
    topicos: [
      'Resolução Conjunta CNAS/CONANDA nº 1/2009 – Orientações Técnicas para Acolhimento de Crianças e Adolescentes',
      'Plano Nacional de Convivência Familiar e Comunitária',
      'Trabalho em equipe interdisciplinar: empatia e comunicação',
      'Mediação de conflitos e relacionamento interpessoal',
      'Atribuições e limites de atuação do cuidador social no SUAS',
      'Rotinas humanizadas de cuidado: higiene e alimentação',
      'Organização do espaço e acompanhamento de rotinas de saúde',
      'Promoção da autonomia dos usuários',
      'Construção de vínculos profissionais',
      'Promoção da convivência familiar e comunitária',
    ]
  },
  {
    id: 'pse',
    nome: 'Proteção Social Especial de Alta Complexidade',
    cor: '#e07c3e',
    topicos: [
      'Serviços de acolhimento institucional e familiar',
      'Princípios: excepcionalidade e provisoriedade do acolhimento',
      'Preservação de vínculos familiares e comunitários',
      'Organização e funcionamento dos serviços de acolhimento',
    ]
  },
  {
    id: 'rua',
    nome: 'População em Situação de Rua e Abordagem Social',
    cor: '#c07afc',
    topicos: [
      'Decreto nº 7.053/2009 – Política Nacional para Pop. em Situação de Rua',
      'Noções de abordagem social e convivência em abrigos',
      'Acolhimento em casas de passagem',
      'Atendimento a usuários com uso problemático de álcool e outras drogas',
      'Abordagem humanizada e não estigmatizante',
    ]
  },
  {
    id: 'saude',
    nome: 'Noções de Saúde Mental e Redução de Danos',
    cor: '#40c9c9',
    topicos: [
      'Sofrimento psíquico e vulnerabilidade social',
      'Abordagem humanizada em saúde mental',
      'Articulação com a rede de saúde e atenção psicossocial',
    ]
  },
];

// =====================================================================
// ESTADO DA APLICAÇÃO
// =====================================================================
let state = {
  topicos: {},   // { "lp-0": { status: 'pendente'|'andamento'|'concluido', nota: '', data: '' } }
  config: {
    readUrl: '',
    writeUrl: '',
    sheetName: 'Página1',
  },
  activity: [],  // log de atividades [{ topico, bloco, status, data }]
};

let currentEdit = null; // { blocoId, topicoIdx }

// =====================================================================
// INIT
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderDate();
  renderMaterias();
  renderBlocos();
  updateStats();
  renderActivity();
  renderNext();
  setupNavigation();
  setupFilters();
  setupStatusSelector();
});

function loadState() {
  try {
    const s = localStorage.getItem('studymap_state');
    if (s) state = { ...state, ...JSON.parse(s) };
    document.getElementById('sheetReadUrl').value  = state.config.readUrl  || '';
    document.getElementById('sheetWriteUrl').value = state.config.writeUrl || '';
    document.getElementById('sheetName').value     = state.config.sheetName || 'Página1';
    updateSyncStatus(state.config.readUrl ? 'ok' : 'none');
  } catch(e) { console.warn('Erro ao carregar estado:', e); }
}

function saveState() {
  try { localStorage.setItem('studymap_state', JSON.stringify(state)); } catch(e) {}
}

// =====================================================================
// NAVEGAÇÃO
// =====================================================================
function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + view).classList.add('active');
    });
  });
}

// =====================================================================
// DATA
// =====================================================================
function renderDate() {
  const now = new Date();
  const opts = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  document.getElementById('dateBadge').textContent = now.toLocaleDateString('pt-BR', opts);
}

// =====================================================================
// ESTATÍSTICAS
// =====================================================================
function getStats() {
  let total = 0, done = 0, progress = 0, pending = 0;
  BLOCOS.forEach(b => {
    b.topicos.forEach((_, i) => {
      const key = `${b.id}-${i}`;
      const st = (state.topicos[key] || {}).status || 'pendente';
      total++;
      if (st === 'concluido')  done++;
      else if (st === 'andamento') progress++;
      else pending++;
    });
  });
  return { total, done, progress, pending };
}

function updateStats() {
  const { total, done, progress, pending } = getStats();
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('statDone').textContent     = done;
  document.getElementById('statProgress').textContent = progress;
  document.getElementById('statPending').textContent  = pending;
  document.getElementById('statPercent').textContent  = pct + '%';

  document.getElementById('barDone').style.width     = total ? (done/total*100)+'%' : '0%';
  document.getElementById('barProgress').style.width = total ? (progress/total*100)+'%' : '0%';
  document.getElementById('barPending').style.width  = total ? (pending/total*100)+'%' : '0%';
  document.getElementById('barPercent').style.width  = pct + '%';

  // Ring
  const circumference = 402;
  const offset = circumference - (pct / 100) * circumference;
  document.getElementById('ringFill').style.strokeDashoffset = offset;
  document.getElementById('ringPercent').textContent = pct + '%';
}

// =====================================================================
// MATÉRIAS
// =====================================================================
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTopicos(btn.dataset.filter);
    });
  });
}

function filterTopicos(filter) {
  document.querySelectorAll('.topico-row').forEach(row => {
    const st = row.dataset.status || 'pendente';
    if (filter === 'all' || st === filter) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
  // Mostrar/ocultar blocos vazios
  document.querySelectorAll('.bloco-section').forEach(sec => {
    const visible = [...sec.querySelectorAll('.topico-row')].some(r => r.style.display !== 'none');
    sec.style.display = visible ? '' : 'none';
  });
}

function renderMaterias() {
  const container = document.getElementById('materiasList');
  container.innerHTML = '';

  BLOCOS.forEach(bloco => {
    const section = document.createElement('div');
    section.className = 'bloco-section';

    // Calcula progresso do bloco
    let bDone = 0;
    bloco.topicos.forEach((_, i) => {
      const key = `${bloco.id}-${i}`;
      if ((state.topicos[key] || {}).status === 'concluido') bDone++;
    });
    const bPct = bloco.topicos.length ? Math.round((bDone / bloco.topicos.length) * 100) : 0;

    // Header
    const header = document.createElement('div');
    header.className = 'bloco-header';
    header.innerHTML = `
      <div class="bloco-color" style="background:${bloco.cor}"></div>
      <span class="bloco-name">${bloco.nome}</span>
      <div class="bloco-mini-bar">
        <div class="bloco-mini-fill" style="width:${bPct}%;background:${bloco.cor}"></div>
      </div>
      <span class="bloco-pct">${bPct}%</span>
      <span class="bloco-count">${bDone}/${bloco.topicos.length}</span>
      <span class="bloco-arrow">▾</span>
    `;
    header.addEventListener('click', () => {
      header.classList.toggle('open');
      list.classList.toggle('open');
    });

    // Lista de tópicos
    const list = document.createElement('div');
    list.className = 'topicos-list';

    bloco.topicos.forEach((topico, i) => {
      const key = `${bloco.id}-${i}`;
      const entry = state.topicos[key] || {};
      const status = entry.status || 'pendente';

      const row = document.createElement('div');
      row.className = 'topico-row';
      row.dataset.status = status;
      row.innerHTML = `
        <span class="topico-num">${String(i+1).padStart(2,'0')}</span>
        <span class="topico-name ${status === 'concluido' ? 'concluido' : ''}">${topico}</span>
        ${entry.nota ? '<span class="topico-nota-icon" title="Tem nota">📝</span>' : ''}
        <span class="topico-status status-${status}">${labelStatus(status)}</span>
      `;
      row.addEventListener('click', () => openModal(bloco.id, i, topico, bloco.nome));
      list.appendChild(row);
    });

    section.appendChild(header);
    section.appendChild(list);
    container.appendChild(section);
  });
}

function labelStatus(s) {
  if (s === 'concluido')  return '✓ Concluído';
  if (s === 'andamento')  return '● Andamento';
  return '○ Pendente';
}

// =====================================================================
// BLOCOS GRID (PROGRESSO)
// =====================================================================
function renderBlocos() {
  const grid = document.getElementById('blocosGrid');
  grid.innerHTML = '';

  BLOCOS.forEach(bloco => {
    let bDone = 0, bProgress = 0, bPending = 0;
    bloco.topicos.forEach((_, i) => {
      const key = `${bloco.id}-${i}`;
      const st = (state.topicos[key] || {}).status || 'pendente';
      if (st === 'concluido')  bDone++;
      else if (st === 'andamento') bProgress++;
      else bPending++;
    });
    const bPct = bloco.topicos.length ? Math.round((bDone / bloco.topicos.length) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'bloco-card';
    card.innerHTML = `
      <div class="bloco-card-header">
        <div class="bloco-card-dot" style="background:${bloco.cor};box-shadow:0 0 8px ${bloco.cor}66"></div>
        <span class="bloco-card-name">${bloco.nome}</span>
      </div>
      <div class="bloco-progress-bar">
        <div class="bloco-progress-fill" style="width:${bPct}%;background:${bloco.cor}"></div>
      </div>
      <div class="bloco-stats">
        <div class="bloco-stat">
          <span class="bloco-stat-val" style="color:var(--green)">${bDone}</span>
          <span class="bloco-stat-lbl">Concluído</span>
        </div>
        <div class="bloco-stat">
          <span class="bloco-stat-val" style="color:var(--amber)">${bProgress}</span>
          <span class="bloco-stat-lbl">Andamento</span>
        </div>
        <div class="bloco-stat">
          <span class="bloco-stat-val" style="color:var(--text3)">${bPending}</span>
          <span class="bloco-stat-lbl">Pendente</span>
        </div>
        <div class="bloco-stat">
          <span class="bloco-stat-val" style="color:${bloco.cor}">${bPct}%</span>
          <span class="bloco-stat-lbl">Progresso</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// =====================================================================
// ACTIVITY & NEXT
// =====================================================================
function renderActivity() {
  const list = document.getElementById('activityList');
  if (!state.activity || state.activity.length === 0) {
    list.innerHTML = '<div class="empty-state">Nenhuma atividade registrada ainda.</div>';
    return;
  }
  list.innerHTML = '';
  [...state.activity].reverse().slice(0, 8).forEach(act => {
    const icon = act.status === 'concluido' ? '✅' : act.status === 'andamento' ? '🔶' : '⬜';
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
      <span class="activity-icon">${icon}</span>
      <div class="activity-text">
        <strong>${act.topico}</strong>
        <span>${act.bloco}</span>
        <div class="activity-time">${act.data}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

function renderNext() {
  const list = document.getElementById('nextList');
  const items = [];

  BLOCOS.forEach(bloco => {
    bloco.topicos.forEach((topico, i) => {
      const key = `${bloco.id}-${i}`;
      const st = (state.topicos[key] || {}).status || 'pendente';
      if (st !== 'concluido') {
        items.push({ bloco, topico, i, status: st });
      }
    });
  });

  if (items.length === 0) {
    list.innerHTML = '<div class="empty-state">🎉 Todos os tópicos concluídos!</div>';
    return;
  }

  list.innerHTML = '';
  items.slice(0, 6).forEach(({ bloco, topico, i, status }) => {
    const item = document.createElement('div');
    item.className = 'next-item';
    item.innerHTML = `
      <span class="next-badge badge-${status}">${status === 'andamento' ? '● Andamento' : '○ Pendente'}</span>
      <div class="next-text">
        <strong>${bloco.nome.split(' ').slice(0,3).join(' ')}</strong>
        ${topico}
      </div>
    `;
    item.addEventListener('click', () => {
      // Navegar para matérias
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-view="materias"]').classList.add('active');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-materias').classList.add('active');
      openModal(bloco.id, i, topico, bloco.nome);
    });
    list.appendChild(item);
  });
}

// =====================================================================
// MODAL
// =====================================================================
function openModal(blocoId, topicoIdx, topicoNome, blocoNome) {
  currentEdit = { blocoId, topicoIdx };
  const key = `${blocoId}-${topicoIdx}`;
  const entry = state.topicos[key] || {};

  document.getElementById('modalTitle').textContent = `Tópico ${topicoIdx + 1}`;
  document.getElementById('modalSub').textContent = `${blocoNome} — ${topicoNome}`;
  document.getElementById('modalNota').value = entry.nota || '';

  // Status selector
  const current = entry.status || 'pendente';
  document.querySelectorAll('.status-opt').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.val === current);
  });

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  currentEdit = null;
}

function setupStatusSelector() {
  document.querySelectorAll('.status-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.status-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

function saveTopico() {
  if (!currentEdit) return;
  const { blocoId, topicoIdx } = currentEdit;
  const key = `${blocoId}-${topicoIdx}`;

  const status = document.querySelector('.status-opt.selected')?.dataset.val || 'pendente';
  const nota   = document.getElementById('modalNota').value.trim();
  const data   = new Date().toLocaleString('pt-BR', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });

  // Achar nome do tópico e bloco
  const bloco  = BLOCOS.find(b => b.id === blocoId);
  const topico = bloco?.topicos[topicoIdx] || '';

  // Inclui a chave como identificador único para o Sheets
  state.topicos[key] = { status, nota, data };

  // Registrar atividade
  if (!state.activity) state.activity = [];
  state.activity.push({ topico, bloco: bloco?.nome || '', status, data });
  if (state.activity.length > 50) state.activity = state.activity.slice(-50);

  saveState();
  closeModalDirect();

  // Re-render
  renderMaterias();
  renderBlocos();
  updateStats();
  renderActivity();
  renderNext();

  // Sincroniza com Sheets se configurado
  if (state.config.writeUrl) {
    sendToSheet({
      chave: key,           // ← identificador único (ex: "lp-0")
      materia: bloco?.nome,
      topico,
      status,
      nota,
      data,
    });
  }
}

// =====================================================================
// GOOGLE SHEETS
// =====================================================================
function saveSheetConfig() {
  state.config.readUrl   = document.getElementById('sheetReadUrl').value.trim();
  state.config.writeUrl  = document.getElementById('sheetWriteUrl').value.trim();
  state.config.sheetName = document.getElementById('sheetName').value.trim() || 'Página1';
  saveState();
  showConfigMsg('✓ Configuração salva com sucesso!', 'ok');
  updateSyncStatus(state.config.readUrl ? 'ok' : 'none');
}

async function testSheetConnection() {
  const url = document.getElementById('sheetReadUrl').value.trim();
  if (!url) { showConfigMsg('⚠ Cole a URL de leitura primeiro.', 'err'); return; }
  showConfigMsg('Testando conexão…', '');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    const lines = text.split('\n').filter(Boolean);
    showConfigMsg(`✓ Conexão OK! ${lines.length - 1} linha(s) encontrada(s).`, 'ok');
    updateSyncStatus('ok');
  } catch(e) {
    showConfigMsg('✗ Falha na conexão: ' + e.message, 'err');
    updateSyncStatus('err');
  }
}

async function syncSheets() {
  if (!state.config.readUrl) {
    alert('Configure a URL do Google Sheets primeiro (aba Configurar Sheets).');
    return;
  }
  updateSyncStatus('sync');
  document.getElementById('syncText').textContent = 'Sincronizando…';
  try {
    const res = await fetch(state.config.readUrl);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    parseCSVandApply(text);
    updateSyncStatus('ok');
    document.getElementById('syncText').textContent = 'Sincronizado ✓';
  } catch(e) {
    updateSyncStatus('err');
    document.getElementById('syncText').textContent = 'Erro na sync';
    console.error('Sync error:', e);
  }
}

// =====================================================================
// CORREÇÃO: parseCSVandApply usa a coluna "chave" como identificador
// único (ex: "lp-0"), eliminando o risco de match errado por nome.
// O CSV deve ter as colunas: chave, materia, topico, status, nota, data
// =====================================================================
function parseCSVandApply(csv) {
  const lines = csv.split('\n').filter(Boolean);
  if (lines.length < 2) return;

  // Lê o cabeçalho para mapear colunas dinamicamente
  const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().trim());
  const idx = {
    chave:   headers.indexOf('chave'),
    materia: headers.indexOf('materia'),
    topico:  headers.indexOf('topico'),
    status:  headers.indexOf('status'),
    nota:    headers.indexOf('nota'),
    data:    headers.indexOf('data'),
  };

  lines.slice(1).forEach(line => {
    const cols = parseCSVLine(line);
    if (cols.length < 4) return;

    const chave  = idx.chave  >= 0 ? cols[idx.chave]  : null;
    const status = idx.status >= 0 ? cols[idx.status]  : '';
    const nota   = idx.nota   >= 0 ? cols[idx.nota]    : '';
    const data   = idx.data   >= 0 ? cols[idx.data]    : '';

    if (!['pendente', 'andamento', 'concluido'].includes(status)) return;

    if (chave) {
      // Caminho ideal: usa a chave direta (ex: "lp-0")
      state.topicos[chave] = { status, nota, data };
    } else {
      // Fallback: match por nome do tópico (comportamento anterior)
      const topico = idx.topico >= 0 ? cols[idx.topico] : '';
      BLOCOS.forEach(bloco => {
        bloco.topicos.forEach((t, i) => {
          if (t.toLowerCase().includes(topico.toLowerCase()) ||
              topico.toLowerCase().includes(t.toLowerCase().substring(0, 20))) {
            const key = `${bloco.id}-${i}`;
            state.topicos[key] = { status, nota, data };
          }
        });
      });
    }
  });

  saveState();
  renderMaterias();
  renderBlocos();
  updateStats();
  renderActivity();
  renderNext();
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') { inQuotes = !inQuotes; }
    else if (line[i] === ',' && !inQuotes) { result.push(current.trim()); current = ''; }
    else { current += line[i]; }
  }
  result.push(current.trim());
  return result;
}

// =====================================================================
// CORREÇÃO: sendToSheet usa Content-Type text/plain para evitar
// o preflight CORS que bloqueia requisições ao Apps Script.
// =====================================================================
async function sendToSheet(data) {
  if (!state.config.writeUrl) return;
  try {
    await fetch(state.config.writeUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain', // evita preflight OPTIONS bloqueado pelo Apps Script
      },
      body: JSON.stringify(data),
    });
  } catch(e) {
    console.warn('Erro ao enviar para Sheets:', e);
  }
}

// =====================================================================
// UI HELPERS
// =====================================================================
function updateSyncStatus(type) {
  const dot  = document.querySelector('.sync-dot');
  const text = document.getElementById('syncText');
  dot.className = 'sync-dot';
  if (type === 'ok')   { dot.classList.add('ok');  text.textContent = 'Conectado'; }
  if (type === 'err')  { dot.classList.add('err'); text.textContent = 'Erro'; }
  if (type === 'sync') { dot.classList.add('sync');text.textContent = 'Sincronizando…'; }
  if (type === 'none') { text.textContent = 'Não configurado'; }
}

function showConfigMsg(msg, type) {
  const el = document.getElementById('configMsg');
  el.textContent = msg;
  el.className = 'config-msg' + (type ? ' ' + type : '');
}

function copyScript() {
  const text = document.getElementById('scriptTemplate').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.btn-copy');
    const orig = btn.textContent;
    btn.textContent = '✓ Copiado!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}
