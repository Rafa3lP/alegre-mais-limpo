/* SCRIPT DDL - TRABALHO BANCO DE DADOS - ALEGRE-MAIS-LIMPO*/

-------------------------------------
-- COMANDOS PARA CRIAR DB E TABELAS
-------------------------------------

-- Criar DB

CREATE DATABASE IF NOT EXISTS `alegreMaisLimpo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- Usar DB
USE `alegreMaisLimpo` ;

-- Criar tabela cidade

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`cidade` (
  `idCidade` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `uf` CHAR(2) NOT NULL,
  CONSTRAINT `pkCidade`
    PRIMARY KEY (`idCidade`)
);

-- Criar tabela endereco

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`endereco` (
  `idEndereco` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idCidade` INT NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `logradouro` VARCHAR(100) NOT NULL,
  `cep` CHAR(8) NOT NULL,
  `numero` SMALLINT UNSIGNED NOT NULL,
  `complemento` VARCHAR(100) NULL,
  CONSTRAINT `pkEndereco`
    PRIMARY KEY (`idEndereco`),
  CONSTRAINT `fkEnderecoCidade`
    FOREIGN KEY (`idCidade`)
    REFERENCES `alegreMaisLimpo`.`cidade` (`idCidade`)
);

-- Criar tabela usuario

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`usuario` (
  `idUsuario` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idEndereco` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `dataNascimento` DATE NOT NULL,
  `cpf` CHAR(11) NOT NULL UNIQUE,
  `nivelDeAcesso` TINYINT UNSIGNED NOT NULL,
  `usuario` VARCHAR(45) NOT NULL UNIQUE,
  `senha` VARCHAR(100) NOT NULL,
  CONSTRAINT `pkUsuario`
    PRIMARY KEY (`idUsuario`),
  CONSTRAINT `fkUsuarioEndereco`
    FOREIGN KEY (`idEndereco`)
    REFERENCES `alegreMaisLimpo`.`endereco` (`idEndereco`)
);

-- Criar tabela auxiliar

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`auxiliar` (
  `idAuxiliar` INT NOT NULL,
  `servicoComunitario` TINYINT NOT NULL,
  CONSTRAINT `pkAuxiliar`
    PRIMARY KEY (`idAuxiliar`),
  CONSTRAINT `fkAuxiliarUsuario`
    FOREIGN KEY (`idAuxiliar`)
    REFERENCES `alegreMaisLimpo`.`usuario` (`idUsuario`)
);

-- Criar tabela motorista

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`motorista` (
  `idMotorista` INT NOT NULL,
  `numCarteira` VARCHAR(45) NOT NULL UNIQUE,
  CONSTRAINT `pkMotorista`
    PRIMARY KEY (`idMotorista`),
  CONSTRAINT `fkMotoristaUsuario`
    FOREIGN KEY (`idMotorista`)
    REFERENCES `alegreMaisLimpo`.`usuario` (`idUsuario`)
);

-- Criar tabela zona

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`zona` (
  `idZona` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  CONSTRAINT `pkZona`
    PRIMARY KEY (`idZona`)
);

-- Criar tabela rua

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`rua` (
  `idRua` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idZona` INT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `complemento` VARCHAR(100) NULL,
  `qtdLatasLixo` SMALLINT NOT NULL,
  `qtdCasas` SMALLINT NOT NULL,
  CONSTRAINT `pkRua`
    PRIMARY KEY (`idRua`),
  CONSTRAINT `fkRuaZona`
    FOREIGN KEY (`idZona`)
    REFERENCES `alegreMaisLimpo`.`zona` (`idZona`)
);

-- Criar tabela caminhaoColeta

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`caminhaoColeta` (
  `idCaminhaoColeta` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `situacao` VARCHAR(45) NOT NULL,
  `placa` CHAR(7) NOT NULL UNIQUE,
  `modelo` VARCHAR(45) NOT NULL,
  `ano` YEAR NOT NULL,
  `quilometragem` INT NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  CONSTRAINT `pkCaminhaoColeta`
    PRIMARY KEY (`idCaminhaoColeta`)
);

-- Criar tabela abastecimento

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`abastecimento` (
  `idAbastecimento` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idCaminhaoColeta` INT NOT NULL,
  `data` DATE NOT NULL,
  `quantidade` DECIMAL(10,2) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `quilometragem` INT NOT NULL,
  `mediaConsumo` DECIMAL(10,2) NOT NULL,
  CONSTRAINT `pkAbastecimento`
    PRIMARY KEY (`idAbastecimento`),
  CONSTRAINT `fkAbastecimentoCaminhaoColeta`
    FOREIGN KEY (`idCaminhaoColeta`)
    REFERENCES `alegreMaisLimpo`.`caminhaoColeta` (`idCaminhaoColeta`)
);

-- Criar tabela escala

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`escala` (
  `idEscala` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idZona` INT NOT NULL,
  `idCaminhaoColeta` INT NOT NULL,
  `idMotorista` INT NOT NULL,
  `diaSemana` TINYINT UNSIGNED NOT NULL,
  `horaInicio` TIME NOT NULL,
  `horaFim` TIME NOT NULL,
  CONSTRAINT `pkEscala`
    PRIMARY KEY (`idEscala`),
  CONSTRAINT `fkEscalaZona`
    FOREIGN KEY (`idZona`)
    REFERENCES `alegreMaisLimpo`.`zona` (`idZona`),
  CONSTRAINT `fkEscalaCaminhaoColeta`
    FOREIGN KEY (`idCaminhaoColeta`)
    REFERENCES `alegreMaisLimpo`.`caminhaoColeta` (`idCaminhaoColeta`),
  CONSTRAINT `fkEscalaMotorista`
    FOREIGN KEY (`idMotorista`)
    REFERENCES `alegreMaisLimpo`.`motorista` (`idMotorista`)
);

-- Criar tabela auxiliarEscala

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`auxiliarEscala` (
  `idAuxiliar` INT NOT NULL,
  `idEscala` INT NOT NULL,
  CONSTRAINT `pkAuxiliarEscala`
    PRIMARY KEY (`idAuxiliar`, `idEscala`),
  CONSTRAINT `fkAuxiliarEscalaEscala`
    FOREIGN KEY (`idEscala`)
    REFERENCES `alegreMaisLimpo`.`escala` (`idEscala`),
  CONSTRAINT `fkAuxiliarEscalaAuxiliar`
    FOREIGN KEY (`idAuxiliar`)
    REFERENCES `alegreMaisLimpo`.`auxiliar` (`idAuxiliar`)
);

-- Criar tabela manutencao

CREATE TABLE IF NOT EXISTS `alegreMaisLimpo`.`manutencao` (
  `idManutencao` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `idCaminhaoColeta` INT NOT NULL,
  `data` DATE NOT NULL,
  `quilometragem` INT NOT NULL,
  `descricao` VARCHAR(100) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  CONSTRAINT `pkManutencao`
    PRIMARY KEY (`idManutencao`),
  CONSTRAINT `fkManutencaoCaminhaoColeta`
    FOREIGN KEY (`idCaminhaoColeta`)
    REFERENCES `alegreMaisLimpo`.`caminhaoColeta` (`idCaminhaoColeta`)
);


-------------------------------------------------------------------------------------------------

-------------------------------------------
-- COMANDOS DE DROP
-------------------------------------------

-- DB
DROP DATABASE IF EXISTS `alegreMaisLimpo` ;

-- Tabela cidade
DROP TABLE IF EXISTS `alegreMaisLimpo`.`cidade`;

-- Tabela endereco
DROP TABLE IF EXISTS `alegreMaisLimpo`.`endereco`;

-- Taabela usuario
DROP TABLE IF EXISTS `alegreMaisLimpo`.`usuario`;

-- Taabela auxiliar
DROP TABLE IF EXISTS `alegreMaisLimpo`.`auxiliar`;

-- Taabela motorista
DROP TABLE IF EXISTS `alegreMaisLimpo`.`motorista`;

-- Taabela zona
DROP TABLE IF EXISTS `alegreMaisLimpo`.`zona`;

-- Taabela rua
DROP TABLE IF EXISTS `alegreMaisLimpo`.`rua`;

-- Taabela caminhaoColeta
DROP TABLE IF EXISTS `alegreMaisLimpo`.`caminhaoColeta`;

-- Taabela abastecimento
DROP TABLE IF EXISTS `alegreMaisLimpo`.`abastecimento`;

-- Taabela escala
DROP TABLE IF EXISTS `alegreMaisLimpo`.`escala`;

-- Taabela auxiliarEscala
DROP TABLE IF EXISTS `alegreMaisLimpo`.`auxiliarEscala`;

-- Taabela manutencao
DROP TABLE IF EXISTS `alegreMaisLimpo`.`manutencao`;