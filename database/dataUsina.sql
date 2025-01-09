
CREATE TABLE usuarios(
    id INT AUTOINCREMENT PRIMARY KEY,
    primeiro_nome VARCHAR(100) NOT NULL,
    ultimo_sobrenome VARCHAR(100) NOT NULL,
    email_principal VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM usuarios;
drop TABLE usuarios;
INSERT INTO usuarios (primeiro_nome, ultimo_sobrenome, email_principal, password_hash, data_nascimento) VALUES(
    'ÉRIKA',
    'LEITE',
    '24.01905-4@maua.br',
    '$2y$12$aGCqzL27jJR4.fiZJRaLre8jC1v7bAsZPGtpTP925vTOQJDzlioOy',
    '30-11-1994'
);