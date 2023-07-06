# Configuración

Para usar `Indicadores` lo primero que se tiene que hacer son algunas configuraciones en los 
siguientes pasos de configuración.

## Rutinas Bantotal
Primero devemos impactar todas las clases Bantotal correspondientes a indicadores:

::: tip Nota
Recomendamos impactar las clases actulizadas que se encuentra en [Fuentes](\\fuentesgx16\bt\Java\Institucional\SqlServer\WEB-INF\classes\com\dlya\bantotal)
:::

### Procedimientos

Clases de los siguientes [procedimientos](https://dlya-my.sharepoint.com/:u:/g/personal/ajapura_dlya_com_uy/EWXxfNqGiMdJre2xZqpMMgABVXVRvIBNFbUvRrU9bJ1U9g?e=Tctky4)

- PIND002  - ABM DE INDICADORES
- PIND003  - ABM DE AGRUPADORES
- PIND004  - ASOCIACION DE INDICADOR-AGRUPADOR
- PIND005  - CARGA INICIAL DE INDICADORES
- PIND009  - TRANSACCIONES POR ESTADO
- PIND015  - MONEDAS CON Y SIN CARGAR TIPO DE CAMBIO
- PIND015A - INDICES CON Y SIN COTIZACION CARGADA
- PIND030  - CAJAS Y SUCURSALES ABIERTAS Y CERRADAS
- PIND012  - BALANCE DIARIO CUADRADO
- PIND013  - RUBROS BOLSA
- PINDW019 - INDICADOR DE DEBUG
- PINDS01  - LISTADO AGRUPADORES
- PINDS03  - LISTADO DE INDICADOR POR AGRUPADOR


### Servicios

Clases de los siguientes [servicios](https://dlya-my.sharepoint.com/:u:/g/personal/ajapura_dlya_com_uy/EWXxfNqGiMdJre2xZqpMMgABVXVRvIBNFbUvRrU9bJ1U9g?e=Tctky4)

- RBTPG700
- RBTPG702
- RBTPG703
- RBTPG704
- RBTPG705
- RBTPG706
- RBTPG707
- RBTPG708

### Sdts
clases de las siguientes [sdts](https://dlya-my.sharepoint.com/:u:/g/personal/ajapura_dlya_com_uy/EWXxfNqGiMdJre2xZqpMMgABVXVRvIBNFbUvRrU9bJ1U9g?e=Tctky4)

- BBTSALDO/BBTSALDOS
- BBTMONEDA/BBTMONEDAS
- BBTRUBROBOLSA/BBTRUBROSBOLSA
- sBTAgrupador
- sBTIndicador
- sBTCondicionesGenerales
- sBTMonedaIndice
- sBTSucursalesCajas  
- sBTSucursal
- sBTCaja
- sBTTransaccionesEstados
- sBTBalanceMonedaSaldo
- sBTRubrosBolsa

### Tablas

- IND002 - Agrupadores
- IND003 - Indicadores
- IND004 – Relación Indicadores Agrupador  

Para las tablas necesitamos los siguientes scripts

* **IND002**

``` sql 
    CREATE TABLE IND002 (
    IND002COD decimal(10,0) NOT NULL,
    IND002DES char(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002TIP char(1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002BTC char(1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002PRG char(10) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002WPL char(10) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002HAB char(1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002PER char(1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002AYU varchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002SER char(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND002MET char(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    CONSTRAINT PK__IND002__89B671A35D6AA2B6 PRIMARY KEY (IND002COD)
);
```

``` sql 
   INSERT INTO IND002 (IND002COD,IND002DES,IND002TIP,IND002BTC,IND002PRG,IND002WPL,IND002HAB,IND002PER,IND002AYU,IND002SER,IND002MET) VALUES
     (105,N'Condiciones generales               ',N'I',N'O',N'PINDW019  ',N'HINDW019  ',N'S',N'D',N'',N' ',N' '),
     (106,N'Información de Cotizaciones         ',N'I',N'O',N'PIND015   ',N'HIND015   ',N'S',N'D',N'',N' ',N' '),
     (201,N'Sucursales y Cajas                  ',N'I',N'O',N'PIND030   ',N'HIND030   ',N'S',N'D',N'',N' ',N' '),
     (360,N'Transacciones por estado            ',N'I',N'O',N'PIND009   ',N'HIND009   ',N'S',N'D',N'',N' ',N' '),
     (370,N'Cierre de saldos por moneda         ',N'I',N'O',N'PIND012   ',N'HIND012   ',N'S',N'D',N'',N' ',N' '),
     (380,N'Posibles rubros bolsa               ',N'I',N'O',N'PIND013   ',N'HIND013   ',N'S',N'D',N'',N' ',N' ');

```

* **IND003**

``` sql 
CREATE TABLE IND003 (
    IND003GRP smallint NOT NULL,
    IND003DES char(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND003HAB char(1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    IND003PRF char(20) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    CONSTRAINT PK__IND003__71F8AC4BD0159370 PRIMARY KEY (IND003GRP)
);
```

``` sql 
   INSERT INTO IND003 (IND003GRP,IND003DES,IND003HAB,IND003PRF) VALUES
     (100,N'Condiciones Generales                             ',N'S',N'PERFIL100       '),
     (200,N'Cajas y Sucursales                                ',N'S',N'PERFIL200       '),
     (300,N'Contabilidad                                      ',N'S',N'PERFIL300       ');
```

* **IND004**

``` sql 
CREATE TABLE IND004 (
    IND004GRP int NOT NULL,
    IND004IND smallint NOT NULL,
    IND004ORD smallint NOT NULL,
    CONSTRAINT PK__IND004__7050AB8C36859744 PRIMARY KEY (IND004GRP,IND004IND)
);
```

``` sql 
INSERT INTO IND004 (IND004GRP,IND004IND,IND004ORD) VALUES
     (100,105,50),
     (100,106,60),
     (200,201,10),
     (300,360,10),
     (300,370,20),
     (300,380,30);
```
