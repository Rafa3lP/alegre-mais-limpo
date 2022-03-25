USE alegremaislimpo;
-- tabela `cidade`

INSERT INTO `cidade` VALUES (1,'Ponta Porã','MS'),(2,'Tucuruí','PA'),(3,'Teresina','PI'),(4,'João Pessoa','PB'),(5,'Arapiraca','AL'),(6,'Macapá','AP'),(7,'Rio Grande','RS'),(8,'Campo Grande','MS'),(9,'Pato Branco','PR'),(10,'Manaus','AM'),(11,'Boa Vista','RR'),(12,'Fortaleza','CE'),(13,'Caxias do Sul','RS'),(14,'Passo Fundo','RS'),(15,'Ponta Porã','MS'),(16,'Brasília','DF'),(17,'Fortaleza','CE'),(18,'Rio Branco','AC'),(19,'Recife','PE'),(20,'Teresina','PI'),(21,'Vitória de Santo Antão','PE'),(22,'Jaboatão dos Guararapes','PE'),(23,'Porto Alegre','RS'),(24,'Três Lagoas','MS'),(25,'Rio Branco','AC'),(26,'Macapá','AP'),(27,'Salvador','BA'),(28,'Parnamirim','RN'),(29,'São Luís','MA'),(30,'Porto Velho','RO'),(31,'Arapiraca','AL'),(32,'Dourados','MS'),(33,'Teixeira de Freitas','BA'),(34,'Porto Velho','RO'),(35,'Salvador','BA'),(36,'Recife','PE'),(37,'Macapá','AP'),(38,'João Pessoa','PB'),(39,'São Luís','MA'),(40,'Catalão','GO'),(41,'Maceió','AL'),(42,'Palhoça','SC'),(43,'Caucaia','CE'),(44,'Imperatriz','MA'),(45,'Macapá','AP'),(46,'Fortaleza','CE'),(47,'João Pessoa','PB'),(48,'Ananindeua','PA'),(49,'João Pessoa','PB'),(50,'Boa Vista','RR'),(51,'Juiz de Fora','MG'),(52,'Divinópolis','MG'),(53,'Navegantes','SC'),(54,'Gravataí','RS'),(55,'Belo Horizonte','MG'),(56,'São Luís','MA'),(57,'Rio Branco','AC'),(58,'Campinas','SP'),(59,'Sousa','PB'),(60,'Uruguaiana','RS'),(61,'Fortaleza','CE'),(62,'Manaíra','PB'),(63,'Vitória da Conquista','BA'),(64,'Aracaju','SE'),(65,'Santa Cruz do Sul','RS'),(66,'Palmas','TO'),(67,'Redenção','PA'),(68,'Curitiba','PR'),(69,'Recife','PE'),(70,'Joinville','SC'),(71,'Araguaína','TO'),(72,'Londrina','PR'),(73,'Campina Grande','PB'),(74,'Várzea Grande','MT'),(75,'Criciúma','SC'),(76,'Boa Vista','RR'),(77,'Goiânia','GO'),(78,'Londrina','PR'),(79,'Salvador','BA'),(80,'Crato','CE'),(81,'São Luís','MA'),(82,'Porto Velho','RO'),(83,'Maceió','AL'),(84,'Maceió','AL'),(85,'Porto Alegre','RS'),(86,'Várzea Grande','MT'),(87,'Teresina','PI'),(88,'Santa Helena','PB'),(89,'Parnaíba','PI'),(90,'Sinop','MT'),(91,'Castelo','ES');

-- tabela `endereco`

INSERT INTO `endereco` VALUES (1,1,'Jardim Panambí','Rua Belém','79902174',293,''),(2,2,'Jardim São Francisco das Chagas','Travessa Romana Mesquita','68459275',555,''),(3,3,'Esplanada','Rua Padre Cícero','64039652',395,''),(4,4,'Mangabeira','Rua João Quirino dos Santos','58056535',709,''),(5,5,'Canafístula','Rua João Bispo Barros','57302504',626,''),(6,6,'Central','Avenida Henrique Galúcio','68900115',208,''),(7,7,'Cassino','Rua G','96209264',936,''),(8,8,'Residencial Damha III','Rua Ave do Paraíso','79046238',661,''),(9,9,'La Salle','Rua Presidente Médici','85505350',107,''),(10,10,'Coroado','Rua Paulo Alves','69082580',139,''),(11,11,'Tancredo Neves','Avenida Princesa Isabel','69313528',455,''),(12,12,'Praia de Iracema','Rua São Longuinhos','60060310',353,''),(13,13,'São José','Rua Hugo Luciano Ronca','95043580',661,''),(14,14,'São Cristóvão','Rua São Cristóvão','99062310',804,''),(15,15,'Coophafronteira','Rua Samambaia','79902528',204,''),(16,16,'Incra 8 (Brazlândia)','Quadra Quadra 17','72760170',852,''),(17,17,'Conjunto Ceará','Rua 321','60530660',684,''),(18,18,'Jardim Tropical','Rua das Oliveiras','69901224',691,''),(19,19,'Alto José Bonifácio','1ª Travessa Âmbar','52080201',708,''),(20,20,'Santa Isabel','Rua Doutor Anerão Walter Coutinho','64053360',546,''),(21,21,'São Vicente de Paulo','Rua Doutor Artur de Albuquerque Lima','55604610',463,''),(22,22,'Zumbi do Pacheco','Rua do Narceja','54230352',376,''),(23,23,'Vila Assunção','Rua Goitacaz','91900400',252,''),(24,24,'Jardim Alvorada','Avenida Jary Mercante','79610002',428,''),(25,25,'Boa União','Rua 19 de Outubro','69911778',228,''),(26,26,'Brasil Novo','Avenida Gramado','68909382',311,''),(27,27,'Cajazeiras','Travessa Bernardo Azevedo','41330235',930,''),(28,28,'Passagem de Areia','Rua Vereador Olavo Fernandes de Castro','59145070',713,''),(29,29,'Vila Janaína','Rua Cardoso Filho','65058790',791,''),(30,30,'Pantanal','Rua Rugendas','76824680',964,''),(31,31,'Santa Edwiges','Rua Cecília Pereira Amorim','57310330',970,''),(32,32,'Residencial Bonanza','Rua Projetada 9 - RB','79816240',889,''),(33,33,'Jardim Caraípe','Avenida Kaikan','45990782',192,''),(34,34,'Olaria','Rua Jamary 1555','76801917',458,''),(35,35,'Caminho das Árvores','Avenida Tancredo Neves 1672','41820911',172,''),(36,36,'Santo Antônio','Rua Vinte e Quatro de Maio','50020020',620,''),(37,37,'Pacoval','Rua São Paulo','68908370',842,''),(38,38,'Funcionários','Rua Nelson dos Santos','58079745',533,''),(39,39,'COHEB do Sacavém','Rua Dois','65043390',640,''),(40,40,'Residencial Vereda dos Buritis','Rua VB 11','75709643',984,''),(41,41,'Vergel do Lago','Rua Campo do Sá','57015012',724,''),(42,42,'Caminho Novo','Rua Joaquim Caetano da Silva','88132310',748,''),(43,43,'Tabapuá Brasília','Travessa Itália','61634170',260,''),(44,44,'Vila Vitória','Rua Cinquenta','65918231',976,''),(45,45,'Brasil Novo','Rua Bacabeira','68909306',710,''),(46,46,'Parque Dois Irmãos','Vila Peregrino','60761195',481,''),(47,47,'Manaíra','Avenida Governador Flávio Ribeiro Coutinho 805','58037900',606,''),(48,48,'Coqueiro','Rua Tapajós','67113535',453,''),(49,49,'Gramame','Rua Jornalista José Ramalho de Lima','58068425',193,''),(50,50,'Dr. Airton Rocha','Rua Alto Alegre','69318720',958,''),(51,51,'São Pedro','Rua Antônio Martins Ribeiro','36036468',595,''),(52,52,'Porto Velho','Rua Gonçalves Ledo','35500442',790,''),(53,53,'Gravatá','Rua Onélia Couto Cabral','88372542',783,''),(54,54,'Centro','Rua Manoel R. da Fonseca','94010240',357,''),(55,55,'Ventosa','Beco Eulário','30421570',910,''),(56,56,'Cohama','Rua Fernando de Noronha','65073280',534,''),(57,57,'Belo Jardim I','Rua José Augusto','69907834',773,''),(58,58,'Parque Dom Bosco','Ruela Rosa Maria da Silva','13088488',378,''),(59,59,'Várzea da Cruz','Travessa José Celestino de Paula','58806626',783,''),(60,60,'Cidade Nova','Servidão Um','97511402',383,''),(61,61,'Paupina','Rua Coronel Antônio Sampaio','60873550',168,''),(62,62,'Centro','Travessa Padre Tavares 376','58995970',670,''),(63,63,'Ibirapuera','Rua E','45075480',630,''),(64,64,'Suíssa','Rua Aquidabã','49050070',680,''),(65,65,'Centro','Corredor Mees','96820560',239,''),(66,66,'Plano Diretor Sul','Quadra 112 Sul Rua SR 5','77020174',269,''),(67,67,'Jardim Lucena','Avenida Marechal Rondon','68550062',120,''),(68,68,'Bom Retiro','Rua Teffe','80520110',389,''),(69,69,'Iputinga','Rua Pureza','50670250',133,''),(70,70,'Iririú','Rua Mirante','89227510',616,''),(71,71,'Vila Aliança','Rua 3','77813780',727,''),(72,72,'Conjunto Habitacional Jamile Dequech','Rua Venício Arestrup Pimentel','86044702',894,''),(73,73,'Sandra Cavalcante','Rua Petronila de Farias','58410839',230,''),(74,74,'Ponte Nova','Rua Barnabé de Mesquita','78115540',427,''),(75,75,'São Sebastião','Rua Gonçalves da Silveira','88807140',563,''),(76,76,'Mecejana','Rua Manoel Aires','69304410',908,''),(77,77,'Residencial Vale dos Sonhos','Avenida José Ferreira Profírio','74684255',565,''),(78,78,'Jardim Planalto','Rua Álvaro Camello de Aguiar','86084265',353,''),(79,79,'Fazenda Grande do Retiro','Ladeira da Goméia','40353310',168,''),(80,80,'Gisélia Pinheiro','Rua João Paulo VI','63115120',982,''),(81,81,'Vinhais','Rua Noventa e Três','65071203',321,''),(82,82,'Liberdade','Rua Raimundo Gonzaga Pinheiro','76803846',892,''),(83,83,'Clima Bom','Rua Jordânia','57071874',644,''),(84,84,'Feitosa','Travessa Jardim Manguaba','57043282',116,''),(85,85,'Bom Fim','Rua General João Telles','90035121',140,''),(86,86,'Canelas','Rua Palmira Sobral','78135490',335,''),(87,87,'Bela Vista','Quadra A','64031320',898,''),(88,88,'Centro','Rua Central, s/n','58925972',109,''),(89,89,'Planalto de Monteserra The','Quadra I-4','64207530',631,''),(90,90,'Setor Residencial Sul','Rua Piléias','78550025',137,''),(91,91,'bairro top','rua top','29360000',21,'Complemento teste');

-- tabela `usuario`
INSERT INTO `usuario` VALUES (1,1,'Emilly Letícia Bernardes','1989-02-13','65287840276',1,'emilly.bernardes','$2b$10$Q/VIcfsO6PwoOJugk0LdguoLcDNNTX9i6enW8M3bCu7VdrsQDsWYu'),(2,2,'Laís Laura Fogaça','2004-01-07','76079683695',1,'laís.fogaça','$2b$10$/bKmNhtYj4e7GYCiFidu2uOo6ClexzeaUBeIIJtP9W8S5vd3G.sTy'),(3,3,'Alice Rebeca Rezende','1956-01-17','15341875028',1,'alice.rezende','$2b$10$Y8iuFOIterNt0kdUkjfcQuo9g2.Ue4uCXY2XUOiyQPux.rqfC0.um'),(4,4,'Hugo Rafael Viana','1978-01-03','60033746168',1,'hugo.viana','$2b$10$StXc3/8l866VgzO5EapcDuntldcmTOfG9eRSfProuWn6kKQycZ7ku'),(5,5,'Yago Vinicius Guilherme Novaes','1960-02-17','92230972669',1,'yago.novaes','$2b$10$YacBUQlUhilnFKRmXRh6zuBnk5CgpJshcLF1or6WiOPx8IrPz0wbO'),(6,6,'Alexandre Lucas Aragão','1978-02-07','04679999020',1,'alexandre.aragão','$2b$10$tPvvWQPy5nSXVsfxNWNmAOUfI.17jM6sheU8Q3jEVA6thoY7t221C'),(7,7,'Ester Isabel Sara Martins','1951-02-09','81573581240',1,'ester.martins','$2b$10$oF/8ugnt2N17YiGqmNDrzeia6nr2obdyDQY0Knjgraj.iHd4RoJui'),(8,8,'Diogo Henry Sales','1982-02-12','30493238417',1,'diogo.sales','$2b$10$QRyDjy8dmuoCHseNd5zzz..vjYaVTBhvJeVVh2Lhpr3DnjtAYGCa2'),(9,9,'Isabela Patrícia Joana da Cruz','1946-02-10','89563330501',1,'isabela.cruz','$2b$10$sGrYV6VRqKzfcY5bCV515e8wtqVLHltSu4.ddeY79zt6XCCLBrbgq'),(10,10,'Manuela Amanda Hadassa Santos','1947-02-19','88485649419',1,'manuela.santos','$2b$10$Co4dmqd/U6.st6xGPbJQjORp2bgCYZeYsQj9wHr8rZ.rEmgOnvnJi'),(11,11,'Marli Helena Amanda Pinto','1987-01-03','89518986797',1,'marli.pinto','$2b$10$vFqBWG3auXM0V7JlH.yXBO17.Ih4xiD/gZ21HZmuWokwLEj5Jpate'),(12,12,'Elaine Fátima Lopes','1976-02-10','76923503884',1,'elaine.lopes','$2b$10$d5ASIosCMgCxmEnxwE66IuUeYvKQ/UJuUliVEKkYLu.qTcTbf8eQu'),(13,13,'Valentina Kamilly Baptista','1979-01-19','12004147210',1,'valentina.baptista','$2b$10$TTgjDjfdhlgIaabt/YyqH.cccBP6egsvF3GlKYeYaSnDZ.QO28y4a'),(14,14,'Eduardo Paulo Melo','1985-01-04','32128843987',1,'eduardo.melo','$2b$10$YWVqL1hDeMpDnAdDgdEwZewNtkjSffHFHi6gYv3YiwXPvsnw5Tdc6'),(15,15,'Martin Renan Costa','1986-02-05','90198897707',1,'martin.costa','$2b$10$0N40rdCOXwxWFJFF2gAgDOBhvvimZbKOFvI4KgGhkbwLi9Gu8oi0K'),(16,16,'Calebe Carlos Brito','1999-02-17','44078741045',1,'calebe.brito','$2b$10$lcz.GfASwBPz59Qn1H/pkuuegb5rKTByqlJ1c3KB0mSZ19aIcKvyq'),(17,17,'Gabriel Benedito Jesus','2003-02-09','39679023311',1,'gabriel.jesus','$2b$10$OuSIbmD4nwXeqYBhgrlPR./lFhIGvT4XXx7xMOYe1mN9c9d1GJyi6'),(18,18,'Eloá Francisca Drumond','1960-01-01','23042226840',1,'eloá.drumond','$2b$10$sAYvwCSK1JL9ashbalipCOW3DaUdEwbtGaZ3E0WFU1vurrDrI6BeO'),(19,19,'Analu Rosa Priscila da Paz','1958-01-22','65968507144',1,'analu.paz','$2b$10$wwqfVVbBlbGPlmxf7q8qQ.wup4HmmTHczyFhstFydeFKZTiGmmQ0m'),(20,20,'Matheus Anthony Manuel Oliveira','1983-02-18','73880884749',1,'matheus.oliveira','$2b$10$/aadUDHS62MChPjTHA/R5.88LNTNFL2q/xTlEG3L0hePzyK9Qej36'),(21,21,'Priscila Jennifer Pereira','1945-02-18','27561336390',1,'priscila.pereira','$2b$10$oBWMULtg4oL1PU0lwkF4.ez8awS0rsmvM9ABsX1ispmDmS88J2Oii'),(22,22,'Leonardo Yuri Sebastião das Neves','1944-02-01','64982879184',1,'leonardo.neves','$2b$10$xj6.3PFXXl012y1nkzSzpuiiKIjZ/oBXGiRXuL1yXsSWUW3TT.ZZ.'),(23,23,'Martin Bento dos Santos','1988-02-11','26917890120',1,'martin.santos','$2b$10$AO5zl/d6JEy9I2wyiN7lp.X9HTztrmEg4DEEBh6v3mz1fNn3qo83S'),(24,24,'Erick Davi Nathan Porto','1954-02-12','23411609052',1,'erick.porto','$2b$10$fNxyCsV2C/BBpo6drvNs6uVd46uQiZrabvSLQyeJnYBZg8Havgqvq'),(25,25,'Levi Elias Rocha','1978-01-27','06217359308',1,'levi.rocha','$2b$10$y8eukTNmDD3AWxILJE60q.sL7DPPyJswWLmwpAos5PEr4TYUH59ny'),(26,26,'César Hugo Samuel Teixeira','1962-02-02','89008173700',1,'césar.teixeira','$2b$10$QU.hv63B9eE2gTebWC3tSu8xXsPnRulOA/c2JB5y7KevNv2rdKmwO'),(27,27,'Heloisa Clarice das Neves','1955-02-10','81846285607',1,'heloisa.neves','$2b$10$MCu6lXGar3Qjtwnx05aZFeATLuboJfw6ey4SY8zQRY7tK6O1.aik6'),(28,28,'Lúcia Elza Brito','1994-01-10','92485978662',1,'lúcia.brito','$2b$10$Ijx/QTxYaJssC0BxcFoz7.Un2JsBuWlEaywM6U.5WuqizVh5Hz9Om'),(29,29,'Letícia Fátima Renata Pereira','1986-01-12','87712233209',1,'letícia.pereira','$2b$10$7eA8V1UHYQyoSHDx7qkHP.AyJe1T8B06SScQ7RvlNoXlNZL5McwmW'),(30,30,'Kamilly Elza Barros','1969-02-08','04560106533',1,'kamilly.barros','$2b$10$3G/NcdaSwjmpV8kYB11UuOTcawuUCXN3oA106LeotXhnOnfo7tQdK'),(31,31,'Alice Lara Mariana Freitas','1966-01-18','95122635722',2,'alice.freitas','$2b$10$S3aygtDPayuxZJyWg.pqzuWr4jiDSJAaxXEgT1Y.PIWxBSjHPIjEC'),(32,32,'Marcos Vinicius Pietro Joaquim Jesus','1971-01-04','16082148851',2,'marcos.jesus','$2b$10$fc85rW9Jn0ulwxUoSq/jCOV6iSAKbOadxMECywx.lyARZMWxKAjsy'),(33,33,'Allana Priscila Gonçalves','1969-02-02','97470290494',2,'allana.gonçalves','$2b$10$bEgWkQkrdVxAB9zplbmZI.WvE.u2wJYLfA4/I1W2bx.nR4F2jt2he'),(34,34,'Camila Rebeca Galvão','1970-02-05','74927899128',2,'camila.galvão','$2b$10$UnOVR.QZGJn9jcWUtyE/oOiuE1HecxhzpLLwe949iYCQ9TLFc2emC'),(35,35,'Hadassa Bruna Sara Pires','1964-02-13','17460788716',2,'hadassa.pires','$2b$10$EPSrm6MhjiasGH9l.ukSNOs8igBcTrN7KASk6dMmNADyIsmW53Jhq'),(36,36,'Nina Isabela Vera Drumond','1976-01-21','40895312417',2,'nina.drumond','$2b$10$9kram8y.Z.O7wN0d0MLZ7O6f9Py8ndzIvGnemSghmUS65hZQugt4q'),(37,37,'Juliana Rafaela Moraes','1949-02-03','49304362903',2,'juliana.moraes','$2b$10$ShLQSI9WpdgP/OReVaJenuCwS4PGPlUECuXiBYuoIPna584mzobzW'),(38,38,'Eduarda Andreia Cavalcanti','1953-01-25','70171725077',2,'eduarda.cavalcanti','$2b$10$S.JRtXWebw79CRMl62.oCOFJq3UpixSOgdptWLcKV4aaxPEW6ppuW'),(39,39,'Davi André Moraes','2000-01-05','68323709890',2,'davi.moraes','$2b$10$znDtEskhEJC4xEpi5Nt8POhTy4j2I619pa4WFY6B.tncl7/1JGk1S'),(40,40,'Raul Marcos Vinicius Cavalcanti','1989-01-20','05061149106',2,'raul.cavalcanti','$2b$10$nUOm71fWzKSXB.eK9jdK5OlQ6.7pvX7BqTCikLWqDa/xPdnh5ZaaK'),(41,41,'Carla Gabriela Gonçalves','1983-01-07','76796308018',2,'carla.gonçalves','$2b$10$4mEIkQe3gmJy21s8oWWNG.wlV4uQEGJDxiSOUt/QysbMXw.hPht3K'),(42,42,'José César Mendes','1986-02-01','77035580522',2,'josé.mendes','$2b$10$rf1z8MgFsvoxVpOyWXkdX.JVxSJA9bH8KiwkRe/3aGZKCAQpxSZaK'),(43,43,'Rita Allana Giovana Araújo','1999-02-13','26893848099',2,'rita.araújo','$2b$10$AfT7sB7MPNS4XLJzu0zDmemWTfFpxVvqWFbEo8iroqpGM06AjHOhW'),(44,44,'Sandra Maya Carla Costa','1974-02-19','19982223062',2,'sandra.costa','$2b$10$yFAYWIZkvdV432zbbrKnsOQKRObonN8mi4jOgcsipuEMLYWh/j3Lq'),(45,45,'Isabelly Letícia Flávia Pires','1984-01-09','98846152921',2,'isabelly.pires','$2b$10$Clmnj8c13Jh3z.OldCDIeO3uNm94uCrn8iodmrnre2nY.AkD19feO'),(46,46,'Oliver Theo Lopes','2003-01-06','40390876313',2,'oliver.lopes','$2b$10$G.n5BNuHnDr1EJURagHBSuC3LO09JBGq9Ato81lWbyQODMV7DcKPm'),(47,47,'Simone Antonella Barros','1987-01-16','59329614140',2,'simone.barros','$2b$10$y0J3Es25lyqHTcIK79wOFOJMr5BuJDanxTJ0zFI44zFIhSKY29gtG'),(48,48,'Sarah Rosângela Simone da Rosa','1968-01-08','30759768730',2,'sarah.rosa','$2b$10$TN/NPsbUcmvziyyMNV/WFuDpfE2ohJdXFNYlNW7rpf5xI.A8QjglW'),(49,49,'Heloise Carla Ester Caldeira','1962-02-16','95247428889',2,'heloise.caldeira','$2b$10$XLprreImkaIkk1N1HQ3NuOtqDcXpScJBfS6PvTJ4mO/gM.AXikqse'),(50,50,'Elisa Emily Ramos','1993-01-13','86405025950',2,'elisa.ramos','$2b$10$kBu2LNcdKPsj/OS8CX.Sn.RbPKeyP5xAlgY/PDZuBA37mcUtseMYy'),(51,51,'Arthur Kevin Yago Aparício','1977-01-01','51062200179',2,'arthur.aparício','$2b$10$u8asEGu.//zOQiiZ6aG01eZmycSB5MrAmG7P1pItobU6HKiPhdUYK'),(52,52,'Otávio Levi Noah Gomes','1964-01-13','71810032598',2,'otávio.gomes','$2b$10$osxQt18qtU7a1kwJ842SC.SnBN8Gk2/aSfsqfsrssggVrJ0dQaY9e'),(53,53,'Hugo Kevin Dias','2001-01-23','11971315664',2,'hugo.dias','$2b$10$91yib2Xxc4eVamBCUp1yQueORNIDnT9iHQFcvxAnaDWd37ateRqZO'),(54,54,'Anderson João Sales','1964-01-22','70239523067',2,'anderson.sales','$2b$10$O9J.U3KbJnj4bZKASCnYJuJ9sQMtnHghwILQtwD6nMoZTOd2/Kls.'),(55,55,'Andrea Bianca Bernardes','1990-01-13','66044904407',2,'andrea.bernardes','$2b$10$k0B/u98gOZBlqymvGT2JZObl6fW5XVK2nktgNq4XXwECCW.Wz6o2W'),(56,56,'Andrea Maya Mariana Barbosa','1982-01-23','62326975294',2,'andrea.barbosa','$2b$10$gH2oydRUBToGEQxMq2YaJ.4rY/7g5PnWE3iObfp6q18KSvvtoKUUG'),(57,57,'Rosângela Malu Caroline Almeida','1967-01-16','92707743097',2,'rosângela.almeida','$2b$10$r38AL1G.ck2Ny9R7lcbm5OEa2ZaenGCBpQfnluBca85aLiEk1lkcC'),(58,58,'Agatha Clara da Rocha','1975-02-03','46917789852',2,'agatha.rocha','$2b$10$Ev9SwPM65Wm25COUGg3LIesY9YbIRLhaePMl6XG9Qft95ebpIeepO'),(59,59,'Cecília Esther da Cruz','1944-01-05','58026913361',2,'cecília.cruz','$2b$10$CAnku/O7/pW5XBlsvNNFBOG18HLhYyt4fUHd5pScXMiYzrpd8FGAu'),(60,60,'Hadassa Sophia Gabriela da Costa','1996-01-04','76205110164',2,'hadassa.costa','$2b$10$mci/lX9n3al8RQoI9kTuFu/nK9.QInx8q0.mjLGT92kvWYkhSj/U6'),(61,61,'Cláudia Rosângela Freitas','1976-01-22','98477881464',3,'cláudia.freitas','$2b$10$zendECpc4vUcrScis5fNxuCgYAkmPmAJkm7PJipnF1gopI0RjX7eO'),(62,62,'Igor Pedro Porto','1984-01-18','65254751711',3,'igor.porto','$2b$10$LuV3ZExwuHGN/yB.v4JbgOQEH7cfjKoOBWskY0CW7L5g6jayyCxQO'),(63,63,'Marcos Vinicius Bruno Ryan Monteiro','1975-01-04','22697089462',3,'marcos.monteiro','$2b$10$iqo08A2zcW.fl3mdchtF8uwa9afKQc1/gq8O/8bJeEoTIZOj6/1P6'),(64,64,'Alessandra Aparecida Marlene Assis','1979-01-19','70603021905',3,'alessandra.assis','$2b$10$WNs0hiy1AsAqfbMOOgXTDuld0bIXHWQvU7VVSN.Hrv3S1yBZtJkd6'),(65,65,'Ian Vitor Caleb Souza','2003-01-01','45667759764',3,'ian.souza','$2b$10$W4deo8Ayl1P4Sgi6utYvpOI2ACOkBPEu2XOKnTkZMcmOeMEw8i.TO'),(66,66,'Renata Alícia Barros','1994-02-10','87910309430',3,'renata.barros','$2b$10$jL8CqTwTmWPlpTlFjC9M3uDDQ75T29hKekmDBwYIgz8LvvxLNCEHq'),(67,67,'Gabriela Alessandra Novaes','1942-02-12','89971395924',3,'gabriela.novaes','$2b$10$qUtag7sgOpsGneTKK2RiEuOQMZXo5Pm8I09.nFoj6iDYUK1R1Dw/G'),(68,68,'Sérgio Thales da Mata','1969-02-08','51609284569',3,'sérgio.mata','$2b$10$.jJ96x2vnx95ACzH3Bj1tOYejF/hnSg8IsyXZEPXgy1ooWKWk/gjK'),(69,69,'Simone Mariana Lorena Figueiredo','1996-02-05','84377379402',3,'simone.figueiredo','$2b$10$ZN0EADRqI3hO5uLzrwImpO0BVt9LxdjYaUrVz2L697DXU3ND/MreW'),(70,70,'Agatha Gabriela Gomes','2004-01-01','60984289305',3,'agatha.gomes','$2b$10$dVC/D/n7Je4RkluoK1hbjuwQ4lw4d11QFD6YwLIxPr9kn.NxKbkty'),(71,71,'Ryan Arthur Alves','1963-01-07','25348246352',3,'ryan.alves','$2b$10$1rv.s1iE.E/Mo4TzPFg9ceSsZa2gdAbxgUjv2mWDx00DhpZ7k/pMq'),(72,72,'Eduardo Samuel Barros','1996-01-14','69918423544',3,'eduardo.barros','$2b$10$HRs.yEWLEP9wXYpkkG7iheFwFFIyyIBuTA9f5nogjks34.aDdI5ce'),(73,73,'Levi Ruan André Sales','1977-01-20','27948596097',3,'levi.sales','$2b$10$rCGgVKLMPTvfvfDmm2mPBOXiF75SoWSsxB2B1c7MhobfJ.NheZRmK'),(74,74,'Stella Rayssa Amanda da Silva','1959-01-08','05847861826',3,'stella.silva','$2b$10$.PSQsTMFh99o7t9NXhk.luR33hkFISLlQp25kwxXLl.QJS56QGyuK'),(75,75,'Gael Calebe Drumond','1970-02-19','76743001457',3,'gael.drumond','$2b$10$odx...VPsyHRH7N05mXTPOy37dcVhDUu48zi.y20f9/86pQJaeDL.'),(76,76,'Geraldo Levi Bernardo Gomes','1989-02-12','52723639738',3,'geraldo.gomes','$2b$10$Ds9c/j5WruvIQZXUEQl5ZOpM6.rVdVcHzJXRj9heZNZWyQjxgiCcu'),(77,77,'Raul Enrico Sebastião Santos','1968-02-07','59650215859',3,'raul.santos','$2b$10$sFarCXM/Aw20VNYvc4hZa.9dYaKq.jb/zkulG27WAJ4DpmaC2ZEUO'),(78,78,'Noah Victor Nunes','1991-01-14','36369376779',3,'noah.nunes','$2b$10$ZbnUADZf2ULa7uQPOeZx3uuSj9yBQD9750zPp3PSX6detG6yeSzc2'),(79,79,'César Oliver Fernandes','1950-02-04','22673102957',3,'césar.fernandes','$2b$10$OBdfd4xWcXZDvaBec6UP/eXItblw/aEHHJaXE06qYs0YczspkVWKe'),(80,80,'Leonardo Gustavo Rodrigues','1958-02-01','39124308374',3,'leonardo.rodrigues','$2b$10$cbw4R6wMdMxWRNZncxs1zeGLX8xlqzDGiLHyTs7mP0vmWrIBud9Cy'),(81,81,'Andreia Brenda Castro','1993-02-16','33753298140',3,'andreia.castro','$2b$10$qvxy.QyFXA3y6R93V6CTIObccSknrNGrKuxcFUWCbnv25JtdO8iBK'),(82,82,'Isaac Manoel Edson Sales','1964-01-13','22992393169',3,'isaac.sales','$2b$10$XpgudRGceGh7Fv3UnUqf/uw8JOTM8B9iBdmWvGh51EvkgP1nnlYBq'),(83,83,'Daniela Clarice Maria da Mata','1976-02-10','75902942250',3,'daniela.mata','$2b$10$kKnmPZd64wAbBm9xqu4/8upGFsJb7xVa8RjD2eJ7Swa.uMaOvIOea'),(84,84,'Mirella Emily Rodrigues','1954-01-25','33696694983',3,'mirella.rodrigues','$2b$10$ECXhaEUxHxWBvZ9VX5Ui3O2AuKMHzJjjS7PjPqKoHcRo7Y4Gq4by6'),(85,85,'Eliane Julia Galvão','1973-01-12','47784767277',3,'eliane.galvão','$2b$10$hyTg0ljdKHyXEKZzzW/QcuycKrElB68LEeCrkBzI5YKKSvM5XtQh.'),(86,86,'Luan Ruan Gomes','1949-02-11','19592103275',3,'luan.gomes','$2b$10$LvsyZCH3YkdyBTnS5SYxqu1C5SOCKhfT8gW1B.mrFfpWFQC85i9Sa'),(87,87,'Marina Nicole Fabiana Carvalho','1965-02-19','95293835920',3,'marina.carvalho','$2b$10$Kfra02rJBEoc8i73PCCGqesH0rEGJrTaJrqVzYPFQOoDRAReoOgNm'),(88,88,'Allana Tereza Rita da Cruz','1960-01-03','26576416954',3,'allana.cruz','$2b$10$CaZxcw9wxtLbrtPinKgkvuMwAhu8ROJrsC5qiNED2rxRumfQt/ojS'),(89,89,'Caio Renan Raul Bernardes','1993-02-04','81668602873',3,'caio.bernardes','$2b$10$a5HoRhZgzzwNZlISqb2Z9eKyzi.RMnxNXDn7Uafbf.14iJRPlMEDi'),(90,90,'Gabriel Ruan Drumond','1978-01-27','13815475163',3,'gabriel.drumond','$2b$10$0VYYTNuyWNp2.SDFIySVwu7rcK84tLQD.ki0b00ENTuUBzTWdilAm'),(91,91,'admin','2000-12-25','00000000000',1,'admin','$2b$10$P5v14/X2zbXKl8s3eHYNz.xDm/DI6L3sHndddA7Ak4tZYbfutMi7K');

-- tabela `auxiliar`

INSERT INTO `auxiliar` VALUES (31,0),(32,1),(33,1),(34,0),(35,0),(36,0),(37,0),(38,1),(39,1),(40,0),(41,0),(42,0),(43,1),(44,1),(45,0),(46,1),(47,1),(48,1),(49,0),(50,0),(51,0),(52,1),(53,1),(54,1),(55,0),(56,0),(57,0),(58,1),(59,0),(60,1);

-- tabela `motorista`

INSERT INTO `motorista` VALUES (84,'00952904375'),(87,'12832419473'),(89,'14980764302'),(80,'17608647547'),(72,'19568923426'),(85,'21161018931'),(78,'25623518670'),(77,'25634233295'),(65,'27442568809'),(69,'32193163484'),(64,'33793439581'),(63,'39010538951'),(75,'40568437214'),(70,'48642355260'),(61,'58280125265'),(86,'69403659283'),(66,'75885223870'),(79,'88174618940'),(88,'89723309960'),(83,'90373870477'),(73,'91199705680'),(76,'9172738170-2'),(82,'93005452005'),(81,'93199580796'),(90,'93753655831'),(67,'93956817576'),(74,'95359009483'),(68,'95994929217'),(62,'96250468258'),(71,'96785723388');

-- tabela `caminhaoColeta`
INSERT INTO `caminhaocoleta` VALUES (1,1,'NEV9076','Vw 17280',2012,21529,'Volkswagen'),(2,0,'KAI8774','Vw 17280',2016,31053,'Volkswagen'),(3,0,'MOJ3523','Vw 17230',2013,13301,'Volkswagen'),(4,0,'KAS7794','Vw 17280',2019,11861,'Volkswagen'),(5,0,'JRG4482','Vw 17230',2019,29347,'Volkswagen'),(6,1,'MXG1209','Vw 17280',2012,17106,'Volkswagen'),(7,1,'HPP1219','Vw 17230',2010,16589,'Volkswagen'),(8,0,'HTZ7612','Vw 17230',2013,13704,'Volkswagen'),(9,1,'MYA8329','Vw 17280',2013,23988,'Volkswagen'),(10,1,'GAQ1768','Vw 17280',2010,13211,'Volkswagen'),(11,0,'HVU7237','Vw 11180',2017,32002,'Volkswagen'),(12,0,'MRR4575','Vw 11180',2011,25006,'Volkswagen'),(13,1,'JSB4951','Vw 17280',2018,18082,'Volkswagen'),(14,1,'NFB0840','Vw 11180',2018,32246,'Volkswagen'),(15,1,'GYZ3244','Vw 17280',2013,19014,'Volkswagen'),(16,0,'HZP5094','Vw 11180',2012,25902,'Volkswagen'),(17,0,'NAX4928','Vw 11180',2014,12936,'Volkswagen'),(18,0,'HYK5052','Vw 11180',2017,16872,'Volkswagen'),(19,0,'KCJ0705','Vw 17280',2013,21889,'Volkswagen'),(20,0,'IKN2332','Vw 17230',2014,23507,'Volkswagen'),(21,1,'MPD2157','Vw 17230',2018,31371,'Volkswagen'),(22,1,'IVG2430','Vw 17230',2013,26575,'Volkswagen'),(23,0,'MVK9641','Vw 17230',2019,17763,'Volkswagen'),(24,0,'HRU5941','Vw 11180',2016,27807,'Volkswagen'),(25,0,'HRU5841','Vw 11180',2018,24842,'Volkswagen'),(26,0,'NDK9962','Vw 11180',2011,17000,'Volkswagen'),(27,0,'DXC1553','Vw 11180',2018,23711,'Volkswagen'),(28,1,'IIJ7279','Vw 17280',2011,26179,'Volkswagen'),(29,0,'HTT6009','Vw 17280',2013,11055,'Volkswagen'),(30,1,'JHY9092','Vw 11180',2017,29897,'Volkswagen');

-- tabela `manutencao`
INSERT INTO `manutencao` VALUES (1,2,'2019-01-01',28119,'Lorem ipsum dolor sit amet.',452.00),(2,2,'2019-01-10',28824,'Lorem ipsum dolor sit amet.',463.05),(3,2,'2020-01-10',28990,'Lorem ipsum dolor sit amet.',448.92),(4,2,'2021-01-10',29737,'Lorem ipsum dolor sit amet.',244.77),(5,2,'2021-01-23',30060,'Lorem ipsum dolor sit amet.',450.83),(6,2,'2021-01-26',30629,'Lorem ipsum dolor sit amet.',471.14),(7,4,'2019-01-01',10397,'Lorem ipsum dolor sit amet.',445.75),(8,4,'2019-01-12',10641,'Lorem ipsum dolor sit amet.',428.73),(9,4,'2019-01-24',10771,'Lorem ipsum dolor sit amet.',193.53),(10,4,'2019-01-10',10905,'Lorem ipsum dolor sit amet.',481.46),(11,5,'2019-01-01',27405,'Lorem ipsum dolor sit amet.',367.56),(12,5,'2020-01-01',27824,'Lorem ipsum dolor sit amet.',337.88),(13,5,'2021-01-01',28173,'Lorem ipsum dolor sit amet.',366.29),(14,5,'2021-04-01',28318,'Lorem ipsum dolor sit amet.',250.39),(15,5,'2021-07-01',28672,'Lorem ipsum dolor sit amet.',275.87),(16,5,'2021-09-01',28910,'Lorem ipsum dolor sit amet.',328.20),(17,7,'2019-01-01',14658,'Lorem ipsum dolor sit amet.',488.55),(18,7,'2019-02-01',15005,'Lorem ipsum dolor sit amet.',235.99),(19,7,'2019-02-05',15243,'Lorem ipsum dolor sit amet.',339.91),(20,7,'2019-03-05',15994,'Lorem ipsum dolor sit amet.',499.60),(21,8,'2019-01-01',13547,'Lorem ipsum dolor sit amet.',148.64),(22,11,'2019-01-01',28668,'Lorem ipsum dolor sit amet.',465.65),(23,11,'2021-01-01',29142,'Lorem ipsum dolor sit amet.',231.53),(24,11,'2021-03-01',29912,'Lorem ipsum dolor sit amet.',182.46),(25,11,'2021-03-02',30117,'Lorem ipsum dolor sit amet.',308.09),(26,11,'2021-04-02',30859,'Lorem ipsum dolor sit amet.',493.91),(27,11,'2019-04-02',31783,'Lorem ipsum dolor sit amet.',425.90),(28,13,'2019-01-01',16723,'Lorem ipsum dolor sit amet.',320.85),(29,13,'2019-02-01',17353,'Lorem ipsum dolor sit amet.',209.02),(30,13,'2020-02-01',17927,'Lorem ipsum dolor sit amet.',100.71),(31,14,'2019-01-01',29873,'Lorem ipsum dolor sit amet.',356.58),(32,14,'2019-02-01',30014,'Lorem ipsum dolor sit amet.',131.05),(33,14,'2019-02-16',30754,'Lorem ipsum dolor sit amet.',164.67),(34,14,'2020-02-16',30903,'Lorem ipsum dolor sit amet.',485.64),(35,14,'2020-02-24',31720,'Lorem ipsum dolor sit amet.',320.33),(36,15,'2019-01-01',15183,'Lorem ipsum dolor sit amet.',328.52),(37,15,'2020-01-01',15859,'Lorem ipsum dolor sit amet.',252.65),(38,15,'2021-01-01',16213,'Lorem ipsum dolor sit amet.',278.34),(39,15,'2021-01-08',17168,'Lorem ipsum dolor sit amet.',306.33),(40,15,'2021-01-09',18149,'Lorem ipsum dolor sit amet.',115.11),(41,15,'2021-02-09',18735,'Lorem ipsum dolor sit amet.',252.37),(42,16,'2019-01-01',24563,'Lorem ipsum dolor sit amet.',302.28),(43,16,'2019-04-01',24873,'Lorem ipsum dolor sit amet.',496.68),(44,16,'2019-04-13',24992,'Lorem ipsum dolor sit amet.',266.54),(45,16,'2019-06-13',25148,'Lorem ipsum dolor sit amet.',483.51),(46,17,'2019-01-01',10810,'Lorem ipsum dolor sit amet.',299.35),(47,17,'2021-01-01',11141,'Lorem ipsum dolor sit amet.',234.13),(48,17,'2019-01-01',11863,'Lorem ipsum dolor sit amet.',209.80),(49,17,'2019-03-01',12358,'Lorem ipsum dolor sit amet.',272.67),(50,18,'2019-01-01',14404,'Lorem ipsum dolor sit amet.',314.86),(51,18,'2020-01-01',14711,'Lorem ipsum dolor sit amet.',133.32),(52,18,'2021-01-01',15156,'Lorem ipsum dolor sit amet.',131.11),(53,18,'2021-01-14',15752,'Lorem ipsum dolor sit amet.',180.61),(54,18,'2021-01-15',16249,'Lorem ipsum dolor sit amet.',469.80),(55,18,'2021-03-15',16379,'Lorem ipsum dolor sit amet.',266.35),(56,20,'2019-01-01',22294,'Lorem ipsum dolor sit amet.',301.44),(57,20,'2020-01-01',22859,'Lorem ipsum dolor sit amet.',167.13),(58,21,'2019-01-01',29754,'Lorem ipsum dolor sit amet.',423.78),(59,21,'2019-01-14',30070,'Lorem ipsum dolor sit amet.',316.85),(60,21,'2019-02-14',30675,'Lorem ipsum dolor sit amet.',364.10),(61,21,'2019-03-14',31167,'Lorem ipsum dolor sit amet.',420.87),(62,24,'2019-01-01',25948,'Lorem ipsum dolor sit amet.',258.89),(63,24,'2021-01-01',26507,'Lorem ipsum dolor sit amet.',167.55),(64,24,'2021-04-01',26831,'Lorem ipsum dolor sit amet.',433.34),(65,27,'2019-01-01',21975,'Lorem ipsum dolor sit amet.',457.22),(66,27,'2020-01-01',22871,'Lorem ipsum dolor sit amet.',353.77);

-- tabela `abastecimento`
INSERT INTO `abastecimento` VALUES (1,1,'2019-01-01',169.90,849.48,21529,0.00),(2,2,'2019-01-01',377.95,1889.74,31053,0.00),(3,3,'2019-01-01',339.63,1698.14,13301,0.00),(4,4,'2019-01-01',355.69,1778.45,11861,0.00),(5,5,'2019-01-01',260.64,1303.21,29347,0.00),(6,6,'2019-01-01',196.13,980.65,17106,0.00),(7,7,'2019-01-01',90.92,454.59,16589,0.00),(8,8,'2019-01-01',168.38,841.88,13704,0.00),(9,9,'2019-01-01',373.67,1868.37,23988,0.00),(10,10,'2019-01-01',174.21,871.03,13211,0.00),(11,11,'2019-01-01',201.44,1007.21,32002,0.00),(12,12,'2019-01-01',169.86,849.28,25006,0.00),(13,13,'2019-01-01',321.05,1605.24,18082,0.00),(14,14,'2019-01-01',90.01,450.06,32246,0.00),(15,15,'2019-01-01',197.01,985.03,19014,0.00),(16,16,'2019-01-01',246.58,1232.91,25902,0.00),(17,17,'2019-01-01',257.79,1288.95,12936,0.00),(18,18,'2019-01-01',301.31,1506.57,16872,0.00),(19,19,'2019-01-01',123.80,619.02,21889,0.00),(20,20,'2019-01-01',258.97,1294.83,23507,0.00),(21,21,'2019-01-01',145.01,725.05,31371,0.00),(22,22,'2019-01-01',170.48,852.40,26575,0.00),(23,23,'2019-01-01',163.63,818.17,17763,0.00),(24,24,'2019-01-01',206.47,1032.33,27807,0.00),(25,25,'2019-01-01',294.77,1473.87,24842,0.00),(26,26,'2019-01-01',248.36,1241.82,17000,0.00),(27,27,'2019-01-01',284.83,1424.16,23711,0.00),(28,28,'2019-01-01',169.91,849.56,26179,0.00),(29,29,'2019-01-01',339.19,1695.94,11055,0.00),(30,30,'2019-01-01',304.35,1521.77,29897,0.00);

-- tabela `zona`
INSERT INTO `zona` VALUES (1,'Zona 1'),(2,'Zona 2'),(3,'Zona 3'),(4,'Zona 4'),(5,'Zona 5'),(6,'Zona 6'),(7,'Zona 7'),(8,'Zona 8'),(9,'Zona 9'),(10,'Zona 10'),(11,'Zona 11'),(12,'Zona 12'),(13,'Zona 13'),(14,'Zona 14'),(15,'Zona 15'),(16,'Zona 16'),(17,'Zona 17'),(18,'Zona 18'),(19,'Zona 19'),(20,'Zona 20'),(21,'Zona 21'),(22,'Zona 22'),(23,'Zona 23'),(24,'Zona 24'),(25,'Zona 25'),(26,'Zona 26'),(27,'Zona 27'),(28,'Zona 28'),(29,'Zona 29'),(30,'Zona 30');

-- tabela `rua`
INSERT INTO `rua` VALUES (1,24,'Rua 13 de Maio',NULL,2,11),(2,30,'Rua 15 de Agosto',NULL,5,9),(3,23,'Travessa 15 de Agosto',NULL,5,18),(4,20,'Rua 15 de Novembro',NULL,2,9),(5,4,'Rua 21 de Abril',NULL,4,11),(6,24,'Rua 25 de Março',NULL,5,15),(7,30,'Rua 3 Eduardo Viana',NULL,10,11),(8,18,'Rua 3 José Vieira de Gouveia',NULL,4,12),(9,11,'Rua 3 João Miranda Amorim',NULL,9,20),(10,13,'Rua 3 Misael Barcelo',NULL,8,14),(11,22,'Praça 3 Nelson Simão',NULL,7,10),(12,25,'Rua 3 Projetada 5',NULL,5,17),(13,15,'Rua 7 de Setembro',NULL,10,13),(14,15,'Rua Abadil Gomes',NULL,8,8),(15,1,'Rua Abdala Assad',NULL,2,8),(16,22,'Travessa Abdalla Assad',NULL,2,19),(17,26,'Rua Adair Celga',NULL,5,10),(18,25,'Rua Alceu Nogueira da Gama',NULL,8,13),(19,10,'Rua Alegre',NULL,5,18),(20,27,'Rua Alfa',NULL,2,11),(21,25,'Rua Altair Torres de Oliveira',NULL,9,18),(22,21,'Rua Alto Capelinha',NULL,3,14),(23,23,'Rua Americo Brasil',NULL,7,18),(24,30,'Rua Amin Tannuri',NULL,7,18),(25,16,'Rua Ana Borges Barbosa',NULL,10,15),(26,20,'Rua Ana Maria Francis Fernandes',NULL,4,11),(27,7,'Rua Antero Ferraz',NULL,8,18),(28,15,'Praça Antônio Coreia Monteiro',NULL,5,12),(29,8,'Rua Antônio Joaquim',NULL,4,14),(30,15,'Rua Benedito Teixeira Leão',NULL,6,20);

-- tabela `escala`
INSERT INTO `escala` VALUES (1,24,4,63,7,'11:00:00','12:00:00'),(2,27,20,82,7,'08:00:00','10:15:00'),(3,1,7,90,4,'10:00:00','14:00:00'),(4,11,14,70,2,'13:30:00','15:30:00'),(5,11,25,76,4,'14:20:00','17:00:00'),(6,4,22,61,2,'08:15:00','12:15:00'),(7,26,22,81,2,'09:15:00','11:20:00'),(8,28,27,64,6,'12:15:00','13:00:00'),(9,17,3,83,7,'14:30:00','16:15:00'),(10,16,30,88,3,'11:00:00','12:15:00'),(11,27,15,64,5,'13:15:00','16:20:00'),(12,23,6,84,2,'11:20:00','14:15:00'),(13,26,17,84,7,'14:20:00','17:00:00'),(14,23,22,81,4,'14:30:00','18:20:00'),(15,8,5,88,5,'11:20:00','15:30:00'),(16,22,8,64,7,'11:20:00','14:15:00'),(17,23,15,74,7,'09:00:00','12:15:00'),(18,29,17,64,7,'13:00:00','15:20:00'),(19,26,4,79,2,'13:30:00','16:20:00'),(20,20,8,89,5,'14:20:00','15:15:00'),(21,24,23,71,3,'14:15:00','17:20:00'),(22,1,27,73,3,'11:00:00','15:30:00'),(23,19,27,90,2,'14:20:00','18:20:00'),(24,2,27,83,4,'14:20:00','17:30:00'),(25,30,27,90,4,'11:15:00','12:20:00'),(26,6,11,84,3,'13:15:00','17:15:00'),(27,5,19,84,5,'12:15:00','13:00:00'),(28,25,4,71,5,'13:15:00','17:15:00'),(29,21,28,88,5,'12:20:00','14:15:00'),(30,13,3,76,5,'11:15:00','15:30:00');

-- tabela `auxiliarescala`
INSERT INTO `auxiliarescala` VALUES (50,1),(52,1),(38,2),(48,2),(41,3),(46,3),(48,3),(51,3),(55,3),(40,4),(52,4),(34,5),(35,5),(57,5),(58,5),(46,6),(50,6),(58,6),(60,6),(36,7),(45,7),(53,7),(57,7),(60,7),(39,8),(42,8),(53,8),(57,8),(58,8),(35,9),(46,9),(49,9),(52,9),(58,9),(44,10),(45,10),(53,10),(54,10),(34,11),(49,11),(59,11),(34,12),(38,12),(50,12),(59,12),(31,13),(41,13),(46,13),(57,13),(31,14),(35,14),(46,14),(53,14),(56,14),(51,15),(57,15),(60,15),(35,16),(46,16),(49,16),(56,16),(58,17),(60,17),(36,18),(37,18),(43,18),(48,19),(57,19),(31,20),(35,20),(37,20),(42,20),(34,21),(43,21),(38,22),(42,22),(35,23),(51,23),(33,24),(36,24),(55,24),(38,25),(55,25),(47,26),(51,26),(52,26),(58,26),(59,26),(34,27),(50,27),(54,27),(35,28),(44,28),(55,28),(40,29),(46,29),(60,29),(32,30),(56,30);