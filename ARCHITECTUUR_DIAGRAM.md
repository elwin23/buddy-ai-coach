# Technisch Architectuurdiagram - AI Coach Chatbot

## Systeem Overzicht

```mermaid
graph TB
    subgraph "Client Layer"
        UI[React/Next.js Frontend]
        Mobile[Mobile App - Toekomst]
    end
    
    subgraph "API Gateway & Security"
        Gateway[FastAPI Gateway]
        Auth[Authentication Service]
        Encrypt[Encryption Service]
    end
    
    subgraph "Application Layer"
        Chat[Chat Service]
        CaseMgr[Case Manager Service]
        MaterialMgr[Material Manager Service]
        Anon[Anonymization Service]
    end
    
    subgraph "AI Layer"
        RAG[RAG Engine]
        LLM[LLM API Client]
        Embed[Embedding Service]
        VectorDB[(Vector Database<br/>ChromaDB/Weaviate)]
    end
    
    subgraph "Data Layer - Privacy First"
        MainDB[(PostgreSQL<br/>Encrypted)]
        AnonDB[(Anonymized Data<br/>Separate Schema)]
        FileStore[Encrypted File Storage]
    end
    
    subgraph "External Services"
        LLMAPI[OpenAI/Anthropic API<br/>No Personal Data]
    end
    
    UI --> Gateway
    Mobile --> Gateway
    Gateway --> Auth
    Gateway --> Encrypt
    
    Gateway --> Chat
    Gateway --> CaseMgr
    Gateway --> MaterialMgr
    
    Chat --> RAG
    Chat --> LLM
    CaseMgr --> Anon
    MaterialMgr --> Embed
    
    RAG --> VectorDB
    RAG --> LLM
    Embed --> VectorDB
    LLM --> LLMAPI
    
    CaseMgr --> AnonDB
    CaseMgr --> MainDB
    Anon --> AnonDB
    MaterialMgr --> FileStore
    
    Anon -.->|Anonymizes| CaseMgr
    
    style AnonDB fill:#90EE90
    style Anon fill:#FFD700
    style Encrypt fill:#FFD700
    style MainDB fill:#87CEEB
    style VectorDB fill:#87CEEB
```

## Data Flow - Privacy-First

```mermaid
sequenceDiagram
    participant Coach as Coach (User)
    participant Frontend as Frontend
    participant API as API Gateway
    participant Anon as Anonymization
    participant DB as Database
    participant RAG as RAG Engine
    participant LLM as LLM API
    
    Note over Coach,LLM: Voor Gesprek - Voorbereiding
    
    Coach->>Frontend: Open casus voorbereiding
    Frontend->>API: Get case (geanonimiseerd)
    API->>DB: Fetch anonymized case
    DB-->>API: Anonymized data
    API-->>Frontend: Case data
    
    Coach->>Frontend: Vraag coaching techniek
    Frontend->>API: Query coaching materiaal
    API->>RAG: Search materials
    RAG->>RAG: Vector search
    RAG-->>API: Relevant materials
    API->>LLM: Generate response (NO personal data)
    LLM-->>API: Response
    API-->>Frontend: Coaching advice
    
    Note over Coach,LLM: Na Gesprek - Verslaglegging
    
    Coach->>Frontend: Voer sessie notities in
    Frontend->>API: Save session notes
    API->>Anon: Anonymize input
    Anon->>Anon: Remove PII, generate pseudonym
    Anon-->>API: Anonymized data
    API->>DB: Store anonymized
    DB-->>API: Confirmation
    API-->>Frontend: Saved
    
    Coach->>Frontend: Vraag casus analyse
    Frontend->>API: Analyze case
    API->>DB: Get anonymized case
    DB-->>API: Anonymized data
    API->>LLM: Analyze (NO personal identifiers)
    LLM-->>API: Analysis
    API-->>Frontend: Insights
```

## Privacy-First Data Model

```mermaid
erDiagram
    COACH ||--o{ CASE : creates
    CASE ||--o{ SESSION : contains
    CASE ||--o{ ANONYMIZED_DATA : has
    MATERIAL ||--o{ EMBEDDING : indexed
    
    COACH {
        uuid id PK
        string email
        string encrypted_password
        datetime created_at
        boolean is_active
    }
    
    CASE {
        uuid id PK
        uuid coach_id FK
        string client_pseudonym
        string client_hash
        string status
        datetime created_at
        datetime updated_at
        boolean is_anonymized
    }
    
    ANONYMIZED_DATA {
        uuid id PK
        uuid case_id FK
        text anonymized_notes
        json anonymized_metadata
        datetime anonymized_at
    }
    
    SESSION {
        uuid id PK
        uuid case_id FK
        datetime session_date
        int duration_minutes
        text anonymized_notes
        json topics_discussed
        json coaching_techniques
        datetime created_at
    }
    
    MATERIAL {
        uuid id PK
        string title
        string type
        text content
        string file_path
        json tags
        datetime uploaded_at
    }
    
    EMBEDDING {
        uuid id PK
        uuid material_id FK
        vector embedding
        text chunk_text
        int chunk_index
    }
```

## Component Details

### 1. Anonymization Service
**Verantwoordelijkheid**: Automatische anonimisering van alle persoonsgegevens

**Process**:
1. Input validatie en PII detectie
2. Namen → Pseudoniemen generatie
3. Contactgegevens → Hashing
4. Herkenbare details → Generieke beschrijvingen
5. Validatie van anonimisering niveau

**Technologie**: 
- Python met spaCy/NER voor PII detectie
- Custom anonymization rules
- Hash functions (SHA-256)

### 2. RAG Engine
**Verantwoordelijkheid**: Retrieval van relevante coaching materiaal

**Process**:
1. Query embedding generatie
2. Vector similarity search
3. Top-K document retrieval
4. Context formatting voor LLM
5. Source attribution

**Technologie**:
- LangChain voor RAG pipeline
- ChromaDB of Weaviate voor vector storage
- OpenAI embeddings of open-source alternatief

### 3. Encryption Service
**Verantwoordelijkheid**: End-to-end encryptie van gevoelige data

**Process**:
1. Data encryptie bij opslag (AES-256)
2. Key management
3. Decryptie bij retrieval
4. Encrypted backups

**Technologie**:
- Python cryptography library
- Key derivation (PBKDF2)
- Secure key storage

### 4. Case Manager Service
**Verantwoordelijkheid**: Casusbeheer met privacy-first approach

**Features**:
- Anonieme casus creatie
- Sessie tracking (geanonimiseerd)
- Privacy-compliant queries
- Data export/verwijdering

### 5. Material Manager Service
**Verantwoordelijkheid**: Coaching materiaal beheer

**Features**:
- Document upload (PDF, DOCX, MD)
- Automatische chunking en embedding
- Categorisatie en tagging
- Versiebeheer

## Security Layers

```mermaid
graph LR
    subgraph "Layer 1: Network"
        TLS[TLS 1.3]
        Firewall[Firewall Rules]
    end
    
    subgraph "Layer 2: Application"
        Auth[Authentication]
        Authz[Authorization]
        RateLimit[Rate Limiting]
    end
    
    subgraph "Layer 3: Data"
        Encrypt[Encryption at Rest]
        Anon[Anonymization]
        Audit[Audit Logging]
    end
    
    TLS --> Auth
    Firewall --> Authz
    Auth --> Encrypt
    Authz --> Anon
    RateLimit --> Audit
```

## Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        subgraph "Load Balancer"
            LB[Nginx/HAProxy]
        end
        
        subgraph "Application Servers"
            API1[FastAPI Instance 1]
            API2[FastAPI Instance 2]
        end
        
        subgraph "Database Cluster"
            DB1[(PostgreSQL Primary)]
            DB2[(PostgreSQL Replica)]
        end
        
        subgraph "Vector Database"
            VDB[(ChromaDB/Weaviate)]
        end
        
        subgraph "Storage"
            S3[Encrypted File Storage]
        end
    end
    
    LB --> API1
    LB --> API2
    API1 --> DB1
    API2 --> DB1
    DB1 --> DB2
    API1 --> VDB
    API2 --> VDB
    API1 --> S3
    API2 --> S3
```

## Technology Stack

### Backend
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL 15+ (met encryptie)
- **Vector DB**: ChromaDB (lokaal) of Weaviate
- **ORM**: SQLAlchemy
- **Authentication**: JWT tokens
- **Encryption**: Python cryptography

### AI/ML
- **LLM**: OpenAI GPT-4/3.5 of Anthropic Claude
- **Embeddings**: OpenAI text-embedding-3-small
- **RAG Framework**: LangChain
- **NLP**: spaCy voor PII detectie

### Frontend
- **Framework**: Next.js 14+ (React)
- **UI Library**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand of React Query
- **Forms**: React Hook Form

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose (dev) / Kubernetes (prod)
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: Structured logging (JSON)

## Privacy Compliance Checklist

- [x] Automatische PII detectie en anonimisering
- [x] End-to-end encryptie
- [x] Lokale data opslag (geen externe sharing)
- [x] Audit logging (zonder persoonsgegevens)
- [x] Right to be forgotten implementatie
- [x] Data retention policies
- [x] Transparantie dashboard
- [x] Consent management
- [x] GDPR compliance
- [x] Zero-knowledge LLM queries








