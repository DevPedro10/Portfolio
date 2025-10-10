# Integração Supabase - Projetos

Esta integração permite que os projetos da sua seção "Meus Projetos" venham diretamente do Supabase em vez de estar hardcoded no código.

## 🚀 Setup Rápido

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

Obtenha as credenciais em: Supabase Dashboard → Settings → API

### 2. Criar Tabela no Supabase

No **SQL Editor** do Supabase, execute:

```sql
CREATE TABLE projects (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  image_url VARCHAR(500),
  live_url VARCHAR(500),
  github_url VARCHAR(500),
  is_highlighted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);
```

### 3. Inserir Dados de Exemplo

```sql
INSERT INTO projects (title, description, technologies, image_url, live_url, github_url, is_highlighted)
VALUES
  (
    'E-Commerce Platform',
    'Plataforma completa de e-commerce...',
    ARRAY['React', 'Node.js', 'PostgreSQL'],
    'https://exemplo.com/image.jpg',
    'https://live.example.com',
    'https://github.com/usuario/projeto',
    true
  );
```

## 📁 Arquivos Relevantes

- `src/lib/supabase.ts` - Cliente Supabase
- `src/hooks/useSupabase.ts` - Hook para queries
- `src/pages/AllProjects.tsx` - Página com todos os projetos
- `src/components/Projects.tsx` - Componente de projetos na home

## 🔄 Como Funciona

Os componentes `Projects.tsx` e `AllProjects.tsx` agora:

1. Usam o hook `useSupabaseQuery` para buscar dados
2. Se houver dados no Supabase, usa-os
3. Se não houver ou der erro, usa dados padrão

## 📝 Estrutura de Dados

A tabela `projects` deve ter:

| Campo          | Tipo      | Descrição              |
| -------------- | --------- | ---------------------- |
| id             | BIGINT    | ID único               |
| title          | VARCHAR   | Nome do projeto        |
| description    | TEXT      | Descrição completa     |
| technologies   | TEXT[]    | Array de tecnologias   |
| image_url      | VARCHAR   | URL da imagem          |
| live_url       | VARCHAR   | URL do projeto ao vivo |
| github_url     | VARCHAR   | URL do repositório     |
| is_highlighted | BOOLEAN   | Se destaca na home     |
| created_at     | TIMESTAMP | Data de criação        |

## ✅ Pronto!

Agora seus projetos vêm do Supabase! 🎉
